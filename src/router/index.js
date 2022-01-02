import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
routes: [
{path: '/', name: 'Home', component: Home },
{path: "/edu-app", name: "eduApp", component: ()=> import('../pages/ComingSoon.vue') },
{path: "/shree-eyes", name: "ShreeEyes", component: ()=> import('../pages/ComingSoon.vue') },
{path: "/shree-eyes-web", name: "ShreeEyesWeb", component: ()=> import('../pages/ComingSoon.vue') },
{path: "/shree-chat-app", name: "ShreeChatApp", component: ()=> import('../pages/ComingSoon.vue') },
{path: "*", name: "PageNotFound", component: PageNotFound }
]
})
