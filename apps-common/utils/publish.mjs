import { execaSync, execa } from 'execa';
import { chdir, cwd } from 'node:process';
import readline from 'node:readline';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import ora from 'ora';
import chalk from 'chalk';

const __dirName = path.resolve();

const getCurrentBranch = () =>
  execa('git', ['symbolic-ref', '--short', '-q', 'HEAD']);
const getCurrentSourceCodeHash = (currentSourceBranch) =>
  execa('git', ['rev-parse', '--short', currentSourceBranch]);

let spinner = ora('');

const printErr = (stderr) => chalk.red(stderr);

const publish = async ({
  release,
  master,
  repo,
  npmScript,
  customScript,
  debug
}) => {
  const cleanWorktree = () => {
    try {
      execaSync('git', ['worktree', 'remove', release]);
      execaSync('git', ['worktree', 'prune']);
    } catch (e) {}
  };
  process.on('uncaughtException', (err) => {
    cleanWorktree();
    spinner.fail(`${debug ? '调试' : '打包部署'}未成功，具体信息如下：\n`);
    console.log(err);
    execaSync('exit', [1]);
  });
  const { stdout: currentSourceBranch } = await getCurrentBranch();

  if (master && master !== currentSourceBranch) {
    execaSync('echo', [`请切换到 ${master} 分支进行打包。`]);
    execaSync('exit', [1]);
    return;
  }
  spinner.text = `开始${debug ? '调试' : '打包部署'}...`;
  spinner.start();

  try {
    await stat(path.join(__dirName, 'build'));
  } catch (e) {
    execaSync('mkdir', ['build']);
  } finally {
    const { stdout } = await execa('git', [
      'worktree',
      'add',
      '-B',
      release,
      `build/${release}`,
      `origin/${release}`
    ]);
    console.log(stdout);
    chdir(`build/${release}`);
    execaSync('rm', ['-rf', '*']);
    chdir(__dirName);
  }
  spinner.text = `正在运行打包脚本 npm run ${npmScript}...`;
  if (customScript) {
    await customScript();
  } else {
    const { stdout: bundleStatus, stderr: scriptErr } = await execa('npm', [
      'run',
      npmScript
    ]);
    console.log(bundleStatus);
    scriptErr ? printErr(scriptErr) : console.log(bundleStatus);
  }

  execaSync('cp', ['-rf', 'dist/topic-front-stage/*', `build/${release}`]);

  chdir(`build/${release}`);

  if (debug) {
    spinner.succeed('调试完成');
    return;
  }

  const { stdout: currentTargetBranch } = await getCurrentBranch();

  if (currentTargetBranch !== release) {
    execaSync('echo', [`Expected build folder to be on ${release} branch.`]);
    execaSync('exit', [1]);
  }
  const { stdout: commits } = await getCurrentSourceCodeHash(
    currentSourceBranch
  );

  const COMMITS = `built by branch-${currentSourceBranch}-git-commit-hash ${commits}`;

  execaSync('git', ['add', '-A']);
  execaSync('git', ['commit', '-m', COMMITS]);

  try {
    const { stdout: publishStatus } = execaSync(
      'git',
      ['push', '-u', '--set-upstream', 'origin', release],
      { shell: true }
    );
    console.log(publishStatus);
    spinner.succeed('代码推送成功');
  } catch (e) {
    console.log('popop');
    // console.log('publish-error', e);
  } finally {
    setTimeout(cleanWorktree, 1000);
  }
};

export default function ({
  release = 'release',
  master = 'master',
  debug = false,
  repo,
  npmScript,
  customScript = null
}) {
  // console.log(arguments);
  if (typeof release === 'string') {
    publish({ release, master, repo, npmScript, customScript, debug });
    return;
  }
  const branches = [];
  for (const index in release) {
    branches.push(`${index}.${release[index].branch}`);
  }

  let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log('所有的构建分支：\n' + branches.join('\n'));

  r1.question('请选择一个构建分支（序号）：\t', async (answer) => {
    console.log('您选择了：', release[answer] + '分支');
    await publish({
      release: release[answer].branch,
      master,
      repo,
      npmScript: release[answer].npmScript,
      customScript,
      debug
    });
    r1.close();
  });
}
