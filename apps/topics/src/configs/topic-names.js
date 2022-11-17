import { topicName } from "@topics/configs/get-topic-name";

// router base as key
// value for coding's variable
export const events = {
  "20th": "twentyYears",
  qinglipai: "qinglipai",
};
export const currentTopicName = events[topicName];
