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
                Work Page.
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

    <div class="block latestPostBlock">
      <v-container>
        <h2 class="text-center">Projects</h2>
        <v-row>
          <v-col v-for="item in item" :key="item.id" cols="12" sm="3">
            <v-card outlined class="mx-auto">
              <!-- <v-img class="white--text align-end" height="200px" :src="item.src"> -->
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1"
              >
                <v-card-title>{{ item.name }}</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">{{
                item.language
              }}</v-card-subtitle>
              <v-card-text class="text--primary">
                <!--  <div>{{ item.description }}</div> -->
              </v-card-text>
              <v-card-actions>
                <!-- <v-btn color="primary" text>More</v-btn> -->
                <v-btn
                  :to="{
                    name: 'Details',
                    params: {
                      id: item.id,
                      image:
                        'https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1',
                      title: item.name,
                      language: item.language,
                      description: item.description,
                      full_name: item.full_name,
                      owner: item.owner,
                      license: item.license,
                      raw: item,
                    },
                  }"
                  color="light-blue darken-1"
                  elevation="2"
                  medium
                  rounded
                  text
                  >More</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "work",
  components: {
    // HelloWorld,
  },
  methods: {
    fetchData() {
      axios
        .get(this.url)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.item = response.data;
        })
        .catch((e) => {
          console.log("error", err);
        });
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },
  data: () => ({
    url: "https://api.github.com/users/JoaoSilgo/repos?per_page=100",

    item: [],
  }),
};
</script>