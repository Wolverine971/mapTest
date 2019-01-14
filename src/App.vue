<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
import rheader from "./components/header";
import rfooter from "./components/footer";
export default {
  name: "App",
  components: {
    rheader,
    rfooter
  }
};
</script>

<style></style>