module.exports = {
  autoImport: {
    imports: {
      "@topics-components/utils/compiler": [["default", "templateCompiler"]],
      "@topics-store/device": ["useDeviceStore"],
      "@topics-store/event-name": ["useEventNameStore"],
      "@topics-store/global-images": ["useGlobalImagesStore"],
    },
  },
};
