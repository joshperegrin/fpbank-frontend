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

<style scoped>
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
import { computed, ref } from 'vue';

// Sample transaction data with detailId
const transactions = ref([
  {
    clientName: 'John Doe',
    accountNumber: '1234-5678',
    datetime: new Date(),
    amount: 100.0,
    status: 'sent',
    detailId: 'tx1',
  },
  {
    clientName: 'Jane Smith',
    accountNumber: '9876-5432',
    datetime: new Date('2023-11-01T10:30:00Z'),
    amount: -50.25,
    status: 'pending',
    detailId: 'tx2',
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

// Search query
const searchQuery = ref('');

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
    sent: groupByMonth(filteredTransactions.value.filter(t => t.amount < 0)),
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