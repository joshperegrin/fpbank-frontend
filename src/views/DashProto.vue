<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Logo FP Bank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="primary" :fullscreen="true">
      <ion-text class="ion-text-center">
        <h1>Total balance</h1>
        <div class="balance ion-text-center">
          <h2>{{ totalBalance.amount }}</h2>
          <h3>{{ totalBalance.currency }}</h3>
        </div>
      </ion-text>

      <div class="head content-center">
        <div class="savings-scroll">
          <ion-card v-for="(account, index) in savingsAccounts"
                    :key="index"
                    class="accounts-card"
                    @click="goToAccount(account.name)">
            <ion-card-header>
              <ion-card-title class="accounts-title">
                {{ account.name }}
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-card-title>
              <ion-card-subtitle>
                <ion-icon :src="account.bankIcon"></ion-icon>
                {{ account.number }}
              </ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <div class="balance ion-text-center">
                <p>{{ account.balance }}</p>
                <h3>{{ account.currency }}</h3>
              </div>
            </ion-card-content>
          </ion-card>

          <ion-card class="accounts-card create-account-card" @click="createAccount">
            <ion-card-content class="create-account-content">
              <ion-icon :icon="addCircle" class="add-icon"></ion-icon>
              <ion-text>Create account</ion-text>
            </ion-card-content>
          </ion-card>
        </div>
      </div>

      <div class="body content-center">
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

        <ion-card class="credit-card-widget">
          <ion-card-content>
            <div class="card-design">
              <div class="card-header">
                <img :src="cardDetails.logo" alt="Card Logo" class="card-logo" />
                <ion-text>{{ cardDetails.type }}</ion-text>
              </div>
              <div class="card-number">
                <ion-text>{{ formatCardNumber(cardDetails.number) }}</ion-text>
              </div>
              <div class="card-details">
                <div class="card-info">
                  <ion-text class="label">Card Holder</ion-text>
                  <ion-text>{{ cardDetails.name }}</ion-text>
                </div>
                <div class="card-info">
                  <ion-text class="label">Expires</ion-text>
                  <ion-text>{{ cardDetails.expiry }}</ion-text>
                </div>
                <div class="card-info">
                  <ion-text class="label">CVV</ion-text>
                  <ion-text>{{ cardDetails.cvv }}</ion-text>
                </div>
              </div>
            </div>
          </ion-card-content>
        </ion-card>

        <ion-card class="body-widgets">
          <ion-card-header>
            <ion-card-title>Services</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <item-grid :items="services"></item-grid>
          </ion-card-content>
        </ion-card>

        <ion-card class="body-widgets">
          <ion-img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png"/>
          <ion-card-header>
            <ion-card-title>Featured Article</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            FP Bank is now number 1 bank in the world according to the latest survey. Reports of the survey are available in the bank's website.
          </ion-card-content>
          <ion-button fill="clear">FP Bank is number 1</ion-button>
        </ion-card>
      </div>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home Page</ion-title>
        </ion-toolbar>
      </ion-header>
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
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
} from '@ionic/vue';
import { chevronForward, addCircle } from 'ionicons/icons';
import ItemGrid from '@/components/ItemGrid.vue';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    ItemGrid,
  },
  data() {
    return {
      totalBalance: {
        amount: '370,740.21',
        currency: 'PHP',
      },
      savingsAccounts: [
        {
          name: 'Savings DashboardHeader 1',
          number: '002376543210',
          balance: '40,000.10',
          currency: 'PHP',
          bankIcon: 'src/assets/svgs/bank.svg',
        },
        {
          name: 'Savings DashboardHeader 2',
          number: '002376543211',
          balance: '25,500.75',
          currency: 'PHP',
          bankIcon: 'src/assets/svgs/bank.svg',
        },
        {
          name: 'Savings DashboardHeader 3',
          number: '002376543212',
          balance: '15,200.30',
          currency: 'PHP',
          bankIcon: 'src/assets/svgs/bank.svg',
        },
      ],
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
        { name: 'Transfer', icon: 'src/assets/svgs/bank.svg' },
      ],
      cardDetails: {
        type: 'Visa',
        number: '1234567890123456',
        name: 'Juan Dela Cruz',
        expiry: '12/25',
        cvv: '123',
        logo: 'src/assets/svgs/logo.svg', // Example logo path
      },
      services: [
        { name: 'Service 1', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Service 2', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Service 3', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Service 4', icon: 'src/assets/svgs/bank.svg' },
        { name: 'Service 5', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Service 6', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Service 7', avatar: 'src/assets/imgs/angry.jpg' },
        { name: 'Service 8', icon: 'src/assets/svgs/bank.svg' },
      ],
      chevronForward,
      addCircle
    };
  },
  methods: {
    formatCardNumber(number) {
      // Format card number as "XXXX XXXX XXXX XXXX"
      return number.replace(/(\d{4})(?=\d)/g, '$1 ');
    },
    createAccount() {
      // Placeholder for create account logic
      alert('Create account clicked!');
      // You could push a new account to savingsAccounts here, e.g.:
      // this.savingsAccounts.push({ name: 'New DashboardHeader', number: '002376543214', balance: '0.00', currency: 'PHP', bankIcon: 'src/assets/svgs/bank.svg' });
    },
    navigateAccount(){
      alert('DashboardHeader clicked!');
    },
    goToAccount(accountName) {
      alert(`I have gone to ${accountName}`);
    },
  },
};
</script>

<style scoped>
.content-center {
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

.body {
  background-color: var(--ion-color-primary-contrast);
  border-radius: 20px;
}

.accounts-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.savings-scroll {
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  gap: 15px;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  scroll-behavior: smooth; /* Smooth scrolling for desktop */
  scrollbar-width: thin; /* Firefox scrollbar styling */
}

.savings-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}

.accounts-card {
  flex: 0 0 auto;
  width: 30em;
  margin: 0;
  touch-action: pan-x; /* Ensures touch events work for horizontal scrolling */
  cursor: pointer;
}

.create-account-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Light gray background */
  cursor: pointer;
}

.create-account-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.balance {
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
}

.balance h2 {
  font-weight: bold;
  font-size: 2em;
}

.balance h3 {
  margin-left: 0.5em;
  font-size: 0.8em;
}

.credit-card-widget {
  margin: 20px;
  border-radius: 15px;
  background: linear-gradient(135deg, #1e3c72, #2a5298); /* Example gradient */
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-design {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-logo {
  width: 50px;
  height: auto;
}

.card-number {
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.card-details {
  display: flex;
  justify-content: space-between;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.8rem;
  opacity: 0.8;
}
</style>