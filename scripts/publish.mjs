import publish from '../apps-common/utils/publish.mjs';
publish({
  repo: 'git@gitlab.yiban.co:yiban_frontend/topic-front-stage.git',
  npmScript: 'app-topic-front-stage:prod'
  // debug: true
});
