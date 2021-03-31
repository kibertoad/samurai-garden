import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import component from "*.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true
  },
    //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
    //catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
