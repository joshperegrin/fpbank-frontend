<template>
  <ion-text v-if="acc_details">
    <ion-icon :src="'src/assets/svgs/bank.svg'"></ion-icon>
    {{ account.number }}
  </ion-text>
  <ion-button v-else size="large" :router-link="{ name: 'dashboard_page_2' }" router-direction="forward">
    Savings Account
    <ion-icon slot="end" :icon='chevronForward'></ion-icon>
  </ion-button>
  <ion-text>
    <div class="balance ion-text-center">
      <h2>{{ account.amount }}</h2>
      <h3>{{ account.currency }}</h3>
    </div>
  </ion-text>
</template>

<script setup>
import { IonButton, IonIcon, IonText } from '@ionic/vue';
import { chevronForward } from "ionicons/icons";

defineProps({
  account: {
    type: Object,
    required: true,
    default: () => ({
      amount: '0.00',
      number: '',
      currency: 'PHP',
    }),
  },
  acc_details: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.balance {
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
}

.balance h2 {
  font-weight: bold;
  font-size: 2em;
}

.balance h3 {
  margin-left: 0.5em;
  font-size: 0.8em;
}
</style>