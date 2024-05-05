import { createApp } from 'vue';
import App from './App.vue';
import { router } from '@/router';


// Import Bootstrap CSS/JS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS
import 'bootstrap';


//global custome variable
const isDevMode = import.meta.env.VITE_APP_MODE === 'development';
const isProdMode = import.meta.env.VITE_APP_MODE === 'production';

const app = createApp(App);

app.config.globalProperties.$isDevMode = isDevMode;
app.config.globalProperties.$isProdMode = isProdMode;
app.use(router);

app.mount('#app');
