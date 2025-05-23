<template>
  <ion-page>
    <ion-content :fullscreen="true" class="background no-scroll">
      <div class="container">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button text="" default-href="/number"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
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
    router.push("/gsdf");
  };
  function resendOTP() {
  subtitle.value = "We have resent the OTP to your mobile number";
}
</script>
  
<style scoped>
  .background {
    --background: linear-gradient(to top, #5c55c9, white 60%);
    display: flex; /*new*/
    flex-direction: column; /*new*/
    height: 100vh;/*new*/
    overflow: hidden; /*new*/
  }
  
  .no-scroll {
    overflow: hidden !important; /*new*/
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

  .message-area {
    width: 100%;
    text-align: center;
    padding: 18px;
    flex-grow: 1;
    margin-top: 35px;
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
    color: #292966;
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
  }

  ion-card-subtitle {
    color: #292966;
    text-align: left;
    font-size: medium;
    font-weight: bold;
  }

  .input-container{
    width: 100%;
    display: flex;
    gap: 9px;
    justify-content: center;
    margin-top: 16px;
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
  