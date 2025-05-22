<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/tabs/tab4"></ion-back-button>
          </ion-buttons>
          <ion-title>Settings</ion-title>
        </ion-toolbar>
        <ion-avatar>
          <img :src="avatar_src"/>
        </ion-avatar>
        <span class="username">{{user_name}}</span>
        <span class="subtext">{{user_email}}</span>
        <span class="subtext">{{user_mobile}}</span>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding">
        <div class="content-body">
          <CustomButton01 :icon_name="keypadOutline" @click="goToChangePassword"> Change Password </CustomButton01>
          <CustomButton01 :icon_name="phonePortraitOutline" @click="goToRegisteredDevices"> Registered Devices </CustomButton01>
        </div>
      </ion-content>
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
  .content-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch; 
    gap: 15px;
  }
  </style>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonBackButton  } from '@ionic/vue';
  import CustomButton01 from '../components/CustomButton01.vue'
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
      CustomButton01,
    },
    data(){
      return {
        avatar_src: "src/assets/imgs/angry.jpg",
        user_name: "Washing Machine",
        user_email: "washing.machine@gmail.com",
        user_mobile: "+63-912-345-6789",
        keypadOutline,
        phonePortraitOutline,
      }
    },
    methods: {
      goToRegisteredDevices() {
      this.$router.push('/registered-devices');
    },
    goToChangePassword() {
      this.$router.push('/change-password');
    },
    },
  }
  </script>
  