<template>
    <ion-toolbar :color="toolbarColor">
      <ion-button slot="start" @click="goBack">
        <ion-icon :src="returnDownBackOutline" slot="start" size="small"></ion-icon>
        Back
      </ion-button>
    </ion-toolbar>
    <div class="icon-circle">
      <ion-icon :color="iconColor" :src="iconSrc"></ion-icon>
    </div>
    <ion-text :color="textColor">
      <h1><strong>{{ title }}</strong></h1>
    </ion-text>
</template>

<script>
import { IonHeader, IonToolbar, IonButton, IonIcon, IonText } from '@ionic/vue';
import { returnDownBackOutline } from 'ionicons/icons';

export default {
  name: 'HeaderComponent',
  components: { IonHeader, IonToolbar, IonButton, IonIcon, IonText },
  props: {
    title: { type: String, default: 'Download your Statements' },
    iconSrc: { type: String, required: true },
    toolbarColor: { type: String, default: 'primary' },
    iconColor: { type: String, default: 'primary' },
    textColor: { type: String, default: 'light' },
  },
  data() {
    return { returnDownBackOutline };
  },
  methods: {
    goBack() {
      this.$emit('back') || this.$router.back();
    },
  },
};
</script>

<style scoped>
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
</style>