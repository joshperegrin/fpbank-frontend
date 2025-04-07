<template>
  <ion-page>
    <ion-header>
      <ion-buttons slot="start" @click="goBack" class="back-button">
        <ion-icon :icon="returnDownBackOutline" size="large"></ion-icon>
        Back
      </ion-buttons>
      <ion-toolbar color="primary">
        <ion-title>My Portfolio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="total-value">
        <ion-label>
          <h2>Total Value</h2>
        </ion-label>
        <ion-text>
          <h1>PHP 20,000.00</h1>
        </ion-text>
      </div>
      <div class="portfolio-breakdown">
        <div class="chart">
          <div class="chart-bar bitcoin"></div>
          <div class="chart-bar ethereum"></div>
          <div class="chart-bar dogecoin"></div>
        </div>
        <div class="breakdown-details">
          <div class="breakdown-item">
            <span class="dot bitcoin"></span>
            <ion-text slot="start">Bitcoin BTC</ion-text>
            <span>PHP 1,000.00</span>
          </div>
          <div class="breakdown-item">
            <span class="dot ethereum"></span>
            <ion-text>Ethereum ETH</ion-text>
            <span>PHP 25,000.00</span>
          </div>
          <div class="breakdown-item">
            <span class="dot dogecoin"></span>
            <ion-text>Dogecoin DOGE</ion-text>
            <span>PHP 1,800.00</span>
          </div>
        </div>
      </div>
      <div class="investment-summary">
        <div class="summary-item">
          <span>This Month Earnings</span>
          <span class="earnings">+PHP 400.00</span>
        </div>
        <div class="summary-item">
          <span>Total Investment</span>
          <span>PHP 25,000.00</span>
        </div>
      </div>
      <div class="tokens-list">
        <ion-list class="coin-list" lines="none">
          <ion-item button class="coin-item">
            <ion-icon slot="start" :icon="helpCircle" class="coin-icon"></ion-icon>
            <ion-label>
              <h2>Bitcoin </h2>
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
              <p class="negative">-1.12%</p>
            </ion-text>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonText, IonLabel, IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/vue";
  import { returnDownBackOutline, helpCircle } from "ionicons/icons";

  export default {
    components: {
      IonText,
      IonLabel,
      IonIcon,
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonButtons,
    },
    data() {
      return {
        returnDownBackOutline,
        helpCircle,
      };
    },
    methods: {
      goBack() {
        this.$router.push("/tabs/tab3");
      },
    },
  };
</script>

<style scoped>
  .back-button {
    padding-top: 20px;
    padding-left: 15px;
    gap: 5px;
    color: white;
  }
  ion-header {
    background-color: var(--ion-color-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 15px;
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
    color: var(--ion-color-danger);
  }
  .negative {
    color: var(--ion-color-danger);
  }
</style>
