export default function(vm) {
  return {
    async execCommand() {
      let { html } = await vm.$openVideoInfo();
      this.execCommand('inserthtml', html);
      vm.contentValue = vm.ueditor.getContent();
    }
  };
}
