module.exports = {
  autoImport: {
    imports: {
      "@topics-components/utils/compiler": [["default", "templateCompiler"]],
      "@topics-store/device": ["useDeviceStore"],
      "@topics-store/topic-name": ["useTopicNameStore"],
      "@topics-store/async-routes": ["useAsyncRoutesStore"],
      "@topics-store/global-images": ["useGlobalImagesStore"],
      "@topics-configs/topic-names": ["topicName"],
    },
  },
};
