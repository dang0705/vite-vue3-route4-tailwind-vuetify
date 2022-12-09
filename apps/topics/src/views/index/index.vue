<template>
  <div
    class="tw-mx-auto tw-h-[calc(100%_-_3.5rem)] tw-w-full tw-overflow-auto md:tw-h-fit lg:tw-w-4/5"
  >
    <ui-tabs class="tw-mx-auto lg:tw-w-11/12" />
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <template #default>
          <v-container class="tw-rounded-4xl">
            <component :is="Component" :key="route.path" />
          </v-container>
        </template>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import UiTabs from '@topics-components/front-stage/ui-tabs';
import formattedRoute from '@topics/utils/formatted-route';

const routeName = 'index';
const redirect = () =>
  $router.replace({
    name: $router.options.routes.find(
      ({ name }) => name === formattedRoute(routeName)
    ).children[0]?.name
  });

onMounted(() => useRoute().name === formattedRoute(routeName) && redirect());
</script>
