import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { routes } from './routes.js';


library.add(faUserSecret)

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import Notify from 'mdbvue/lib/components/Notify'
Vue.use(Notify)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
