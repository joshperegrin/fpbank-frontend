<template>
  <ion-page>
    <ion-content class="ion-padding padding-top" :fullscreen="true">
      <div v-if="this.loaded" class="content-container">
        <div class="header02">
          <ion-icon :src="(this.transactionDetails.status === 'COMPLETED')? checkmarkCircle:closeCircle"></ion-icon>
          <span class="transaction-status"> {{this.transactionDetails.status.toLowerCase().replace(/^./, c => c.toUpperCase())}} </span>
        </div>
        <div class="header02">
          <span> Reference Number:</span>
          <span> {{this.transactionDetails.referenceNumber}} </span>
        </div>
        <div class="header01">Transfer Details</div>
        <div class="detail-list"><div> Transaction Name</div> <div>{{this.transactionDetails.transactionName}}</div></div>
        <div class="detail-list"><div> Transaction Date <br/>and Time</div> <div>{{new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(this.transactionDetails.transactionDateTime)}} <br/> {{new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).format(this.transactionDetails.transactionDateTime)}} </div></div>
        <div class="detail-list"><div> Transfer From</div> <div> SA: {{this.transactionDetails.transferFrom}}</div></div>
        <div class="detail-list"><div> Amount</div> <div> {{this.transactionDetails.amount}}</div></div>
        <div class="detail-list"><div> Note</div> <div> {{this.transactionDetails.notes}}</div></div>
      </div>
      <ion-spinner v-else></ion-spinner>
    </ion-content>
    <ion-footer id="footer">
      <ion-button v-if="this.loaded" shape='round' size="large" @click="confirm" id="confirm"> Done </ion-button>
    </ion-footer>
  </ion-page>
</template>
<style scoped>
ion-spinner{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
ion-content{
  --background: linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(246, 247, 255, 1) 45%, rgba(238, 241, 255, 1) 63%, rgba(211, 219, 255, 1) 82%, rgba(187, 199, 255, 1) 92%, rgba(148, 166, 255, 1) 100%);
}
.header02{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 5px;
}
ion-button{
  width: 100%;
}
.header02 > span:nth-child(2){
  font-size: 1.5rem;
}
.footer-md{
  box-shadow: none;
  padding: 10px;
}
.transaction-status{
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ion-color-primary);
}
ion-icon{
  font-size: 4.5rem;
  color: var(--ion-color-primary);
}
.detail-list{
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
}
.detail-list > div:nth-child(2){
  text-align: right;
  width: 20ch;
}
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 30px;
}
.header01{
  color: var(--ion-color-primary);
  font-weight: 600;
  font-size: 1.2rem;
  padding-top: 15px;
  border-bottom: 2px solid var(--ion-color-secondary);
  margin-bottom: 20px;
}
</style>
<script>
import { IonSpinner, IonButton, IonFooter, IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import { useServicesStore } from '../stores/services.store'
import { closeCircle, checkmarkCircle } from 'ionicons/icons';
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonButton,
    IonFooter,
    IonSpinner,
  },
  mounted(){
    this.processTransaction();
  },
  data(){
    return {
      loaded: false,
      accountNumber: '1234 123 1234',
      transactionDetails: {
        transactionName: '',
        transactionDateTime: null,
        transferFrom: '',
        transfer_ReceivingBank: '',
        transfer_ReceivingAccountNumber: '',
        transfer_ReceivingAccountName: '',
        amount: '',
        serviceCharge: '',
        notes: '',
        status: 'Success',
        referenceNumber: 'MAV1234567890U8',
      },
      checkmarkCircle,
      closeCircle,
      servicesStore: useServicesStore(),
    }
  },
  methods: {
    async processTransaction(){
      const fetchedTransactionDetails = await this.servicesStore.internalTransfer();
      this.transactionDetails.transactionDateTime = new Date(fetchedTransactionDetails.transactionDateTime)
      this.transactionDetails.transactionName = fetchedTransactionDetails.transactionName
      this.transactionDetails.referenceNumber = fetchedTransactionDetails.referenceNumber
      this.transactionDetails.status = fetchedTransactionDetails.transactionStatus
      
      this.transactionDetails.transfer_ReceivingAccountNumber = this.servicesStore.serviceDetails.transfer_ReceivingAccountNumber

      this.transactionDetails.transferFrom = this.accountNumber
      
      this.transactionDetails.amount = this.servicesStore.serviceDetails.transfer_Amount
      this.transactionDetails.notes = this.servicesStore.serviceDetails.transfer_Note
      this.loaded = true;
      console.log(`reference number: ${this.transactionDetails.referenceNumber}`)
    },
    async confirm(){
      this.servicesStore.serviceDetails.transfer_ReceivingBank = ''
      this.servicesStore.serviceDetails.transfer_ReceivingAccountNumber = ''
      this.servicesStore.serviceDetails.transfer_ReceivingAccountName = ''
      this.servicesStore.serviceDetails.transfer_Amount = ''
      this.servicesStore.serviceDetails.transfer_Channel = ''
      this.servicesStore.serviceDetails.transfer_Note = ''
      this.$router.go(-3)
      
    }
  }
}
</script>
