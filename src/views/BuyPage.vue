<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start" @click="goBack">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center">Buy Cryptocurrency</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="search-bar-container">
        <ion-item class="search-bar" lines="none">
          <ion-icon :icon="searchOutline" slot="start" class="search-icon" />
          <ion-input placeholder="Search..." class="search-input" v-model="searchQuery" />
        </ion-item>
      </div>
      <div class="section-label">Get Started</div>
      <div class="get-started-wrapper">
        <div class="get-started-row">
          <ion-button class="get-started-card" fill="clear" v-for="token in getStartedTokens" :key="token.code" @click="goToCoin(token.code)">
            <div class="get-started-content">
              <img :src="token.logo" class="get-started-icon" />
              <span class="get-started-name">{{ token.name }}</span>
              <span class="get-started-ticker">{{ token.code }}</span>
            </div>
          </ion-button>
        </div>
      </div>
      <div class="section-label">Available Tokens</div>
      <div class="token-list">
        <ion-button class="token-card token-card-btn" fill="clear" v-for="token in filteredTokens" :key="token.code" @click="goToCoin(token.code)">
          <ion-item lines="none">
            <img :src="token.logo" class="token-icon" slot="start" />
            <ion-label>
              <h2>{{ token.name }}</h2>
              <p>{{ token.code }}</p>
            </ion-label>
          </ion-item>
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardContent, IonItem, IonButton, IonIcon, IonInput, IonLabel } from "@ionic/vue";
import { searchOutline, helpCircle } from "ionicons/icons";
import { cryptoService } from '@/services/crypto.service';
import btcLogo from '@/assets/svgs/btc.svg';
import ethLogo from '@/assets/svgs/eth.svg';
import solLogo from '@/assets/svgs/sol.svg';

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
      searchOutline,
      helpCircle,
      btcLogo,
      ethLogo,
      solLogo,
      searchQuery: '',
      availableTokens: [
        { code: 'BTC', name: 'Bitcoin', logo: btcLogo },
        { code: 'ETH', name: 'Ethereum', logo: ethLogo },
        { code: 'SOL', name: 'Solana', logo: solLogo }
      ],
      getStartedTokens: [
        { code: 'BTC', name: 'Bitcoin', logo: btcLogo },
        { code: 'ETH', name: 'Ethereum', logo: ethLogo }
      ]
    };
  },
  computed: {
    filteredTokens() {
      if (!this.searchQuery) return this.availableTokens;
      const query = this.searchQuery.toLowerCase();
      return this.availableTokens.filter(token => 
        token.name.toLowerCase().includes(query) || 
        token.code.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    goBack() {
      this.$router.push("/tabs/tab3");
    },
    async buyCrypto(cryptoCode, amount, price) {
      try {
        const response = await cryptoService.buyCrypto(cryptoCode, amount, price);
        // Show success message
        console.log('Purchase successful:', response);
        // Navigate back to portfolio
        this.$router.push("/portfolio");
      } catch (error) {
        console.error('Error buying crypto:', error);
        // Show error message
      }
    },
    goToCoin(coinCode) {
      this.$router.push({ name: 'CoinPage', params: { coinId: coinCode.toLowerCase() } });
    }
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
.search-bar-container {
  margin: 18px 16px 10px 16px;
}
.search-bar {
  border-radius: 12px;
  background: var(--ion-color-primary-contrast);
  border: 1px solid var(--ion-color-primary);
  --background: var(--ion-color-primary-contrast);
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  height: 48px;
  display: flex;
  align-items: center;
}
.search-icon {
  font-size: 22px;
  color: var(--ion-color-lightmedium);
  margin-right: 8px;
}
.search-input {
  color: var(--ion-color-primary);
  font-size: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  --padding-start: 0;
  --padding-end: 0;
  --background: transparent;
  --box-shadow: none;
  --highlight-background: transparent;
  --border-width: 0;
  --border-radius: 0;
}
.section-label {
  color: var(--ion-color-primary);
  font-size: 15px;
  font-weight: 600;
  margin: 18px 20px 8px 20px;
}
.token-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 20px 0 20px;
}
.token-card {
  background: var(--ion-color-light);
  border-radius: 16px;
  box-shadow: none;
  margin: 0 8px 0 8px;
  border: 1px solid var(--ion-color-primary);
}
.token-icon {
  width: 38px;
  height: 38px;
  object-fit: contain;
  background: #fff;
  display: block;
  border-radius: 0;
  margin-right: 14px;
  padding: 3px;
}
.token-card h2 {
  color: var(--ion-color-primary);
  font-size: 17px;
  font-weight: 700;
  margin: 0;
}
.token-card p {
  color: var(--ion-color-medium);
  font-size: 14px;
  margin: 0;
}
.get-started-row {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 0 0 18px 0;
  justify-content: center;
}
.get-started-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-height: 0;
  max-height: none;
  background: var(--ion-color-primary-contrast);
  border-radius: 16px;
  box-shadow: none;
  border: 1px solid var(--ion-color-primary);
}
.get-started-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  padding: 10px 0 10px 0;
}
.get-started-icon {
  width: 44px;
  height: 44px;
  margin-bottom: 10px;
  object-fit: contain;
  background: #fff;
  display: block;
  border-radius: 0;
  padding: 4px;
}
.placeholder-icon {
  background: var(--ion-color-lightmedium);
  color: var(--ion-color-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}
.get-started-name {
  color: var(--ion-color-primary);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 2px;
  margin-left: 0;
  text-align: left;
  line-height: 1.1;
}
.get-started-ticker {
  color: var(--ion-color-medium);
  font-size: 15px;
  font-weight: 500;
  margin-left: 0;
  text-align: left;
  line-height: 1.1;
}
.get-started-wrapper {
  margin: 0 20px 0 20px;
}
/* Make IonButton look like IonCard for Available Tokens */
.token-card-btn {
  background: var(--ion-color-light);
  border-radius: 16px;
  box-shadow: none;
  margin: 0;
  border: 1px solid var(--ion-color-primary);
  --ion-item-background: transparent;
  transition: none;
  outline: none;
  --padding-top: 3px;
  --padding-bottom: 3px;
}
.token-card-btn ion-item {
  width: 100%;
  --padding-start: 0;
  --padding-end: 0; 
}
</style>
