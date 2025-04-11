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
          <ion-card-title class="centered-title">Are you a <br>citizen of the Philippines?</ion-card-title>
          <div class="button-container">
            <ion-button expand="block" shape="round" size="large" @click="filipino">Yes</ion-button>
            <ion-button class="white-button" expand="block" shape="round" size="large" fill="outline" @click="presentPopover">No</ion-button>
          </div>
        </div>
        <ion-popover :is-open="isPopoverOpen" @ionPopoverDidDismiss="dismissPopover">
          <div class="popover-content">
            <p class="popover-title">Oops. We can’t open an account for you.</p>
            <p class="popover-message">Sorry, our bank is currently only available to Filipino Citizens.</p>
            <ion-button class="exit-button"expand="block" shape="round" size="small" @click="dismissPopover">Exit</ion-button>
          </div>
        </ion-popover>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from "vue";
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
    IonPopover,
  } from "@ionic/vue";

  const icons = {
    arrowBack
  }
  import { useRouter } from "vue-router";
  const router = useRouter(); 

  const isPopoverOpen = ref(false);

  const presentPopover = () => {
      isPopoverOpen.value = true;
  };

  const dismissPopover = () => {
      isPopoverOpen.value = false;
  };

  const filipino = () => {
    router.push("/imAFilipino");
  }
</script>
  
<style scoped>
  .background {
    --background: linear-gradient(to top, #5C55C9, white 60%);
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

  .centered-title{
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
    display: flex;
    flex-direction: column;
    gap: 1px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
    width: 100%;
  }

  ion-button {
    width: 90%;
    font-size: large;
  }

  .white-button {
    --background: white;
    --color: #292966;
    --border-radius: 30px;
    --box-shadow: 0px 0px 0px 0px;
    --border-color: #ffffff;
    --border-width:1px;
    --background-focused: white;
    --background-activated: white;
    --background-hover: white;
  }
  
  .popover-content {
    padding: 20px;
    text-align: center;
    background: white;
    border-radius: 10px;
    width: 100%;
    justify-content: center;
  }

  .popover-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #292966;
    margin-bottom: 10px;
    text-align: left;
  }

  .popover-message {
    font-size: 1rem;
    color: #292966;
    margin-bottom: 20px;
    text-align: justify;
  }

  .exit-button{
    width: 50%;
    font-size: medium;
    justify-self: center;
  }
  </style>
