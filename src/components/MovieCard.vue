<template>
  <div class="card p-2">
    <div class="row align-items-center">
      <div class="col">
        <img class="card-img" :src="srcImg" alt="Card image cap">
      </div>
      <div class="col">
        <div class="card-body">
        <h5 class="card-title">{{Title}}</h5>
        <router-link class="list-link" :to="{ name: 'movie', params: { id: this.imdbID } }"  >More Info...</router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    srcImg: String,
    Title: String,
    imdbID: String
  }
}
</script>

<style>
.card {
  background-color: rgba(0, 0, 0, 0.5);
  max-height: 100%;
  color: white;
}
.card-img {
  max-height: 400px;
}
.list-link {
  color: white;
}
.list-link:hover {
  color: white;
}
</style>