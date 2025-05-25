<template>
  <ion-list class="transaction-list">
    <ion-item
        v-for="(transaction, index) in sortedTransactions"
        :key="index"
        :router-link="{ name: 'history_page_3', params: { id: transaction.detailId } }"
        router-direction="forward"
        button
        lines="none"
    >
      <ion-label>
        <div class="transaction-content" v-if="isValidData(transaction)">
          <!-- Left Side -->
          <div class="left-section">
            <ion-text color="primary">
              <h3>{{ transaction.clientName }}</h3>
            </ion-text>
            <ion-text color="medium">
              <p class="datetime">{{ formattedDatetime(transaction.datetime) }}</p>
            </ion-text>
          </div>
          <!-- Right Side -->
          <div class="right-section">
            <ion-text :color="amountColor(transaction.amount, transaction.transactionType)">
              <h3 class="amount">{{ formattedAmount(transaction.amount, transaction.transactionType) }}</h3>
            </ion-text>
            <ion-text :color="statusColor(transaction.status)">
              <p class="status">{{ transaction.status }}</p>
            </ion-text>
          </div>
        </div>
        <div class="transaction-content placeholder" v-else>
          <!-- Placeholder -->
          <div class="left-section">
            <ion-text color="medium">
              <h3>Loading...</h3>
            </ion-text>
            <ion-text color="medium">
              <p class="datetime">Pending...</p>
            </ion-text>
          </div>
          <div class="right-section">
            <ion-text color="medium">
              <h3 class="amount">$0.00</h3>
            </ion-text>
            <ion-text color="medium">
              <p class="status">Pending</p>
            </ion-text>
          </div>
        </div>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script setup>
import {IonList, IonItem, IonLabel, IonText} from '@ionic/vue';
import {computed} from 'vue';

const props = defineProps({
  Transactions: {
    type: Array,
    required: true,
    default: () => [],
    validator: (transactions) => transactions.every(t =>
        typeof t.transactionName === 'string' &&
        (typeof t.transactionDate === 'string' || t.transactionDate instanceof Date) &&
        typeof t.transferAmount === 'number' &&
        typeof t.transactionStatus === 'string' &&
        typeof t.transactionReferenceNumber === 'string' &&
        (typeof t.entryType === 'string' || t.entryType === undefined)
    ),
  },
});

const sortedTransactions = computed(() => {
  const transactions = [...props.Transactions]
      .map(t => {
        console.log('Transaction:', t); // Debug log
        return {
          clientName: t.transactionName,
          datetime: t.transactionDate,
          amount: t.transferAmount,
          status: t.transactionStatus?.toLowerCase() || 'pending',
          detailId: t.transactionReferenceNumber,
          entryType: t.entryType?.toUpperCase() || ''
        };
      })
      .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
      .slice(0, 3);
  console.log('Sorted transactions:', transactions); // Debug log
  return transactions;
});

// Methods
function isValidDate(date) {
  if (!date) return false;
  const parsed = new Date(date);
  return parsed instanceof Date && !isNaN(parsed);
}

function isValidData(transaction) {
  return (
      transaction.clientName &&
      transaction.datetime &&
      isValidDate(transaction.datetime) &&
      transaction.status
  );
}

function formattedDatetime(datetime) {
  if (!isValidDate(datetime)) return 'Invalid Date';
  const date = new Date(datetime);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function formattedAmount(amount, entryType) {
  console.log('Formatting amount:', {amount, entryType}); // Debug log
  const type = entryType?.toUpperCase().trim();
  const sign = type === 'CREDIT' ? '+' : type === 'DEBIT' ? '-' : '';
  return `${sign}$${Math.abs(amount).toFixed(2)}`;
}

function amountColor(entryType) {
  console.log('Amount color for entryType:', entryType); // Debug log
  const type = typeof entryType === 'string' ? entryType.toUpperCase().trim() : null;
  return type === 'CREDIT' ? 'success' : type === 'DEBIT' ? 'danger' : 'medium';
}

function statusColor(status) {
  const validStatus = status?.toLowerCase();
  return ['sent', 'complete', 'completed'].includes(validStatus) ? 'success' : 'danger';
}
</script>

<style scoped>
.transaction-list {
  margin: 0;
  padding: 0;
  background: var(--ion-background-color, #fff);
}

ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --inner-padding-end: 0;
}

.transaction-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-section,
.right-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.left-section h3 {
  font-size: 1rem;
  margin: 0;
}

.datetime {
  font-size: 0.8rem;
  margin: 0;
}

.right-section {
  align-items: flex-end;
}

.amount {
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
}

.status {
  font-size: 0.8rem;
  text-transform: capitalize;
  margin: 0;
}

.placeholder {
  opacity: 0.6;
}
</style>
