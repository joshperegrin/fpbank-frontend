import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
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
  },
  {
    path: '/tabs/tab2/transfer/:transfertype',
    component: () => import('@/views/TransferPage01.vue')
  },
  {
    path: '/tabs/tab2/transfer/:transfertype/destinationSelect',
    component: () => import('@/views/TransferPage02.vue')
  },
  {
    path: '/tabs/tab2/transfer/:transfertype/destinationSelect/bankSelect',
    component: () => import('@/views/TransferPage03.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
