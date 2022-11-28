import { useBus } from '@bus';
import { CommonQiNiuUpload } from '@common-store/qiNiuUpload';

export default function (emits, ueditor) {
  return {
    execCommand() {
      let input = document.createElement('input');
      input.type = 'file';
      input.addEventListener('change', async () => {
        let file = input.files[0];
        const ext = file.name.substring(file.name.lastIndexOf('.') + 1);
        if (file.size > 5 * 1024 * 1024) {
          return useBus.$emit('err', '要上传的图片最大不超5M。');
        }
        useBus.$emit('loading');
        let value = await CommonQiNiuUpload().upload({
          files: input.files,
          ext,
          businessPath: '20th/img/'
        });
        this.focus();
        this.execCommand(
          'inserthtml',
          `<img src="https://v3.yooc.me/${value}" _src="${value}" />`
        );
        emits('update:html', ueditor.getContent());
      });
      input.click();
    }
  };
}
