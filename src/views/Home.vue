<template>
  <div id="home">
     <!-- max-height="700px" lazy-src="../images/banner.jpg"    src= "../images/banner.jpg"  -->
    <v-img
    
      dark
    max-height="500px"
      src="https://images.unsplash.com/photo-1579558448624-1a4b3d50d17c?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258M3xmZjEzWVg3TlJDWXx8fHx8Mnx8MTYyMDY4NDk1OA&ixlib=rb-1.2.1"
    
      lazy-src="https://images.unsplash.com/photo-1579558448624-1a4b3d50d17c?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258M3xmZjEzWVg3TlJDWXx8fHx8Mnx8MTYyMDY4NDk1OA&ixlib=rb-1.2.1"
      
    >
      <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
              <div
                :class="{
                  'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp,
                  'title font-weight-bold': $vuetify.breakpoint.smAndDown,
                }"
              >
                Welcome to my page.
              </div>
              <div
                :class="{
                  headline: $vuetify.breakpoint.smAndUp,
                  'subtitle-1': $vuetify.breakpoint.smAndDown,
                }"
              >
                I make applications.
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    <!--
    <img class="logo" src="../images/mercedes-benz-io-white.png" alt="logo" />
    <h1>👋Hello world🌎</h1> -->
    <v-container class="mt-5">
      <PProjects />
    </v-container>

    <v-container class="mt-5">
      <v-layout wrap my-5>
        <v-flex xs12 mb-5>
          <div class="display-1 font-weight-bold" id="contact">
            Send me a message... :)
          </div>
        </v-flex>
        <template v-for="(contact, i) in contactLinks">
          <v-flex sm6 md4 xs12 :key="i">
            <p-contact-info :contact="contact" />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>








<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import PContactInfo from "../components/PContactInfo";
import PProjects from "../components/PProjects";
import img from '../images/banner.jpg'

export default {
  name: "home",
  components: {
    // HelloWorld,
    PProjects,
    PContactInfo,
  },
  data() {
    return {
      
      aboutText:
        "I enjoy building apps in my free time when I'm not doing much. Looking to get into machine learning and trying to automate as many things as possible. Love to encourage new coders that they can do it too! I'm not very smart, just curious to see how things work. I'm also not that good of a writer as you can see. lol. Anyways, you are free to download any of the code thats on my github! And I hope you have a great day!",

      contactLinks: [
        {
          name: "Email",
          value: "joaosilgo96@gmail.com",
          link: "mailto:joaosilgo96@gmail.com",
          icon: "mdi-email",
        },
        {
          name: "LinkedIn",
          value: "João Gomes",
          link: "https://www.linkedin.com/in/joao-silva-gomes/",
          icon: "mdi-linkedin",
        },
        {
          name: "Github",
          value: "Joaosilgo",
          link: "https://github.com/Joaosilgo",
          icon: "mdi-git",
        },
        {
          name: "Facebook",
          value: "João Gomes",
          link: "https://www.facebook.com/joaosilgo/",
          icon: "mdi-facebook",
        },
      ],
    };
  },
};
</script>