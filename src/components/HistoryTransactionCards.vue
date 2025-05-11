<template>
  <div class="transaction-card-wrapper">
    <ion-list-header v-if="isValidData && ShowMonthHeader">
      <ion-label>
        <h2>Month of {{ formattedMonth }}</h2>
      </ion-label>
    </ion-list-header>
    <ion-card
        class="transaction-card"
        button="true"
        :router-link="{ name: 'history_page_3', params: { id: Transaction.detailId } }"
        router-direction="forward"
    >
      <ion-card-content>
        <div class="card-content" v-if="isValidData">
          <!-- Left Side -->
          <div class="left-section">
            <ion-text color="primary">
              <h2>{{ Transaction.clientName }}</h2>
            </ion-text>
            <ion-text color="secondary">
              <p class="account-number">{{ Transaction.accountNumber }}</p>
            </ion-text>
            <ion-text color="medium">
              <p class="datetime">{{ formattedDatetime }}</p>
            </ion-text>
          </div>
          <!-- Right Side -->
          <div class="right-section">
            <ion-text :color="amountColor">
              <h2 class="amount">{{ formattedAmount }}</h2>
            </ion-text>
            <ion-text :color="statusColor">
              <p class="status">{{ Transaction.status }}</p>
            </ion-text>
          </div>
        </div>
        <div class="card-content placeholder" v-else>
          <!-- Placeholder -->
          <div class="left-section">
            <ion-text color="medium">
              <h2>Loading...</h2>
            </ion-text>
            <ion-text color="medium">
              <p class="account-number">XXXX-XXXX</p>
            </ion-text>
            <ion-text color="medium">
              <p class="datetime">Pending...</p>
            </ion-text>
          </div>
          <div class="right-section">
            <ion-text color="medium">
              <h2 class="amount">$0.00</h2>
            </ion-text>
            <ion-text color="medium">
              <p class="status">Pending</p>
            </ion-text>
          </div>
        </div>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<style scoped>
.transaction-card-wrapper {
  margin: 10px;
}

.transaction-card {
  --background: var(--ion-color-light);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

ion-list-header {
  padding: 10px 16px;
  background: var(--ion-background-color, #fff);
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.left-section,
.right-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.left-section h2 {
  font-size: 1.5rem;
  margin: 0;
}

.account-number {
  font-size: 1rem;
  margin: 0;
}

.datetime {
  font-size: 0.875rem;
  margin: 0;
}

.right-section {
  align-items: flex-end;
}

.amount {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.status {
  font-size: 1rem;
  text-transform: capitalize;
  margin: 0;
}

.placeholder {
  opacity: 0.6;
}
</style>

<script setup>
import { IonCard, IonCardContent, IonText, IonListHeader, IonLabel } from '@ionic/vue';
import { computed } from 'vue';

// Define props
const props = defineProps({
  Transaction: {
    type: Object,
    required: true,
    default: () => ({
      clientName: '',
      accountNumber: '',
      datetime: '',
      amount: 0,
      status: 'pending',
      detailId: '',
    }),
    validator: (transaction) => {
      const validStatus = ['sent', 'pending', ''].includes(transaction.status?.toLowerCase() ?? '');
      return typeof transaction.clientName === 'string' &&
          typeof transaction.accountNumber === 'string' &&
          (typeof transaction.datetime === 'string' || transaction.datetime instanceof Date) &&
          typeof transaction.amount === 'number' &&
          typeof transaction.status === 'string' &&
          typeof transaction.detailId === 'string' &&
          validStatus;
    },
  },
  ShowMonthHeader: {
    type: Boolean,
    default: false,
  },
});

// Methods
function isValidDate(date) {
  if (!date) return false;
  const parsed = new Date(date);
  return parsed instanceof Date && !isNaN(parsed);
}

// Computed properties
const isValidData = computed(() => {
  return (
      props.Transaction.clientName &&
      props.Transaction.accountNumber &&
      props.Transaction.datetime &&
      isValidDate(props.Transaction.datetime) &&
      props.Transaction.status
  );
});

const formattedDatetime = computed(() => {
  if (!isValidDate(props.Transaction.datetime)) return 'Invalid Date';
  const date = new Date(props.Transaction.datetime);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
});

const formattedMonth = computed(() => {
  if (!isValidDate(props.Transaction.datetime)) return '';
  const date = new Date(props.Transaction.datetime);
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
});

const formattedAmount = computed(() => {
  const sign = props.Transaction.amount >= 0 ? '+' : '-';
  return `${sign}$${Math.abs(props.Transaction.amount).toFixed(2)}`;
});

const amountColor = computed(() => {
  return props.Transaction.amount >= 0 ? 'success' : 'danger';
});

const statusColor = computed(() => {
  return props.Transaction.status.toLowerCase() === 'sent' ? 'success' : 'danger';
});
</script>