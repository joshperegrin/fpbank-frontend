<template>
  <ion-text v-if="show_acc_number">
    <ion-icon :src="'src/assets/svgs/bank.svg'"></ion-icon>
    {{ account.number }}
  </ion-text>
  <ion-text>
    <div class="balance ion-text-center">
      <h2>{{ account.amount }}</h2>
      <h3>{{ account.currency }}</h3>
    </div>
  </ion-text>
</template>

<script setup>
import { IonIcon, IonText } from '@ionic/vue';

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
  show_acc_number: {
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

.title {
  font-size: 1.5em;
  padding: 0.5em;
  display: flex;
  align-items: center;
  font-weight: bold;
}
</style>