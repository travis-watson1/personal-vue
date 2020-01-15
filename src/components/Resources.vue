<template>
  <div class="container-fluid resources">
    <h1>Resources</h1>
    <h6>A futile attempt to try and organize my browser's bookmarks.</h6>
    <br><br>
    <mdb-btn-toolbar class="justify-content-center">
      <mdb-btn-group class="mr-2">
        <mdb-btn v-for="(resource, index) in resources" color="red" :key="index">{{resource.name}}</mdb-btn>
      </mdb-btn-group>
    </mdb-btn-toolbar>
  </div>
</template>

<script>
  import {
    mdbBtn,
    mdbBtnGroup,
    mdbBtnToolbar
  } from 'mdbvue';

  export default {
    data() {
      return {
        resources: [{
            name: 'Ruby on Rails Gems',
            linkName: 'Gems'
          },
          {
            name: 'Cheat Sheets',
            linkName: 'cheatSheets'
          },
          {
            name: 'Design',
            linkName: 'design'
          },
          {
            name: 'Development Tools',
            linkName: 'development',
          },
            {
              name: 'Learning',
              linkName: 'learning'
            }],
        }
      },
      components: {
        mdbBtn,
        mdbBtnGroup,
        mdbBtnToolbar
      }
    }
</script>
<style lang="scss">
</style>