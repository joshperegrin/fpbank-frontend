<template>
    <div class="password-wrapper">
      <ion-input class="password" :type="visibility" :value="value" @input="$emit('update:value', $event.target.value)" :placeholder="placeholder" required></ion-input>
      <div class="toggle-icon" @click="toggleVisibility">
        <ion-icon :icon="visibility === 'password' ? eyeOutline : eyeOffOutline"></ion-icon>
      </div>
    </div>
  </template>
  
  <style scoped>
  .password-wrapper {
    position: relative;
    width: 100%;
  }
  
  .password {
    background: var(--ion-item-background);
    color: var(--ion-text-color);
    border-radius: 10px;
    padding-right: 40px;
    z-index: 0;
    font-size: 18px;
  }
  
  .toggle-icon {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    color: var(--ion-color-medium);
    cursor: pointer;
    z-index: 10;
  }

  .toggle-icon ion-icon {
    font-size: 24px;
}
  </style>
  
  <script>
  import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
  export default {
    props: {
      value: String,
      placeholder: String
    },
    data() {
      return {
        visibility: 'password',
        eyeOutline,
        eyeOffOutline
      };
    },
    methods: {
      toggleVisibility() {
        this.visibility = this.visibility === 'password' ? 'text' : 'password';
      }
    }
  };
  </script>
  