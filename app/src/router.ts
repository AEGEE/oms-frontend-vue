import Vue from "vue";
import VueRouter from "vue-router";
import HelloComponent from "./components/Hello.vue";
import UserInfoComponent from "./components/CardUserInfo.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";
import CardEvent from "./components/CardEvent.vue"
import Login from "./components/Login.vue"
import BaseCardsDisplay from "./components/BaseCardsDisplay.vue";

Vue.use(VueRouter);
let cards = [
  { title: "Welcome!", content: "This is the new WIP frontend for OMS based on cards, build with VueJS.", date: "now"},
  { title: "Title 2", content: "This is some more content", date: "tomorrow"}
];
const routes = [
  { path: '/login', component: Login },
  { path: '/info', component: UserInfoComponent },
  { path: '/cards', component: BaseCardsDisplay, props: { initialCards: cards } },
  { path: '*', component: HelloComponent, props: { initialEnthusiasm: 5 } }
]


const router = new VueRouter({ routes });

router.beforeEach((to:any, from:any, next:any) => {
  console.log(from.fullPath, to.fullPath);
  if (to.fullPath === '/login' || from.fullPath === '/login') {
    return next();
  }

  const token = window.localStorage.getItem('token');
  if (!token) {
    return next('/login')
  }
  return next();
});

export default router;
