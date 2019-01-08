<template>
  <nav class="navbar navbar-light header">
    <div class="container display-3 bold">
      Header
    </div>
  </nav>
</template>

<script>
//import { mapGetters } from "vuex";
export default {
  name: "rheader",
  computed: {
    // ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>
<style>
.header{
    background-color: #f9f9f9
}

</style>