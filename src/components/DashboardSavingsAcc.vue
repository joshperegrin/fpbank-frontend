<template>
  <div class="savings-account">
    <ion-card class="accounts-card ion-activatable ripple-parent" @click="$emit('go-to-account', account.name)">
      <ion-ripple-effect></ion-ripple-effect>
      <ion-card-header>
        <ion-card-title class="accounts-title">
          {{ account.name }}
          <ion-icon :icon="chevronForward"></ion-icon>
        </ion-card-title>
        <ion-card-subtitle>
          <ion-icon :src="account.bankIcon"></ion-icon>
          {{ account.number }}
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <div class="balance ion-text-center">
          <p>{{ account.balance }}</p>
          <h3>{{ account.currency }}</h3>
        </div>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonText, IonRippleEffect } from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonRippleEffect,
  },
  props: {
    account: {
      type: Object,
      required: true,
      default: () => ({
        name: '',
        number: '',
        balance: '',
        currency: '',
        bankIcon: '',
      }),
    },
  },
  data() {
    return {
      chevronForward,
    };
  },
};
</script>

<style scoped>
.savings-account {
  padding: 10px 0;
}

.accounts-card {
  width: 30em;
  margin: 0 auto;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.accounts-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.balance {
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
}

.balance h3 {
  margin-left: 0.5em;
  font-size: 0.8em;
}
</style>