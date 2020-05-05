import Vue from 'vue'
import App from './App.vue'
import VueDragResize from 'vue-drag-resize'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

import './assets/css/main.css'
Vue.component('vue-drag-resize', VueDragResize)

Vue.use(VModal)

new Vue({
  render: h => h(App)
}).$mount('#app')
