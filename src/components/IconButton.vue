<template>
  <div class="ion-activatable ripple-parent" ref="div">
    <ion-icon :size='icon_size' :src='icon_src'></ion-icon>
    <ion-label :style="{fontSize: text_size}"><slot>Icon Button</slot></ion-label>
    <ion-ripple-effect></ion-ripple-effect>
  </div>
</template>

<style scoped>
.ripple-parent {
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-width: min-content;
  min-height: min-content;

  max-width: min-content;
  max-height: min-content;

  padding: 10px;
}

.circle{
  border-radius: 200px;
}

.outlined{
  border: 2px solid var(--ion-color-primary);
}
</style>

<script>
import { IonIcon, IonRippleEffect } from '@ionic/vue'
export default {
  components: { IonIcon, IonRippleEffect },
  props: {
    icon_src: {
      type: String,
      default: '', // Default empty string or provide a default icon source (value: SVG URL String)
    },
    icon_size: {
      type: String,
      default: 'large', // Default icon size (values: large | small)
    },
    text_size: {
      type: String,
      default: 'x-small', // Default text size (values: xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large)
    },
    shape: {
      type: String,
      default: 'circle', // Default shape (values: circle | square)
    },
    outlined: {
      type: Boolean,
      default: false, // Default to not outlined (value: boolean)
    },
  },
  mounted(){
    if (this.shape == "circle") {
      this.$refs.div.classList.add("circle")
    }
    if (this.outlined) {
      this.$refs.div.classList.add("outlined")
    }
  }
}
</script>
