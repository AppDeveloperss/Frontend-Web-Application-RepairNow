import {createRouter,createWebHistory} from "vue-router"

import Login from '../views/shared/general-login.vue'
import Register from '../views/shared/general-register.vue'
import RegisterClient from '../components/client/General/client-register.vue'
import RegisterTechnician from '../components/technician/General/technician-register.vue'

const routes = [
    { 
        path: '/',
        component: Login
     },
     {
         path: '/login',
         name: 'login',
         component: Login
     },
     {
         path: '/register',
         name:'register',
         component: Register
     },
     {
         path: '/registerclient',
         name: 'register-client',
         component: RegisterClient
     },
     {
         path: '/registertechnician',
         name:'register-technician',
         component: RegisterTechnician
     },
     {
         path: '/client/:id',
         name:'client',
         component: ()=>import('../components/client/Layout/ClientLayout.vue'),
            children:[
                {
                path:'',
                redirect:{name:'myappliance'}
                },
               {
                  path:'myappliance',
                  name:'myappliance',
                  component: ()=>import('../views/Client/client-my-appliance.vue'),
               },
               {
                  path:'myplan',
                  name:'myplan',
                  component: ()=>import('../views/Client/client-my-plan.vue')
               },
               {
                  path:'appointment',
                  name:'client-appointment',
                  component: ()=>import('../views/Client/client-appointments.vue')
               },
               {
                  path:'profile',
                  name:'client-profile',
                  component: ()=>import('../views/Client/client-profile.vue'),
                  props:(route)=>{
                     const id=Number(route.params.id)
                     return isNaN(id) ? {id:1}:{id:id}
                  }
               },
            ]
      },
      {
         path: '/technician/:id',
         name:'technician',
         component: ()=>import('../components/technician/Layout/TechnicianLayout.vue'),
            children:[
              {
                path:'',
                redirect:{name:'technician-profile'}
              },
               {
                 path:'profile',
                 name:'technician-profile',
                 component: ()=>import('../views/technician/technician-profile.vue'),
                 props:(route)=>{
                   const id=Number(route.params.id)
                   return isNaN(id) ? {id:1}:{id:id}
                 }
               },
               {
                  path:'myreports',
                  name:'myreports',
                  component: ()=>import('../views/technician/technician-my-reports.vue')
               },
               {
                 path:'myroutes',
                 name:'myroutes',
                 component: ()=>import('../views/technician/technician-my-routes.vue')
               },
            ]
      }
]

const history=createWebHistory()

const router= createRouter({
    history,
    routes    
})

export default router