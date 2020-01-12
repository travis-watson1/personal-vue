<template>
  <mdb-navbar color="primary" light transparent>

    <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-nav-item href="#" active> About</mdb-nav-item>
          <mdb-nav-item href="#">Portfolio</mdb-nav-item>
        </mdb-navbar-nav>

        <mdb-navbar-nav right>
          <mdb-nav-item href="#" active> About</mdb-nav-item>
          <mdb-nav-item href="#" class="test-text">Portfolio</mdb-nav-item>
        </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import {
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem
  } from 'mdbvue';
  export default {
    components: {
      mdbNavbar,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>