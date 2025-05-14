<template>
  <ion-page>
    <GenericHeader
        title="Download Your Statements"
        :icon_src="downloadOutline"
    />
    <ion-content class="ion-padding">
      <div>
        <form @submit.prevent>
          <CSVMonthRange @date-range-selected="setDateRange" />
          <CSVCustomRange :start-date="dateRange.startDate" :end-date="dateRange.endDate" @date-range-selected="setDateRange" />
          <ion-buttons class="ion-justify-content-between ion-margin-vertical">
            <ion-button expand="block" size="medium" fill="outline" color="primary" shape="round" @click="downloadCSV"
                        :disabled="!dateRange.startDate || !dateRange.endDate">Download CSV
            </ion-button>
            <ion-button expand="block" size="medium" fill="solid" color="primary" shape="round" @click="sendEmail"
                        :disabled="!dateRange.startDate || !dateRange.endDate">Send via Email
            </ion-button>
          </ion-buttons>
        </form> <!--Submitting an empty calendar or list causes: 'Uncaught (in promise) RangeError: invalid date'-->

        <ion-modal :is-open="isModalOpen" @didDismiss="isModalOpen = false">
          <ion-header>
            <ion-toolbar>
              <ion-title>Transaction Details</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="isModalOpen = false">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>

          <ion-content>
            <ion-list>
              <ion-item v-for="transaction in filteredTransactions" :key="transaction.id">
                {{ transaction.date.toDateString() }} - ${{ transaction.amount.toFixed(2) }} - {{ transaction.status }}
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-modal>

        <ion-toast
            :is-open="isToastOpen"
            message="Email sent successfully"
            :duration="2000"
            @didDismiss="isToastOpen = false"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import CSVMonthRange from '@/components/CSVMonthRange.vue';
import CSVCustomRange from '@/components/CSVCustomRange.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonList, IonItem, IonToast, IonButtons } from '@ionic/vue';
import GenericHeader from "@/components/GenericHeader.vue";
import {downloadOutline} from "ionicons/icons";

const dateRange = ref({ startDate: null, endDate: null });
const isModalOpen = ref(false);
const isToastOpen = ref(false);

const sampleTransactions = [
  { id: 'tx1', date: new Date('2023-01-15'), amount: 100.00, status: 'sent' },
  { id: 'tx2', date: new Date('2023-03-20'), amount: -50.25, status: 'pending' },
  { id: 'tx3', date: new Date('2023-06-10'), amount: 200.75, status: 'sent' },
  { id: 'tx4', date: new Date('2023-09-05'), amount: -75.00, status: 'pending' },
];

const filteredTransactions = computed(() => {
  if (!dateRange.value.startDate || !dateRange.value.endDate) return [];
  return sampleTransactions.filter(t => t.date >= dateRange.value.startDate && t.date <= dateRange.value.endDate);
});

function setDateRange({ startDate, endDate }) {
  dateRange.value = { startDate, endDate };
}

function downloadCSV() {
  isModalOpen.value = true;
}

function sendEmail() {
  isToastOpen.value = true;
}
</script>

<style scoped>
ion-button {
  margin-top: 10px;
  width: 45%;
}
</style>