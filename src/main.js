import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFeather from 'vue-feather'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/vs2015.css'
import Draggable from 'vuedraggable'
import Sortable from 'sortablejs/modular/sortable.complete.esm.js'
createApp(App)
  .use(store)
  .use(router)
  .use(VueHighlightJS)
  .component('sortable', Sortable)
  .component('draggable', Draggable)
  .component(VueFeather.name, VueFeather)
  .mount('#app')
