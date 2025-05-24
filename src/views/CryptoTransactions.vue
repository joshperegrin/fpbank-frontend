<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start" @click="goBack">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center">Crypto Transactions</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="month-label">Month of May</div>
      <div class="transactions-list">
        <ion-card v-for="(tx, idx) in transactions" :key="idx" class="transaction-card">
          <ion-row class="transaction-row" align-items-center>
            <ion-col size="5" class="tx-col tx-col-left">
              <div class="tx-icon-bg">
                <ion-icon :icon="logoBitcoin" class="tx-icon btc"></ion-icon>
              </div>
              <div class="tx-info">
                <div class="tx-amount btc">{{ tx.btcAmount }}</div>
                <div class="tx-label">Bitcoin</div>
              </div>
            </ion-col>
            <ion-col size="2" class="tx-col tx-col-center">
              <ion-icon :icon="swapVerticalOutline" class="swap-icon"></ion-icon>
            </ion-col>
            <ion-col size="5" class="tx-col tx-col-right">
              <div class="tx-info tx-info-right">
                <div class="tx-amount eth">{{ tx.ethAmount }}</div>
                <div class="tx-label">Ethereum</div>
              </div>
              <div class="tx-icon eth">
                <img src="@/assets/svgs/eth.svg" alt="Ethereum" class="tx-icon eth-img" />
              </div>
            </ion-col>
          </ion-row>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardContent, IonItem, IonButton, IonIcon, IonInput, IonLabel, IonRow, IonCol } from "@ionic/vue";
import { helpCircle, swapVerticalOutline, backspaceOutline, logoBitcoin, logoUsd } from "ionicons/icons";

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
    IonRow,
    IonCol,
  },
  data() {
    return {
      logoBitcoin,
      swapVerticalOutline,
      helpCircle,
      transactions: [
        { btcAmount: '0.48 BTC', ethAmount: '20 ETH' },
        { btcAmount: '0.48 BTC', ethAmount: '20 ETH' },
        { btcAmount: '0.48 BTC', ethAmount: '20 ETH' },
        { btcAmount: '0.48 BTC', ethAmount: '20 ETH' },
        { btcAmount: '0.48 BTC', ethAmount: '20 ETH' },
        { btcAmount: '0.48 BTC', ethAmount: '20 ETH' },
      ],
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
  --background: transparent;
}
.month-label {
  font-weight: 500;
  font-size: 1rem;
  color: #222a54;
  margin: 40px 0 10px 24px;
}
.transactions-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 8px 16px 8px;
}
.transaction-card {
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(34,42,84,0.08);
  padding: 0;
  margin: 0 16px;
}
.transaction-row {
  display: flex;
  align-items: center;
  padding: 14px 18px;
}
.tx-col {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.tx-col-left {
  justify-content: flex-start;
  gap: 8px;
}
.tx-col-center {
  justify-content: center;
}
.tx-col-right {
  justify-content: flex-end;
  gap: 8px;
}
.tx-icon-bg {
  background: #ff9900;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
.tx-icon-bg svg {
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
}
.tx-icon.btc {
  color: #fff;
  font-size: 24px;
  line-height: 1;
}
.tx-icon.eth {
  color: #222a54;
  font-size: 24px;
}
.tx-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.tx-info-right {
  align-items: flex-end;
}
.tx-amount {
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.5;
}
.tx-amount.btc {
  color: #222a54;
}
.tx-amount.eth {
  color: #222a54;
}
.tx-label {
  font-size: 0.85rem;
  color: #888;
}
.swap-icon {
  color: #222a54;
  font-size: 22px;
}
.tx-icon.eth-img {
  width: 30px;
  height: 30px;
  display: block;
  margin-left: 7x;
}
</style>
