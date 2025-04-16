<template>
  <div class="avatar-button ion-activatable ripple-parent" @click="handle_click">
    <ion-avatar :style="{ width: computed_avatar_size, height: computed_avatar_size }" :src="effective_avatar_src">
      <img :src="effective_avatar_src" :alt="`Avatar image for ${this.$slots.default ? this.$slots.default()[0].text : 'Avatar Button'}`" />
    </ion-avatar>
    <ion-label :style="{ fontSize: text_size }"><slot>Avatar Button</slot></ion-label>
    <ion-ripple-effect></ion-ripple-effect>
  </div>
</template>

<script>
import { IonAvatar, IonLabel, IonRippleEffect } from '@ionic/vue';

export default {
  name: 'AvatarButton',
  components: {
    IonAvatar,
    IonLabel,
    IonRippleEffect,
  },
  props: {
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
  },
  computed: {
    computed_avatar_size() {
      const sizes = {
        small: '32px',
        medium: '48px',
        large: '64px',
      };
      return sizes[this.avatar_size] || this.avatar_size;
    },
    effective_avatar_src() {
      const placeholder = 'https://ionicframework.com/docs/img/demos/avatar.svg'; /*TODO: Fix Placeholder not passing*/
      if (!this.avatar_src) {
        console.warn('AvatarButton: avatar_src is empty, using placeholder:', placeholder);
        return placeholder;
      }
      console.log('AvatarButton: loading avatar_src:', this.avatar_src);
      return this.avatar_src;
    },
  },
  methods: {
    handle_click() {
      this.$emit('click');
    },
  },
};
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