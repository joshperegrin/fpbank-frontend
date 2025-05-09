<template>
  <ion-card class="body-widgets">
    <ion-img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <ion-card-header>
      <ion-card-title>Featured Article</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      FP Bank is now number 1 bank in the world according to the latest survey. Reports of the survey are available in the bank's website.
    </ion-card-content>
    <ion-button fill="clear">FP Bank is number 1</ion-button>
  </ion-card>
</template>

<script setup>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonButton } from '@ionic/vue';
</script>

<style scoped>
ion-card.body-widgets {
  width: 100%;
  border-radius: 20px;
}
</style>