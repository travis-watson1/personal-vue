<template>
  <div id="app">
<navbar></navbar>
    <img alt="Vue logo" src="./assets/images/navbar_image.png" class="navbar-image">
<mainpage></mainpage>
<projects></projects>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import MainPage from './components/MainPage.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'app',
  components: {
    navbar: Navigation,
    mainpage: MainPage,
    projects: Projects
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-pro.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
