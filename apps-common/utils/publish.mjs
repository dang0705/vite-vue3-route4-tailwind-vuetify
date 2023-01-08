import { execaSync, execa } from 'execa';
import { chdir } from 'node:process';
import readline from 'node:readline';
import ora from 'ora';

const getCurrentBranch = () =>
  execa('git', ['symbolic-ref', '--short', '-q', 'HEAD']);
const getCurrentSourceCodeHash = (currentSourceBranch) =>
  execa('git', ['rev-parse', '--short', currentSourceBranch]);
const publish = async ({ release, master, repo }) => {
  const { stdout: currentSourceBranch } = await getCurrentBranch();

  if (master && master !== currentSourceBranch) {
    execaSync('echo', [`请切换到 ${master} 分支进行打包。`]);
    execaSync('exit', [1]);
  }

  const spinner = ora('开始打包部署...').start();

  execaSync('rm', ['-rf', 'build']);
  execaSync('git', ['worktree', 'prune']);
  execaSync('mkdir', ['build']);
  execaSync('git', ['clone', '--bare', repo, 'build/.bare']);
  execaSync('echo', ['"gitdir: ./.bare" > build/.git']);
  execaSync('git', [
    'worktree',
    'add',
    '-B',
    release,
    `build/${release}`,
    `origin/${release}`
  ]);
  execaSync('rm', ['-rf', `build/${release}/*`]);
  const { stdout: bundleStatus } = await execa('npm', [
    'run',
    'app-topics:prod'
  ]);
  console.log(bundleStatus);

  execaSync('cp', ['-rf', 'dist/topics/*', `build/${release}`]);

  chdir(`build/${release}`);

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
  const { stdout: publishStatus } = await ('git',
  ['push', '-f', '--set-upstream', 'origin', release]);

  console.log(publishStatus);

  spinner.succeed('代码推送成功');
};
export default function ({ release = 'release', master = 'master', repo }) {
  if (typeof release === 'string') {
    publish({ release, master, repo });
    return;
  }
  const branches = [];
  for (const index in release) {
    branches.push(`${index}.${release[index]}`);
  }

  let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let selectedBuildBranch = '';

  console.log('所有的构建分支：\n' + branches.join('\n'));
  r1.question('请选择一个构建分支（序号）：\t', async (answer) => {
    selectedBuildBranch = release[answer];
    console.log('您选择了：', release[answer] + '分支');
    await publish(arguments);
    r1.close();
  });
}
