import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import asd from '@/components/asd'
import newproject from '@/components/newproject'
import profile from '@/components/profile'
import write_post from '@/components/write_post'
import board from '@/components/board'
import read_post from '@/components/read_post'
import ManagementBoard from '@/components/ManagementBoard'
import notice from '@/components/notice'
import qna from '@/components/qna'
import suggestions from '@/components/suggestions'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/asd',
      name: 'asd',
      component: asd
    },{
      path: '/newproject',
      name: 'newproject',
      component: newproject
    },{
      path: '/profile',
      name:'profile',
      component: profile
    },{
      path: '/write_post',
      name:'write_post',
      component: write_post
    },{
      path: '/board',
      name:'board',
      component: board
    },{
      path: '/read_post',
      name:'read_post',
      component: read_post
    },{
      path: '/ManagementBoard',
      name:'ManagementBoard',
      component: ManagementBoard
    },{
      path: '/notice',
      name:'notice',
      component: notice
    },{
      path: '/qna',
      name:'qna',
      component: qna
    },{
      path: '/suggestions',
      name:'suggestions',
      component: suggestions
    },
  ]
})
