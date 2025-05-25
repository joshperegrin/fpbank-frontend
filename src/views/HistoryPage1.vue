<template>
  <ion-page>
    <ion-content>
      <GenericHeader title="Transaction History">
        <ion-item color="primary">
          <ion-searchbar
              placeholder="Search Transaction..."
              v-model="searchQuery"
              @ionInput="searchQuery = $event.target.value"
          />
          <ion-button
              :router-link="{ name: 'history_page_2' }"
              router-direction="forward"
              size="large"
              fill="solid"
              shape="round"
          >
            <ion-icon slot="icon-only" :src="downloadOutline" />
          </ion-button>
        </ion-item>
      </GenericHeader>
      <HistoryFilters @filter-changed="handleFilterChange" />
      <ion-segment-view>
        <ion-segment-content id="all">
          <ion-text v-if="groupedTransactions.all.length === 0" class="no-transactions">
            <h2>{{ searchQuery ? 'No Transactions Found' : 'No Transactions Yet! Start Transaction Now' }}</h2>
          </ion-text>
          <ion-list v-else v-for="[month, transactions] in groupedTransactions.all" :key="month">
            <ion-list-header>
              <ion-label color="primary">
                <h2>Month of {{ month }}</h2>
              </ion-label>
            </ion-list-header>
            <HistoryTransactionCards
                v-for="(transaction, index) in transactions"
                :key="index"
                :Transaction="transaction"
                :ShowMonthHeader="false"
            />
          </ion-list>
        </ion-segment-content>
        <ion-segment-content id="received">
          <ion-text v-if="groupedTransactions.received.length === 0" class="no-transactions">
            <h2>{{ searchQuery ? 'No Transactions Found' : 'No Transactions Yet! Start Transaction Now' }}</h2>
          </ion-text>
          <ion-list v-else v-for="[month, transactions] in groupedTransactions.received" :key="month">
            <ion-list-header>
              <ion-label>
                <h2>Month of {{ month }}</h2>
              </ion-label>
            </ion-list-header>
            <HistoryTransactionCards
                v-for="(transaction, index) in transactions"
                :key="index"
                :Transaction="transaction"
                :ShowMonthHeader="false"
            />
          </ion-list>
        </ion-segment-content>
        <ion-segment-content id="sent">
          <ion-text v-if="groupedTransactions.sent.length === 0" class="no-transactions">
            <h2>{{ searchQuery ? 'No Transactions Found' : 'No Transactions Yet! Start Transaction Now' }}</h2>
          </ion-text>
          <ion-list v-else v-for="[month, transactions] in groupedTransactions.sent" :key="month">
            <ion-list-header>
              <ion-label>
                <h2>Month of {{ month }}</h2>
              </ion-label>
            </ion-list-header>
            <HistoryTransactionCards
                v-for="(transaction, index) in transactions"
                :key="index"
                :Transaction="transaction"
                :ShowMonthHeader="false"
            />
          </ion-list>
        </ion-segment-content>
      </ion-segment-view>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonIcon,
  IonContent,
  IonButton,
  IonSearchbar,
  IonItem,
  IonText,
  IonList,
  IonListHeader,
  IonLabel,
} from '@ionic/vue';
import { downloadOutline } from 'ionicons/icons';
import GenericHeader from '@/components/GenericHeader.vue';
import HistoryFilters from '@/components/HistoryFilters.vue';
import HistoryTransactionCards from '@/components/HistoryTransactionCards.vue';
import { computed, ref, onMounted } from 'vue';
import { useAccountStore } from '../stores/accounts.store';

const accountStore = useAccountStore();
const transactions = ref([]);
const searchQuery = ref('');

onMounted(async () => {
  const rawTransactions = await accountStore.fetchUserTransactionHistory(1, 20);
  transactions.value = rawTransactions.map(t => ({
    clientName: t.transactionName,
    accountNumber: accountStore.accountInfo.accountNumber || 'N/A',
    datetime: t.transactionDate,
    amount: t.transferAmount,
    status: t.transactionStatus.toLowerCase(),
    detailId: t.transactionReferenceNumber
  }));
  if (!transactions.value.length) console.log('No transactions fetched');
});

// Filtered transactions based on search query
const filteredTransactions = computed(() => {
  if (!searchQuery.value) return transactions.value;
  const query = searchQuery.value.toLowerCase();
  return transactions.value.filter(t =>
      t.clientName.toLowerCase().includes(query) ||
      t.accountNumber.toLowerCase().includes(query)
  );
});

// Group transactions by month for each filter
const groupedTransactions = computed(() => {
  const groupByMonth = (trans) => {
    const groups = trans.reduce((acc, t) => {
      if (!isValidTransaction(t)) return acc;
      const date = new Date(t.datetime);
      const month = date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
      acc[month] = acc[month] || [];
      acc[month].push(t);
      return acc;
    }, {});
    return Object.entries(groups).sort(([a], [b]) => new Date(b) - new Date(a));
  };

  return {
    all: groupByMonth(filteredTransactions.value),
    received: groupByMonth(filteredTransactions.value.filter(t => t.amount > 0)),
    sent: groupByMonth(filteredTransactions.value.filter(t => t.amount < 0))
  };
});

// Validate transaction
function isValidTransaction(transaction) {
  const parsedDate = new Date(transaction.datetime);
  return (
      transaction.clientName &&
      transaction.accountNumber &&
      transaction.datetime &&
      parsedDate instanceof Date &&
      !isNaN(parsedDate) &&
      transaction.status
  );
}

// Handle filter change from HistoryFilters
function handleFilterChange(filter) {
  console.log('Filter changed to:', filter);
}
</script>

<style scoped>
.content-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
}

ion-searchbar {
  --border-radius: 100px;
}

.no-transactions {
  display: block;
  text-align: center;
  padding: 20px;
  color: var(--ion-color-medium);
}

ion-list-header {
  padding: 10px 16px;
  background: var(--ion-background-color, #fff);
}
</style>