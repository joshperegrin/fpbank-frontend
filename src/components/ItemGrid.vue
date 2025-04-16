<template>
  <ion-grid>
    <template v-for="(chunk, index) in chunked_items" :key="index">
      <ion-row class="ion-justify-content-center">
        <ion-col v-for="item in chunk" :key="item.name" class="logo-col">
          <AvatarButton
              v-if="item.avatar && item.avatar.length"
              :avatar_src="item.avatar"
              avatar_size="medium"
              text_size="x-small"
          >
            {{ item.name }}
          </AvatarButton>
          <IconButton
              v-else
              shape="circle"
              text_size="x-small"
              icon_size="large"
              :icon_src="item.icon"
              style="font-size: x-small; color: var(--ion-color-primary);"
          >
            {{ item.name }}
          </IconButton>
        </ion-col>
      </ion-row>
    </template>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import IconButton from '@/components/IconButton.vue';
import AvatarButton from '@/components/AvatarButton.vue';

export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    AvatarButton,
    IconButton,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    items_per_row: {
      type: Number,
      default: () => (window.innerWidth > 399 ? 4 : 8),
    },
  },
  computed: {
    chunked_items() {
      const chunks = [];
      for (let i = 0; i < this.items.length; i += this.items_per_row) {
        chunks.push(this.items.slice(i, i + this.items_per_row));
      }
      return chunks;
    },
  },
  mounted() {
    console.log('ItemGrid items:', this.items);
    this.items.forEach((item, index) => {
      if (item.avatar && !item.avatar.startsWith('http') && !item.avatar.startsWith('/')) {
        console.warn(`ItemGrid: Potentially invalid avatar path for item ${index}:`, item.avatar);
      }
    });
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