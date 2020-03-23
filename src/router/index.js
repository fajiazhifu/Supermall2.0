import Vue from 'vue'
import VueRouter  from 'vue-router'


Vue.use(VueRouter)

const Home= () =>import("../view/home/Home")
const Category= () =>import("../view/category/Category")
const Cart= () =>import("../view/cart/Cart")
const Profile= () =>import("../view/profile/Profile")
const Detail= () =>import("../view/detail/Detail")
const  routes=[
  {
    path:'',
    redirect:'home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/Category',
    component:Category
  },
  {
    path: '/Cart',
    component:Cart
  },
  {
    path: '/Profile',
    component:Profile
  },
  {
    path:'/detail',
    component:Detail
  },
]

const router=new VueRouter({
  routes,
  mode:'history',
})

export default router