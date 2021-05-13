<!--  
<template>
  <v-app color="Black" id="app">
    <p-toolbar />
    <v-content style="background-color: white">
    
     <router-link to="/">Home</router-link>|<router-link to="/about"
        >About</router-link
      > 

    <router-view />
    </v-content>
  </v-app >
</template>

<script>
import Toolbar from "./components/Toolbar";
export default {
  name: 'App',
  components: {
   
    Toolbar
    
  }
}

</script>


-->




<template>
  <v-app>
    <!--  <p-toolbar />
    <v-content style="background-color: white">
       <HelloWorld /> 
      <router-view ></router-view>
    </v-content>

      <p-footer />
    -->

    <p-toolbar />


    <router-view></router-view>

    
    <!--   <router-view>
    </router-view> -->
  </v-app>
</template>

<script>
import PToolbar from "./components/PToolbar";
import PFooter from "./components/PFooter";
import Home from "./views/Home";
// import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Home,
    PToolbar,
    PFooter,
  },
  data: () => ({
    //
  }),
};
</script>





<!--
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --linkActiveColor: #41b783;
}
#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--textColor);
  .logo {
    width: 20%;
  }
}
.nav {
  padding: 30px 0 100px 0;
  a {
    font-weight: 500;
    color: var(--textColor);
    margin: 0 5px;
  }
  a.router-link-exact-active {
    color: var(--linkActiveColor);
  }
}
</style>
-->