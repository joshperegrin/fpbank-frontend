<template>
  <div class="avatar-button ion-activatable ripple-parent" @click="handle_click">
    <ion-avatar :style="{ width: computed_avatar_size, height: computed_avatar_size }" :src="effective_avatar_src">
      <img :src="effective_avatar_src" :alt="`Avatar image for ${this.$slots.default ? this.$slots.default()[0].text : 'Avatar Button'}`" />
    </ion-avatar>
    <ion-label :style="{ fontSize: text_size }"><slot>Avatar Button</slot></ion-label>
    <ion-ripple-effect></ion-ripple-effect>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { IonAvatar, IonLabel, IonRippleEffect } from '@ionic/vue';

const props = defineProps({
  avatar_src: {
    type: String,
    required: true,
    default: '',
  },
  avatar_size: {
    type: String,
    default: '48px',
    validator: (value) => {
      return ['small', 'medium', 'large'].includes(value) || /^[0-9]+(px|rem)$/.test(value);
    },
  },
  text_size: {
    type: String,
    default: 'x-small',
    validator: (value) => /^[0-9]+(px|rem)$/.test(value) || ['x-small', 'small', 'medium', 'large', 'x-large'].includes(value),
  },
});

const emit = defineEmits(['click']);

const computed_avatar_size = computed(() => {
  const sizes = {
    small: '32px',
    medium: '48px',
    large: '64px',
  };
  return sizes[props.avatar_size] || props.avatar_size;
});

const effective_avatar_src = computed(() => {
  const placeholder = 'https://ionicframework.com/docs/img/demos/avatar.svg'; /*TODO: Fix Placeholder not passing*/
  if (!props.avatar_src) {
    console.warn('AvatarButton: avatar_src is empty, using placeholder:', placeholder);
    return placeholder;
  }
  console.log('AvatarButton: loading avatar_src:', props.avatar_src);
  return props.avatar_src;
});

function handle_click() {
  emit('click');
}
</script>

<style scoped>
.avatar-button {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 200px;
  transition: background-color 0.2s ease;
}

.avatar-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

ion-avatar {
  border-radius: 50%;
}

ion-label {
  font-weight: 500;
  color: var(--ion-color-primary); /*Causes color changes when an avatar is set.*/
  text-align: center;
}
</style>