<template>
  <ion-text class="ion-text-center title" >
    Savings Account
    <ion-icon :icon='chevronForward'></ion-icon>
  </ion-text>
  <ion-text>
    <ion-icon :src="account.bankIcon"></ion-icon>
    {{ account.number }}
  </ion-text>
  <ion-text>
    <div class="balance ion-text-center">
      <h2>{{ account.amount }}</h2>
      <h3>{{ account.currency }}</h3>
    </div>
  </ion-text>
</template>

<script>
import {IonIcon, IonText} from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';

export default {
  components: {
    IonIcon,
    IonText,
  },
  props: {
    account: {
      type: Object,
      required: true,
      default: () => ({
        amount: '0.00',
        number: '',
        currency: 'PHP',
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
.balance {
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
}

.balance h2 {
  font-weight: bold;
  font-size: 2em;
}

.balance h3 {
  margin-left: 0.5em;
  font-size: 0.8em;
}

.title {
  font-size: 1.5em;
  padding: 0.5em;
  display: flex;
  align-items: center;
  font-weight: bold;
}
</style>