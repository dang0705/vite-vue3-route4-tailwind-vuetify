import { useIsPreviewStore } from '@topics-store/is-preview';

export default (target) =>
  useIsPreviewStore().isPreview ? `preview-${target}` : target;
