<template>
  <ion-toolbar :color="toolbar_color">
    <ion-button slot="start" @click="goBack">
      <ion-icon :src="returnDownBackOutline" slot="start" size="small"></ion-icon>
      Back
    </ion-button>
  </ion-toolbar>
</template>

<script>
import {IonButton, IonIcon, IonToolbar} from '@ionic/vue';
import { returnDownBackOutline } from 'ionicons/icons';
export default {
  name: 'ToolbarBackButton',
  components: {
    IonButton,
    IonIcon,
    IonToolbar
  },
  props: {
    toolbar_color: { type: String, default: 'primary' },
  },
  data() {
    return {
      returnDownBackOutline,
    };
  },
  methods: {
    goBack() {
      this.$emit('back') || this.$router.back();
    },
  },
}

</script>

<style scoped>

</style>