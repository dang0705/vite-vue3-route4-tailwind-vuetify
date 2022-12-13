import { topicId } from '@topics-configs/get-topic-id';

export const topics = {
  16: 'twenty-years',
  qinglipai: 'qinglipai'
};
export const topicName = topics[topicId] || '';
