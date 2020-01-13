<template>
<div id="portfolio">
  <h1>Past Projects</h1>
  <br>
  <mdb-carousel
  :items="7"
  multi
  one
  indicators
  controlls
  leftIcon="angle-double-left"
  rightIcon="angle-double-right"
  navColor="orange"
  indicatorsColor="white"
  slide
  >
    <template #[i+1] v-for="(img, i) in items">
      <mdb-card :key="i" style="height: 350px;">
        <mdb-card-image :src="img.url" alt="Card image cap"></mdb-card-image>
        <mdb-card-body class="text-center">
          <mdb-card-title>{{img.name}}</mdb-card-title>
          <mdb-card-text>{{img.description}}</mdb-card-text>
          <mdb-btn color="orange" size="md" class="portfolio-button-width btn-portfolio">Live</mdb-btn>
          <mdb-btn color="orange" size="md" class="portfolio-button-width btn-portfolio">Github</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </template>
  </mdb-carousel>
</div>
</template>

<script>
  import { mdbCarousel, mdbCard, mdbCardImage, mdbCardText, mdbCardBody, mdbBtn } from 'mdbvue';
  export default {
    name: 'CarouselPage',
    components: {
      mdbCarousel, mdbCard, mdbCardImage, mdbCardText, mdbCardBody, mdbBtn
    },
    data() {
      return {
        items: [
          {url: "https://i.postimg.cc/C5GL8snJ/grammable1.png", 
          name: "Grammable",
          description: "Grammable is a simple Instagram clone built using automated software tests (Test-Driven Development) in Ruby."},
          {url: "https://i.postimg.cc/SjbkN2Z8/nomster1.png", 
          name:"Nomster",
          heroku: "http://grammable-travis-watson.herokuapp.com",
          github: "https://github.com/travis-watson1/grammable",
          description: "Nomster is a Yelp clone that integrates with the Google Map API and includes features like user comments, star ratings, image uploading, and user authentication."},
          {url:"https://i.postimg.cc/Wb1Qg7Z3/flashback1.png", 
          name:"Flashback",
          heroku: "http://flashback-travis-watson.herokuapp.com",
          github: "https://github.com/travis-watson1/FlashBack",
          description: "Flashback is an interactive flashcard app that tells the story of React and it's role in the industry."},
          {url:"https://i.postimg.cc/MHVXD8N7/flixter2.png", 
          name:"Flixter",
          heroku: "http://flixter-travis-watson.herokuapp.com",
          github: "https://github.com/travis-watson1/flixter",
          description: "Flixter is a two sided video streaming marketplace platform, featuring credit card payment capabilities, user role management, complex user interfaces and advanced database relationships."},
          {url:"https://i.postimg.cc/2SKmVKXr/note1.png", 
          name:"Note",
          heroku: "http://note-app-travis-watson.herokuapp.com",
          github: "https://github.com/travis-watson1/react-note-app",
          description: "Note is a note-taking app utilizing a back-end API. The application was built using React, and has a simple and fluid user interface."},
          {url:"https://i.postimg.cc/RFh0w89r/splurty.png", 
          name:"Splurty",
          heroku: "http://splurty-travis-watson.herokuapp.com",
          github: "https://github.com/travis-watson1/splurty",
          description: "Splurty is a simple quote generator created using Ruby on Rails that displays motivational quotes."},
          {url:"https://i.postimg.cc/9MzCKCvY/musicmaker.png", 
          name:"Music Master",
          github: "https://github.com/travis-watson1/music-master",
          heroku: "https://music-master-travis-watson.herokuapp.com",
          description:"Music Master is a React App that utilizes a Spotify API to search for artists and play their music."}
        ],
      }
    }
  }
</script>
<style lang="scss">
</style>