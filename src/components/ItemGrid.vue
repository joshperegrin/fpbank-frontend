<template>
  <ion-grid>
    <template v-for="(chunk, index) in chunkedItems" :key="index">
      <ion-row class="ion-justify-content-center">
        <ion-col v-for="item in chunk" :key="item.name" class="logo-col">
          <ion-avatar v-if="item.avatar">
            <img :alt="item.name" :src="item.avatar" />
          </ion-avatar>
          <img v-else :alt="item.name" :src="item.icon" />
        </ion-col>
      </ion-row>
      <ion-row class="ion-text-center">
        <ion-col v-for="item in chunk" :key="item.name">
          <ion-text>{{ item.name }}</ion-text>
        </ion-col>
      </ion-row>
    </template>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonAvatar, IonText } from '@ionic/vue';

export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonText,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemsPerRow: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    chunkedItems() {
      const chunks = [];
      for (let i = 0; i < this.items.length; i += this.itemsPerRow) {
        chunks.push(this.items.slice(i, i + this.itemsPerRow));
      }
      return chunks;
    },
  },
};
</script>

<style scoped>

.logo-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>