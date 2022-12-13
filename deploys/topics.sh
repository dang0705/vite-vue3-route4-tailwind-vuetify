#!/bin/sh
fileName=$(basename $0)
appName=${fileName%\.*}
REPOSITORY=git@gitlab.yiban.co:yiban_frontend/topic-front-stage.git
buildBranch=release

readonly CURRENT_SOURCE_BRANCH=$(git symbolic-ref --short -q HEAD)
rm -rf build
git worktree prune
mkdir build
git clone --bare $REPOSITORY build/.bare
echo "gitdir: ./.bare" > build/.git
git worktree add -B $buildBranch build/$buildBranch origin/$buildBranch
rm -rf build/$buildBranch/*

npm run app-$appName:prod
cp -rf dist/$appName/* build/$buildBranch
cd build/$buildBranch

readonly CURRENT_TARGET_BRANCH=$(git symbolic-ref --short -q HEAD)
if [ "$CURRENT_TARGET_BRANCH" != "$buildBranch" ]
then
  echo "Expected build folder to be on $buildBranch branch."
  exit 1
fi

COMMITS="built by source-git-commit-hash $(git rev-parse --short $CURRENT_SOURCE_BRANCH )"
git add -A
git commit -m "$COMMITS"
git push -f --set-upstream origin $buildBranch
