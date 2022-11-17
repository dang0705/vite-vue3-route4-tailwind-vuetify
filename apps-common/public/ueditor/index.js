window.UEDITOR_HOME_URL = `/ueditor/`;

const loadUEditor = (callback = () => {}) => {
  import('./ueditor.config');
  import('./ueditor.all').then(() => {
    callback(UE);
  });
};

export default loadUEditor;
