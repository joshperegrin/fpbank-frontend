<template>
    <ion-page>
      <ion-content :fullscreen="true" class="background">
        <div class="page content">
          <div class="logo-title-container">
            <img :src="logo" alt="Full Port Bank Logo" class="logo"/>
            <div class="title-container">
              <span class="title-line">Full Port</span>
              <span class="title-line">Bank</span>
            </div>
          </div>
            <div class="profile-area">
              <ion-avatar>
                <img :src="avatar_src"/>
              </ion-avatar>
              <ion-card-title>Hello, Washing Machine!</ion-card-title>
            </div>
            <div class="input-area">
              <ion-icon :icon="bagCheckOutline" size="large" class="input-icon"></ion-icon>
              <ion-input type="password" value="ilyeric">
                <ion-input-password-toggle slot="end"></ion-input-password-toggle>
              </ion-input>
            </div>
            <div class="button-container">
                <ion-button expand="block" size="large" @click="goToTabs">Login</ion-button>
            </div>
            <div class="biometrics-container">
              <ion-icon :icon="personCircleOutline" style="font-size: 48px;" @click="login"></ion-icon>
              <ion-card-subtitle>Click to unlock with Face ID</ion-card-subtitle>
            </div>
            <div class="quick-balance-container">
              <ion-icon :icon="cashOutline" class="quick-balance-icon" @click="showQuickBalance = true"></ion-icon>
              <span class="quick-balance-text" @click="showQuickBalance = true">Quick Balance</span>
            </div>
        </div>
        <div v-if="showOverlay" class="overlay">
          <div class="scanner">
            <ion-icon :icon="personCircleOutline" class="scanner-icon"></ion-icon>
            <ion-card-subtitle class="overlay-subtitle">Scanning your face...</ion-card-subtitle>
          </div>
        </div>
        <div v-if="showQuickBalance" class="quick-balance-overlay" @click.self="showQuickBalance = false">
          <div class="quick-balance-content">
            <div class="quick-balance-header">
              <h2>Quick Balance</h2>
            </div>
            <div class="account-list">
              <div class="account-item" v-for="account in accounts" :key="account.id">
                <div>
                  <p>{{ account.type }}</p>
                  <p>{{ account.number }}</p>
                </div>
                <div>
                  <p>Available Balance:</p>
                  <p>{{ account.balance }} PHP</p>
                </div>
              </div>
            </div>
            <div class="total-balance">
              <p>Total: {{ totalBalance }} PHP</p>
            </div>
          </div>
        </div>
        <div class="collapsible-container" @click="toggleCollapsible">
          <ion-icon :icon="chevronIcon" class="collapsible-icon"></ion-icon>
        </div>
        <div v-if="isCollapsibleOpen" class="collapsible-overlay" @click.self="isCollapsibleOpen = false">
          <div class="collapsible-content">
            <div class="collapsible-grid">
              <div class="collapsible-card" v-for="item in collapsibleItems" :key="item.title">
                <ion-icon :icon="item.icon" class="card-icon"></ion-icon>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>

<script setup>
  import logo from "@/assets/imgs/logo.png";
  import avatar_src from "@/assets/imgs/angry.jpg";
  import {bagCheckOutline, personCircleOutline, cashOutline, chevronUpOutline, chevronDownOutline, helpCircleOutline, cardOutline, mailOutline, informationCircleOutline, megaphoneOutline} from 'ionicons/icons';
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
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonButtons,
    IonBackButton,
  } from "@ionic/vue";

  const icon ={
    bagCheckOutline,
    personCircleOutline,
    cashOutline
  }

  import { useRouter } from "vue-router";
  import { ref, computed } from "vue";
  
  const router = useRouter();
  
  const goToTabs = () => {
    router.push("/tabs");
  };
  const showOverlay = ref(false);

  const login = () => {
    showOverlay.value = true;
    setTimeout(() => {
      showOverlay.value = false;
      router.push("/tabs");
    }, 2000);
  };

  const showQuickBalance = ref(false);

  const accounts = ref([
    { id: 1, type: "Savings Account", number: "002376543210", balance: "45,000.00" },
    { id: 2, type: "Checking Account", number: "002376543211", balance: "69,420.21" },
    { id: 3, type: "Investment Account", number: "002376543212", balance: "6,020.00" },
    { id: 4, type: "Company Account", number: "002376543213", balance: "250,300.00" },
  ]);

  const totalBalance = computed(() => {
    return accounts.value
      .reduce((total, account) => total + parseFloat(account.balance.replace(/,/g, "")), 0)
      .toLocaleString("en-US", { minimumFractionDigits: 2 });
  });

  const isCollapsibleOpen = ref(false);

  const toggleCollapsible = () => {
    isCollapsibleOpen.value = !isCollapsibleOpen.value;
  };

  const chevronIcon = computed(() =>
    isCollapsibleOpen.value ? chevronDownOutline : chevronUpOutline
  );

  const collapsibleItems = ref([
    { icon: helpCircleOutline, title: "FAQs", description: "View frequently asked questions to answer your query" },
    { icon: cardOutline, title: "Cash Card Inquiry", description: "View the balance and transaction history of your Cash card Account" },
    { icon: mailOutline, title: "Contact Us", description: "Contact information" },
    { icon: informationCircleOutline, title: "Information", description: "Other Full Port Bank information" },
    { icon: megaphoneOutline, title: "What's New?", description: "Recent updates, new features, and functionalities" },
  ]);
  
</script>
<style scoped>
  .background {
    --background: linear-gradient(to top, #5C55C9, white 70%);
    height: 100%;
    width: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; 
    padding: 16px;
    text-align: center;
  }

  .logo-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%; 
  margin-top: 40px;
  }

  .logo {
  width: 60px; 
  height: auto;
  }

  .title-container {
  display: flex;
  flex-direction: column;
  text-align: left;
  }

  .title-line {
  font-size: 1.5rem;
  font-weight:800;
  color: #292966;
  font-style: italic;
  line-height: 1;
  }

  .profile-area{
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    gap: 15px;
  }

  ion-avatar {
    box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
    height: 60px;
    width: 60px;
    align-items: center;
  }

  ion-card-title{
    color: #292966;
    font-weight: bold;
    font-size:medium;
  }

  .input-area {
    position: relative;
    margin: 0 16px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    padding: 1%;
    background: white; 
    border-radius: 4px; 
    border-color: #292966;
    border: solid 1px #292966;
  }

  .input-icon {
    margin-left: 10px; 
    color: #292966;
    pointer-events: none; 
  }

  ion-input {
    flex: 1;
    font-size: large;
    color: #292966;
    margin-left: 10px; 
    text-align: left;
  }

  ion-icon{
    color: #292966;
  }

  .button-container{
    margin-top: -10px;
    text-align: center;
    padding: 3%;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  ion-button {
    width: 100%;
    font-size: large;
  }

  .biometrics-container{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: -1%;
    gap: 5px;
  }

  ion-card-subtitle{
    color: #292966;
    font-size: medium;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  overlay-subtitle {
    color: white;
    font-size: 24px;
    margin-top: 16px;
  }

  .scanner {
    text-align: center;
    color: white;
  }

  .scanner-icon {
    font-size: 64px;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  .quick-balance-container {
    margin-top: 300px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .quick-balance-icon {
    font-size: 24px;
    color: #ffffff;
    cursor: pointer;
  }

  .quick-balance-text {
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
  }

  .quick-balance-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Ensure the overlay covers the entire screen */
    background: rgba(0, 0, 0, 0.7); /* Add a semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: flex-end; /* Align the content to the bottom */
    z-index: 1000;
  }

  .quick-balance-content {
    background: #292966;
    color: white;
    width: 100%;
    height: 600px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    padding: 16px;
    animation: slide-up 0.3s ease-out;
  }

  .quick-balance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .quick-balance-header h2 {
    margin: 0;
    font-size: 1.5rem;
  }


  .account-list {
    margin-bottom: 16px;
  }

  .account-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .account-item:last-child {
    border-bottom: none;
  }

  .total-balance {
    text-align: right;
    font-weight: bold;
    font-size: 1.2rem;
  }

  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  .collapsible-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #292966;
    color: white;
    text-align: center;
    padding: 8px 0;
    cursor: pointer;
    z-index: 1000;
  }

  .collapsible-icon {
    font-size: 24px;
    color: white;
  }

  .collapsible-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Ensure the overlay covers the entire screen */
    background: rgba(0, 0, 0, 0.7); /* Add a semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: flex-end; /* Align the content to the bottom */
    z-index: 1000;
  }

  .collapsible-content {
    background: #292966;
    color: white;
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    padding: 16px;
    animation: slide-up 0.3s ease-out;
  }

  .collapsible-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .collapsible-card {
    background: white;
    color: #292966;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .card-icon {
    font-size: 32px;
    color: #292966;
    margin-bottom: 8px;
  }

  .collapsible-card h3 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 8px;
  }

  .collapsible-card p {
    font-size: 0.875rem;
    margin: 0;
  }
</style>