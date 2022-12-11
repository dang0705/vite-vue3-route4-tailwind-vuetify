<template>
  <div
    class="tw-mx-auto tw-h-[calc(100%_-_3.5rem)] tw-w-full md:tw-h-fit lg:tw-w-4/5"
  >
    <v-img width="100%" :aspect-ratio="$device.device === 'H5' ? 2.5 : 3.2" />
    <v-container class="tw-px-8 tw-py-0">
      <ui-tabs class="tw-mx-auto lg:tw-w-11/12" />
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <template #default>
            <v-card class="tw-p-4">
              <component :is="Component" :key="route.path" />
            </v-card>
          </template>
        </transition>
      </router-view>
    </v-container>
  </div>
</template>

<script setup>
import UiTabs from '@topics-components/front-stage/ui-tabs';
import formattedRoute from '@topics/utils/formatted-route';

const $device = useDeviceStore();

const routeName = 'index';
const redirect = () =>
  $router.replace({
    name: $router.options.routes.find(
      ({ name }) => name === formattedRoute(routeName)
    ).children[0]?.name
  });

onMounted(() => useRoute().name === formattedRoute(routeName) && redirect());
</script>
