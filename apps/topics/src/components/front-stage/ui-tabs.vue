<template>
  <ul class="tw-color tw-bg tw-flex tw-items-center">
    <router-link
      v-for="{ name } in totalTabs"
      :key="name"
      :to="{ name }"
      v-slot="{
        isActive,
        navigate,
        route: {
          meta: { title },
        },
      }"
      custom
    >
      <li
        @click="navigate"
        class="tw-cursor-pointer tw-list-none tw-border tw-border-primary tw-text-primary"
      >
        {{ title }}
        <img v-if="device === 'tablet' || device === 'H5'" src="" alt="" />
      </li>
    </router-link>
  </ul>
</template>

<script setup>
import tabs from "@topics-routes/inner-tabs";
let currentTabs = tabs[useEventNameStore().eventName];
const device = computed(() => useDeviceStore().device);
const props = defineProps({ routes: { type: Array, default: () => [] } });

let totalTabs = ref([]);

onMounted(() => {
  console.log(currentTabs, props.routes);
  totalTabs.value = props.routes;
});
</script>
