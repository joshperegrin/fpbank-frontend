<template>
  <ion-page v-if="currentCoin" :key="coinId">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tab3"></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center" v-if="currentCoin">
          {{ currentCoin.name }} <span>{{ currentCoin.symbol }}</span>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="currentCoin">
      <div class="coin-chart-section">
        <h1 class="coin-price">${{ currentCoin.price.toLocaleString() }}</h1>
        <div class="coin-change" :class="{ negative: currentCoin.change < 0, positive: currentCoin.change > 0 }">
          {{ currentCoin.change > 0 ? '+' : '' }}{{ currentCoin.change }}$
        </div>
        <div class="chart-placeholder">
          <img :src="chartImg" alt="Chart Placeholder" class="chart-img" />
        </div>
        <div class="chart-tabs">
          <span
            v-for="tab in chartTabs"
            :key="tab"
            :class="{ active: tab === selectedTab }"
            @click="selectedTab = tab"
            style="cursor:pointer;"
          >
            {{ tab }}
          </span>
        </div>
      </div>
      <div class="coin-balance-section">
        <div class="balance-label">Your Balance</div>
        <div class="balance-value">{{ currentCoin.balance }} {{ currentCoin.symbol }} ≈${{ currentCoin.balanceUsd.toLocaleString() }}</div>
        <div class="coin-actions">
          <ion-button fill="outline">Buy</ion-button>
          <ion-button fill="outline">Convert</ion-button>
        </div>
      </div>
      <div class="coin-info-section">
        <div class="coin-info-row"><span>Rank</span><span>NO.{{ currentCoin.rank }}</span></div>
        <div class="coin-info-row"><span>Market Cap</span><span>${{ currentCoin.marketCap }}</span></div>
        <div class="coin-info-row"><span>Market Dominance</span><span>{{ currentCoin.dominance }}</span></div>
        <div class="coin-info-row"><span>Circulation Supply</span><span>{{ currentCoin.circulation }}</span></div>
        <div class="coin-info-row"><span>Max Supply</span><span>{{ currentCoin.maxSupply }}</span></div>
        <div class="coin-info-row"><span>Total Supply</span><span>{{ currentCoin.totalSupply }}</span></div>
        <div class="coin-info-row"><span>Issue Date</span><span>{{ currentCoin.issueDate}}</span></div>
        <div class="coin-info-row"><span>All Time High</span><span>{{ currentCoin.allTimeHigh }}</span></div>
        <div class="coin-info-row"><span>All Time Low</span><span>{{ currentCoin.allTimeLow}}</span></div>
      </div>
    </ion-content>
  </ion-page>
  <ion-page v-else>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title class="ion-text-center">Loading...</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-spinner name="crescent"></ion-spinner>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonButton } from "@ionic/vue";
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import chart1h from '@/assets/imgs/chart-1h.png';
import chart1d from '@/assets/imgs/chart-1d.png';
import chart1w from '@/assets/imgs/chart-1w.png';
import chart1m from '@/assets/imgs/chart-1m.png';
import chart1y from '@/assets/imgs/chart-1y.png';

const route = useRoute();
const coinId = computed(() => route.params.coinId || 'bitcoin');

const chartTabs = ['1 Hour', '1 Day', '1 Week', '1 Month', '1 Year'];
const selectedTab = ref('1 Day');

// Map tab to image file suffix
const tabToSuffix = {
  '1 Hour': '1h',
  '1 Day': '1d',
  '1 Week': '1w',
  '1 Month': '1m',
  '1 Year': '1y',
};

const chartImages = {
  '1h': chart1h,
  '1d': chart1d,
  '1w': chart1w,
  '1m': chart1m,
  '1y': chart1y,
};

const chartImg = computed(() => {
  const suffix = tabToSuffix[selectedTab.value] || '1d';
  return chartImages[suffix] || chart1d;
});

const coins = {
  bitcoin: {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 82391.53,
    change: -3.88,
    balance: 0.0005,
    balanceUsd: 1050,
    rank: 1,
    marketCap: '$1.7T',
    dominance: '60.04%',
    circulation: '19.83M',
    maxSupply: '21.00M',
    totalSupply: '19.83M',
    issueDate: '2009-01-03',
    allTimeHigh: '$109,114.8848',
    allTimeLow: '$0.048664654',
  },
  ethereum: {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3000,
    change: 12.5,
    balance: 1.2,
    balanceUsd: 3600,
    rank: 2,
    marketCap: '400B',
    dominance: '18.5%',
    circulation: '120M',
    maxSupply: '∞',
    totalSupply: '120M',
    issueDate: '2015-07-30',
    allTimeHigh: '$1,432.88',
    allTimeLow: '$0.00218797',
  },
  solana: {
    name: 'Solana',
    symbol: 'SOL',
    price: 150,
    change: 2.1,
    balance: 10,
    balanceUsd: 1500,
    rank: 5,
    marketCap: '60B',
    dominance: '2.5%',
    circulation: '400M',
    maxSupply: '∞',
    totalSupply: '400M',
    issueDate: '2020-08-26',
    allTimeHigh: '$259.96',
    allTimeLow: '$0.00218797',
  }
};

const currentCoin = computed(() => coins[coinId.value] || null);
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
.coin-chart-section {
  text-align: center;
  margin-top: 20px;
}
.coin-price {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.coin-change {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.coin-change.negative {
  color: #e74c3c;
}
.coin-change.positive {
  color: #27ae60;
}
.chart-placeholder {
  height: 180px;
  background: transparent;
  border-top: var(--ion-color-primary) 1px solid;
  border-bottom: var(--ion-color-primary) 1px solid;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b0b0b0;
  font-size: 1.1rem;
}
.chart-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.chart-tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
}
.chart-tabs span {
  padding: 0.3rem 0.7rem;
  border-radius: 12px;
  cursor: pointer;
  color: #888;
  font-size: 0.95rem;
}
.chart-tabs .active {
  background: #e0e7ff;
  color: #222;
  font-weight: bold;
}
.coin-balance-section {
  text-align: center;
  margin-bottom: 1.5rem;
}
.balance-label {
  color: #888;
  font-size: 1rem;
}
.balance-value {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
}
.coin-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
}
.coin-info-section {
  margin: 0 1.5rem 2rem 1.5rem;
  background: transparent;
  border-radius: 12px;
  padding: 1.2rem 1rem;
  color: var(--ion-text-color, #222);
}
.coin-info-row {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  font-size: 1.05rem;
  border: none;
  color: var(--ion-text-color, #222);
  margin: auto;
}
.coin-info-row:last-child {
  border-bottom: none;
}
</style>