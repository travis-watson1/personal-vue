<template>
    <div>
        <section class="banner-area">
            <div class="container test">
                <div class="w-100 row fullscreen align-items-center justify-content-between" style="margin: 0 !important;">
                    <div class="col-lg-6 col-md-6 banner-left text-center text-md-left">
                        <h6>HI, MY NAME IS</h6>
                        <h1>Travis Watson</h1>
                        <p>
                            Welcome to my website! I'm a software engineer that has a passion for creating amazing web
                            applications. Please enjoy my site and feel free to drop me some mail!
                        </p>
                        <button class="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">CONTACT ME</button>
                        <div class="dropdown-menu text-left">
                            <a href="mailto:watsonjamest@gmail.com.com" target="_blank">Email</a>
                            <div class="dropdown-divider"></div>
                            <a href="tel:931-250-3856"> Phone</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 banner-right d-flex align-self-center">
                        <img src="../assets/images/main_page.png" alt="Main Page Image 1"
                            class="w-100 img-fluid top-image">
                    </div>
                </div>
            </div>
        </section>
        <section id="about-me">
            <div class="container test">
                <div class="w-100 row fullscreen align-items-center justify-content-between" style="margin: 0 !important;"> 
                    <div class="col-lg-6 col-md-6 banner-right d-flex align-self-center">
                        <img src="../assets/images/main_page2.png" alt="Main Page Image 2" class="w-100 img-fluid">
                    </div>
                    <div class="col-lg-6 col-md-6 banner-left text-center text-md-left">
                        <h1>About ME</h1>
                        <p>
                            I've been designing websites since I was a young teenager, and I really enjoy the
                            fulfillment that
                            comes with creating original content.
                            I've been trained to use skills such as Ruby on Rails, Bootstrap, jQuery, Postgresql, React,
                            HTML,
                            and CSS.
                            I'm also an avid learner. I'm constantly spending too much time (and money!) on Udemy
                            learning new
                            skills.
                        </p>
                        <mdb-badge color="primary" v-for="(skill, i) in skills" :key="i">{{skill}}</mdb-badge>
                        <p>

                        <mdb-badge color="orange" v-for="(app, i) in apps" :key="i">{{app}}</mdb-badge>
                        </p>
                        <p>
                        </p>
                        <p>
                        </p>
                        <a href="https://drive.google.com/file/d/1pEiE3PudKG-_Bz867N94_2EeWzsSEs_s/view?usp=sharing"
                            class="btn btn-outline-primary btn-rounded waves-effect text-uppercase resume-width animated pulse infinite">View My
                            Resume</a>
                    </div>
                </div>
            </div>
        </section>
    <projects></projects>
    </div>
</template>

<script>
    import { mdbBadge } from 'mdbvue';
    import Projects from './Projects.vue'
    export default {
        name: 'MainPage',
        components: {
            mdbBadge,
            projects: Projects
        },
        data(){
            return{
                skills: ["Ruby on Rails", "Javascript", "NodeJS", "React", "Bootstrap", "jQuery", "SQL", "Postgresql", "VueJS", "HTML", "CSS", "Git" ],
                apps: ["Visual Studio", "VS Code", "Atom", "Sublime", "Adobe xD", "pgAdmin4", "Slack", "Zoom"]
            }
        }
    }
</script>

<style lang="scss">

</style>