import { execa } from 'execa';
import { chdir } from 'node:process';
import ora from 'ora';

const gitRepo = 'git@gitlab.yiban.co:yiban_frontend/topic-front-stage.git';
const buildBranch = 'release';
const spinner = ora('开始打包部署...').start();

const { stdout: currentSourceBranch } = await execa('git', [
  'symbolic-ref',
  '--short',
  '-q',
  'HEAD'
]);

execa('rm', ['-rf', 'build']);
execa('git', ['worktree', 'prune']);
execa('mkdir', ['build']);
execa('git', ['clone', '--bare', gitRepo, 'build/.bare']);
execa('echo', ['"gitdir: ./.bare" > build/.git']);
execa('git', [
  'worktree',
  'add',
  '-B',
  buildBranch,
  `build/${buildBranch}`,
  `origin/${buildBranch}`
]);
execa('rm', ['-rf', `build/${buildBranch}/*`]);
execa('npm', ['run', 'app-topics:prod']);
execa('cp', ['-rf', 'dist/topics/*', `build/${buildBranch}`]);

chdir(`build/${buildBranch}`);

const { stdout: currentTargetBranch } = await execa('git', [
  'symbolic-ref',
  '--short',
  '-q',
  'HEAD'
]);

if (currentTargetBranch !== buildBranch) {
  execa('echo', [`Expected build folder to be on ${buildBranch} branch.`]);
  execa('exit', [1]);
}
const { stdout: commits } = await execa('git', [
  'rev-parse',
  '--short',
  currentSourceBranch
]);
const COMMITS = `built by branch-${currentSourceBranch}-git-commit-hash ${commits}`;
execa('git', ['add', '-A']);
execa('git', ['commit', '-m', COMMITS]);
execa('git', ['push', '-f', '--set-upstream', 'origin', buildBranch]);
spinner.succeed('代码推送成功');
