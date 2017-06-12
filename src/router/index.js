import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import cont from '@/components/cont'
import theme from '@/components/theme'
import like from '@/components/like'
Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'Hello',
	    component: Hello,
	    props:true
    },
    {
    	path:'/cont',
    	component:cont
    },
    {
      path:'/theme',
      component:theme
    },
    {
      path:'/like',
      component:like
    }
  ]
})
