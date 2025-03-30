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
      <div class="portfolio-section">
        <div class="portfolio-info">
          <p class="portfolio-title">Portfolio</p>
          <div class="portfolio-amount-container">
            <p class="portfolio-amount">Php 20,000.00</p>
            <p class="portfolio-change">+2.4%</p>
            <ion-icon :icon="chevronForward" class="portfolio-chevron"></ion-icon>
          </div>
        </div>
        <div class="portfolio-button-section">
          <ion-button fill="clear" class="portfolio-button">
            Buy
          </ion-button>
          <ion-button fill="clear" class="portfolio-button">
            Convert
          </ion-button>
        </div>
      </div>
      <div class="tabs-section">
        <ion-segment>
          <ion-segment-button value="watchlist" content-id="watchlist">
            Watchlist
          </ion-segment-button>
          <ion-segment-button value="coins" content-id="coins">
            Coins
          </ion-segment-button>
        </ion-segment>
        <div class="tab-buttons">
          <ion-button fill="clear" color="light">
            <ion-icon slot="icon-only" :icon="searchOutline"></ion-icon>
          </ion-button>
          <ion-button fill="clear" color="light">
            <ion-icon slot="icon-only" :icon="timeOutline"></ion-icon>
          </ion-button>
        </div>
      </div>
      <ion-segment-view>
        <ion-segment-content id="watchlist">
          <ion-list class="coin-list">
            <ion-item button class="coin-item">
              <ion-icon slot="start" :icon="helpCircle" class="coin-icon"></ion-icon>
              <ion-label>
                <h2>Bitcoin</h2>
                <p>0.01 BTC</p>
              </ion-label>
              <ion-text slot="end" class="coin-value">
                <h3>-$82,391.53</h3>
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
                <h3>-$25.53</h3>
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
                <h3>-$1,391.53</h3>
                <p class="negative">-2.88%</p>
              </ion-text>
            </ion-item>
          </ion-list>
        </ion-segment-content>
        <ion-segment-content id="coins">
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
      </ion-segment-view>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonButton, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonList, IonItem, IonLabel, IonText } from "@ionic/vue";
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
.portfolio-section {
  padding: 20px;
  padding-bottom: 0px;
  border-radius: 16px;
  margin: 20px;
  background-color: rgb(23, 23, 23);
}
.portfolio-info {
  text-align: left;
  font-weight:bold;
}
.portfolio-title {
  font-size: 1.2rem;
  margin: 0;
  color: var(--ion-color-contrast);
}
.portfolio-amount-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -10px;
}
.portfolio-change {
  font-size: 1rem;
  color: green; /* Green for positive changes */
}
.portfolio-amount {
  font-size: 1.5rem;
  color: var(--ion-color-contrast);
  margin: 0px;
}
.portfolio-chevron {
  margin-left: auto;
  font-size: 1.5rem;
  color: var(--ion-color-contrast);
  margin-top: -10px;
}
.portfolio-button-section {
  width: 100%;
  display: flex;
  gap: 10px;
  padding-bottom: 5px;
}
.portfolio-button {
  color: var(--ion-color-contrast);
  width: 50%;
  border: solid;
  border-radius: 30px;
  border-color: var(--ion-color-contrast);
  margin-bottom: 5px;
}
.tabs-section {
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}
.tabs-section ion-segment-button {
  color: var(--ion-color-contrast);
  min-height: 25px;
}
.tabs-section ion-segment {
  max-width: 220px;
  gap: 10px;
}
.tab-buttons {
  display: flex;
  margin-left: auto;
  gap: 0px;
}
.tab-buttons ion-icon {
  font-size: 1.2rem;
  color: var(--ion-color-primary-contrast);
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
}
.coin-icon {
  font-size: 45px;
  color: var(--ion-color-contrast);
  margin-left: 8px;
  margin-right: 15px;
}
.coin-item h2 {
  margin: 0;
  font-size: 16px;
  color: var(--ion-color-light);
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
  color: var(--ion-color-light);
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
