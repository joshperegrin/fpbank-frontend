<template>
  <div class="icon-button">
    <div class="iconContainer ion-activatable">
      <ion-icon :src="receiptOutline" size="large"/>
      <ion-ripple-effect></ion-ripple-effect>
    </div>
    <ion-label class="ion-text-center" style="font-size: small"> <slot> Button </slot> </ion-label>
  </div>
</template>

<style>
.iconContainer {
  width: 50px;
  height: 50px;
  position: relative;

  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
  border-radius: 10px;
  overflow: hidden;
}

.iconContainer > ion-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 5px;
  overflow: visible;
}
</style>

<script>
import { receiptOutline } from 'ionicons/icons';
import { IonIcon, IonLabel, IonRippleEffect } from '@ionic/vue';
export default {
  components: {
    IonIcon,
    IonLabel,
    IonRippleEffect, 
  },
  props: {
    icon_name: {
      type: String,
      default: receiptOutline, // Default empty string or provide a default icon source (value: SVG URL String)
    },
  },
  data(){
    return {
      receiptOutline,
    }
  }
};
</script>

