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
import { computed, onMounted, ref } from 'vue';
import { useAccountStore } from '../stores/accounts.store';

const route = useRoute();
const accountStore = useAccountStore();
const transactionId = route.params.id;
const selectedTransaction = ref(null);

onMounted(async () => {
  const rawTransactions = await accountStore.fetchUserTransactionHistory(1, 20);
  const transaction = rawTransactions.find(t => t.transactionReferenceNumber === transactionId);
  if (transaction) {
    selectedTransaction.value = {
      transactionNumber: transaction.transactionReferenceNumber,
      transactionName: transaction.transactionName,
      transactionDate: transaction.transactionDate,
      transferFrom: `SA:${accountStore.user.firstname} ${accountStore.user.lastname} (****${accountStore.accountInfo.accountNumber.slice(-4)})`,
      transferTo: transaction.transactionDetails?.recipientAccount
          ? `SA:${transaction.transactionName.split(' to ')[1]} (****${transaction.transactionDetails.recipientAccount.slice(-4)})`
          : transaction.transactionName.split(' to ')[1] || 'N/A',
      recipientName: transaction.transactionName.split(' to ')[1] || 'N/A',
      amount: transaction.transferAmount,
      note: transaction.note || 'No note provided'
    };
  }
});
</script>

<style scoped>
.content-body {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1em;
}

.no-transaction {
  display: block;
  text-align: center;
  padding: 20px;
  color: var(--ion-color-danger);
}
</style>
