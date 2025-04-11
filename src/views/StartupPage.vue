<template>
  <ion-page>
    <ion-content :fullscreen="true" class="white-background">
      <div class="container">
        <ion-card-header class="centered-text"> 
          <div class="logo-title-container">
            <img :src="logo" alt="Full Port Bank Logo" class="logo"/>
            <ion-card-title>Full Port Bank</ion-card-title>
          </div>
        </ion-card-header>
        <ion-card-content class="button-container">
          <ion-button expand="block" shape="round" size="large" @click="goToOpenAccount">Open an account</ion-button>
          <ion-button expand="block" shape="round" fill="outline" size="large" @click="goToLogin">Log In</ion-button>
        </ion-card-content>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import logo from "@/assets/imgs/logo.png";
  import {
    IonPage,
    IonContent,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
  } from "@ionic/vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const goToOpenAccount = () => {
    router.push("/openAccount");
  };

  const goToLogin = () => {
    router.push("/login");
  };
</script>

<style scoped>
  .white-background {
    --background: white;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; 
    padding: 20px;
  }

  .centered-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh; 
  }

  .logo-title-container{
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
  }

  .logo{
    width:130px;
    height: auto;
  }

  ion-card-title {
    color: #292966;
    font-size: 2.9rem;
    font-style: italic;
    font-weight: 900;
    line-height: 1.2;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:10%;
  }

  ion-button {
    width: 90%;
    font-size: large;
  }
</style>
