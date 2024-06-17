import {createApp} from 'vue';
import {createVuetify} from 'vuetify';
import 'vuetify/styles';
import { mdi } from 'vuetify/iconsets/mdi';
import App from './App.vue';
import router from './router/router';
import '@assets/styles/index.scss';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  aliases: {},
  defaults: {},
  icons: {
    defaultSet: 'mdi',
    sets: {mdi},
  },
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
