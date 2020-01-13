<template>
  <div id="app" style="margin-top: 5%;">
    <img alt="Vue logo" src="./assets/images/navbar_image.png" class="navbar-image">
    <br><br><br><br>
    <h3>WELCOME</h3>
    <h5>TO MY SITE</h5>
    <div class="container navs-container">
      <ul class="nav nav-pills flex-column flex-sm-row">
        <li class="flex-sm-fill">
          <router-link class="text-sm-center nav-link nav-button" :to="{ name: 'home' }" tag="li" active-class="active" exact>
            <a>Home</a></router-link>
        </li>
        <li class="flex-sm-fill">
          <router-link class="text-sm-center nav-link nav-button" :to="{ name: 'resources' }" tag="li" active-class="active">
            <a>Resources</a></router-link>
        </li>
      </ul>
    </div>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

    <end-footer></end-footer>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      endFooter: Footer
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