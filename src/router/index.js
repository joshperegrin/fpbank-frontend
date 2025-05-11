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
        component: () => import('@/views/DashboardPage1.vue')
      },
      {
        path: 'DashboardPage2',
        name: 'dashboard_page_2',
        component: () => import('@/views/DashboardPage2.vue')
      },
      {
        path: 'HistoryPage1',
        name: 'history_page_1',
        component: () => import('@/views/HistoryPage1.vue')
      },
      {
        path: 'HistoryPage2',
        name: 'history_page_2',
        component: () => import('@/views/HistoryPage2.vue')
      },
      {
        path: '/history-page-3/:id',
        name: 'history_page_3',
        component: () => import('@/views/HistoryPage3.vue')
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
  {
    path: '/tabs/tab2/transfer/:transfertype/transferChannel',
    component: () => import('@/views/TransferPage04.vue')
  },
  {
    path: '/tabs/tab2/transfer/:transfertype/confirmation',
    component: () => import('@/views/TransferPage05.vue')
  },
  {
    path: '/tabs/tab2/transfer/:transfertype/transferResult',
    component: () => import('@/views/TransferPage06.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
