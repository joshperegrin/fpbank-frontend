<template>
  <ion-page>
    <ion-content>
      <GenericHeader
          title="Successful Transaction"
          :icon_src="checkmark"
      />
      <HistoryTransactionDetails
          v-if="selectedTransaction"
          :Transaction="selectedTransaction"
      />
      <ion-text v-else class="no-transaction">
        <h2>Transaction Not Found</h2>
      </ion-text>
      <HistoryCopyableCard :content="selectedTransaction?.transactionNumber || 'N/A'">
        Transaction Number
      </HistoryCopyableCard>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonText } from '@ionic/vue';
import GenericHeader from '@/components/GenericHeader.vue';
import { checkmark } from 'ionicons/icons';
import HistoryTransactionDetails from '@/components/HistoryTransactionDetails.vue';
import HistoryCopyableCard from '@/components/HistoryCopyableCard.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// Get route parameter
const route = useRoute();
const transactionId = route.params.id;

// Sample transaction details with id
const sampleTransactionDetails = [
  {
    id: 'tx1',
    transactionNumber: 'MBCACC241222075807865447777',
    transactionName: 'Payment to John Doe',
    transactionDate: new Date().toISOString(),
    transferFrom: 'SA:Jude Tabuzo (****5678)',
    transferTo: 'SA:John Doe (****1234)',
    recipientName: 'John Doe',
    amount: 100.0,
    note: 'Sent payment for services',
  },
  {
    id: 'tx2',
    transactionNumber: 'NBCACC241222075807865447778',
    transactionName: 'Jollibee Order',
    transactionDate: '2023-11-01T10:30:00Z',
    transferFrom: 'SA:Jane Smith (****5432)',
    transferTo: 'Jollibee inc. (****9876)',
    recipientName: 'Jollibee inc.',
    amount: -50.25,
    note: 'Yumburger original',
  },
  {
    id: 'tx3',
    transactionNumber: 'OBCACC241222075807865447779',
    transactionName: 'Payment from Employer Wilson',
    transactionDate: '2023-10-15T14:45:00Z',
    transferFrom: 'CA:Wilson (****5678)',
    transferTo: 'SA:Alice Johnson (****1234)',
    recipientName: 'Alice Johnson',
    amount: 200.75,
    note: 'Received payment for invoice #123',
  },
  {
    id: 'tx4',
    transactionNumber: 'PBCACC241222075807865447770',
    transactionName: 'Payment to Megamart',
    transactionDate: '2023-09-20T08:15:00Z',
    transferFrom: 'SA:Bob Brown (****8765)',
    transferTo: 'Megamart inc. (****4321)',
    recipientName: 'Megamart inc.',
    amount: -75.0,
    note: 'Sent payment for goods',
  },
];
// Find the transaction by id
const selectedTransaction = computed(() => {
  return sampleTransactionDetails.find(t => t.id === transactionId) || null;
});
</script>

<style scoped>
.no-transaction {
  display: block;
  text-align: center;
  padding: 20px;
  color: var(--ion-color-danger);
}
</style>