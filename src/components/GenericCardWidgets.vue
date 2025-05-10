<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <slot/>
    </ion-card-content>
  </ion-card>
</template>

<script setup>
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/vue";

defineProps ({
  title: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
ion-card {
  width: 100%;
  border-radius: 20px;
}
</style>