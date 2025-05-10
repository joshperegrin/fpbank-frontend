<template>
  <ion-toolbar>
    <ion-segment class="ion-padding" :value="activeFilter" @ionChange="setFilter($event.detail.value)">
      <ion-segment-button value="all">
        <ion-label>All</ion-label>
      </ion-segment-button>
      <ion-segment-button value="received">
        <ion-label>Received</ion-label>
      </ion-segment-button>
      <ion-segment-button value="sent">
        <ion-label>Sent</ion-label>
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>
</template>

<style scoped>
ion-segment {
  --indicator-box-shadow: none; /* Disable shadow */
  --ripple-color: transparent; /* Disable ripple animation */
  --border-radius: 100px;
}

ion-segment-button {
  --border-radius: 100px; /* Curved, rounded borders */
  --border-width: 0px;
  --border-style: solid;
  --border-color: var(--ion-color-primary);
  --background: transparent;
  --background-checked: var(--ion-color-primary); /* Filled background when active */
  --color: var(--ion-color-primary);
  --color-checked: var(--ion-color-primary-contrast);
  --padding-start: 0em;
  --padding-end: 0em;
  --padding-top: 0em;
  --padding-bottom: 0em;
  min-width: 60px; /*Ensure buttons don’t collapse */
  text-align: center;
  transition: all 0.01s ease;
}
</style>

<script setup>
import { ref } from 'vue';
import { IonToolbar, IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue';

const activeFilter = ref('all');
const emit = defineEmits(['filter-changed']);

function setFilter(value) {
  activeFilter.value = value;
  emit('filter-changed', value);
}
</script>