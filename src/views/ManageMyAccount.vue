<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/tabs/tab4"></ion-back-button>
          </ion-buttons>
          <ion-title>Manage My Accounts</ion-title>
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
          <CustomButton01 :icon_name="cardOutline" @click="goToCard"> Request Physical Card </CustomButton01>
          <ion-item class="card-control">
            <ion-label>
              <h2>POS</h2>
            </ion-label> 
            <ion-toggle slot="end"></ion-toggle>
          </ion-item>
          <ion-item class="card-control">
            <ion-label>
              <h2>ATM Withdrawal</h2>
            </ion-label> 
            <ion-toggle slot="end"></ion-toggle>
          </ion-item>
          <ion-item class="card-control">
            <ion-label>
              <h2>Online Access</h2>
            </ion-label> 
            <ion-toggle slot="end"></ion-toggle>
          </ion-item>
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
  .card-control {
  background: var(--ion-item-background);
  color: var(--ion-text-color);
  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
  border-radius: 10px;
  }

  .card-control h2 {
  margin: 0;
  font-size: 18px;
  color: rgb(0, 0, 0);
  font-weight: bold;
}

  </style>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonBackButton } from '@ionic/vue';
  import CustomButton01 from '../components/CustomButton01.vue'
  import ComponentLibrarySample from './ComponentLibrarySample.vue';
  import { cardOutline, personCircleOutline, walletOutline, settingsOutline, searchCircleOutline, helpCircleOutline, logOutOutline, checkbox } from 'ionicons/icons';
  import { useAccountStore } from '../stores/accounts.store';
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
      ComponentLibrarySample,
    },
    data(){
      return {
        avatar_src: "src/assets/imgs/angry.jpg",
        checkbox: false,
        cardOutline,
        personCircleOutline,
        walletOutline,
        settingsOutline,
        searchCircleOutline,
        helpCircleOutline,
        logOutOutline,
        accountstore: useAccountStore()
      }
    },
    methods: {
      goBack() {
        this.$router.push("/tabs/tab4");
      },
      goToCard() {
        this.$router.push("/card")
      }
    },
    computed: {
      user_name(){
        return this.accountstore.user.firstname + ' ' + this.accountstore.user.middlename + ' ' + this.accountstore.user.lastname
      },
      user_email(){
        return this.accountstore.user.email
      },
      user_mobile(){
        return this.accountstore.user.mobile
      }
    }
  }
  </script>
  
