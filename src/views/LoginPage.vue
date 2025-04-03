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
            <div class="inputarea">
                <ion-card-header class="aligned-content">
                    <ion-card-title>Enter your account number</ion-card-title>
                </ion-card-header>
                <ion-input
                    fill="outline"
                    placeholder="xxxx xxxx xxxx xxxx"
                ></ion-input>
                <ion-card-subtitle @click="goToCredentials">Forgot my account number</ion-card-subtitle>
            </div>
            <div class="button-container">
              <ion-button expand="block" shape="round" size="large" @click="goToOTP">Next</ion-button>
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
  
  const goToOTP = () => {
  router.push("/otp"); //last
  }

  const goToCredentials = () => {
    router.push("/credentials");
  };
</script>
  
  <style scoped>
  .background {
    --background: linear-gradient(to top, #5C55C9, white 60%);
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

  .inputarea{
    margin: 0 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh; 
    padding: 4%;
    margin-top: -60px;
  }

  ion-input {
    --placeholder-color: #292966; 
    text-align: left;
    font-size: large;
    color: #292966;
  }


  .aligned-content {
    padding: 0;
    width: 100%;
  }

  ion-card-title{
    color: #292966;
    font-size: 2rem;
    font-weight: bold;
    text-align: left; 
    margin-bottom: 1rem;
  }

  ion-text-area{
    width: 80%;
    margin-top: 8px;
  }

  ion-card-subtitle {
    color: #292966;
    text-align: left;
    margin-top: 0.5rem;
  }

  ion-button {
  width: 90%;
  font-size: large;
  margin-top: 70%;
  padding: 20px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  </style>
  