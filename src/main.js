import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'


createApp(App).use(store).use(router).use(VueLazyload,{preLoad: 1.3, error: 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725052-stock-illustration-image-available-icon-flat-vector.jpg',  loading: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png',  attempt: 1}).mount('#app')
