// UE.plugin.register('wordimage', );
import { imagePlaceholder } from '../utils';
import { useBus as bus } from '@bus';

// const $alert = useAlert();

const _getWordImages = (imgs) => {
  return imgs.filter((img) => /^(?:(file:\/+))/.test(img.src));
};

export default function () {
  return function wordimage() {
    let me = this;
    let images = [];
    let {
      utils,
      dom: { domUtils }
    } = UE;
    this.addListener('afterpaste', () => {
      let imgs = domUtils.getElementsByTagName(this.document, 'img');
      let wordImages = _getWordImages([].slice.call(imgs));
      wordImages.forEach((img, index) => {
        imagePlaceholder(img);
        me.fireEvent('content:change');
        index === 0 &&
          bus.$emit(
            '图片无法加载，请使用图片上传功能手动上传图片，或者复制单张原图粘贴'
          );
      });
    });
    return {
      commands: {
        wordimage: {
          execCommand() {
            var images = domUtils.getElementsByTagName(me.body, 'img');
            var urlList = [];
            for (var i = 0, ci; (ci = images[i++]); ) {
              var url = ci.getAttribute('word_img');
              url && urlList.push(url);
            }
            return urlList;
          },
          queryCommandState: function () {
            images = domUtils.getElementsByTagName(me.body, 'img');
            for (var i = 0, ci; (ci = images[i++]); ) {
              if (ci.getAttribute('word_img')) {
                return 1;
              }
            }
            return -1;
          },
          notNeedUndo: true
        }
      },
      inputRule(root) {
        utils.each(root.getNodesByTagName('img'), function (img) {
          var attrs = img.attrs,
            flag = parseInt(attrs.width) < 128 || parseInt(attrs.height) < 43,
            opt = me.options,
            src = opt.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif';

          if (attrs['src'] && /^(?:(file:\/+))/.test(attrs['src'])) {
            img.setAttr({
              width: attrs.width,
              height: attrs.height,
              alt: attrs.alt,
              word_img: attrs.src,
              src: attrs.src,
              handled: 1,
              style:
                'background:url(' +
                (flag
                  ? opt.themePath + opt.theme + '/images/word.gif'
                  : opt.langPath + opt.lang + '/images/localimage.png') +
                ') no-repeat center center;border:1px solid #ddd'
            });
          }
        });
      }
    };
  };
}
