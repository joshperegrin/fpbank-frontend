import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'
import StartupPage from '../views/StartupPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/startup'
  },
  {
    path: '/startup',
    component: StartupPage
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/otp',
    component: () => import('@/views/enterOTPpage.vue')
  }, 
  {
   path: '/loginBio',
   component: () => import('@/views/LoginBiometrics.vue')
  }, 
  {
  path: '/credentials',
  component: () => import('@/views/EnterCredentials.vue')
 }, 
 {
 path: '/openAccount',
 component: () => import('@/views/OpenAccount.vue')
 },
 {
  path: '/imAFilipino',
  component: () => import('@/views/imAFilipino.vue')
 },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue')
      },
      {
        path: 'componentslibrarysample',
        component: () => import('@/views/ComponentLibrarySample.vue')
      }
    ]
  }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
