<template>
  <ion-header>
    <ToolbarBackButton toolbar_color="primary"/>
    <div v-if="icon_src" class="icon-circle">
      <ion-icon color="primary" :src="icon_src"></ion-icon>
    </div>
    <ion-text>
      <h1><strong>{{ title }}</strong></h1>
    </ion-text>
    <slot>

    </slot>
  </ion-header>
</template>

<script>
import { IonIcon, IonText } from '@ionic/vue';
import { downloadOutline } from 'ionicons/icons';
import ToolbarBackButton from "@/components/ToolbarBackButton.vue";

export default {
  name: 'HeaderComponent',
  components: {
    ToolbarBackButton,
    IonIcon,
    IonText
  },
  props: {
    title: { type: String, default: 'Download your Statements' },
    icon_src: { type: String, default: '' },
  },
  data() {
    return { downloadOutline };
  },
};
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
  border-radius: 0px 0px 16px 16px;
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
</style>