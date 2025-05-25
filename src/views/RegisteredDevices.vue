<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
            <ion-back-button default-href="/settings"></ion-back-button>
          </ion-buttons>
          <ion-title>Registered Device</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding">
        <div class="content-header">
            <h2> Secure your FullPort Account</h2>
        </div>
        <div class="content-body">
            <p> You may register up to 1 device to your FullPort Mobile Banking account. For your account’s safety, please remove any inactive or unused devices from the list </p>
        </div>
        <ion-item class="device">
            <ion-label>
                <span class="device-name"> {{device_name}} </span>
                <span class="details"> {{ phone_brand }} </span>
                <span class="details"> {{ status }} </span>
            </ion-label>
        </ion-item>
      </ion-content>
      <ion-button class="buttons" shape='round' size="large"> Remove  </ion-button>
    </ion-page>
  </template>
  
  <style scoped>
  ion-header {
    -webkit-box-shadow: none;
    box-shadow: none;
  
    background-color: var(--ion-color-primary);
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  
    padding-top: 30px;
    padding-bottom: 15px;
    border-radius: 0px 0px 16px 16px;
  }
  .username {
    font-size: medium;
    font-weight: 700;
    color: var(--ion-color-primary-contrast);
    margin: 5px 0px;
  }
  .subtext {
    font-size: xx-small;
    font-weight: 400;
    color: var(--ion-color-primary-contrast);
  }
  ion-avatar {
    box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
    height: 110px;
    width: 110px;
  }
  .content-header {
    border-bottom: 2px solid var(--ion-color-medium);
    margin-top: 15px;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .content-header h2 {
  margin: 0;
  font-size: 22px;
  color: rgb(2, 29, 92);
  font-weight: light;
 }
 .content-body p {
  font-size: 16px;
  color: rgba(66, 66, 66, 0.715);
  font-weight: light;
  text-align: justify;
  text-justify: inter-word;
 }

 .device {
  background: var(--ion-item-background);
  color: var(--ion-text-color);
  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
  border-radius: 10px;
  }

  .device-name {
    font-weight: bold;
    color: black;
    font-size: 20px;
    display: block;
  }
 
  .details {
    color: rgba(66, 66, 66, 0.715);
    font-weight: light;
    font-size: 16px;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .buttons {
    padding: 10px;
    margin: 15px;
  }

  </style>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonBackButton  } from '@ionic/vue';
  import CustomButton01 from '../components/CustomButton01.vue'
  import { IonButton } from '@ionic/vue';
  import { keypadOutline, phonePortraitOutline } from 'ionicons/icons';
  export default {
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonAvatar,
      IonBackButton,
      IonButton,
      CustomButton01,
    },
    data(){
      return {
        device_name: "machine",
        phone_brand: "iPhone 16",
        status: "Active Now",
        keypadOutline,
        phonePortraitOutline,
      }
    },
  }
  </script>
  