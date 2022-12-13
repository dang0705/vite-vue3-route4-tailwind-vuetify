export const useIsPreviewStore = defineStore('preview-store', {
  state: () => ({
    isPreview: null,
    pageData: {}
  }),
  actions: {
    async updatePreviewData() {
      useBus.emit('updatePreview');
    }
  }
});
