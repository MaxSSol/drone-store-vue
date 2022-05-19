<template>
  <nav>
    <header-bar></header-bar>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import HeaderBar from "@/components/Headers/HeaderBar";
export default {
  components: {HeaderBar}
}
</script>