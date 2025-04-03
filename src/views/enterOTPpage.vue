<template>
    <ion-page>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/login"></ion-back-button>
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
          <div class="message-area">
            <ion-card-header class="aligned-content">
              <ion-card-title>Enter OTP</ion-card-title>
              <ion-card-subtitle>sent  to your registered number (+63********89)</ion-card-subtitle>
            </ion-card-header>
            <div class="input-container">
              <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
              <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
              <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
              <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
              <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
              <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
            </div>
          </div>
          <div class="button-container">
            <ion-button expand="block" shape="round" size="large" @click="goToTabs">Confirm</ion-button>
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
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonButton,
  } from "@ionic/vue";

  const icon = {
    arrowBack
  }
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const goToTabs = () => {
    router.push("/tabs");
  };
  </script>
  
  <style scoped>
  .background {
    --background: linear-gradient(to top, #5c55c9, white 60%);
    height: 100%;
    width: 100%;
  }
  
  .page-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 16px;

    display: inline-block;
    width: 100%;
    overflow: auto;
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

  .message-area {
    margin: 0 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    padding: 4%;
    margin-top: -66px;
  }

  .aligned-content {
    margin: 0;
    padding: 0;
  }
  
  ion-card-title {
    color: #292966;
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
  }
  
  ion-card-subtitle {
    color: #292966;
    text-align: center;
    text-align: left;
    font-size: medium;
    font-weight: bold;
  }

  ion-input{
    width: 50px;
    text-align:center;
    font-size: x-large;
    color: #292966;
  }

  .input-container{
    width: 100%;
    display: flex;
    gap: 9px;
    justify-content: center;
    margin-top: 16px;
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
  