<template>
  <ion-grid class="savings-details-grid">
    <!-- Row 1: Interest Earnings -->
    <ion-row class="interest-row" color="primary">
      <ion-col size="9">
        <ion-text class="label">
          <ion-icon :icon="trendingUpOutline" aria-label="Stocks going up"></ion-icon>
          Interest earnings (up to {{ interestRate }}% p.a.)
        </ion-text>
        <ion-text class="value">
          <h2>+{{ interestEarned }} <small>{{ currency }}</small></h2>
        </ion-text>
      </ion-col>
      <ion-col size="3" class="info-col">
        <ion-button fill="clear" color="light" @click="showInterestInfo" aria-label="Interest rate information">
          <ion-icon :icon="informationCircleOutline" slot="icon-only"></ion-icon>
        </ion-button>
      </ion-col>
    </ion-row>

    <!-- Row 2: Funds on Hold -->
    <ion-row class="funds-hold-row" color="secondary">
      <ion-col>
        <ion-text class="label">
          <ion-icon :icon="alertCircleOutline" aria-label="Exclamation"></ion-icon>
          Funds on Hold (up to {{ holdDays }} business days)
        </ion-text>
        <ion-text class="value">
          <h2>{{ fundsOnHold }} <small>{{ currency }}</small></h2>
        </ion-text>
      </ion-col>
    </ion-row>

    <!-- Row 3: Incoming and Outgoing Funds -->
    <ion-row class="funds-flow-row">
      <ion-col size="6" class="incoming-col">
        <ion-text class="label">
          <ion-icon :icon="arrowDownOutline" aria-label="Arrow going down"></ion-icon>
          Incoming
        </ion-text>
        <ion-text color="success" class="value">
          <h2>+{{ incoming }} <small>{{ currency }}</small></h2>
        </ion-text>
      </ion-col>
      <ion-col size="6" class="outgoing-col">
        <ion-text class="label">
          <ion-icon :icon="arrowUpOutline" aria-label="Arrow going up"></ion-icon>
          Outgoing
        </ion-text>
        <ion-text color="danger" class="value">
          <h2>-{{ outgoing }} <small>{{ currency }}</small></h2>
        </ion-text>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- Popover for Interest Rate Information -->
  <ion-popover :is-open="isPopoverOpen" @didDismiss="isPopoverOpen = false">
    <ion-content class="ion-padding">
      <h3>Interest Rate Calculation</h3>
      <p>The interest rate is calculated based on your daily balance and compounded monthly. Check our <a href="#">terms</a> for details.</p>
    </ion-content>
  </ion-popover>
</template>

<style scoped>
.savings-details-grid {
  --ion-grid-padding: 0;
  border-radius: 8px;
  overflow: hidden; /* Ensure rows stick together with rounded corners */
}

.interest-row,
.funds-hold-row,
.funds-flow-row {
  padding: 16px;
  margin: 0; /* Remove gaps between rows */
}

.interest-row {
  background: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
}

.funds-hold-row {
  background: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
}

.funds-flow-row {
  background: var(--ion-color-light);
}

.incoming-col {
  background: var(--ion-color-light);
  border-right: 1px solid var(--ion-color-medium);
}

.outgoing-col {
  background: var(--ion-color-light);
}

.info-col {
  background: var(--ion-color-primary-shade); /* Darker shade of primary */
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.label {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.label ion-icon {
  margin-right: 8px;
}

.value h2 {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
}

.value small {
  font-size: 0.8rem;
}
</style>

<script setup>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonIcon,
  IonButton,
  IonPopover,
  IonContent,
} from '@ionic/vue';
import {
  trendingUpOutline,
  informationCircleOutline,
  alertCircleOutline,
  arrowDownOutline,
  arrowUpOutline,
} from 'ionicons/icons';
import { ref } from 'vue';

// Props for dynamic data
defineProps({
  interestRate: { type: String, default: '5.00' },
  interestEarned: { type: String, default: '0.00' },
  holdDays: { type: Number, default: 5 },
  fundsOnHold: { type: String, default: '0.00' },
  incoming: { type: String, default: '0.00' },
  outgoing: { type: String, default: '0.00' },
  currency: { type: String, default: 'PHP' },
});

// State for popover
const isPopoverOpen = ref(false);

// Method to show popover
const showInterestInfo = () => {
  isPopoverOpen.value = true;
};
</script>