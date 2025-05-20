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
          <img :src="logo" alt="Full Port Bank Logo" class="logo" />
          <div class="title-container">
            <span class="title-line">Full Port</span>
            <span class="title-line">Bank</span>
          </div>
        </div>
        <div class="inputarea">
          <ion-card-header class="aligned-content">
            <ion-card-title>Enter your email address</ion-card-title>
          </ion-card-header>
          <ion-input
            fill="outline"
            placeholder="*******@example.com"
          ></ion-input>
        </div>
        <div class="button-container">
          <ion-button expand="block" shape="round" size="large" @click="presentPopover">Confirm</ion-button>
        </div>
      </div>
      <ion-popover :is-open="isPopoverOpen" @ionPopoverDidDismiss="dismissPopover">
          <div class="popover-content">
            <p class="popover-title">We've sent you an email.</p>
            <p class="popover-message">If you've forgotten your password or wish to reset it, use the link sent to your email.</p>
            <ion-button class="exit-button"expand="block" shape="round" size="small" @click="dismissPopover">Exit</ion-button>
          </div>
        </ion-popover>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { arrowBack } from "ionicons/icons";
import logo from "@/assets/imgs/logo.png";
import { ref } from "vue";

import {
  IonPage,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonButton,
  IonCardSubtitle,
  IonPopover,
} from "@ionic/vue";

const icons = { arrowBack };
import { useRouter } from "vue-router";
const router = useRouter();

const isPopoverOpen = ref(false);

  const presentPopover = () => {
      isPopoverOpen.value = true;
  };

  const dismissPopover = () => {
      isPopoverOpen.value = false;
      router.push("/startup");
  };


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
  overflow: hidden !important;/*new*/
}

.container {/*new*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}/*new*/

ion-toolbar {
  --background: transparent;
  color: #292966;
}

.logo-title-container {
  display: flex;
  align-items: center;
  gap: 10px;/* remove WIDTH, MARGIN-TOP*/
  justify-content: center;
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
  font-weight: 800;
  color: #292966;
  font-style: italic;
  line-height: 1;
}

.inputarea {
  width: 100%;/*new*/
  text-align: center;
  padding: 18px;
  flex-grow: 1;  /*new*/
  margin-top: 35px;
}/* remove margin, display, flex-direction justify content, hieght, */

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

ion-card-title {
  color: #292966;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1rem;
}

ion-card-subtitle {
  color: #292966;
  text-align: left;
  margin-top: 0.5rem;
  cursor: pointer;
}

.button-container {
  width: 100%; /*new*/
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 10%;/*new*/
}

ion-button {
    width: 90%;
    font-size: large;
    padding: 10px;
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

