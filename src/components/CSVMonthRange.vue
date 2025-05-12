<template>
  <div class="range-selector">
    <ion-label>Select Date Range</ion-label>
    <ion-select v-model="selectedRange" @ionChange="handleRangeChange" placeholder="Choose a range">
      <ion-select-option value="3">Last 3 Months</ion-select-option>
      <ion-select-option value="6">Last 6 Months</ion-select-option>
      <ion-select-option value="12">Last 12 Months</ion-select-option>
    </ion-select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';

const emit = defineEmits(['date-range-selected']);
const selectedRange = ref(null);

function handleRangeChange(event) {
  const months = parseInt(event.detail.value, 10);
  const endDate = new Date();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - months);
  emit('date-range-selected', { startDate, endDate });
}
</script>

<style scoped>
.range-selector {
  margin-bottom: 20px;
}
</style>