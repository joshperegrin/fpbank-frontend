<template>
  <ion-header>
    <div class="icon-circle">
      <ion-icon color="primary" :src='downloadOutline'></ion-icon>
    </div>
    <ion-toolbar color="primary">
      <ion-title>Download your Statements</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>

    <ion-text>Your transaction history will be sent to the email address connected to your account, or can be downloaded as a CSV file. All transactions are in PH time (GMT+8)</ion-text>
    <ion-buttons>
      <ion-button color="primary" fill="outline" shape='round' size="small">Send Me an Email</ion-button>
      <ion-button color="primary" fill="solid" shape='round' size="small">Download as CSV</ion-button>
    </ion-buttons>

  </ion-content>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonContent, IonButton, IonButtons } from '@ionic/vue';
import { downloadOutline } from 'ionicons/icons';
export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonContent,
    IonButton,
    IonButtons,
  },
  data() {
    return {
      downloadOutline,
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

.icon-circle {
  background-color: var(--ion-color-primary-contrast);
  width: 5em;
  height: 5em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-icon {
  font-size: 3em; /* Adjust to fit within circle */
}
</style>