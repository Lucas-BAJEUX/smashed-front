<template>
  <div id="app">
    <router-view />
    <navigation-bar />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}

.navigation {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
