module.exports = {
  autoImport: {
    imports: {
      '@topics-components/utils/create-web-component': [
        ['default', 'createWebComponent']
      ],
      '@topics-store/device-store': ['useDeviceStore'],
      '@topics-store/async-routes-store': ['useAsyncRoutesStore'],
      '@topics-store/global-images-store': ['useGlobalImagesStore'],
      '@topics-store/preview-store': ['useIsPreviewStore'],
      '@topics-configs/topic-names': ['topicName']
    }
  }
};
