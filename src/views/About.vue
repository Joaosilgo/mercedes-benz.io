<template>
  <div id="home">
    <v-img
      dark
      max-height="500px"
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
    <h1>👋Hello world🌎</h1> 
    -->

    <v-layout>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1"
              lazy-src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Why!?</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Project Showcase for Mercedes-Benz.io
              </h3>
              <p>
                Project designed to attract attention and show off the abilities of the people involved in it.
                Project showcase is a simple online portfolio creator to help freelancers and entrepreneurs for showcasing their works to the world. With user-friendly and simple design let users create their own so fast. Projectshowcase users can show who they are and what they have done so far in a one-page website. They can link to their social media and other websites and portals. It is basically a tool for their first impression on daily business life.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="flex-row-reverse">
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="https://images.unsplash.com/photo-1531030874896-fdef6826f2f7?ixid=MnwyMjIwNDh8MHwxfGNvbGxlY3Rpb258MXxmZjEzWVg3TlJDWXx8fHx8Mnx8MTYyMTI4MjI3Mw&ixlib=rb-1.2.1"
              lazy-src="https://images.unsplash.com/photo-1531030874896-fdef6826f2f7?ixid=MnwyMjIwNDh8MHwxfGNvbGxlY3Rpb258MXxmZjEzWVg3TlJDWXx8fHx8Mnx8MTYyMTI4MjI3Mw&ixlib=rb-1.2.1"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Vue.js/WebPack</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Vue is a progressive JavaScript framework for building UIs, renowned for its simplicity and rich ecosystem
              </h3>
              <p>
                Vue.js (commonly referred to as Vue; pronounced / vjuː /, like "view") is an open-source model – view – viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.
              </p>
              <p>
              Webpack is a tool that lets you compile JavaScript modules, also known as module bundler. Given a large number of files, it generates a single file (or a few files) that run your app. It can perform many operations: helps you bundle your resources.
              </p>
            </div>
          </v-col>
        </v-row>
          <v-row no-gutters>
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixid=MnwyMjIwNDh8MHwxfGNvbGxlY3Rpb258MXxmZjEzWVg3TlJDWXx8fHx8Mnx8MTYyMTI5MjA4NQ&ixlib=rb-1.2.1"
              lazy-src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixid=MnwyMjIwNDh8MHwxfGNvbGxlY3Rpb258MXxmZjEzWVg3TlJDWXx8fHx8Mnx8MTYyMTI5MjA4NQ&ixlib=rb-1.2.1"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Progressive Web App (PWA)</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                 Progressive Web App
              </h3>
              <p>
               Progressive Web App (PWA) is a term used to denote a new methodology for software development. Unlike traditional applications, a Progressive Web App can be seen as a hybrid evolution between regular web pages (or websites) and a mobile application. This new application model combines features offered by the most modern browsers, with the advantages of using a cell phone.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>

    <v-container align-center fluid class="mt-5">
      <div class="block latestPostBlock">
        <v-container>
          <h2 class="text-center">Development Tools</h2>
          <v-row justify="center" align="center">
            <v-col v-for="item in tools" :key="item.id" cols="12" md="4">
              <v-card outlined elevation="4" class="mx-auto">
                <!-- <v-img class="white--text align-end" height="200px" :src="item.src"> -->
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1"
                >
                  <v-card-title
                    >{{ item.name }}
                    <v-icon color="white" x-large>{{
                      item.icon
                    }}</v-icon></v-card-title
                  >
                  <v-card-subtitle class="white--text pb-0">{{
                    item.small_description
                  }}</v-card-subtitle>
                  <v-card-text>
                    <div>{{ item.description }}</div>
                  </v-card-text>
                </v-img>
                <!--  <v-card-actions> </v-card-actions> -->
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <h2 class="text-center">Technologies</h2>
          <v-row justify="center" align="center">
            <v-col v-for="item in technologies" :key="item.id" cols="12" md="4">
              <v-card outlined elevation="4" class="mx-auto">
                <!-- <v-img class="white--text align-end" height="200px" :src="item.src"> -->
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1"
                >
                  <v-card-title
                    >{{ item.name }}
                    <v-icon color="white" x-large>{{ item.icon }}</v-icon>
                  </v-card-title>
                  <v-card-subtitle class="white--text pb-0">{{
                    item.small_description
                  }}</v-card-subtitle>
                  <v-card-text>
                    <div>{{ item.description }}</div>
                  </v-card-text>
                </v-img>
                <!--  <v-card-actions> </v-card-actions> -->
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <h2 class="text-center">Technologies</h2>
          <v-row justify="center" align="center">
            <v-col cols="12" md="4">
              <v-treeview
                v-model="tree"
                :open="initiallyOpen"
                :items="items"
                activatable
                item-key="name"
                open-on-click
              >
                <template v-slot:prepend="{ item, open }">
                  <v-icon v-if="!item.file">
                    {{ open ? "mdi-folder-open" : "mdi-folder" }}
                  </v-icon>
                  <v-icon v-else>
                    {{ files[item.file] }}
                  </v-icon>
                </template>
              </v-treeview>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>

    <v-layout fill-height align-center>
      <v-container>
        <v-row justify="center">
          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
            <v-img
              :src="image"
              :lazy-src="image"
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
//import {version} from '../package.json';
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
      //package: version,
      alignments: ["start", "center", "end"],
      image: "",
      accesKey: "WYHJjtTeIfJL1BE7t1hlmvEq_2n5a044Wln3hx_O97g",
      url: "https://api.unsplash.com/photos/random",
      aboutText:
        "I enjoy building apps in my free time when I'm not doing much. Looking to get into machine learning and trying to automate as many things as possible. Love to encourage new coders that they can do it too! I'm not very smart, just curious to see how things work. I'm also not that good of a writer as you can see. lol. Anyways, you are free to download any of the code thats on my github! And I hope you have a great day!",

      tools: [
        {
          id: 1,
          name: "NPM",
          small_description: "Node Package Manager",
          description:
            "Package manager for the JavaScript programming language",
          icon: "mdi-package-variant",
        },
        {
          id: 2,
          name: "Node.js",
          small_description: "",
          description:
            "Software that executes JavaScript code on the backend / server and frontend / interface (depending only on the libraries and frameworks used)",
          icon: "mdi-language-javascript",
        },
        {
          id: 3,
          name: "Git",
          small_description: "",
          description: "Distributed version control system",
          icon: "mdi-source-fork",
        },
        {
          id: 4,
          name: "GitHub",
          small_description: "",
          description: "",
          icon: "mdi-github-box",
        },
      ],
      technologies: [
        {
          id: 1,
          name: "WebPack",
          small_description: "JavaScript module packer",
          description: "",
          icon: "mdi-cisco-webex",
        },
        {
          id: 2,
          name: "Vuetify",
          small_description: "Vuetify UI Framework",
          description:
            "Vuetify is a Vue UI Library with beautifully handcrafted Material Components",
          icon: "mdi-material-ui",
        },
        {
          id: 3,
          name: "Html5",
          small_description: "Hypertext Markup Language, version 5",
          description: "",
          icon: "mdi-language-html5",
        },
        {
          id: 4,
          name: "CSS3",
          small_description: "",
          description:
            "The third newest version of the famous Cascading Style Sheets",
          icon: "mdi-language-css3",
        },
        {
          id: 5,
          name: "SASS",
          small_description: "",
          description:
            "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
          icon: "mdi-language-css3",
        },
      ],
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










 initiallyOpen: ['public'],
      files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-code-json',
        md: 'mdi-language-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel',
      },
      tree: [],
      items: [
        {
          name: '.git',
        },
        {
          name: 'node_modules',
        },
        {
          name: 'public',
          children: [
            {
              name: 'static',
              children: [{
                name: 'logo.png',
                file: 'png',
              }],
            },
            {
              name: 'favicon.ico',
              file: 'png',
            },
            {
              name: 'index.html',
              file: 'html',
            },
          ],
        },
        {
          name: '.gitignore',
          file: 'txt',
        },
        {
          name: 'babel.config.js',
          file: 'js',
        },
        {
          name: 'package.json',
          file: 'json',
        },
        {
          name: 'README.md',
          file: 'md',
        },
        {
          name: 'vue.config.js',
          file: 'js',
        },
        {
          name: 'yarn.lock',
          file: 'txt',
        },
      ],





    };
  },
};
</script>