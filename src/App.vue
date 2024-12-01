<template>
  <v-app id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-app>
</template>

<script>
export default {
  name: "YektubeFrrontApp",
};
</script>

<style lang="scss">
#app {
  min-height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
