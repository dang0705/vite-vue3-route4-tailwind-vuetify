import { topicId } from '@topics-configs/get-topic-id';

export const topics = {
  '20th': 'twenty-years',
  qinglipai: 'qinglipai'
};
export const topicName = topics[topicId] || '';
