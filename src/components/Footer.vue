<template class="footer">
  <!-- Footer -->
  <mdb-footer color="rgba-orange-strong" class="font-small pt-0 footer">
    <mdb-container>
      <mdb-row>
        <mdb-col md="12">
          <div class="mb-5 flex-center">
            <a class="fb-ic" href="https://github.com/travis-watson1"><i class="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
            <a class="li-ic" href="https://www.linkedin.com/in/watsonjamest/"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: Travis Watson
        <p>Built using VueJS & MDBootstrap</p>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>
<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>
<style lang="scss">

</style>