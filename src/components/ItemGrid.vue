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

<script setup>
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import IconButton from '@/components/IconButton.vue';
import AvatarButton from '@/components/AvatarButton.vue';
import { computed, onMounted } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  items_per_row: {
    type: Number,
    default: () => (window.innerWidth > 399 ? 4 : 8),
  },
});

const chunked_items = computed(() => {
  const chunks = [];
  for (let i = 0; i < props.items.length; i += props.items_per_row) {
    chunks.push(props.items.slice(i, i + props.items_per_row));
  }
  return chunks;
});

onMounted(() => {
  console.log('ItemGrid items:', props.items);
  props.items.forEach((item, index) => {
    if (item.avatar && !item.avatar.startsWith('http') && !item.avatar.startsWith('/')) {
      console.warn(`ItemGrid: Potentially invalid avatar path for item ${index}:`, item.avatar);
    }
  });
});
</script>

<style scoped>
.logo-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>