<template>
  <div class="app">
    <div class="toolbar">
      <Navigation/>
      <Loginbar/>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./assets/main.css";
import Loginbar from "./components/Loginbar";
import Articles from "./components/Articles";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

export default {
  name: "App",
  components: { Loginbar, Articles, Navigation, Profile }
};
</script>

<style>
/* no local stypes defined */
</style>
