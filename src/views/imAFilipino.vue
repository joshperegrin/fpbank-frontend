<template>
    <ion-page>
      <ion-content :fullscreen="true" class="background no-scroll">
        <div class="container">
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button text="" default-href="/startup"></ion-back-button>
            </ion-buttons>
          </ion-toolbar>
          <div class="logo-title-container">
            <img :src="logo" alt="Full Port Bank Logo" class="logo"/>
            <div class="title-container">
              <span class="title-line">Full Port</span>
              <span class="title-line">Bank</span>
            </div>
          </div>
              <ion-card-title>Great! <br> Complete a few more steps to open an account.</ion-card-title>
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
    display: flex; 
    flex-direction: column; 
    height: 100vh;
    overflow: hidden; 
  }

  .no-scroll {
    overflow: hidden !important;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%; 
    padding: 16px;
    box-sizing: border-box;
  }

  ion-toolbar {
    --background: transparent;
    color: #292966;
  }

  .logo-title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
 }

  .logo {
    width: 15%; 
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

  ion-card-title{
    color: #292966;
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center; 
    margin-bottom: 1rem;
    margin-top: 35px;
    width: 100%;
    align-items: center;
    flex-grow: 1;
    padding: 18px;
  }

  .button-container {
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 10%;
  }

  ion-button {
    width: 90%;
    font-size: large;
    padding: 10px;
  }
</style>
  