const Home = () => import(/* webpackChunkName: "pages-home" */ './Home.vue')

export const routes = [
  {
    path: '/',
    component: Home,
    meta: { auth: false }
  }
]
