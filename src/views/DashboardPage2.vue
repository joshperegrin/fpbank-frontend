<template>
  <ion-page>
    <ion-content>
      <GenericHeader
          title="Account Details"
          :icon_src="bank"
      >
        <DashboardHeader
            :account="account"
            :acc_details="true"
        />
      </GenericHeader>
      <div class="content-body">
        <!--<DashboardSavingsDetails/>--> <!--NOTE: Backlogged-->
        <CreditCard :card-details="cardDetails" />

        <GenericCardWidgets title="Recent Transactions">
          <HistoryPreview :Transactions="transactions" />
          <ion-button expand="block" shape="round" :router-link="{ name: 'history_page_1' }" router-direction="forward">
            <ion-icon slot="end" :src="timeOutline" />
            See Full History
          </ion-button>
        </GenericCardWidgets>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import GenericHeader from "@/components/GenericHeader.vue";
import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { timeOutline } from "ionicons/icons";
import bank from "@/assets/svgs/bank.svg";
import DashboardSavingsDetails from "@/components/DashboardSavingsDetails.vue";
import DashboardHeader from "@/components/DashboardHeader.vue";
import HistoryPreview from "@/components/HistoryPreview.vue";
import { ref } from "vue";
import GenericCardWidgets from "@/components/GenericCardWidgets.vue";
import CreditCard from "@/components/DashboardCC.vue";

const account = {
  amount: '370,740.21',
  number: '002376543210',
  currency: 'PHP',
};

const cardDetails = {
  type: 'Visa',
  number: '1234567890123456',
  name: 'Juan Dela Cruz',
  expiry: '12/25',
  cvv: '123',
  logo: 'src/assets/svgs/logo.svg',
};

const transactions = ref([
  {
    clientName: 'Jane Smith',
    accountNumber: '9876-5432',
    datetime: new Date('2023-11-01T10:30:00Z'),
    amount: -50.25,
    status: 'pending',
    detailId: 'tx2',
  },
  {
    clientName: 'John Doe',
    accountNumber: '1234-5678',
    datetime: new Date(),
    amount: 100.0,
    status: 'sent',
    detailId: 'tx1',
  },
  {
    clientName: 'Alice Johnson',
    accountNumber: '5678-1234',
    datetime: new Date('2023-10-15T14:45:00Z'),
    amount: 200.75,
    status: 'sent',
    detailId: 'tx3',
  },
  {
    clientName: 'Bob Brown',
    accountNumber: '4321-8765',
    datetime: new Date('2023-09-20T08:15:00Z'),
    amount: -75.0,
    status: 'pending',
    detailId: 'tx4',
  },
]);
</script>

<style scoped>
</style>