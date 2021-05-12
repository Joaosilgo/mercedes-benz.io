<template>
  <div id="home">
    <v-img
      dark
      max-height="700px"
      src="https://images.unsplash.com/photo-1579558448624-1a4b3d50d17c?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258M3xmZjEzWVg3TlJDWXx8fHx8Mnx8MTYyMDY4NDk1OA&ixlib=rb-1.2.1"
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
                About Page.
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

    <v-layout fill-height align-center>
      <v-container>
        <v-row>
          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
            <v-img
            :src='image'
             
              :lazy-src='image'
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </div>
</template>








<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import PContactInfo from "../components/PContactInfo";
export default {
  name: "about",
  components: {
    // HelloWorld,

    PContactInfo,
  },
  methods: {
    fetchRandomPhoto() {
      fetch(this.url + `?client_id=${this.accesKey}&collections=ff13YX7NRCY`)
        .then((response) => response.json())
        .then((json) => {
          this.image = json.urls.full;
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
  },
  created() {
    this.fetchRandomPhoto();
  },
  data() {
    return {
      image: "",
      accesKey: "WYHJjtTeIfJL1BE7t1hlmvEq_2n5a044Wln3hx_O97g",
      url: "https://api.unsplash.com/photos/random",
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