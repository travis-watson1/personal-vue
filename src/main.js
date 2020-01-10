import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Notify from 'mdbvue/lib/components/Notify'
Vue.use(Notify)

new Vue({
  render: h => h(App),
}).$mount('#app')
