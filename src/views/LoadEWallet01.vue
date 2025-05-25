<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button @click="handleBackButtonClick()"></ion-back-button>
        </ion-buttons>
        <ion-title>Load EWallet</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="content-container">
        <div class="transfer">
          <div style="border-bottom: 1px solid var(--ion-color-lightmedium); margin-bottom: 8px;"><span>Load From</span></div>
          <div>FP BANK ACCOUNT</div>
          <div>{{accountNumber}}</div>
          <div><span>PHP</span> {{accountBalance}}</div>
        </div>
        <div class="ion-activatable transfer" @click="set">
          <ion-ripple-effect></ion-ripple-effect>
          <div class="selectDestination" :style="(this.servicesStore.serviceDetails.ewallet_EWalletName && this.servicesStore.serviceDetails.ewallet_EWalletName.trim() !== '')? { borderBottom: '1px solid var(--ion-color-lightmedium)', marginBottom: '8px' } : {}"><span>Load To</span> <ion-icon :icon="this.chevronForwardOutline"></ion-icon></div>
          <div v-if="(this.servicesStore.serviceDetails.ewallet_EWalletName && this.servicesStore.serviceDetails.ewallet_EWalletName.trim() !== '')"> {{this.servicesStore.serviceDetails.ewallet_EWalletName}} </div>
          <div v-if="(this.servicesStore.serviceDetails.ewallet_WalletNumber && this.servicesStore.serviceDetails.ewallet_WalletNumber.trim() !== '')"> {{this.servicesStore.serviceDetails.ewallet_WalletNumber}} </div>
        </div>
        <ion-input ref="amountTextbox" :disabled="!(this.servicesStore.serviceDetails.ewallet_EWalletName && this.servicesStore.serviceDetails.ewallet_EWalletName.trim() !== '')" label="Amount*" type="number" inputmode="decimal" step="0.01" min="0"  v-model="amount" @input="validateInput" label-placement="stacked" fill='outline'></ion-input>
      </div>
    </ion-content>
    <ion-footer id="footer"><ion-button shape='round' size="large" @click="confirm" id="confirm"> Proceed </ion-button></ion-footer>
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
import { toastController, alertController, IonRippleEffect, IonButton, IonIcon, IonInput, IonToggle, IonContent, IonFooter, IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons } from '@ionic/vue';
import { useServicesStore } from '../stores/services.store'
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
      toastPresented: false,
      amount: '',
      accountNumber: '1234 123 1234',
      accountBalance: 100000.00,
      servicesStore: useServicesStore(),
      chevronForwardOutline,
      instapayImage,
      pesonetImage,
    }
  },
  methods: {
    async handleBackButtonClick(){
      if(this.servicesStore.serviceDetails.ewallet_EWalletName !== '' ||
        this.servicesStore.serviceDetails.ewallet_WalletNumber !== '' ||
        this.servicesStore.serviceDetails.ewallet_Amount !== ''){
        const alert = await alertController.create({
          header: 'Leave Payment?',
          message: 'If you leave now, all the info you’ve entered will be lost. Want to stay and finish it?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Confirm',
              role: 'confirm',
              handler: () => {
                this.servicesStore.serviceDetails.ewallet_EWalletName = '';
                this.servicesStore.serviceDetails.ewallet_WalletNumber = '';
                this.servicesStore.serviceDetails.ewallet_Amount = '';
                this.$router.back()
              }
            },
          ],
        });
        await alert.present();
      } else {
        this.$router.back()
      }

    },
    set(){
      console.log(this.$router)
      this.$router.push(`/tabs/tab2/transfer/ewallet/destinationSelect`);
    },
    async confirm(){
      if(this.isFormComplete()){
        this.servicesStore.serviceDetails.ewallet_Amount = this.amount;
        this.$router.push('/tabs/tab2/transfer/ewallet/confirmation');
      } else if(!this.toastPresented) {
          const toast = await toastController.create({
            message: 'Incomplete or invalid transaction details.',
            duration: 1500,
            position: 'bottom',
            positionAnchor: 'confirm',
          });
          await toast.present();
          this.toastPresented = true;
          await toast.onDidDismiss();
          this.toastPresented = false;
      }
    },
    isFormComplete(){
      return (
        this.servicesStore.serviceDetails.ewallet_EWalletName !== '' &&
        this.amount !== '' && 
        !this.$refs.amountTextbox.$el.classList.contains('ion-invalid'))
    },
    async validateInput(event) {
      let value = event.target.value;

      // Allow only numbers and a single decimal point
      value = value.replace(/[^0-9.]/g, '');

      // Prevent multiple decimals
      const parts = value.split('.');
      if (parts.length > 2) {
        parts.splice(2); // Remove any extra decimals
      }

      let intPart = parts[0];
      let decPart = parts[1] || '';

      // Limit integer part to 13 digits
      intPart = intPart.slice(0, 13);

      // Limit decimal to 2 digits
      decPart = decPart.slice(0, 2);

      this.amount = decPart ? `${intPart}.${decPart}` : intPart;

      let toastMessage = '';
      if(parseFloat(this.amount) > this.accountBalance){
        this.$refs.amountTextbox.$el.classList.add('ion-invalid')
        this.$refs.amountTextbox.$el.classList.add('ion-touched')
        toastMessage = `Insufficient Funds`
      } else {
        this.$refs.amountTextbox.$el.classList.remove('ion-invalid')
        this.$refs.amountTextbox.$el.classList.remove('ion-touched')
      }

      if(toastMessage && !this.toastPresented){
        const toast = await toastController.create({
          message: toastMessage,
          duration: 1500,
          position: 'bottom',
          positionAnchor: 'confirm',
        });
        await toast.present();
        this.toastPresented = true;
        await toast.onDidDismiss();
        this.toastPresented = false;
      }
      
    },
  }
}
</script>
