<template>
  <div class="container-fluid resources">
    <div>
    <h1>Resources</h1>
    <h6>A futile attempt to try and organize my browser's bookmarks.</h6>
    <br><br>
    <mdb-btn-toolbar class="justify-content-center">
      <mdb-btn-group class="mr-2">
        <div >
          <router-link v-for="(resource,index) in resources" :key="index" color="red" :to="resource.linkName" tag="button" class="btn btn-primary">{{resource.name}}</router-link>
        </div>
        <!-- <mdb-btn v-for="(resource, index) in resources" color="red" :key="index">{{resource.name}}</mdb-btn> -->
      </mdb-btn-group>
    <router-view></router-view>
    </mdb-btn-toolbar>
    </div>
  </div>
</template>

<script>
  import {
    mdbBtnGroup,
    mdbBtnToolbar
  } from 'mdbvue';

  export default {
    data() {
      return {
        resources: [{
            name: 'Ruby on Rails Gems',
            linkName: '/resources/gems'
          },
          {
            name: 'Cheat Sheets',
            linkName: '/resources/cheatSheets'
          },
          {
            name: 'Design',
            linkName: '/resources/design'
          },
          {
            name: 'Development Tools',
            linkName: 'development',
          },
            {
              name: 'Learning',
              linkName: '/resources/learning'
            }],
        }
      },
      components: {
        mdbBtnGroup,
        mdbBtnToolbar
      }
    }
</script>
<style lang="scss">
</style>