<template>
  <div>
    <ui-tabs />
    <router-view />
    <!--    <router-view v-slot="{ Component, route }" name="topic-info">
      <transition name="fade" mode="out-in">
        <template #default>
          <component :key="route.path" :is="Component" />
        </template>
      </transition>
    </router-view>-->
  </div>
</template>

<script setup>
import UiTabs from '@topics-components/front-stage/ui-tabs';
import formattedRoute from '@topics/utils/formatted-route';

const routeName = 'index';
const redirect = () =>
  $router.push({
    name: $router.options.routes.find(
      ({ name }) => name === formattedRoute(routeName)
    ).children[0].name
  });

onMounted(() => useRoute().name === formattedRoute(routeName) && redirect());
</script>
