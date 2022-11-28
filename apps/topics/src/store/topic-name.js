export const useTopicNameStore = defineStore('topic-name', {
  state: () => ({
    topicName: ''
  }),
  actions: {
    setEventName(name) {
      !this.topicName && (this.topicName = name);
    }
  }
});
