import loading from '@common/images/loading.svg';

const defaultFailSvg = `<svg style="width:100%;height:100%;max-width: 64px;max-height: 64px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e96b6b" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"/></svg>`;

export const imagePlaceholder = (img, fn = () => {}) => {
  let div = document.createElement('div');
  let p = img.parentNode;
  let display = `display: flex;align-items: center;justify-content: center`;
  let position = `position: absolute;top: 0;left: 0`;
  let size = `width: 100%;height: 100%`;
  let bg = `background-color: rgba(255, 255, 255, .5);backdrop-filter: blur(16px)`;
  let loadingHtml = `<div style="${display};${size};${position};${bg};">
      <img src="${loading}" style="max-width: 100%;">
    </div>`;
  div.contentEditable = false;
  div.style.display = 'none';
  div.style.background = `transparent no-repeat center url(${img.src})`;
  div.style.backgroundSize = 'contain';
  div.style.position = 'relative';
  div.innerHTML = loadingHtml;

  const onUploadFail = (title = '图片上传失败', innerHtml = defaultFailSvg) => {
    if (div) {
      div.title = title;
      div.querySelector('div').innerHTML = innerHtml;
    }
  };

  const reset = () => {
    if (div) {
      div.style.display = 'none';
      p.insertBefore(img, div);
      p.removeChild(div);
      div = null;
    }
  };

  img.onload = () => {
    if (!img.hasAttribute('handled')) {
      div.style.width = img.width + 'px';
      div.style.height = img.height + 'px';
      p.contains(img) && p.removeChild(img);
      div.style.display = 'flex';
    }
  };

  img.onerror = () => {
    const isWordImage = /^(?:(file:\/+))/.test(img.src);
    if (isWordImage && p.parentNode) {
      p.parentNode.removeChild(p);
    }
    fn({
      parent: p,
      image: img,
      isWordImage,
      placeholder: div,
      reset
    });
  };

  p.insertBefore(div, img);

  return {
    placeholder: div,
    image: img,
    onUploadFail,
    reset
  };
};
