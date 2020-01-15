import MainPage from './components/MainPage.vue';
import Resources from './components/Resources.vue';
import Gems from './components/resources/Gems.vue';
import CheatSheets from './components/resources/CheatSheets.vue';
import Design from './components/resources/Design.vue';
import Learning from './components/resources/Learning.vue';
import Development from './components/resources/Development.vue';


export const routes = [
    { path: '', component: MainPage, name: 'home'},
    { path: '/resources', component: Resources, name: 'resources', children: [
        { path: 'gems', component: Gems, name: 'gems' },
        { path: 'cheatSheets', component: CheatSheets, name: 'cheatSheets' },
        { path: 'design', component: Design, name: 'design' },
        { path: 'development', component: Development, name: 'development' },
        { path: 'learning', component: Learning, name: 'learning' }
    ]},

];