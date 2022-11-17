export default function(vm) {
  return () => ({
    bindEvents: {
      async click(type, e) {
        let node = e.target;
        let videoNode = null;
        let url = node.getAttribute('data-video-url');
        let isVideoChild = node.getAttribute('data-video-child');
        if (url) {
          videoNode = node;
        } else if (isVideoChild) {
          videoNode = node.parentNode;
          url = videoNode.getAttribute('data-video-url');
        }

        if (videoNode) {
          e.preventDefault();
          let title = videoNode.getAttribute('title');
          let { html } = await vm.$openVideoInfo({ title, url });
          videoNode.outerHTML = html;
          vm.contentValue = vm.ueditor.getContent();
        }
      }
    }
  });
}
