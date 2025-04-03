<template>
    <ion-page>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button text="" default-href="/startup"></ion-back-button>
            </ion-buttons>
          </ion-toolbar>
      <ion-content :fullscreen="true" class="background">
        <div class="page content">
          <div class="logo-title-container">
            <img :src="logo" alt="Full Port Bank Logo" class="logo"/>
            <div class="title-container">
              <span class="title-line">Full Port</span>
              <span class="title-line">Bank</span>
            </div>
          </div>
            <ion-card-header class="aligned-content">
                <ion-card-title>Great! <br> Complete a few more steps to open an account.</ion-card-title>
            </ion-card-header>
            <div class="button-container">
              <ion-button expand="block" shape="round" size="large" @click="goRegister">Register</ion-button>
            </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import {arrowBack } from 'ionicons/icons';
  import logo from "@/assets/imgs/logo.png";

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

  const icons = {
    arrowBack
  }
  import { useRouter } from "vue-router";
  const router = useRouter(); 
  
  const goRegister = () => {
  router.push("/register"); //last
  }

</script>
  
  <style scoped>
  .background {
    --background: linear-gradient(to top, #5C55C9, white 40%);
    height: 100%;
    width: 100%;
  }

  .page-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%; 
  padding: 20px;
  }

  ion-toolbar {
    --background: transparent;
    color: #292966;
  }

  .logo-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%; 
  margin-top: -20px;
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

  .aligned-content {
    padding: 0;
    width: 100%;
    justify-self: center;
  }

  ion-card-title{
    color: #292966;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: left; 
    margin-bottom: 1rem;
    text-align: center;
    margin-top: 120px;
    padding-left: 12%;
    padding-right: 12%;
  }


  ion-button {
  width: 90%;
  font-size: large;
  margin-top: 75%;
  padding: 20px;
  margin-bottom: 10%;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  </style>
  