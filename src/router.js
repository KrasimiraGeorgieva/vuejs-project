import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/Welcome";
import HomeLogged from "@/components/home/HomeLogged";
import MyListings from "@/components/home/MyListings";
import Register from "@/components/forms/RegisterForm";
import Login from "@/components/forms/LoginForm";
import Create from "@/components/forms/CreateForm";
import Edit from "@/components/forms/EditForm";
import Details from "@/components/car/DetailsCar";
import Delete from "@/components/car/DeleteCar";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/home-logged",
      name: "homeLogged",
      component: HomeLogged
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/details/:id",
      name: "details",
      component: Details
    },
    {
      path: "/my-listings",
      name: "myListings",
      component: MyListings
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit
    },
    {
      path: "/delete/:id",
      name: "delete",
      component: Delete
    },
  ]
});
