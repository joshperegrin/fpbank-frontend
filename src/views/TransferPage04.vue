<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Transfer Funds</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div>
        <div class="ion-activatable transfer-channel-button" @click="set('instapay')">
          <ion-ripple-effect></ion-ripple-effect>
          <img src="../assets/imgs/instapay.png"/>
          <ul>
            <li>Transfer is real-time.</li>
            <li>A PHP 15.00 fee per successful transaction shall apply.</li>
          </ul>
        </div>
        <div class="ion-activatable transfer-channel-button" @click="set('pesonet')">
          <ion-ripple-effect></ion-ripple-effect>
          <img src="../assets/imgs/PESONet.png"/>
          <ul>
            <li>Transfer is real-time.</li>
            <li>A PHP 15.00 fee per successful transaction shall apply.</li>
            <li>You may transfer up to any amount.</li>
            <li>Standard return fee of PHP 0.00 for failed fund transfers.</li>
            <li>Special return fee of PHP 0.00 for failed transations due to invalid beneficiary account number (AC03), inconsistent with end customer (BE01), order cancelled (DS02), among other PCHC return reasons</li>
          </ul>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<style scoped>
ul {
  padding-inline-start: 20px;
  color: var(--ion-color-medium);
  margin-block-start: 5px;
  margin-block-end: 5px;
  font-size: .8rem;
}
img[src*="instapay.png"]{
  width: 150px;
}
img[src*="PESONet.png"]{
  width: 150px;
  margin-bottom: 5px;
  margin-top: 5px;
}
ion-header {
  background-color: var(--ion-color-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  height: max-content;
}
.transfer-channel-button{
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items:stretch;


  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.3);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;

}
</style>
<script>
import { IonRippleEffect, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/vue';
import { useServicesStore } from '../stores/services.store'
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonRippleEffect,
  },
  data(){
    return {
      servicesStore: useServicesStore(),
    }
  },
  methods: {
    set(transferChannel){
      this.servicesStore.serviceDetails.transfer_Channel = transferChannel;
      this.$router.back()
    }
  }
}
</script>
