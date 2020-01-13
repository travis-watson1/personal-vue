<template>
  <div id="app" style="margin-top: 5%;">
    <img alt="Vue logo" src="./assets/images/navbar_image.png" class="navbar-image">
    <div class="container-fluid">

    <ul class="nav nav-pills justify-content-center" style="margin-top: 50px;">
      <li class="nav-item">
        <a class="nav-link nav-button active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-button" href="#">Link</a>
      </li>
    </ul>
    </div>

    <mainpage></mainpage>
    <projects></projects>
    <end-footer></end-footer>
  </div>
</template>

<script>
  import MainPage from './components/MainPage.vue'
  import Projects from './components/Projects.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      mainpage: MainPage,
      projects: Projects,
      endFooter: Footer,
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