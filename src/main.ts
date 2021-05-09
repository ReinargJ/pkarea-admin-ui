import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import DashboardLayout from './components/DashboardLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';

const app = createApp(App);

app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);

// UI
app.use(PrimeVue);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.use(router);
app.mount('#app');