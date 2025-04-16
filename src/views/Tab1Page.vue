<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Logo FP Bank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="primary" :fullscreen="true">
      <div class="content-body">
        <Account :account="account" />

        <ion-card class="body-widgets">
          <ion-card-header>
            <ion-card-title>Favorite Accounts</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <item-grid :items="favoriteAccounts"></item-grid>
          </ion-card-content>
        </ion-card>

        <ion-card class="body-widgets">
          <ion-card-header>
            <ion-card-title>Favorite Billers</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <item-grid :items="favoriteBillers"></item-grid>
          </ion-card-content>
        </ion-card>

        <CreditCard :card-details="cardDetails" />

        <ion-card class="body-widgets">
          <ion-card-header>
            <ion-card-title>Services</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <item-grid :items="services"></item-grid>
          </ion-card-content>
        </ion-card>

        <FeaturedArticle />

        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Home Page</ion-title>
          </ion-toolbar>
        </ion-header>
      </div>
    </ion-content>
  </ion-page>
</template>


<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/vue';
import { homeOutline, personOutline, settingsOutline, walletOutline, helpCircleOutline, logOutOutline, searchOutline } from 'ionicons/icons';
import ItemGrid from '@/components/ItemGrid.vue';
import Account from '@/components/DashboardTotalBal.vue';
import SavingsAccounts from '@/components/DashboardSavingsAcc.vue';
import CreditCard from '@/components/DashboardCC.vue';
import FeaturedArticle from '@/components/DashboardArticle.vue';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    ItemGrid,
    Account,
    SavingsAccounts,
    CreditCard,
    FeaturedArticle,
  },
  data() {
    return {
      account: {
        amount: '370,740.21',
        number: '002376543210',
        currency: 'PHP',
        bankIcon: 'src/assets/svgs/bank.svg'
      },
      savingsAccount: {
        name: 'Savings Account 1',
        number: '002376543210',
        balance: '40,000.10',
        currency: 'PHP',
        bankIcon: 'src/assets/svgs/bank.svg',
      },
      favoriteAccounts: [
        { name: 'Juan Dela Cruz', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Catriona Gray', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Refri G. Rator', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Transfer', icon: 'src/assets/svgs/bank.svg' },
      ],
      favoriteBillers: [
        { name: 'Biller 1', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Biller 2', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Biller 3', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Pay Billers', icon: 'src/assets/svgs/bank.svg' },
      ],
      cardDetails: {
        type: 'Visa',
        number: '1234567890123456',
        name: 'Juan Dela Cruz',
        expiry: '12/25',
        cvv: '123',
        logo: 'src/assets/svgs/logo.svg',
      },
      services: [
        { name: 'Service 1', icon: homeOutline },
        { name: 'Service 2', icon: personOutline },
        { name: 'Service 3', icon: settingsOutline },
        { name: 'Service 4', icon: walletOutline },
        { name: 'Service 5', icon: helpCircleOutline },
        { name: 'Service 6', icon: logOutOutline },
        { name: 'Service 7', icon: searchOutline },
        { name: 'Service 8', icon: 'src/assets/svgs/bank.svg' },
      ],
    };
  },
  methods: {
    goToAccount(accountName) {
      //alert(`I have gone to ${accountName}`); Disabled for now. Route using this?
    },
  },
};
</script>

<style scoped>
.content-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
}

ion-card.body-widgets {
  width: 100%;
  border-radius: 20px;
}

.head {
  background-color: var(--ion-color-primary);
  border-radius: 20px;
}

ion-card-title {
  color: var(--ion-color-primary);
}
</style>