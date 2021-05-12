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
            </v-card-actions>
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
              <p class="pt-10 subtitle-1 font-weight-thin">
              <pre> <code  class="prettyprint">{{ owner }}</code></pre>
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
export default {
  name: "detail",
  components: {},
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
      raw: this.$route.params.raw,
      images: "",
      accesKey: "WYHJjtTeIfJL1BE7t1hlmvEq_2n5a044Wln3hx_O97g",
      url: "https://api.unsplash.com/photos/random",
    };
  },
};
</script>