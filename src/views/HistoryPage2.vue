<template>
  <GenericHeader
    title="Download your Statements"
    :icon_src="downloadOutline"
  />
  <ion-content>
    <div class="content-body">
      <ion-list>
        <ion-label>History</ion-label>
        <ion-select label-placement="floating" fill="outline" placeholder="Choose range" interface="popover">
          <ion-select-option value="3">3 months</ion-select-option>
          <ion-select-option value="6">6 months</ion-select-option>
          <ion-select-option value="12">12 months</ion-select-option>
        </ion-select>
      </ion-list>
        <ion-list>
          <ion-label>Select Custom Date</ion-label>
          <ion-input label="Start Date" label-placement="floating" fill='outline' placeholder="Start date"></ion-input>
          <ion-input label="End Date" label-placement="floating" fill='outline' placeholder="End date"></ion-input>
        </ion-list>

      <ion-text>Your transaction history will be sent to the email address connected to your account, or can be downloaded as a CSV file. All transactions are in PH time (GMT+8)</ion-text>
      <ion-buttons class="ion-justify-content-between">
        <ion-button color="primary" fill="outline" shape='round' size="small">Send Me an Email</ion-button>
        <ion-button color="primary" fill="solid" shape='round' size="small">Download as CSV</ion-button>
      </ion-buttons>
    </div>

  </ion-content>
</template>

<script setup>
import { IonContent, IonButton, IonButtons } from '@ionic/vue';
import { downloadOutline } from 'ionicons/icons';
import GenericHeader from "@/components/GenericHeader.vue";
</script>

<style scoped>
.content-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
</style>