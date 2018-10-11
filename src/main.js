import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui'
import { Picker } from 'mint-ui';
import { Popup } from 'mint-ui';


import '@/assets/css/base.css'
import '@/assets/css/font.css'

Vue.config.productionTip = false;
Vue.component(Swipe.name, Swipe);
Vue.component(Picker.name, Picker);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
