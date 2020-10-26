<template>
	<div v-if="this.loading">
		<div class="container-fluid mt-4 mb-4">
			<h1 class="text-white">Top Rated Movies</h1>
			<div class="row">
				<div class="col">
					<div class="card-deck">
						<movie-card :srcImg="this.slideOne.Poster" :Title="this.slideOne.Title" :imdbID="this.slideOne.imdbID" />
						<movie-card :srcImg="this.slideTwo.Poster" :Title="this.slideTwo.Title" :imdbID="this.slideTwo.imdbID" />
						<movie-card :srcImg="this.slideThree.Poster" :Title="this.slideThree.Title" :imdbID="this.slideThree.imdbID" />
					</div>
				</div>
			</div>
		</div>

		<movie-section />

	</div>
</template>

<script>
	export default {
		data() {
			return {
				slideOne: null,
				slideTwo: null,
				slideThree: null,
				loading: false
			};
		},
		created() {
			const reqOne = this.axios.get("https://www.omdbapi.com/?i=tt0111161&apikey=d47f1e73");
			const reqTwo = this.axios.get("https://www.omdbapi.com/?i=tt0120737&apikey=d47f1e73");
			const reqThree = this.axios.get("https://www.omdbapi.com/?i=tt0468569&apikey=d47f1e73");

			this.axios.all([reqOne, reqTwo, reqThree]).then(this.axios.spread((...responses) => {
			this.slideOne = responses[0].data
			this.slideTwo = responses[1].data
			this.slideThree = responses[2].data
			})).catch(err => {
				console.log(err);
			})
			.finally(() => 
				this.loading = true
			);
		},
	};
</script>

<style>
	.card-img {
		max-height: 100%;
	}
</style>
