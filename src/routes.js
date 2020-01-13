import MainPage from './components/MainPage.vue';
import Resources from './components/Resources.vue';


export const routes = [
    { path: '', component: MainPage, name: 'home'},
    { path: '/resources', component: Resources, name: 'resources'}
];