<template>
  <div class="container-fluid text-white">
    <div class="row">
      <div class="col">
        <h1>Star Wars Movies</h1>
      </div>
    </div>

    <div class="btn-group btn-group-toggle mb-4" data-toggle="buttons">
      <label class="btn btn-secondary active">
        <input type="radio" value="grid" name="options" id="gridView" autocomplete="off" checked v-model="view"> Grid View
      </label>
      <label class="btn btn-secondary">
        <input type="radio" value="list" name="options" id="listView" autocomplete="off" v-model="view"> List View
      </label>
    </div>

     <grid-view v-if="this.view == 'grid'" :movies="this.movies"  />
     <list-view v-if="this.view == 'list'" :movies="this.movies"  />
  </div>
</template>

<script>
export default {
	data() {
			return {
        movies: [],
        view: 'grid',
				loading: false
			};
		},
  created() {
    this.axios.get("https://www.omdbapi.com/?s=star+wars&apikey=d47f1e73")
    .catch(err => {
				console.log(err);
      })
    .then(res => {
      console.log(res);
      this.movies = res.data.Search;
    })
  }
}
</script>

<style>

</style>