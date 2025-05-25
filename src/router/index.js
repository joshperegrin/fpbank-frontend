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
//{
  //path: '/number',
  //component: () => import('@/views/number.vue')
//},
//{
  //path: '/otpnum',
  //component: () => import('@/views/OTPnumber.vue')
//},
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
      },
      {
        path: '/manage-accounts',
        component: () => import('@/views/ManageMyAccount.vue') 
      },
      {
      path: '/settings',
      component: () => import('@/views/Settings.vue') 
      },
      {
      path: '/personal-info',
      component: () => import('@/views/PersonalInfo.vue') 
      },
      {
      path: '/contact-us',
      component: () => import('@/views/ContactUs.vue') 
      },
    ]
  },
  {
    path: '/portfolio',
    component: () => import('@/views/PortfolioPage.vue')
  },
  {
    path: '/registered-devices',
    component: () => import('@/views/RegisteredDevices.vue')
    },
  {
    path: '/change-password',
    component: () => import('@/views/ChangePassword.vue')
    },
  {
    path: '/request-physical-card',
    component: () => import('@/views/RequestPhysicalCard.vue')
    },
  {
    path: '/card',
    component: () => import('@/views/Card.vue')
    },  
  {
    path: '/request-physical-card2',
    component: () => import('@/views/RequestPhysicalCard2.vue')
  },  
  {
    path: '/tabs/tab2/transfer/external',
    component: () => import('@/views/TransferPage01.vue')
  },
  {
    path: '/tabs/tab2/transfer/external/destinationSelect',
    component: () => import('@/views/TransferPage02.vue')
  },
  {
    path: '/tabs/tab2/transfer/external/destinationSelect/bankSelect',
    component: () => import('@/views/TransferPage03.vue')
  },
  {
    path: '/tabs/tab2/transfer/external/transferChannel',
    component: () => import('@/views/TransferPage04.vue')
  },
  {
    path: '/tabs/tab2/transfer/external/confirmation',
    component: () => import('@/views/TransferPage05.vue')
  },
  {
    path: '/tabs/tab2/transfer/external/transferResult',
    component: () => import('@/views/TransferPage06.vue')
  },
  {
    path: '/tabs/tab2/transfer/internal',
    component: () => import('@/views/InternalTransfer01.vue')
  },
  {
    path: '/tabs/tab2/transfer/internal/destinationSelect',
    component: () => import('@/views/InternalTransfer02.vue')
  },
  {
    path: '/tabs/tab2/transfer/internal/confirmation',
    component: () => import('@/views/InternalTransfer03.vue')
  },
  {
    path: '/tabs/tab2/transfer/internal/transferResult',
    component: () => import('@/views/InternalTransfer04.vue')
  },
  {
    path: '/tabs/tab2/transfer/bills',
    component: () => import('@/views/PayBills01.vue')
  },
  {
    path: '/tabs/tab2/transfer/bills/destinationSelect',
    component: () => import('@/views/PayBills02.vue')
  },
  {
    path: '/tabs/tab2/transfer/bills/destinationSelect/billerSelect',
    component: () => import('@/views/PayBills03.vue')
  },
  {
    path: '/tabs/tab2/transfer/bills/confirmation',
    component: () => import('@/views/PayBills04.vue')
  },
  {
    path: '/tabs/tab2/transfer/bills/transferResult',
    component: () => import('@/views/PayBills05.vue')
  },
  {
    path: '/tabs/tab2/transfer/ewallet',
    component: () => import('@/views/LoadEWallet01.vue')
  },
  {
    path: '/tabs/tab2/transfer/ewallet/destinationSelect',
    component: () => import('@/views/LoadEWallet02.vue')
  },
  {
    path: '/tabs/tab2/transfer/ewallet/destinationSelect/ewalletSelect',
    component: () => import('@/views/LoadEWallet03.vue')
  },
  {
    path: '/tabs/tab2/transfer/ewallet/confirmation',
    component: () => import('@/views/LoadEWallet04.vue')
  },
  {
    path: '/tabs/tab2/transfer/ewallet/transferResult',
    component: () => import('@/views/LoadEWallet05.vue')
  },
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
