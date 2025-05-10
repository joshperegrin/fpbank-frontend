<template>
  <ion-card class="transaction-card">
    <ion-card-content>
      <div class="card-content" v-if="isValidData">
        <!-- Left Side -->
        <div class="left-section">
          <ion-text color="primary">
            <h2>{{ clientName }}</h2>
          </ion-text>
          <ion-text color="secondary">
            <p class="account-number">{{ accountNumber }}</p>
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
            <p class="status">{{ status }}</p>
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
</template>

<style scoped>
.transaction-card {
  margin: 10px;
  --background: var(--ion-color-light);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
import { IonCard, IonCardContent, IonText } from '@ionic/vue';
import { computed } from 'vue';

// Define and destructure props
const props = defineProps({
  clientName: { type: String, default: '' },
  accountNumber: { type: String, default: '' },
  datetime: { type: [String, Date], default: '' },
  amount: { type: Number, default: 0 },
  status: {
    type: String,
    default: 'pending',
    validator: (value) => ['sent', 'pending', ''].includes(value.toLowerCase()),
  },
});
const { clientName, accountNumber, datetime, amount, status } = props;

// Methods
function isValidDate(date) {
  if (!date) return false;
  const parsed = new Date(date);
  return parsed instanceof Date && !isNaN(parsed);
}

// Computed properties
const isValidData = computed(() => {
  return (
      clientName &&
      accountNumber &&
      datetime &&
      isValidDate(datetime) &&
      status
  );
});

const formattedDatetime = computed(() => {
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
});

const formattedAmount = computed(() => {
  const sign = amount >= 0 ? '+' : '-';
  return `${sign}$${Math.abs(amount).toFixed(2)}`;
});

const amountColor = computed(() => {
  return amount >= 0 ? 'success' : 'danger';
});

const statusColor = computed(() => {
  return status.toLowerCase() === 'sent' ? 'success' : 'danger';
});
</script>