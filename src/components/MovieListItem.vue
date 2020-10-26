<template>
  <div>
    <router-link class="list-link" :to="{ name: 'movie', params: { id: this.imdbID } }"  >
      <li class="list-group-item mb-2">
        <img class="mr-2" :src="srcImg" alt=""> {{Title}}
      </li> 
    </router-link>
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
.list-group-item {
  background-color: rgba(0, 0, 0, 0.5);
}
.list-group-item img {
  max-height: 50px;
}
.list-link {
  color: white;
}
.list-link:hover {
  color: white;
}
</style>