<template>
  <ion-header>
    <HistoryHeader
      title="Download your Statements"
      :iconSrc="downloadOutline"
      backLabel="Back"
      toolbarColor="primary"
    />
  </ion-header>
  <ion-content>


    <ion-list>
      <ion-label>History</ion-label>

      <ion-select label="Select Date Range" label-placement="floating" fill="outline" placeholder="Choose range" interface="popover">
        <ion-select-option value="3">3 months</ion-select-option>
        <ion-select-option value="6">6 months</ion-select-option>
        <ion-select-option value="12">12 months</ion-select-option>
      </ion-select>

      <ion-input label="Start Date" label-placement="floating" fill='outline' placeholder="Start date"></ion-input>
      <ion-input label="End Date" label-placement="floating" fill='outline' placeholder="End date"></ion-input>
    </ion-list>

    <ion-text>Your transaction history will be sent to the email address connected to your account, or can be downloaded as a CSV file. All transactions are in PH time (GMT+8)</ion-text>
    <ion-buttons>
      <ion-button color="primary" fill="outline" shape='round' size="small">Send Me an Email</ion-button>
      <ion-button color="primary" fill="solid" shape='round' size="small">Download as CSV</ion-button>
    </ion-buttons>

  </ion-content>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonContent, IonButton, IonButtons } from '@ionic/vue';
import { downloadOutline, returnDownBackOutline, } from 'ionicons/icons';
import HistoryHeader from "@/components/HistoryHeader.vue";
export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonContent,
    IonButton,
    IonButtons,
    HistoryHeader,
  },
  data() {
    return {
      downloadOutline,
      returnDownBackOutline,
    };
  },
};
</script>

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
</style>