import { createRouter, createWebHistory } from 'vue-router'
import store from "../store/index"
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView'
import ProductView from "@/views/ProductView";
import PostDetail from "@/views/PostDetail";
import NotFoundView from "@/views/NotFoundView";
import Logout from "@/views/Logout";
import AddPostView from "@/views/AddPostView";
import EditPost from "@/views/EditPost";

function needAuth(to, from, next){
  if(!store.state.auth) next({name: 'login'})
  else next()
}


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: [needAuth]
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView,
    beforeEnter: [needAuth]
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    beforeEnter: [needAuth]
  },
  {
    path: '/post-detail/:id',
    name: 'post-detail',
    component: PostDetail,
    props: true,
    beforeEnter: [needAuth]
  },
  {
    path: '/post-add',
    name: 'post-add',
    component: AddPostView,
    props: true,
  },
  {
    path: '/post-edit/:id',
    name: 'post-edit',
    component: EditPost,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/:patchMatch(.*)*",
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
