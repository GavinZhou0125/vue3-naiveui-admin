import { createApp } from 'vue';
import './style.css';
import 'vfonts/Lato.css';
import App from './App.vue';
import { setupStore } from './store';
import { setupRouter } from './router';

function boot(){
  const app = createApp(App);

  setupStore(app);

  setupRouter(app);


  //https://www.naiveui.com/zh-CN/os-theme/docs/style-conflict
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)

  app.mount('#app');

}

boot()
