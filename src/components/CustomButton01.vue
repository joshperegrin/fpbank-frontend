<template>
  <div class="ion-activatable ripple-parent" ref="div">
    <ion-icon :size='icon_size' :icon='icon_name'></ion-icon>
    <ion-label :style="{fontSize: text_size}"><slot>Icon Button</slot></ion-label>
    <ion-ripple-effect></ion-ripple-effect>
  </div>
</template>

<style scoped>
.ripple-parent {
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
  border-radius: 10px;
  padding: 10px;

  font-weight: 700;
}
ion-icon {
  padding-right: 10px;
}
</style>

<script>
import {IonIcon, IonLabel, IonRippleEffect } from '@ionic/vue';
import { personCircle } from 'ionicons/icons';
export default {
  components: {
    IonIcon,
    IonLabel,
    IonRippleEffect,
  },
  props: {
    icon_name: {
      type: String,
      default: personCircle, // Default empty string or provide a default icon source (value: SVG URL String)
    },
    icon_size: {
      type: String,
      default: 'large', // Default icon size (values: large | small)
    },
    text_size: {
      type: String,
      default: 'medium', // Default text size (values: xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large)
    },
  },
};
</script>
