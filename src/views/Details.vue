<template>
  <div id="home">
    <v-img dark max-height="250px" :src="image" :lazy-src="image">
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
                {{ title }}
              </div>
              <div
                :class="{
                  headline: $vuetify.breakpoint.smAndUp,
                  'subtitle-1': $vuetify.breakpoint.smAndDown,
                }"
              >
                {{ description }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    <!--
    <v-layout fill-height align-center>
      <v-container>
        <div>
          {{ $route.params.id }}
        </div>
      </v-container>
    </v-layout>
-->
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-img dark :src="image" :lazy-src="image"></v-img>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <p class="display-1 mb-0">{{ full_name }}</p> 
            <v-card-actions class="pa-0"> 
              <p class="headline font-weight-light pt-3">{{ language }}</p>
              <v-spacer></v-spacer>
              
            <!--  <p  v-if="item.has_pages" class="headline font-weight-light pt-3">{{ language }}</p> -->
           

            </v-card-actions>
             <v-divider inset class="mt-6 mx-4"></v-divider>
              <v-card-text>
               <!--  <div> -->
                <v-chip  v-if="raw.has_pages" small link :href="raw.homepage" target="_blank" text-color="white" color="lime accent-2"  class="mr-2"   > 
                <v-icon left>mdi-fire</v-icon> Website 
                </v-chip>
              <!--  </div> -->
                 <v-chip small link :href="raw.html_url" target="_blank" text-color="white" color="lime accent-2"  class="mr-2"   > 
                <v-icon left>mdi-github-box</v-icon> GitHub 
                </v-chip> 
               

                
              </v-card-text>
               <v-divider inset class="mt-6 mx-4"></v-divider>
                 <v-card-text>
                     <v-chip small link :href="raw.owner.html_url" target="_blank" text-color="white" color="lime accent-2"  class="mr-2"   > 
               <v-avatar left>
              <v-img :src="raw.owner.avatar_url"></v-img>
            </v-avatar>{{ raw.owner.login }} 
                </v-chip> 
                 </v-card-text>
            <p class="subtitle-1 font-weight-thin">
              {{ description }}
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs color="light-blue darken-1">
            <v-tab>Project Owner</v-tab>
            <v-tab>License</v-tab>
            <v-tab>Raw Json</v-tab>
            <v-tab-item>
<!--
               <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                Marcus Obrien
              </v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
-->
              <p class="pt-10 subtitle-1 font-weight-thin">
              <pre> <code  class="prettyprint">{{ owner }}</code></pre>

              <pre> {{JSON.stringify(owner , null, 2)}} </pre>
              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
                <pre><code class="prettyprint"> {{license}}</code></pre>
              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
               <pre> <code class="prettyprint"> {{raw}} </code></pre>
              </p>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </v-container>
  </div>
</template>








<script>
import { mdiFlaskOutline } from "@mdi/js";

export default {
  name: "detail",
  components: {
    mdiFlaskOutline,
  },
  methods: {
    fetchRandomPhoto() {
      fetch(this.url + `?client_id=${this.accesKey}&collections=18366804`)
        .then((response) => response.json())
        .then((json) => {
          this.images = json.urls.full;
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
      id: this.$route.params.id,
      image: this.$route.params.image,
      language: this.$route.params.language,
      title: this.$route.params.title,
      description: this.$route.params.description,
      full_name: this.$route.params.full_name,
      owner: this.$route.params.owner,
      license: this.$route.params.license,
      homepage: this.$route.params.homepage,
      raw: this.$route.params.raw,
      images: "",
      accesKey: "WYHJjtTeIfJL1BE7t1hlmvEq_2n5a044Wln3hx_O97g",
      url: "https://api.unsplash.com/photos/random",
    };
  },
};
</script>