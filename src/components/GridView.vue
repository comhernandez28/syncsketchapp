<template>
    <div>
      <div class="row">
        <div class="col">
          <div class="card-columns">
              <div v-for="movie in this.movies" :key="movie.imdbID">
                <movie-card :srcImg="movie.Poster" :Title="movie.Title" :imdbID="movie.imdbID" />
              </div>
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