<template>
  <ion-page>
    <ion-header>
      <ion-avatar>
        <img :src="avatar_src" />
      </ion-avatar>
      <ion-toolbar color="primary">
        <ion-title>FP Crypto</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card class="portfolio-section">
        <ion-card class="portfolio-info" @click="goToPortfolio">
          <ion-card-header>
            <ion-card-title class="portfolio-title">Portfolio</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-card class="portfolio-amount-container">
              <ion-text class="portfolio-amount">${{ portfolio.totalValue.toFixed(2) }}</ion-text>
              <ion-text class="portfolio-change">+2.4%</ion-text>
              <ion-icon :icon="chevronForward" class="portfolio-chevron"></ion-icon>
            </ion-card>
          </ion-card-content>
        </ion-card>
        <ion-card class="portfolio-button-section">
          <ion-button fill="clear" class="portfolio-button" @click="goToBuy">
            Buy
          </ion-button>
          <ion-button fill="clear" class="portfolio-button" @click="goToConvert">
            Convert
          </ion-button>
        </ion-card>
      </ion-card>
      <div class="tabs-section">
        <ion-segment>
          <ion-segment-button value="watchlist" content-id="watchlist">
            Watchlist
          </ion-segment-button>
          <ion-segment-button value="coins" content-id="coins">
            Coins
          </ion-segment-button>
        </ion-segment>
        <ion-card class="tab-buttons-section">
          <ion-button class="tab-buttons" fill="clear">
            <ion-icon slot="icon-only" :icon="searchOutline"></ion-icon>
          </ion-button>
          <ion-button class="tab-buttons" fill="clear" @click="goToTransactions">
            <ion-icon slot="icon-only" :icon="timeOutline"></ion-icon>
          </ion-button>
        </ion-card>
      </div>
      <ion-segment-view>
        <ion-segment-content id="watchlist">
          <ion-list class="coin-list" lines="none">
            <ion-item 
              v-for="(coin, index) in watchlistCoins" 
              :key="index" 
              button 
              class="coin-item"
            >
              <ion-icon slot="start" :icon="helpCircle" class="coin-icon"></ion-icon>
              <ion-label>
                <h2>{{ coin.name }}</h2>
                <p>{{ coin.amount }}</p>
              </ion-label>
              <ion-text slot="end" class="coin-value">
                <h3>{{ coin.value }}</h3>
                <p :class="{ negative: coin.change < 0 }">{{ coin.change }}%</p>
              </ion-text>
            </ion-item>
          </ion-list>
        </ion-segment-content>
        <ion-segment-content id="coins">
          <ion-list class="coin-list" lines="none">
            <ion-item 
              v-for="(coin, index) in coins" 
              :key="index" 
              button 
              class="coin-item"
              @click="goToCoin(coin.code)"
            >
              <img :src="getCoinLogo(coin.code)" class="coin-icon" alt="logo" />
              <ion-label>
                <h2>{{ coin.name }}</h2>
                <p>{{ coin.amount }}</p>
              </ion-label>
              <ion-text slot="end" class="coin-value">
                <h3>{{ coin.value }}</h3>
                <p :class="{ negative: coin.change < 0 }">{{ coin.change }}%</p>
              </ion-text>
            </ion-item>
          </ion-list>
        </ion-segment-content>
      </ion-segment-view>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonButton, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonList, IonItem, IonLabel, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/vue";
import { searchOutline, timeOutline, helpCircle, chevronForward } from 'ionicons/icons';
import { cryptoService } from '@/services/crypto.service';
import { onIonViewWillEnter } from '@ionic/vue';
import btcLogo from '@/assets/svgs/btc.svg';
import ethLogo from '@/assets/svgs/eth.svg';
import solLogo from '@/assets/svgs/sol.svg';

export default {
  components: {
    IonIcon,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAvatar,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  },
  data() {
    return {
      avatar_src: "src/assets/imgs/angry.jpg",
      searchOutline,
      timeOutline,
      helpCircle,
      chevronForward,
      btcLogo,
      ethLogo,
      solLogo,
      watchlistCoins: [],
      coins: [],
      portfolio: {
        totalValue: 0,
        change: 0
      }
    };
  },
  async created() {
    await this.loadPortfolio();
  },
  mounted() {
    onIonViewWillEnter(this.loadPortfolio);
  },
  methods: {
    async loadPortfolio() {
      try {
        const portfolioData = await cryptoService.getPortfolio();
        this.portfolio = {
          totalValue: portfolioData.portfolio?.totalValue || 0,
          change: portfolioData.portfolio?.change || 0
        };
        const holdings = (portfolioData.portfolio && Array.isArray(portfolioData.portfolio.holdings))
          ? portfolioData.portfolio.holdings
          : [];
        this.coins = holdings.map(holding => ({
          name: holding.coin_code,
          code: holding.coin_code,
          amount: this.formatAmount(holding.coin_amount, holding.coin_code),
          value: `$${holding.total_value?.toFixed(2) ?? '0.00'}`,
          change: holding.change || 0
        }));
        this.watchlistCoins = [];
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    },
    goToPortfolio() {
      this.$router.push('/portfolio');
    },
    goToConvert() {
      this.$router.push("/convert");
    },
    goToBuy() {
      this.$router.push("/buy");
    },
    goToTransactions() {
      this.$router.push("/crypto-transactions");
    },
    goToCoin(coinCode) {
      const coinId = coinCode.toLowerCase();
      this.$router.push({ name: 'CoinPage', params: { coinId } });
    },
    formatAmount(amount, code) {
      if (typeof amount !== 'number') return amount;
      return `${amount.toFixed(3)} ${code}`;
    },
    getCoinLogo(coinCode) {
      const code = coinCode.toLowerCase();
      if (code === 'btc') return this.btcLogo;
      if (code === 'eth') return this.ethLogo;
      if (code === 'sol') return this.solLogo;
      return '';
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
  align-items: center;
  padding-top: 50px;
  padding-bottom: 20px;
  border-radius: 0px 0px 16px 16px;
}
ion-avatar {
  box-shadow: 1px 1px 25px -5px rgba(0, 0, 0, 0.46);
  height: 110px;
  width: 110px;
}
ion-card {
  box-shadow: none;
  border: none;
  margin: 0;
  --background: transparent;
}
ion-card-header {
  padding-bottom: 8px;
}
ion-segment-view {
  height: auto;
}
ion-segment-content {
  padding: 20px;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
}
.portfolio-section {
  margin: 20px;
  margin-bottom: 0px;
}
.portfolio-info {
  text-align: left;
  font-weight: bold;
  margin: 0;
  padding: 0;
  box-shadow: none;
}
.portfolio-title {
  font-size: 1.2rem;
  margin: 0;
  color: var(--ion-color-primary);
}
.portfolio-amount-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -10px;
}
.portfolio-change {
  font-size: 1rem;
  color: var(--ion-color-success);
}
.portfolio-amount {
  font-size: 1.5rem;
  margin: 0px;
  color: var(--ion-text-color, black);
}
.portfolio-chevron {
  margin-left: auto;
  font-size: 1.5rem;
  color: var(--ion-text-color);
  margin-top: -10px;
}
.portfolio-button-section {
  justify-self: center;
  padding-inline: 10px;
  margin: 0;
  width: 100%;
  display: flex;
  gap: 10px;
  box-shadow: none;
}
.portfolio-button {
  width: 50%;
  border: solid 1px var(--ion-color-primary);  
  border-radius: 30px;
  margin-bottom: 5px;
  color: var(--ion-text-color, black);
}
.tabs-section {
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}
.tabs-section ion-segment-button {
  color: var(--ion-text-color);
  min-height: 25px;
}
.tabs-section ion-segment {
  max-width: 220px;
  gap: 10px;
}
.tab-buttons-section {
  display: flex;
  margin-left: auto;
  gap: 0px;
}
.tab-buttons {
  font-size: 0.75;
  color: var(--ion-text-color, black);
}
.coin-list {
  padding: 0;
  margin: 0;
  background: transparent;
}
.coin-item {
  margin-bottom: 15px;
  border-radius: 8px;
  --padding-start: 10px;
  --padding-end: 5px;
  --padding-top: 10px;
  --padding-bottom: 10px;
  background: var(--ion-item-background);
  color: var(--ion-text-color);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}
.coin-icon {
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  max-width: 36px;
  max-height: 36px;
  object-fit: contain;
  display: inline-block;
  margin-left: 8px;
  margin-right: 15px;
  vertical-align: middle;
}
.coin-item h2 {
  margin: 0;
  font-size: 16px;
  color: var(--ion-color-primary);
  font-weight: bold;
}
.coin-item p {
  margin: 0;
  font-size: 14px;
  color: var(--ion-color-medium);
}
.coin-value {
  text-align: right;
}
.coin-value h3 {
  margin: 0;
  font-size: 16px;
  color: var(--ion-text-color);
}
.coin-value p {
  margin: 0;
  font-size: 14px;
  color: var(--ion-color-danger);
}
.negative {
  color: var(--ion-color-danger);
}
</style>
