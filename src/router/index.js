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
    component: () => import('@/views/EnterOTPPage.vue')
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
  path: '/register',
  component: () => import('@/views/RegisterInformation.vue')
},
{
  path: '/uploadID',
  component: () => import('@/views/uploadID.vue')
},
{
  path: '/enterPW',
  component: () => import('@/views/EnterPassword.vue')
},
{
  path: '/number',
  component: () => import('@/views/number.vue')
},
{
  path: '/otpnum',
  component: () => import('@/views/OTPnumber.vue')
},
{
  path: '/bioSetup',
  component: () => import('@/views/biometricSetup.vue')
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  }
})

export default router
