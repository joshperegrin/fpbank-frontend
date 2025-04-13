<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/tab2"></ion-back-button>
        </ion-buttons>
        <ion-title>Transfer Funds</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="content-container">
        <div class="transfer">
          <div style="border-bottom: 1px solid var(--ion-color-lightmedium); margin-bottom: 8px;"><span>Transfer From</span></div>
          <div>FP BANK ACCOUNT</div>
          <div>{{accountNumber}}</div>
          <div><span>PHP</span> {{accountBalance}}</div>
        </div>
        <div class="ion-activatable transfer" @click="set">
          <ion-ripple-effect></ion-ripple-effect>
          <div class="selectDestination" :style="(this.servicesStore.serviceDetails.transfer_ReceivingBank && this.servicesStore.serviceDetails.transfer_ReceivingBank.trim() !== '')? { borderBottom: '1px solid var(--ion-color-lightmedium)', marginBottom: '8px' } : {}"><span>Transfer To</span> <ion-icon :icon="this.chevronForwardOutline"></ion-icon></div>
          <div v-if="(this.servicesStore.serviceDetails.transfer_ReceivingBank && this.servicesStore.serviceDetails.transfer_ReceivingBank.trim() !== '')">{{this.servicesStore.serviceDetails.transfer_ReceivingBank}}</div>
          <div v-if="(this.servicesStore.serviceDetails.transfer_ReceivingAccountNumber && this.servicesStore.serviceDetails.transfer_ReceivingAccountNumber.trim() !== '')">{{this.servicesStore.serviceDetails.transfer_ReceivingAccountNumber}}</div>
          <div v-if="(this.servicesStore.serviceDetails.transfer_ReceivingAccountName && this.servicesStore.serviceDetails.transfer_ReceivingAccountName.trim() !== '')"><span>{{this.servicesStore.serviceDetails.transfer_ReceivingAccountName}}</span></div>
        </div>
        <div :class="(this.servicesStore.serviceDetails.transfer_ReceivingBank && this.servicesStore.serviceDetails.transfer_ReceivingBank.trim() !== '')?['ion-activatable', 'transfer']:['deactivated', 'transfer']" @click="handleClick()">
          <ion-ripple-effect v-if="this.servicesStore.serviceDetails.transfer_ReceivingBank && this.servicesStore.serviceDetails.transfer_ReceivingBank.trim() !== ''"></ion-ripple-effect>
          <img v-if="this.servicesStore.serviceDetails.transfer_Channel !== ''" :src="(this.servicesStore.serviceDetails.transfer_Channel === 'instapay')? instapayImage: (this.servicesStore.serviceDetails.transfer_Channel === 'pesonet')? pesonetImage: ''"/>
          <div v-else class="selectDestination"><span>Transfer Channel</span> <ion-icon :icon="this.chevronForwardOutline"></ion-icon></div>
        </div>
        <ion-input label="Amount*" label-placement="stacked" fill='outline'></ion-input>
        <ion-input label="Notes" label-placement="stacked" fill='outline'></ion-input>
      </div>
    </ion-content>
    <ion-footer id="footer"><ion-button shape='round' size="large" @click="confirm"> Confirm </ion-button></ion-footer>
  </ion-page>
</template>

<style scoped>
.deactivated{
  color: var(--ion-color-lightmedium);
}
img {
  width: 100px;
}
.selectDestination{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
ion-button{
  width: 100%;
}
.footer-md{
  box-shadow: none;
  padding: 10px;
}
.header01{
  font-weight: 600;
  padding-bottom: 3px;
  padding-left: 8px;
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
.transfer{
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
.transfer div:nth-of-type(1) > span {
  width: 100%;
  font-weight: 600;
  padding-bottom: 3px;
}
.transfer div:nth-of-type(2) {
  font-size: .85em;
  font-weight: 700;
}
.transfer div:nth-of-type(3) > span{
  font-size: .75em;
  font-weight: 400;
}

.transfer div:nth-of-type(4) > span{
  font-size: .75em;
  font-weight: 400;
}
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
ion-input {
  margin-bottom: 20px;
}
</style>

<script>
import { IonRippleEffect, IonButton, IonIcon, IonInput, IonToggle, IonContent, IonFooter, IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons } from '@ionic/vue';
import { useServicesStore } from '../store/services.store.js'
import { chevronForwardOutline } from 'ionicons/icons';
import instapayImage from '../assets/imgs/instapay.png';
import pesonetImage from '../assets/imgs/PESONet.png';
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonButtons,
    IonFooter,
    IonInput,
    IonToggle,
    IonContent,
    IonIcon, 
    IonButton,
    IonRippleEffect,
},
  data(){
    return {
      accountNumber: '1234 123 1234',
      accountBalance: 1276.32,
      servicesStore: useServicesStore(),
      chevronForwardOutline,
      instapayImage,
      pesonetImage,
    }
  },
  methods: {
    set(){
      console.log(this.$router)
      this.$router.push(`/tabs/tab2/transfer/${this.$route.params.transfertype}/destinationSelect`);
    },
    handleClick() {
      const bank = this.servicesStore.serviceDetails.transfer_ReceivingBank;
      if (bank && bank.trim() !== '') {
        this.$router.push('/tabs/tab2/transfer/external/transferChannel');
      }
    },
  }
}
</script>
