import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(MintUI);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
