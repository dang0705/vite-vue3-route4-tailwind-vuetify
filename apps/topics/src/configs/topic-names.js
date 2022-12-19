import { topicId } from '@topics-configs/get-topic-id';

export const topics = {
  16: 'twenty-years',
  104: 'qinglipai'
};
export const topicName = topics[topicId] || '';
