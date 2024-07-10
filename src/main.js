import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faGithub, faHouse, faUser, faBars)
// import components
import TheMainPage from './components/layout/TheMainPage.vue'

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', redirect:'/blog' },
        { path:'/blog' , component: TheMainPage, name: 'blog-page' },
        { path:'/blog/:blogId' , component: TheMainPage, name:'content-page', props:true },
    ]
})
app.use(router)


app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
