<template>
  <ion-card class="credit-card-widget ion-activatable ripple-parent" @click="toggleCensor">
    <ion-ripple-effect></ion-ripple-effect>
    <ion-card-content>
      <div class="card-design">
        <div class="card-header">
          <img :src="cardDetails.logo" alt="Card Logo" class="card-logo" />
          <ion-text>{{ cardDetails.type }}</ion-text>
        </div>
        <div class="card-number">
          <ion-text>{{ isCensored ? censorCardNumber(cardDetails.number) : formatCardNumber(cardDetails.number) }}</ion-text>
        </div>
        <div class="card-details">
          <div class="card-info">
            <ion-text class="label">Card Holder</ion-text>
            <ion-text>{{ cardDetails.name }}</ion-text>
          </div>
          <div class="card-info">
            <ion-text class="label">Expires</ion-text>
            <ion-text>{{ isCensored ? censorExpiry(cardDetails.expiry) : cardDetails.expiry }}</ion-text>
          </div>
          <div class="card-info">
            <ion-text class="label">CVV</ion-text>
            <ion-text>{{ isCensored ? censorCvv(cardDetails.cvv) : cardDetails.cvv }}</ion-text>
          </div>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonText, IonRippleEffect } from '@ionic/vue';

export default {
  components: {
    IonCard,
    IonCardContent,
    IonText,
    IonRippleEffect,
  },
  props: {
    cardDetails: {
      type: Object,
      required: true,
      default: () => ({
        type: '',
        number: '',
        name: '',
        expiry: '',
        cvv: '',
        logo: '',
      }),
    },
  },
  data() {
    return {
      isCensored: true,
    };
  },
  methods: {
    toggleCensor() {
      this.isCensored = !this.isCensored;
    },
    formatCardNumber(number) {
      return number.replace(/(\d{4})(?=\d)/g, '$1 ');
    },
    censorCardNumber(number) {
      return '**** **** **** ' + number.slice(-4);
    },
    censorExpiry(expiry) {
      return '**/**';
    },
    censorCvv(cvv) {
      return '*'.repeat(cvv.length);
    },
  },
};
</script>

<style scoped>
.credit-card-widget {
  margin: 20px;
  width: 100%;
  border-radius: 15px;
  background: linear-gradient(135deg, #292966, #5C5C99);
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.card-design {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-logo {
  width: 50px;
  height: auto;
}

.card-number {
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.card-details {
  display: flex;
  justify-content: space-between;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.8rem;
  opacity: 0.8;
}
</style>