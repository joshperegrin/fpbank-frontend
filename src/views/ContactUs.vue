<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/tabs/tab4"></ion-back-button>
          </ion-buttons>
          <ion-title>Contact Us</ion-title>
        </ion-toolbar>
        <ion-avatar>
          <img :src="avatar_src"/>
        </ion-avatar>
        <span class="username">{{user_name}}</span>
        <span class="subtext">{{user_email}}</span>
        <span class="subtext">{{user_mobile}}</span>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding">
        <div class="content-header">
            <h2>Call Us</h2>
        </div>
        <ion-item class="information">
            <ion-icon :icon="callOutline" slot="start" size="large"></ion-icon>
            <ion-label>
                <span class="contact"> {{care_center}} </span>
                <span class="number"> {{ number_CCC }} </span>
            </ion-label>
        </ion-item>
        <ion-item class="information">
            <ion-icon :icon="callOutline" slot="start" size="large"></ion-icon>
            <ion-label>
                <span class="contact"> {{toll_free}} </span>
                <span class="number"> {{ number_DTF }} </span>
            </ion-label>
        </ion-item>
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

 .information {
  background: var(--ion-item-background);
  color: var(--ion-text-color);
  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
  border-radius: 10px;
  margin-top: 20px;
  }

  .contact {
    font-weight: bold;
    color: black;
    font-size: 20px;
    display: block;
  }
 
  .number {
    color: rgba(66, 66, 66, 0.715);
    font-weight: light;
    font-size: 16px;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  </style>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonBackButton  } from '@ionic/vue';
  import CustomButton01 from '../components/CustomButton01.vue'
  import { IonButton } from '@ionic/vue';
  import { callOutline } from 'ionicons/icons';
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
      IonButton,
      CustomButton01,
    },
    data(){
      return {
        avatar_src: "src/assets/imgs/angry.jpg",
        number_CCC: "(+123) 12345-0987",
        number_DTF: "1-0987-123-6543",
        care_center: "Customer Care Center",
        toll_free: "Domestic Toll-Free",
        callOutline,
        accountstore: useAccountStore()

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
  
