import {createApp} from 'vue';
import {createVuetify} from 'vuetify';
import 'vuetify/styles';
import App from './App.vue';
import router from './router/router';
import '@assets/styles/style.css';

const vuetify = createVuetify({
  aliases: {},
  defaults: {},
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
