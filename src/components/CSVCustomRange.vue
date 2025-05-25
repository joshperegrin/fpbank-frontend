<template>
  <div class="custom-selector">
    <ion-label color="primary" class="ion-padding-top"><h1>Custom Date Range</h1></ion-label>
    <ion-input
        readonly
        fill="outline"
        :value="localStartDate ? localStartDate.toDateString() : ''"
        placeholder="Start Date"
        @click="openStartDatePopover"
    >
      <ion-icon color="medium" slot="end" :src="calendarClear" aria-hidden="true"/>
    </ion-input>
    <ion-input
        readonly
        fill="outline"
        :value="localEndDate ? localEndDate.toDateString() : ''"
        placeholder="End Date"
        @click="openEndDatePopover"
    >
      <ion-icon color="medium" slot="end" :src="calendarClear" aria-hidden="true"/>
    </ion-input>
    <ion-popover :is-open="isStartPopoverOpen" alignment="center" @didDismiss="isStartPopoverOpen = false">
      <ion-content>
        <ion-datetime
            v-model="startDateValue"
            :min="minDate"
            :max="maxDate"
            presentation="date"
            @ionChange="selectStartDate"
        />
        <ion-button expand="block" @click="confirmStartDate">Done</ion-button>
      </ion-content>
    </ion-popover>
    <ion-popover :is-open="isEndPopoverOpen" alignment="center" @didDismiss="isEndPopoverOpen = false">
      <ion-content>
        <ion-datetime
            v-model="endDateValue"
            :min="minDate"
            :max="maxDate"
            presentation="date"
            @ionChange="selectEndDate"
        />
        <ion-button expand="block" @click="confirmEndDate">Done</ion-button>
      </ion-content>
    </ion-popover>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { IonLabel, IonInput, IonPopover, IonDatetime, IonButton, IonContent, IonIcon } from '@ionic/vue';
import { calendarClear } from 'ionicons/icons'

const props = defineProps({
  startDate: Date,
  endDate: Date,
});
const emit = defineEmits(['date-range-selected']);

const minDate = '2000-01-01';
const maxDate = new Date().toISOString().split('T')[0];
const localStartDate = ref(props.startDate);
const localEndDate = ref(props.endDate);
const startDateValue = ref(props.startDate?.toISOString().split('T')[0]);
const endDateValue = ref(props.endDate?.toISOString().split('T')[0]);
const isStartPopoverOpen = ref(false);
const isEndPopoverOpen = ref(false);

watch(() => props.startDate, (newVal) => { localStartDate.value = newVal; startDateValue.value = newVal?.toISOString().split('T')[0]; });
watch(() => props.endDate, (newVal) => { localEndDate.value = newVal; endDateValue.value = newVal?.toISOString().split('T')[0]; });

function openStartDatePopover() { isStartPopoverOpen.value = true; }
function openEndDatePopover() { isEndPopoverOpen.value = true; }
function selectStartDate(event) { localStartDate.value = new Date(event.detail.value); }
function selectEndDate(event) { localEndDate.value = new Date(event.detail.value); }

function confirmStartDate() {
  if (localStartDate.value && localEndDate.value && localStartDate.value > localEndDate.value) {
    alert('Start date cannot be after end date');
    return;
  }
  if (localStartDate.value) {
    emit('date-range-selected', { startDate: localStartDate.value, endDate: localEndDate.value });
    isStartPopoverOpen.value = false;
  }
}

function confirmEndDate() {
  if (localStartDate.value && localEndDate.value && localStartDate.value > localEndDate.value) {
    alert('End date cannot be before start date');
    return;
  }
  if (localEndDate.value) {
    emit('date-range-selected', { startDate: localStartDate.value, endDate: localEndDate.value });
    isEndPopoverOpen.value = false;
  }
}
</script>

<style scoped>
.custom-selector {
  margin-bottom: 20px;
}
ion-input {
  margin-top: 10px;
}
</style>