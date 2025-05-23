<template>
  <div class="range-selector">
    <ion-label class="ion-padding-top" color="primary"><h1>Select Date Range</h1></ion-label>
    <ion-select
        fill="outline"
        v-model="selectedRange"
        interface="popover"
        :toggleIcon="timeOutline"
        :expandedIcon="timeOutline"
        placeholder="Choose a range"
        @ionChange="handleRangeChange"
    >
      <ion-select-option value="3">Last 3 Months</ion-select-option>
      <ion-select-option value="6">Last 6 Months</ion-select-option>
      <ion-select-option value="12">Last 12 Months</ion-select-option>
    </ion-select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import { timeOutline } from 'ionicons/icons'

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