<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/tab2"></ion-back-button>
        </ion-buttons>
        <ion-title>Confirmation</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="content-container">
        <div class="header01">Transfer Details</div>
        <div class="detail-list">
          <div>
            Transaction Type
          </div>
          <div>
            Fund Transfer via <br/>{{servicesStore.serviceDetails.transfer_Channel.toLowerCase().replace(/^./, c => c.toUpperCase())}}
          </div>
        </div>
        <div class="detail-list">
          <div>
            Source Account
          </div>
          <div>
            Full Port Bank <br/>
            {{accountNumber}}
          </div>
        </div>
        <div class="detail-list">
          <div>
            Destination Account
          </div>
          <div>
            {{servicesStore.serviceDetails.transfer_ReceivingAccountName}}<br/>
            {{servicesStore.serviceDetails.transfer_ReceivingBank}}<br/>
            {{servicesStore.serviceDetails.transfer_ReceivingAccountNumber}}
          </div>
        </div>
        <div class="detail-list">
          <div>
            Amount
          </div>
          <div>
            PHP {{servicesStore.serviceDetails.transfer_Amount}}
          </div>
        </div>
        <div class="detail-list">
          <div>
            Transfer Channel
          </div>
          <div>
          <img v-if="this.servicesStore.serviceDetails.transfer_Channel !== ''" :src="(this.servicesStore.serviceDetails.transfer_Channel === 'instapay')? instapayImage: (this.servicesStore.serviceDetails.transfer_Channel === 'pesonet')? pesonetImage: ''"/>
          </div>
        </div>
        <div class="detail-list">
          <div>
            Notes
          </div>
          <div>
            {{this.servicesStore.serviceDetails.transfer_Note}}
          </div>
        </div>
        <div class="detail-list">
          <div>
            Service Charge
          </div>
          <div>
            PHP {{(this.servicesStore.serviceDetails.transfer_Channel === 'instapay')? this.servicesStore.serviceCharge.instapay : this.servicesStore.serviceCharge.pesonet }}.00
          </div>
        </div>
      </div>
    </ion-content>
    <ion-footer id="footer">
      <ion-checkbox v-model="confirmationChecked" label-placement="end"><div class="ion-text-wrap">{{confirmationCheckbox}}</div></ion-checkbox>
      <ion-button :disabled="!confirmationChecked" shape='round' size="large" @click="confirm" id="confirm"> Confirm </ion-button>
    </ion-footer>
  </ion-page>
</template>

<style scoped>
ion-checkbox{
  margin: 0px 20px;
  margin-bottom: 10px;
  font-size: .75rem;
  color: var(--ion-color-medium);
}
label.checkbox-wrapper {
  display: flex;
  align-items: start;
  background-color: var(--ion-color-primary);
}
.detail-list{
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img {
  width: 120px;
}
.detail-list > div:nth-child(2){
  text-align: right;
  width: 20ch;
  margin-bottom: 15px;
}
.arrow-downward{
  font-size: 30px;
  margin-left: auto;
  margin-right: auto;
  color: var(--ion-color-primary);
  margin-top: 10px;
  margin-bottom: 10px;
}
.header01{
  color: var(--ion-color-primary);
  font-weight: 600;
  font-size: 1.2rem;
  padding-top: 15px;
  border-bottom: 2px solid var(--ion-color-secondary);
  margin-bottom: 20px;
}
.transfer{
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: center;

  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.3);
  border-radius: 10px;
  padding: 20px 20px;
}
.transfer > ion-icon{
  color: var(--ion-color-primary);
  font-size: 25px;
  margin-right: 15px;
}
.transfer > div > div{
  font-size: .75em;
  font-weight: 400;
}
.transfer > div > div > span{
  width: 100%;
  font-weight: 600;
  font-size: 1rem;
  padding-bottom: 3px;
  color: var(--ion-color-primary);
}
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}

h1{
  font-weight: 800;
  font-size: 2.1rem;
  color: var(--ion-color-primary);
  margin-bottom: 20px;
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
ion-button{
  width: 100%;
}
.footer-md{
  box-shadow: none;
  padding: 10px;
}
</style>

<script>
import { toastController, IonCheckbox, IonRippleEffect, IonButton, IonIcon, IonInput, IonToggle, IonContent, IonFooter, IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons } from '@ionic/vue';
import { useServicesStore } from '../store/services.store.js'
import { arrowDownOutline } from 'ionicons/icons';
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
    IonCheckbox,
},
  data(){
    return {
      confirmationChecked: false,
      confirmationCheckbox: 'I hereby confirm that the transaction details above are correct and understand that refund or reversal of the transaction amount and service charge will not be allowed.',
      toastPresented: false,
      amount: '',
      accountNumber: '1234 123 1234',
      accountBalance: 1276.32,
      servicesStore: useServicesStore(),
      arrowDownOutline,
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
    confirm(){
      
    },
  }
}
</script>
