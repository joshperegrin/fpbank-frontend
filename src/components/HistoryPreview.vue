<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Recent Transactions</ion-card-title>
    </ion-card-header>
    <ion-list>
      <ion-item v-for="(transaction, index) in transactions.slice(0, 3)" :key="index">
        <ion-label>
          <h2>{{ transaction.amount >= 0 ? '+' : '' }}{{ transaction.amount }} PHP</h2>
          <p>{{ transaction.status }}</p>
        </ion-label>
      </ion-item>
    </ion-list>
    <ion-button expand="block" :router-link= "{ name: 'history_page_1' }">View transaction history</ion-button>
  </ion-card>
</template>

<script setup>
import { IonCard, IonCardHeader, IonCardTitle, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue';

defineProps({
  transactions: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}
ion-label h2 {
  font-size: 1em;
}
ion-label p {
  font-size: 0.8em;
}
</style>