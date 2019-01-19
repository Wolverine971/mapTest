<template>
  <v-content  class="navbar navbar-light header">
    <m-Nav :myMap="null" class="nav"></m-Nav>
    <div class="container display-3 bold">
      Header
    </div>
  </v-content >
</template>

<script>
//import { mapGetters } from "vuex";
import mNav from './map/mNav'
export default {
  name: "rheader",
  components:{
    mNav
  },
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