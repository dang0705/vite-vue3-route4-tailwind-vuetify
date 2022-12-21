export const useIsPreviewStore = defineStore('preview', {
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
