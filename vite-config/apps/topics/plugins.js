module.exports = {
  autoImport: {
    imports: {
      '@topics-components/utils/create-web-component': [
        ['default', 'createWebComponent']
      ],
      '@topics-store/device': ['useDeviceStore'],
      '@topics-store/topic-name': ['useTopicNameStore'],
      '@topics-store/async-routes': ['useAsyncRoutesStore'],
      '@topics-store/global-images': ['useGlobalImagesStore'],
      '@topics-store/is-preview': ['useIsPreviewStore'],
      '@topics-configs/topic-names': ['topicName']
    }
  }
};
