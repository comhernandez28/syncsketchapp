<template>
  <div>
    <div class="row">
      <div class="col">
        <div v-for="movie in this.movies" :key="movie.imdbID">
          <ul class="list-group">
            <movie-list-item :srcImg="movie.Poster" :Title="movie.Title" :imdbID="movie.imdbID" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array
    }
  }
}
</script>

<style>

</style>