<template>
  <div class="home" id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
   Navbar
  }
}
</script>

<style>
.home {
  background-color: #141414;
}
</style>
