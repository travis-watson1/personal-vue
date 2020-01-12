import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'


library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import Notify from 'mdbvue/lib/components/Notify'
Vue.use(Notify)

new Vue({
  render: h => h(App),
}).$mount('#app')
