import http from 'axios';
// import API from '@/apis';
import { imagePlaceholder } from '../utils';
import { useBus as bus } from '@bus';

const REMOTE_IGNORE_LIST = ['127.0.0.1', 'local'];

const _getRemoteImages = function (imgs) {
  return imgs.filter((img) => {
    let src = img.src;
    let notLocal = src.indexOf(location.host) < 0 || !/(^\.)|(^\/)/.test(src);
    let notIgnore = !REMOTE_IGNORE_LIST.find((item) => src.indexOf(item) > -1);
    let notWordImage = !img.hasAttribute('word_img');
    let notHandled = !img.hasAttribute('handled');
    let isNormalLink = /^(https?|ftp):/i.test(src);
    return notLocal && notIgnore && notWordImage && notHandled && isNormalLink;
  });
};

const _upload = async function (image) {
  let { reset, placeholder, onUploadFail } = imagePlaceholder(image);
  let cancel = null;
  const reupload = () => {
    reset();
    _upload(image);
  };
  try {
    let o = { image, placeholder, reset, cancel };
    bus.$emit('remoteImage:uploading', o);
    /*    let { url } = await http.post(
      API.uploadRemote,
      {
        url: image.src
      },
      {
        silent: true,
        cancelToken: new http.CancelToken(function executor(c) {
          o.cancel = () => {
            reset();
            c();
          };
        })
      }
    );*/
    image.src = url;
    image._src = url;
    image.setAttribute('handled', 1);
    reset();
    // this.fireEvent('catchremotesuccess');
    bus.$emit('remoteImage:uploaded', { image });
    this.fireEvent('content:change');
  } catch (error) {
    console.log(error);
    // this.fireEvent('catchremoteerror', e);
    onUploadFail();
    bus.$emit('remoteImage:uploadFail', {
      error,
      image,
      reset,
      reupload,
      placeholder
    });
  }
};

export default function catchRemoteImage() {
  let {
    dom: { domUtils }
  } = UE;

  /* 设置默认值 */
  if (this.options.catchRemoteImageEnable === false) return;
  this.setOpt({
    catchRemoteImageEnable: false
  });

  this.addListener('afterpaste', () => {
    let imgs = domUtils.getElementsByTagName(this.document, 'img');
    let remoteImages = _getRemoteImages([].slice.call(imgs));
    remoteImages.forEach((image) => _upload.call(this, image));
  });
}
