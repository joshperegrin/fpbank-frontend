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
      <ion-card class="portfolio-section" @click="goToPortfolio">
        <ion-card class="portfolio-info">
          <ion-card-header>
            <ion-card-title class="portfolio-title">Portfolio</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-card class="portfolio-amount-container">
              <ion-text class="portfolio-amount">Php 20,000.00</ion-text>
              <ion-text class="portfolio-change">+2.4%</ion-text>
              <ion-icon :icon="chevronForward" class="portfolio-chevron"></ion-icon>
            </ion-card>
          </ion-card-content>
        </ion-card>
        <ion-card class="portfolio-button-section">
          <ion-button fill="clear" class="portfolio-button">
            Buy
          </ion-button>
          <ion-button fill="clear" class="portfolio-button">
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
          <ion-button class="tab-buttons" fill="clear">
            <ion-icon slot="icon-only" :icon="timeOutline"></ion-icon>
          </ion-button>
        </ion-card>
      </div>
      <ion-segment-view>
        <ion-segment-content id="watchlist">
          <ion-list class="coin-list">
            <ion-item button class="coin-item">
              <ion-icon slot="start" :icon="helpCircle" class="coin-icon"></ion-icon>
              <ion-label>
                <h2>Agency</h2>
                <p>136,534.02 AGENCY</p>
              </ion-label>
              <ion-text slot="end" class="coin-value">
                <h3>-$12.53</h3>
                <p class="negative">-0.88%</p>
              </ion-text>
            </ion-item>
            <ion-item button class="coin-item">
              <ion-icon slot="start" :icon="helpCircle" class="coin-icon"></ion-icon>
              <ion-label>
                <h2>Eliza</h2>
                <p>30,081.71 ELIZA</p>
              </ion-label>
              <ion-text slot="end" class="coin-value">
                <h3>-$8.53</h3>
                <p class="negative">-0.45%</p>
              </ion-text>
            </ion-item>
          </ion-list>
        </ion-segment-content>
        <ion-segment-content id="coins">
          <ion-list class="coin-list" lines="none">
            <ion-item button class="coin-item">
              <ion-icon slot="start" :icon="helpCircle" class="coin-icon"></ion-icon>
              <ion-label>
                <h2>Bitcoin</h2>
                <p>0.01 BTC</p>
              </ion-label>
              <ion-text slot="end" class="coin-value">
                <h3>$82,391.53</h3>
                <p class="negative">-3.88%</p>
              </ion-text>
            </ion-item>
            <ion-item button class="coin-item">
              <ion-icon slot="start" :icon="helpCircle" class="coin-icon"></ion-icon>
              <ion-label>
                <h2>Solana</h2>
                <p>0.204 SOL</p>
              </ion-label>
              <ion-text slot="end" class="coin-value">
                <h3>$25.53</h3>
                <p class="negative">-1.25%</p>
              </ion-text>
            </ion-item>
            <ion-item button class="coin-item">
              <ion-icon slot="start" :icon="helpCircle" class="coin-icon"></ion-icon>
              <ion-label>
                <h2>Ethereum</h2>
                <p>0.74 ETH</p>
              </ion-label>
              <ion-text slot="end" class="coin-value">
                <h3>$1,391.53</h3>
                <p class="negative">-2.88%</p>
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
    };
  },
  methods: {
    goToPortfolio() {
      this.$router.push('/portfolio'); // Redirect to the portfolio page
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
  color: var(--ion-color-danger);
}
.negative {
  color: var(--ion-color-danger);
}
</style>
