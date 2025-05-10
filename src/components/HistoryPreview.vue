<template>
    <ion-list>
      <ion-item v-for="(transaction, index) in transactions.slice(0, 3)" :key="index">
        <ion-label>
          <h2>{{ transaction.amount >= 0 ? '+' : '' }}{{ transaction.amount }} PHP</h2>
          <p>{{ transaction.status }}</p>
        </ion-label>
      </ion-item>
    </ion-list>
    <ion-button expand="block" :router-link= "{ name: 'history_page_1' }" router-direction="forward">View transaction history</ion-button>
</template>

<script setup>
import { IonList, IonItem, IonLabel, IonButton } from '@ionic/vue';

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