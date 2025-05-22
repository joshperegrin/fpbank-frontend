<template>
  <ion-card class="copyable-card ion-activatable" @click="copyContent">
    <ion-ripple-effect></ion-ripple-effect>
    <ion-card-content>
      <div class="card-header">
        <ion-icon :icon="copyOutline" aria-label="Copy"></ion-icon>
        <ion-label><h3><slot/></h3></ion-label>
      </div>
      <ion-text class="card-body">
        <h2>{{ content }}</h2>
      </ion-text>
    </ion-card-content>
  </ion-card>
</template>


<style scoped>
.copyable-card {
  margin: 16px;
  border-radius: 8px;
  background: var(--ion-background-color, #fff);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: calc(100% - 32px); /* Responsive width with margin */
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px;
}

.card-header ion-icon {
  margin-right: 8px;
  font-size: 1.5rem;
}

.card-body {
  padding: 12px;
  overflow-x: auto; /* Allow horizontal scrolling for overflow */
}

.card-body h2 {
  font-size: clamp(1rem, 2.5vw, 1.8rem);
  font-weight: bold;
  margin: 0;
  white-space: nowrap; /* Prevent text wrapping */
  line-height: 1.2; /* Ensure single line height */
}
</style>

<script setup>
import { IonCard, IonCardContent, IonText, IonRippleEffect, IonLabel, IonIcon } from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';
import { toastController } from '@ionic/vue';

const props = defineProps({
  content: {
    type: String,
    required: true,
    default: '',
  },
});

async function copyContent() {
  try {
    await navigator.clipboard.writeText(props.content);
    const toast = await toastController.create({
      message: 'Content copied to clipboard!',
      duration: 2000,
      color: 'success',
    });
    await toast.present();
  } catch (error) {
    const toast = await toastController.create({
      message: 'Failed to copy content.',
      duration: 2000,
      color: 'danger',
    });
    await toast.present();
  }
}
</script>