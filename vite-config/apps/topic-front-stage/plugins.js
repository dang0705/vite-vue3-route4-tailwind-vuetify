module.exports = {
  autoImport: {
    imports: {
      '@topic-front-stage-components/utils/create-web-component': [
        ['default', 'createWebComponent']
      ],
      '@topic-front-stage-store/device-store': ['useDeviceStore'],
      '@topic-front-stage-store/async-routes-store': ['useAsyncRoutesStore'],
      '@topic-front-stage-store/global-images-store': ['useGlobalImagesStore'],
      '@topic-front-stage-store/preview-store': ['useIsPreviewStore'],
      '@topic-front-stage-configs/topic-names': ['topicName']
    }
  }
};
