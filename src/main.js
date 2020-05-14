import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import ServiceMock from "./service/mock";
import Articles from "./components/Articles";
import Profile from "./components/Profile";
import Help from "./components/Help";
import Home from "./components/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faNewspaper,
  faSignOutAlt,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressBook,
  faQuestionCircle
} from "@fortawesome/free-regular-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(
  faSignOutAlt,
  faSignInAlt,
  faNewspaper,
  faAddressBook,
  faQuestionCircle
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  {
    path: "/profile",
    component: Profile,
    name: "profile"
  },
  {
    path: "/help",
    component: Help,
    name: "help"
  },
  {
    path: "/articles",
    component: Articles,
    name: "articles"
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
