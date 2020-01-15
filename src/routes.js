import MainPage from './components/MainPage.vue';
import Resources from './components/Resources.vue';
import Gems from './components/resources/Gems.vue';


export const routes = [
    { path: '', component: MainPage, name: 'home'},
    { path: '/resources', component: Resources, name: 'resources', children: [
        { path: 'gems', component: Gems, name: 'gems' }
    ]}

];