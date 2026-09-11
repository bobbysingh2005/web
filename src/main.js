import { createApp } from 'vue';
import App from './App.vue';
import { router } from '@/router';


// Import Bootstrap CSS/JS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS
import 'bootstrap';

// Import Font Awesome CSS so the decorative icons used on the pages render
import '@fortawesome/fontawesome-free/css/all.min.css';


//global custome variable
const isDevMode = import.meta.env.VITE_APP_MODE === 'development';
const isProdMode = import.meta.env.VITE_APP_MODE === 'production';

const app = createApp(App);

app.config.globalProperties.$isDevMode = isDevMode;
app.config.globalProperties.$isProdMode = isProdMode;
app.use(router);

app.mount('#app');
