import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Operation from "../views/Operation.vue"

import Index from "../components/Operation/Index.vue";
import Create from "../components/Operation/Create.vue";
import Edit from "../components/Operation/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  
  {
    path: "/about",
    name: "About",
    component: About
  },
  
  {
    path: "/Operation",
    name: "Operation",
    component: Operation,
    children:[
    {
      path: "/index",
      name: "Index",
      component: Index
    },
    {
      path: "/create",
      name: "Create",
      component: Create
    },
    {
      path: "/edit",
      name: "Edit",
      component: Edit
    }
  ]
}
];

const router = new VueRouter({
  routes
});

export default router;
