<template>
  <div class="container-fluid text-white">
    <div class="row movie-card d-flex align-items-center justify-content-center">
      <div class="d-flex align-items-center justify-content-center col-sm-12 col-lg-6 mb-2 mt-2">
          <img :src="this.movie.Poster" alt=""> 
      </div>
      <div class="col-sm-12 col-lg-6">
        <h1>{{this.movie.Title}}</h1>
        <h6>Summary:</h6> <p>{{this.movie.Plot}}</p>
        <h6>Actors:</h6><p>{{this.movie.Actors}}</p>
        <h6>Director:</h6><p>{{this.movie.Director}}</p>
        <h6>Genre:</h6><p>{{this.movie.Genre}}</p>
        <h6>Rated:</h6><p>{{this.movie.Rated}}</p>
        <h6>Runtime:</h6><p>{{this.movie.Runtime}}</p>
        <h6>IMDB Rating:</h6><p>{{this.movie.imdbRating}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieId: this.$router.history.current.params.id,
      movie: ""
    };
  },
  props: {
    id: {
      type: String
    }
  },
    watch: {
    "$route.params.id"(movieId) {
     this.axios.get("https://www.omdbapi.com/?i=" + movieId + "&apikey=d47f1e73")
    .catch(err => {
				console.log(err);
      })
    .then(res => {
      console.log(res);
      this.movie = res.data;
    })
    }
  },
    created() {
    this.axios.get("http://www.omdbapi.com/?i=" + this.movieId + "&apikey=d47f1e73")
    .catch(err => {
				console.log(err);
      })
    .then(res => {
      console.log(res);
      this.movie = res.data;
    })
  }
}
</script>

<style>
.movie-card {
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
}
</style>