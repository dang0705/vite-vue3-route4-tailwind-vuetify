export default function(vm) {
  return (editor, uiName) => {
    let btn = new UE.ui.Button({
      name: 'xiumi',
      title: '秀米',
      async onclick() {
        let message = `
              <div>
                <p>1.秀米编辑器属于第三方编辑器，非易班官方提供。</p>
                <p>2.由于秀米使用了图片防盗链技术和大量内联样式，使用秀米编辑器创建内容，可能会造成图片无法显示或者内容样式错乱。</p>
                <p>3.秀米编辑器的内容请在秀米编辑器内部调整样式和内容，不要从秀米拷贝到易班编辑器后在易班编辑器内删除秀米图片，会导致整篇文章被删除。</p>
                <p>4.如果使用过程中发生内容为空、样式错乱或图片丢失等问题，建议不使用秀米，直接使用易班编辑器进行发布。</p>
              </div>
            `;
        let result = await vm.$confirm({
          title: '注意事项',
          raw: true,
          acceptText: '继续使用',
          message
        });
        if (result) {
          let dialog = new UE.ui.Dialog({
            iframeUrl: `${window.UEDITOR_HOME_URL}/dialogs/xiumi/xiumi.html`,
            editor: editor,
            name: 'xiumi',
            title: '秀米图文消息助手',
            cssRules:
              'width: ' +
              (window.innerWidth - 60) +
              'px;' +
              'height: ' +
              (window.innerHeight - 60) +
              'px;'
          });
          dialog.render();
          dialog.open();
        }
      }
    });
    return btn;
  };
}
