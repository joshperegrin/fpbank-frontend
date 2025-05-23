<template>
  <ion-page>
    <ion-content :fullscreen="true" class="background no-scroll">
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="" default-href="number"></ion-back-button>
            </ion-buttons>
        </ion-toolbar>
        <h3 class="page-title">Register</h3>
      <div class="container">
        <div class="message-area">
          <ion-card-header class="aligned-content">
            <ion-card-title>Enter OTP</ion-card-title>
            <ion-card-subtitle style="font-weight:normal;">{{ subtitle }}</ion-card-subtitle>
          </ion-card-header>
          <div class="input-container">
            <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
            <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
            <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
            <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
            <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
            <div><ion-input label-placement="floating" fill="outline"></ion-input></div>
          </div>
          <ion-card-subtitle style="text-align: center; margin-top: 20px; font-weight:normal; cursor: pointer;" @click="resendOTP">Resend OTP</ion-card-subtitle>
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
  import { ref } from "vue";
  import { useRouter } from "vue-router";
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

  const icon = { arrowBack }
  const router = useRouter();
  const subtitle = ref("sent  to your registered number (+639*******89)");
  const goToTabs = () => {
    router.push("/tabs");
  };
  function resendOTP() {
  subtitle.value = "We have resent the OTP to your mobile number";
}
</script>
  
<style scoped>
  ion-content {
        --background: linear-gradient(to top, #5c55c9, white 40%);; /* Ensure the page background is set */
        display: flex; /* Use flexbox to control layout */
        flex-direction: column; /* Stack children vertically */
        justify-content: flex-start; /* Align content at the top */
        align-items: stretch; 
}
  .container {
    flex: 1;
    --background: transparent;
    color:#5C5C99;
    margin: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-inline-start: 3%;
    padding-inline-end: 3%;
    text-align: justify;
    height: fit-content;
    box-shadow: none;
  }

  ion-toolbar {
    --background: #292966;
    color: white;
    padding: 10px;
}

h3.page-title {
    color: white;
    text-align: center;
    font-weight: bold;
    background: #292966;
    margin-top: -1px;
    padding-bottom: 20px;
    border: transparent;
}

  .message-area {
    width: 100%;
    text-align: center;
    padding: 0px;
    flex-grow: 1;
    margin-top: 50px;
    margin-bottom: 1rem;
  }

  ion-input{
    width: 50px;
    text-align:center;
    font-size: x-large;
    color: #292966;
  }

  .aligned-content {
    margin: 0;
    padding: 0;
  }

  ion-card-title {
    color: #5c5c99;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
  }

  ion-card-subtitle {
    color: #5c5c99;
    text-align: left;
    font-size: medium;
    font-weight: bold;
  }

  .input-container{
    width: 100%;
    display: flex;
    gap: 9px;
    justify-content: center;
    margin-top: 50px;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 429px;
    margin-bottom: 25px;
  }

  ion-button {
    width: 90%;
    font-size: large;
    padding: 10px;
  }
</style>
  