import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello' //主页
import cont from '@/components/cont'  //文章内容页
import me from '@/components/me'
import themes from '@/components/themes'//主题列表页
import theme from '@/components/theme' //主题详情页
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/cont',
      name:'cont',
      component:cont
    },
    {
      path:'/me',
      name:'me',
      component:me
    },
    {
      path:'/themes',
      name:'themes',
      component:themes
    },
    {
      path:'/theme',
      name:theme,
      component:theme
    }
  ]
})
