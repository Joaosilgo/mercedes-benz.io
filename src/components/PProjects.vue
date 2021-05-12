<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Latest Post</h2>
      <v-row>
        <v-col v-for="item in item" :key="item.id" cols="12" md="4">
          <v-card outlined class="mx-auto">
            <!-- <v-img class="white--text align-end" height="200px" :src="item.src"> -->
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1"
            >
              <v-card-title>{{ item.name }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ item.language }}</v-card-subtitle>
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
                    raw: item
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
      <v-container>
      <div v-ripple="{ center: true }" class="text-center">
        <v-btn color="light-blue darken-1" elevation="24" medium rounded text
          >See More Projects</v-btn
        >
      </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LatestPost",
  methods: {
    fetchRepo() {
      /*
      fetch(this.url)
        .then((response) => response.json())
        .then((json) => {
          // this.image = json.urls.full;
          console.log(json);

          this.item = json;
          console.log(this.item);
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
    */
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
    this.fetchRepo();
  },
  data: () => ({
    show: false,
    url: "https://api.github.com/users/JoaoSilgo/repos?per_page=6",

    item: [],
    items: [
      {
        id: 1,
        title: "Top western road trips",
        subtitle: "1,000 miles of wonder",
        description:
          "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
        src:
          "https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1",
      },
      {
        id: 2,
        title: "Christmas tales to read",
        subtitle: "2,000 miles of wonder",
        description:
          "Sea ad habemus assueverit, omnes platonem convenire sit et, at integre pericula quo. Facete adolescens definitionem cu qui, in putant aliquid fierent ius.",
        src:
          "https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1",
      },
      {
        id: 3,
        title: "20 movies not to miss in 2020",
        subtitle: "3,000 miles of wonder",
        description:
          "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
        src:
          "https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1",
      },
      {
        id: 4,
        title: "20 movies not to miss in 2020",
        subtitle: "3,000 miles of wonder",
        description:
          "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
        src:
          "https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1",
      },
      {
        id: 5,
        title: "20 movies not to miss in 2020",
        subtitle: "3,000 miles of wonder",
        description:
          "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
        src:
          "https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1",
      },
      {
        id: 6,
        title: "20 movies not to miss in 2020",
        subtitle: "3,000 miles of wonder",
        description:
          "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
        src:
          "https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1",
      },
    ],
  }),
};
</script>