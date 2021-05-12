

<template>
  <div class="NotFound">

 <v-img
      dark
      max-height="700px"
      src="https://images.unsplash.com/photo-1579558449515-e0f596d7c5c4?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258MXxmZjEzWVg3TlJDWXx8fHx8Mnx8MTYyMDY3NDYwMg&ixlib=rb-1.2.1"
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
                Page not found.
              </div>
              <div
                :class="{
                  headline: $vuetify.breakpoint.smAndUp,
                  'subtitle-1': $vuetify.breakpoint.smAndDown,
                }"
              >
                OOPS...
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>

    <v-container align-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="400" color="transparent" flat>
            <div class="display-3 mt-5">Page not found.</div>
            <div class="grey--text lighten-5">
              The page you are trying to get to never existed in this reality,
              or has migrated to a parallel universe.
            </div>
            <div class="paragraph-text mt-2">
              <br />
              <br />Try going back to home page and repeating your action. Or,
              contact helpdesk for support.
              <br />We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at joaosilgo96@gmail.com
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>



<script>
export default {
  name: "NotFound",
  data() {
    return {
      items: [],
    };
  },
};
</script>