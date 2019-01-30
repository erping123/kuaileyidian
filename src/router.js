import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'  
import GlobalSettings from './views/GlobalSettings.vue'  
import TableList from './views/TableList.vue'  
import TableAdd from './views/TableAdd.vue'  
import TableDelete from './views/TableDelete.vue'  
import CategoryList from './views/CategoryList.vue'  
import CategoryAdd from './views/CategoryAdd.vue'  
import CategoryDelete from './views/CategoryDelete.vue'  
import CategoryUpdate from './views/CategoryUpdate.vue'  
import dishList from './views/dishList.vue'  
import dishAdd from './views/dishAdd.vue'  
import dishDelete from './views/dishDelete.vue'  
import dishUpdate from './views/dishUpdate.vue'  
import orderList from './views/orderList.vue'  
import Security from './views/Security.vue'  

Vue.use(Router)

export default new Router({
  routes: [
   {path:'/',redirect:'/login'},
   {path:'/login',component:Login},
   {path:'/main',component:Main,
        children:[
          {path:'',redirect:'/table/list'},
          {path:'/settings',component:GlobalSettings},
          {path:'/table/list',component:TableList},
          {path:'/table/add',component:TableAdd},
          {path:'/table/delete',component:TableDelete},
          {path:'/category/list',component:CategoryList},
          {path:'/category/add',component:CategoryAdd},
          {path:'/category/delete',component:CategoryDelete},
          {path:'/category/update',component:CategoryUpdate},
          {path:'/dish/list',component:dishList},
          {path:'/dish/add',component:dishAdd},
          {path:'/dish/delete',component:dishDelete},
          {path:'/dish/update',component:dishUpdate},
          {path:'/order/list',component:orderList},
          {path:'/security',component:Security}
        ]
   },
   {path:'*',component:NotFound},
  ]
})
