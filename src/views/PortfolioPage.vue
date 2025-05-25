<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start" @click="goBack">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center">My Portfolio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="total-value">
        <ion-label>
          <h2>Total Value</h2>
        </ion-label>
        <ion-text>
          <h1>PHP {{ totalValue.toFixed(2) }}</h1>
        </ion-text>
      </div>
      <div class="portfolio-breakdown">
        <div class="chart">
          <template v-if="breakdown.length > 0">
            <div 
              v-for="(asset, index) in breakdown" 
              :key="index" 
              class="chart-bar" 
              :class="asset.class"
              :style="{ width: asset.percentage + '%', minWidth: '5px', background: getColor(asset.class) }"
            ></div>
          </template>
          <template v-else>
            <div class="chart-placeholder">No assets to display</div>
          </template>
        </div>
        <div class="breakdown-details">
          <div 
            v-for="(asset, index) in breakdown" 
            :key="index" 
            class="breakdown-item"
          >
            <span class="dot" :style="{ background: getColor(asset.class) }"></span>
            <ion-text>{{ asset.name }}</ion-text>
            <span>{{ asset.value }}</span>
          </div>
        </div>
      </div>
      <div class="investment-summary">
        <div class="summary-item">
          <span>This Month Earnings</span>
          <span class="earnings">+PHP {{ monthlyEarnings.toFixed(2) }}</span>
        </div>
        <div class="summary-item">
          <span>Total Investment</span>
          <span>PHP {{ totalInvestment.toFixed(2) }}</span>
        </div>
      </div>
      <div class="tokens-list">
        <ion-list class="coin-list" lines="none">
          <ion-item 
            v-for="(token, index) in tokens" 
            :key="index" 
            button 
            class="coin-item"
          >
            <ion-icon slot="start" :icon="helpCircle" class="coin-icon"></ion-icon>
            <ion-label>
              <h2>{{ token.name }}</h2>
              <p>{{ token.amount }}</p>
            </ion-label>
            <ion-text slot="end" class="coin-value">
              <h3>{{ token.value }}</h3>
              <p :class="{ negative: token.change < 0 }">{{ token.change }}%</p>
            </ion-text>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonItem, IonList, IonText, IonLabel, IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/vue";
  import { returnDownBackOutline, helpCircle } from "ionicons/icons";
  import { cryptoService } from '@/services/crypto.service';

  export default {
    components: {
      IonItem,
      IonList,
      IonText,
      IonLabel,
      IonIcon,
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonButtons,
      IonBackButton
    },
    data() {
      return {
        returnDownBackOutline,
        helpCircle,
        tokens: [],
        breakdown: [],
        totalValue: 0,
        monthlyEarnings: 0,
        totalInvestment: 0
      };
    },
    async created() {
      try {
        const portfolioData = await cryptoService.getPortfolio();
        this.totalValue = portfolioData.portfolio?.totalValue || 0;

        // Defensive: handle missing/undefined holdings
        const holdings = (portfolioData.portfolio && Array.isArray(portfolioData.portfolio.holdings))
          ? portfolioData.portfolio.holdings
          : [];
        this.tokens = holdings.map(holding => ({
          name: holding.coin_code,
          amount: `${holding.coin_amount} ${holding.coin_code}`,
          value: `$${holding.total_value?.toFixed(2) ?? '0.00'}`,
          change: holding.change || 0
        }));

        this.breakdown = holdings.map(holding => ({
          name: `${holding.coin_code}`,
          value: `PHP ${holding.total_value?.toFixed(2) ?? '0.00'}`,
          percentage: this.totalValue ? (holding.total_value / this.totalValue) * 100 : 0,
          class: holding.coin_code.toLowerCase()
        }));

        this.monthlyEarnings = 400;
        this.totalInvestment = 25000;
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    },
    methods: {
      goBack() {
        this.$router.push("/tabs/tab3");
      },
      getColor(assetClass) {
        // Assign a color for each asset class
        const colors = {
          bitcoin: '#a970ff',
          eth: '#4a90e2',
          ethereum: '#4a90e2',
          sol: '#f5a623',
          solana: '#f5a623',
        };
        return colors[assetClass] || '#888';
      },
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
  ion-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .total-value {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 15px;
  }
  .total-value h1 {
    margin: 0;
  }
  .portfolio-breakdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
    padding: 10px;
  }
  .chart {
    display: flex;
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
    gap: 5px;
  }
  .chart-bar {
    height: 100%;
  }
  .chart-bar.bitcoin {
    background-color: #a970ff;
    width: 10%;
  }
  .chart-bar.ethereum {
    background-color: #4a90e2;
    width: 70%;
  }
  .chart-bar.dogecoin {
    background-color: #f5a623;
    width: 20%;
  }
  .breakdown-details {
    width: 100%;
  }
  .breakdown-item {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
  .breakdown-item ion-text {
    margin-right: auto;
    margin-left: 5px;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    align-self: center;
  }
  .dot.bitcoin {
    background-color: #a970ff;
  }
  .dot.ethereum {
    background-color: #4a90e2;
  }
  .dot.dogecoin {
    background-color: #f5a623;
  }
  .investment-summary {
    border-top: 1px solid var(--ion-color-medium);
    border-bottom: 1px solid var(--ion-color-medium);
    padding: 15px;
    margin: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .summary-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
  }
  .earnings {
    color: var(--ion-color-success);
  }
  .tokens-list {
    margin: 25px;
    margin-bottom: 0;
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
    font-size: 45px;
    color: var(--ion-text-color);
    margin-left: 8px;
    margin-right: 15px;
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
    color: var (--ion-color-danger);
  }
  .negative {
    color: var(--ion-color-danger);
  }
  .chart-placeholder {
    width: 100%;
    text-align: center;
    color: #888;
    font-size: 1rem;
    padding: 10px 0;
  }
</style>
