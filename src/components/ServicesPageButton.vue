<template>
  <div class="servicesPageButton ion-activatable">
    <ion-icon :icon="icon_name"/>
    <ion-label> <slot> Button </slot> </ion-label>
    <ion-ripple-effect></ion-ripple-effect>
  </div>
</template>

<style scoped>
.servicesPageButton {
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.3);
  border-radius: 10px;
  padding: 15px 15px;
  gap: 8px;
  overflow: hidden;
  position: relative;
}
ion-icon {
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
  border-radius: 999px;
  padding: .4em;
  font-size: large;
}
ion-label {
  font-size: medium;
  font-weight: bold;
}
</style>

<script setup>
import { receiptOutline } from 'ionicons/icons';
import { IonIcon, IonLabel, IonRippleEffect } from '@ionic/vue';

defineProps({
  icon_name: {
    type: String,
    default: receiptOutline, // Default empty string or provide a default icon source (value: SVG URL String)
  },
});

const receiptOutlineIcon = receiptOutline;
</script>

