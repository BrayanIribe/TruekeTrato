<template>
  <div id="app">
    <IHeader v-if="!$hideHeader" />
    <router-view></router-view>
  </div>
</template>

<script>
import IHeader from "./components/IHeader";
import Router from "@/router";

export default {
  name: "App",
  components: { IHeader },
  computed: {
    $hideHeader() {
      const { name } = this.$route;
      const route = Router.find((e) => e.name === name);
      return route.hideHeader === true;
    },
  },
};
</script>

<style>
.i-border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
