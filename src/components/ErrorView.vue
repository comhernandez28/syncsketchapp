<template>
    <div class="container-fluid text-white">
    <div class="row movie-card text-center d-flex align-items-center justify-content-center">
      <div class="col">
        <h1>Can't find Movie.</h1>
        <router-link class="text-white" :to="{ path: '/' }">Go Back Home...</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.movie-card {
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
}
</style>