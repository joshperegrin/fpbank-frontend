<template>
  <ion-list>
    <ion-list-header lines="full">
      <ion-label><h2>Transaction Details</h2></ion-label>
    </ion-list-header>
    <ion-item v-for="(value, key) in formattedTransaction" :key="key" lines="full">
      <ion-label class="transaction-label">
        <strong>{{ formatLabel(key) }}</strong>
        <span>{{ value }}</span>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<style scoped>
ion-list {
  margin: 16px;
  border-radius: 8px;
  background: var(--ion-background-color, #fff);
}

ion-list-header {
  padding: 16px;
  background: var(--ion-background-color, #fff);
}

ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
}

.transaction-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  width: 100%;
}

.transaction-label strong {
  flex: 0 0 auto;
  min-width: 150px; /* Ensures label alignment */
}

.transaction-label span {
  flex: 1;
  text-align: right; /* Aligns value to the right */
}
</style>

<script setup>
import { IonList, IonListHeader, IonLabel, IonItem } from '@ionic/vue';
import { computed } from 'vue';

// Sample transaction data (replace with database fetch)
const transaction = {
  transactionName: 'Grocery Payment',
  transactionDate: '2025-05-10T14:30:00Z',
  transferFrom: 'Savings Account (****1234)',
  transferTo: 'Merchant (****5678)',
  recipientName: 'SuperMart',
  amount: 150.75,
  note: 'Weekly groceries',
};

// Format transaction data for display
const formattedTransaction = computed(() => ({
  transactionName: transaction.transactionName,
  transactionDate: new Date(transaction.transactionDate).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }),
  transferFrom: transaction.transferFrom,
  transferTo: transaction.transferTo,
  recipientName: transaction.recipientName,
  amount: `$${transaction.amount.toFixed(2)}`,
  note: transaction.note || 'None',
}));

// Convert camelCase keys to human-readable labels
function formatLabel(key) {
  const labelMap = {
    transactionName: 'Transaction Name',
    transactionDate: 'Transaction Date',
    transferFrom: 'Transfer From',
    transferTo: 'Transfer To',
    recipientName: 'Recipient Name',
    amount: 'Amount',
    note: 'Note',
  };
  return labelMap[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}
</script>