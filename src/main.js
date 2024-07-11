import { createApp } from 'vue'
import { createRouter,createWebHashHistory,createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Icons from './fontAwesomeIcons'
const icons =  new Icons()
// import components
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TheMainPage from './components/layout/TheMainPage.vue'
import TheContentPage from './components/layout/TheContentPage.vue'
const app = createApp(App)
const router = createRouter({
    history:createWebHashHistory(),
    routes: [
        { path:'/', redirect:'/blog' },
        { path:'/blog' , component: TheMainPage, name: 'blog-page' },
        { path:'/blog/:blogId' , component: TheContentPage, name:'content-page', props:true },
    ]
})
app.use(router)


app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
