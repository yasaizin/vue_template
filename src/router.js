import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Skill from '@/views/Skill.vue'
import Works from '@/views/Works.vue'
import Contact from '@/views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
		{
			path: '/home',
			name: 'home-2',
			component: Home,
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile,
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill,
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
		},
  ]
})
