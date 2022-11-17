<template>
  <div :id="id" class="u-editor" style="width: 100%; overflow-y: auto">
    {{ placeholder }}
  </div>
</template>
<script>
  export default {
    name: 'UEditor'
  };
</script>
<script setup>
  import loadUEditor from '@common/public/ueditor';
  import createUid from '@common-utils/create-uid';
  import catchRemoteImage from '@common-config/ueditor-config/plugins/catch-remote-image';
  import wordImage from '@common-config/ueditor-config/plugins/word-image';
  import customInsertImage from '@common-config/ueditor-config/commands/custom-insert-image';
  // import customVideoModify from '@common-config/ueditor-config/plugins/custom-video-modify';
  // import customInsertVideo from '@common-config/ueditor-config/commands/custom-insert-video';
  const props = defineProps({
    placeholder: { type: String, default: '' },
    html: { type: String, default: '' }
  });
  const emits = defineEmits(['update:html']);

  // const vm = getCurrentInstance();
  const id = `ueditor-${createUid()}`;
  let ueditor = ref(null);
  let ue = ref(null);

  const updateContent = () => {
    emits('update:html', ueditor.getContent());
  };
  const initEditor = () => {
    setTimeout(() => ueditor.setContent(props.html), 300);
    [('input', 'focus', 'blur')].forEach((eventName) =>
      ueditor.body.addEventListener(eventName, () => updateContent())
    );
    ['pasted:image', 'content:change'].forEach((event) =>
      ueditor.addListener(event, () => updateContent())
    );
    // ueditor.addListener('pasted:image', () => updateContent());
    // ueditor.addListener('content:change', () => updateContent());
  };
  onMounted(() =>
    loadUEditor((UE) => {
      ue.value = UE;
      ueditor = UE.getEditor(id);
      ueditor.ready(initEditor);
      UE.plugins['catchremoteimage'] = catchRemoteImage;
      // const HOME_URL = this.ueditor.getOpt('UEDITOR_HOME_URL');
      UE.commands['custominsertimage'] = customInsertImage(emits, ueditor);
      UE.plugin.register('wordimage', wordImage());
    })
  );
  onUnmounted(() => ue.delEditor(id));
  // export default {
  //   name: 'UEditor',
  //   /*    data() {
  //     return {
  //       ueditor: null,
  //       id: `ueditor-${createUid()}`,
  //       UE: null
  //     };
  //   },*/
  //   watch: {
  //     contentValue(value) {
  //       this.$emit('change', value);
  //     }
  //   },
  //   mounted() {
  //     loadUEditor((UE) => {
  //       let vm = this;
  //       this.UE = UE;
  //       UE.plugins['catchremoteimage'] = catchRemoteImage;
  //       // const HOME_URL = this.ueditor.getOpt('UEDITOR_HOME_URL');
  //       UE.commands['custominsertimage'] = customInsertImage(vm);
  //       UE.plugin.register('wordimage', wordImage(vm));
  //       this.ueditor = UE.getEditor(this.id);
  //       this.ueditor.ready(this.initEditor);
  //     });
  //   },
  //   methods: {
  //     updateContent() {
  //       this.$emit('change', this.ueditor.getContent());
  //     },
  //     initEditor() {
  //       setTimeout(() => this.ueditor.setContent(this.contentValue), 300);
  //       [('input', 'focus', 'blur')].forEach((eventName) => {
  //         this.ueditor.body.addEventListener(eventName, () => {
  //           this.updateContent();
  //         });
  //       });
  //       this.ueditor.addListener('pasted:image', () => this.updateContent());
  //       this.ueditor.addListener('content:change', () => {
  //         this.updateContent();
  //       });
  //     }
  //   },
  //
  //   destroyed() {
  //     this.UE.delEditor(this.id);
  //   }
  // };
</script>
