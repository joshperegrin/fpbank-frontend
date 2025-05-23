<template>
  <ion-header class="ion-padding">
    <ToolbarBackButton v-if="!root_page" toolbar_color="primary"/>
    <div v-if="icon_src" class="icon-circle">
      <ion-icon :color="color" :src="icon_src"/>
    </div>
    <ion-text v-if="title" >
      <h1><strong>{{ title }}</strong></h1>
    </ion-text>
    <slot/>
  </ion-header>
</template>

<script setup>
import { IonIcon, IonText, IonHeader } from '@ionic/vue';
import ToolbarBackButton from "@/components/ToolbarBackButton.vue";

defineProps({
  title: { type: String },
  icon_src: { type: String, default: '' },
  color: { type: String, default: 'primary' },
  root_page: { type: Boolean, default: false },
});
</script>

<style scoped>
ion-header {
  -webkit-box-shadow: none;
  box-shadow: none;

  background-color: var(--ion-color-primary);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  padding-top: 30px;
  padding-bottom: 15px;
  border-radius: 0 0 16px 16px;
}
.icon-circle {
  background-color: var(--ion-color-primary-contrast);
  width: 5em;
  height: 5em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-icon {
  font-size: 3em;
}

ion-text {
  color: var(--ion-color-primary-contrast);
}

ion-header {
  color: var(--ion-color-primary-contrast);}
</style>