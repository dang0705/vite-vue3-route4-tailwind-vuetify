import { topics } from '@topic-front-stage/configs/topic-names';

const defaultTabs = ({ topicInfo = '活动介绍' } = {}) => [
  {
    path: 'topic-info',
    name: 'topic-info',
    component: () => import('@topic-front-stage/static-views/index/info.vue'),
    meta: {
      title: topicInfo
    }
  }
];

export default {
  [topics['20th']]: defaultTabs()
};
