<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button @click="cancel"></ion-back-button>
        </ion-buttons>
        <ion-title>Transfer Funds</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="content-container">
        <div class="ion-activatable transfer" @click="this.$router.push(`/tabs/tab2/transfer/bills/destinationSelect/billerSelect`)">
          <ion-ripple-effect></ion-ripple-effect>
            <span v-if="!(this.servicesStore.serviceDetails.biller_BillerName && this.servicesStore.serviceDetails.biller_BillerName.trim() !== '')">Select Biller</span>
            <span v-else>{{this.servicesStore.serviceDetails.biller_BillerName}}</span>
            <ion-icon :icon="this.chevronForwardOutline"></ion-icon>
        </div>
        <ion-input maxlength="15" v-model="this.refNumber" ref="refNumber" label="Reference Number*" label-placement="stacked" fill='outline'></ion-input>
        <div>
          <ion-toggle>Save to Favorites</ion-toggle>
        </div>
      </div>
    </ion-content>
    <ion-footer><ion-button shape='round' size="large" @click="confirm" id="confirm"> Confirm </ion-button></ion-footer>
  </ion-page>
</template>
<style scoped>
ion-header {
  background-color: var(--ion-color-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  height: max-content;
}
.footer-md{
  box-shadow: none;
  padding: 10px;
}
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
ion-button{
  width: 100%;
}
ion-input {
  margin-bottom: 20px;
}
.transfer{
  position: relative;
  overflow: hidden;

  display: flex;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.3);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
<script>
import { toastController, IonRippleEffect, IonButton, IonInput, IonToggle, IonContent, IonFooter, IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons } from '@ionic/vue';
import { useServicesStore } from '../stores/services.store'
import { chevronForwardOutline } from 'ionicons/icons';
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
    IonButton,
    IonRippleEffect,
  },
  data(){
    return {
      refNumber: '',
      servicesStore: useServicesStore(),
      chevronForwardOutline,
    }
  },
  mounted(){
    this.refNumber = this.servicesStore.serviceDetails.biller_RefNumber;
  },
  methods: {
    cancel(){
      if(this.servicesStore.serviceDetails.biller_BillerName !== "" &&
        this.refNumber != "" &&
        this.refNumber != "") {
        this.$router.back()
      } else {
        this.servicesStore.serviceDetails.biller_BillerName = "";
        this.servicesStore.serviceDetails.biller_RefNumber = "";
        this.servicesStore.serviceDetails.transfer_ReceivingAccountName = "";
        this.refNumber = "";
        this.$router.back();
      }
    },
    async confirm(){
      if(this.servicesStore.serviceDetails.biller_BillerName !== "" &&
        this.refNumber !== "") {
          this.servicesStore.serviceDetails.biller_RefNumber = this.refNumber;
          this.$router.back();
      } else {
        if(this.refNumber === ""){
          this.$refs.refNumber.$el.classList.add('ion-invalid')
          this.$refs.refNumber.$el.classList.add('ion-touched')
        }

        if(this.servicesStore.serviceDetails.biller_BillerName === "" ||  this.refNumber === ""){
        const toast = await toastController.create({
          message: 'Please complete all receiving bank account details.',
          duration: 1500,
          position: 'bottom',
          positionAnchor: 'confirm',
        });
        await toast.present();
        }
      }


    }
  }
}
</script>
