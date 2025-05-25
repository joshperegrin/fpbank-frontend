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
        <ion-input maxlength="10" @ionInput="edited('number', $event)" v-model="this.receivingAccountNumber" ref="accountnumber" label="Account Number*" label-placement="stacked" fill='outline'></ion-input>
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
      receivingAccountNumber: '',
      receivingAccountName: '',
      servicesStore: useServicesStore(),
      chevronForwardOutline,
    }
  },
  mounted(){
    this.receivingAccountNumber = this.servicesStore.serviceDetails.transfer_ReceivingAccountNumber;
    this.receivingAccountName = this.servicesStore.serviceDetails.transfer_ReceivingAccountName;
  },
  methods: {
    edited(emitter, event){
      switch(emitter){
        case "number":
          const value = event.target.value;
          const filteredValue = value.replace(/[^0-9]+/g, '');


          this.receivingAccountNumber = filteredValue;
          const inputCmp = event.target;
          if (inputCmp !== undefined) {
            inputCmp.value = filteredValue;
          }

          this.$refs.accountnumber.$el.classList.remove('ion-invalid')
          this.$refs.accountnumber.$el.classList.remove('ion-touched')
          break;
        case "name":
          this.$refs.accountname.$el.classList.remove('ion-invalid')
          this.$refs.accountname.$el.classList.remove('ion-touched')
          break;
        default:
      }
    },
    cancel(){
      if(this.servicesStore.serviceDetails.transfer_ReceivingBank !== "" &&
        this.receivingAccountNumber != "" &&
        this.receivingAccountNumber != "") {
        this.$router.back()
      } else {
        this.servicesStore.serviceDetails.transfer_ReceivingBank = "";
        this.servicesStore.serviceDetails.transfer_ReceivingAccountNumber = "";
        this.servicesStore.serviceDetails.transfer_ReceivingAccountName = "";
        this.receivingAccountName = "";
        this.receivingAccountNumber = "";
        this.$router.back();
      }
    },
    async confirm(){
      if(this.receivingAccountNumber !== "" &&
        this.receivingAccountNumber.length === 10) {
          this.servicesStore.serviceDetails.transfer_ReceivingAccountNumber = this.receivingAccountNumber;
          this.servicesStore.serviceDetails.transfer_ReceivingAccountName = this.receivingAccountName;
          this.$router.back();
      } else {
        if(this.receivingAccountNumber.length !== 10){
          this.$refs.accountnumber.$el.classList.add('ion-invalid')
          this.$refs.accountnumber.$el.classList.add('ion-touched')
        }
        if(this.receivingAccountNumber === ""){
          this.$refs.accountnumber.$el.classList.add('ion-invalid')
          this.$refs.accountnumber.$el.classList.add('ion-touched')
        }

        if(this.receivingAccountNumber === ""){
        const toast = await toastController.create({
          message: 'Please complete all receiving bank account details.',
          duration: 1500,
          position: 'bottom',
          positionAnchor: 'confirm',
        });
        await toast.present();
        } else if(this.receivingAccountNumber.length !== 10){
          const toast = await toastController.create({
            message: 'Invalid Header Number, must be 10 in length',
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
