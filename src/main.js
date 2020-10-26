import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

Vue.component("movie-section", 
require("./components/MovieSection.vue")
.default
);

Vue.component("movie-card", 
require("./components/MovieCard.vue")
.default
);

Vue.component("movie", 
require("./components/Movie.vue")
.default
);

Vue.component("grid-view", 
require("./components/GridView.vue")
.default
);

Vue.component("list-view", 
require("./components/ListView.vue")
.default
);

Vue.component("movie-list-item", 
require("./components/MovieListItem.vue")
.default
);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
