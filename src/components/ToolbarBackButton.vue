<template>
  <ion-toolbar :color="toolbar_color">
    <ion-button slot="start" @click="goBack">
      <ion-icon :src="returnDownBackOutline" slot="start" size="small"></ion-icon>
      Back
    </ion-button>
  </ion-toolbar>
</template>

<script setup>
import { IonButton, IonIcon, IonToolbar } from '@ionic/vue';
import { returnDownBackOutline } from 'ionicons/icons';

defineProps({
  toolbar_color: { type: String, default: 'primary' },
});

const emit = defineEmits(['back']);

function goBack() {
  emit('back') || window.history.back();
}
</script>
