<template>
  <div>
		<div class="row">
			<div class="col">
				<!-- Image and text -->
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<router-link class="navbar-brand" to="/">
						<img
							src="https://vuejs.org/images/logo.png"
							width="30"
							height="30"
							class="d-inline-block align-top"
							alt=""
							loading="lazy"
						/>
						SyncSketchFlix 
					</router-link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto"></ul>
					<form class="form-inline my-2 my-lg-0">
					<input v-model="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
					
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="searchMovie">Search</button>
					</form>
					</div>
				</nav>
			</div>
		</div>





	</div>
</template>

<script>
export default {
	data() {
			return {
        search: ""
			};
	},
	methods: {
		searchMovie: function (e) {
			e.preventDefault();
			let searchStr = this.search.replace(/\s+/g, '+').toLowerCase();
			this.axios.get("http://www.omdbapi.com/?t=" + searchStr +  "&apikey=d47f1e73")
			.catch(err => {
				console.log(err);
			})
			.then(res => {
				console.log(res.data.Title)
			if(res.data.Response === "True"){
				this.$router.push({ path: `/movie/${res.data.imdbID}`})
			} else {
				this.$router.push({ name: 'error'})
			}
			});
		}
	}
}

</script>

<style>

</style>