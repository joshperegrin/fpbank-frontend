<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start" @click="goBack">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center">Convert Cryptocurrency</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card class="convert-field">
        <ion-card-content>
          <ion-label class="field-label">From</ion-label>
          <ion-item class="field-item" lines="none">
            <ion-button fill="clear" class="crypto-button left-align">
              <ion-icon :icon="fromCrypto.icon"></ion-icon>
              <span>{{ fromCrypto.ticker }}</span>
            </ion-button>
            <ion-input 
              v-model="fromAmount" 
              placeholder="Enter amount" 
              type="text" 
              class="crypto-input"
            ></ion-input>
          </ion-item>
          <ion-button fill="clear" class="switch-button" @click="switchCryptos">
            <ion-icon :icon="swapVerticalOutline"></ion-icon>
            Switch
          </ion-button>
          <ion-label class="field-label">To</ion-label>
          <ion-item class="field-item" lines="none">
            <ion-button fill="clear" class="crypto-button">
              <ion-icon :icon="toCrypto.icon"></ion-icon>
              <span>{{ toCrypto.ticker }}</span>
            </ion-button>
            <ion-input 
              v-model="toAmount" 
              type="text" 
              class="crypto-input"
              readonly
            ></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <div class="numpad-container">
        <div class="numpad">
          <button v-for="key in numpadKeys" :key="key.label" @click="handleNumpadInput(key)" class="numpad-key">
            <template v-if="key.label === 'back'">
              <ion-icon :icon="backspaceOutline"></ion-icon>
            </template>
            <template v-else>
              {{ key.label }}
            </template>
          </button>
        </div>
        <ion-button expand="block" class="convert-button bottom" @click="convert">
          Convert
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardContent, IonItem, IonButton, IonIcon, IonInput, IonLabel } from "@ionic/vue";
import { swapVerticalOutline, backspaceOutline } from "ionicons/icons";
import { cryptoService } from '@/services/crypto.service';
import { onIonViewWillEnter } from '@ionic/vue';
import btcLogo from '@/assets/svgs/btc.svg';
import ethLogo from '@/assets/svgs/eth.svg';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonButton,
    IonIcon,
    IonInput,
    IonLabel,
  },
  data() {
    return {
      swapVerticalOutline,
      backspaceOutline,
      fromCrypto: { ticker: "BTC", icon: btcLogo },
      toCrypto: { ticker: "ETH", icon: ethLogo },
      fromAmount: '',
      toAmount: '',
      focusedInput: 'from',
      exchangeRate: 0,
      numpadKeys: [
        { label: '1' }, { label: '2' }, { label: '3' },
        { label: '4' }, { label: '5' }, { label: '6' },
        { label: '7' }, { label: '8' }, { label: '9' },
        { label: '.' }, { label: '0' }, { label: 'back' },
      ],
    };
  },
  watch: {
    fromAmount: {
      handler(newValue) {
        if (newValue && this.exchangeRate) {
          this.toAmount = (parseFloat(newValue) * this.exchangeRate).toFixed(8);
        }
      }
    },
    exchangeRate: {
      handler(newValue) {
        if (this.fromAmount && newValue) {
          this.toAmount = (parseFloat(this.fromAmount) * newValue).toFixed(8);
        }
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push("/tabs/tab3");
    },
    switchCryptos() {
      const temp = this.fromCrypto;
      this.fromCrypto = this.toCrypto;
      this.toCrypto = temp;
      this.exchangeRate = 1 / this.exchangeRate;
    },
    async convert() {
      try {
        const response = await cryptoService.convertCrypto(
          this.fromCrypto.ticker,
          this.toCrypto.ticker,
          parseFloat(this.fromAmount),
          this.exchangeRate
        );
        
        // Show success message
        console.log('Conversion successful:', response);
        
        // Navigate back to main crypto page and force reload
        if (this.$router.currentRoute.value.path === '/tabs/tab3') {
          this.$router.replace({ path: '/tabs/tab3', query: { reload: Date.now() } });
        } else {
          this.$router.push('/tabs/tab3');
        }
      } catch (error) {
        console.error('Error converting crypto:', error);
        // Show error message
      }
    },
    handleNumpadInput(key) {
      let target = this.focusedInput === 'to' ? 'toAmount' : 'fromAmount';
      if (key.label === 'back') {
        this[target] = this[target] ? this[target].toString().slice(0, -1) : '';
      } else if (key.label === '.') {
        if (!this[target] || !this[target].toString().includes('.')) {
          this[target] = (this[target] ? this[target].toString() : '') + '.';
        }
      } else {
        // Prevent leading zeros unless immediately followed by a dot
        if (this[target] === '0' && key.label !== '.') {
          this[target] = key.label;
        } else {
          this[target] = (this[target] ? this[target].toString() : '') + key.label;
        }
      }
    },
  },
  mounted() {
    // Focus logic for input fields
    const fromInput = this.$el.querySelectorAll('.crypto-input')[0];
    const toInput = this.$el.querySelectorAll('.crypto-input')[1];
    if (fromInput) {
      fromInput.addEventListener('focus', () => { this.focusedInput = 'from'; });
    }
    if (toInput) {
      toInput.addEventListener('focus', () => { this.focusedInput = 'to'; });
    }

    // Fetch initial exchange rate
    this.exchangeRate = 15.5; // Example rate: 1 BTC = 15.5 ETH
    // Clear fields every time the page is entered
    onIonViewWillEnter(() => {
      this.fromAmount = '';
      this.toAmount = '';
    });
  },
};
</script>

<style scoped>
ion-header {
  background-color: var(--ion-color-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 0px 0px 16px 16px;
  height: max-content;
}
.convert-field {
  margin: 20px;
  margin-top: 40px;
  box-shadow: none;
  background-color: var(--ion-background-color);
}
.field-label {
  font-size: 1rem;
  color: var(--ion-color-primary);
  margin-bottom: 5px;
}
.field-item {
  display: flex;
  align-items: center;
  border: 1px solid var(--ion-color-primary);
  --background: var(--ion-background-color);
  border-radius: 8px;
  padding: 5px;
  margin-bottom: 15px;
  --padding-start: 5px !important;
}
.crypto-button {
  display: flex;
  align-items: center;
  --padding-start: 0;
  --padding-end: 0;
  padding: 0 !important;
  margin: 0 !important;
  width: fit-content;
  min-width: unset;
  max-width: unset;
}
.crypto-button ion-icon {
  font-size: 1.2rem;
  width: 1.2em;
  height: 1.2em;
  margin-right: 7px;
}
.crypto-button span {
  font-size: 0.9rem;
  font-weight: 600;
}
.crypto-input {
  width: 100%;
  text-align: right;
}
.switch-button {
  display: flex;
  justify-content: center;
  margin: 10px 0px 0px;
  color: var(--ion-color-primary);
}
.convert-button {
  margin: 20px;
  background-color: var(--ion-color-primary);
  color: white;
}
.numpad-container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ion-background-color, #fff);
  padding-bottom: 20px;
  z-index: 10;
}
.numpad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 0 24px 50px 24px;
}
.numpad-key {
  font-size: 1.5rem;
  font-weight: bold;
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 10px 0;
  color: var(--ion-text-color, var(--ion-color-primary));
  box-shadow: none;
  transition: color 0.2s;
}
.numpad-key:active {
  color: var(--ion-color-primary-shade, #222266);
}
.numpad-key ion-icon {
  font-size: 1.4rem;
  width: 1.4em;
  height: 1.4em;
  vertical-align: middle;
}
.convert-button.bottom {
  margin: 24px 32px 24px 32px;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: bold;
  height: 48px;
}
ion-content {
  padding-bottom: 260px; /* space for numpad */
}
</style>
