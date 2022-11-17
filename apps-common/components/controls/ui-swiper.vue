<template>
  <Swiper :options="options">
    <slot />
  </Swiper>
</template>
<script>
  export default {
    name: 'UiSwiper'
  };
</script>
<script setup>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css';
  defineProps({
    index: { type: [String, Number], default: 0 },
    options: { type: Object, default: () => ({}) }
  });
  defineEmits(['update:index']);
</script>
