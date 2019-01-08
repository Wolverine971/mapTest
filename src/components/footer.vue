
<template>
  <footer class="footer">
    <div class="container display-3 bold" color="blue-grey">
        <div class="tooltip">Footer
            <span class="caption tooltiptext">Do not click me!</span>
        </div>
      <!-- <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        Home
      </router-link> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "rfooter"
};
</script>
<style>
.footer{
    background-color: #f9f9f9
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 80px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 3px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>
