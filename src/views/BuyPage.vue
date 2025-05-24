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
          <ion-input placeholder="Search..." class="search-input" />
        </ion-item>
      </div>
      <div class="section-label">Get started</div>
      <div class="token-list">
        <ion-card class="token-card">
          <ion-item lines="none">
            <ion-icon src="src/assets/svgs/solana.svg" slot="start" class="token-icon" />
            <ion-label>
              <h2>Solana</h2>
              <p>SOL</p>
            </ion-label>
          </ion-item>
        </ion-card>
        <ion-card class="token-card">
          <ion-item lines="none">
            <ion-icon src="src/assets/svgs/usdc.svg" slot="start" class="token-icon" />
            <ion-label>
              <h2>USDC</h2>
              <p>USDC</p>
            </ion-label>
          </ion-item>
        </ion-card>
        <ion-card class="token-card">
          <ion-item lines="none">
            <ion-icon src="src/assets/svgs/eth.svg" slot="start" class="token-icon" />
            <ion-label>
              <h2>Ethereum</h2>
              <p>ETH</p>
            </ion-label>
          </ion-item>
        </ion-card>
      </div>
      <div class="section-label">Available tokens</div>
      <div class="token-list">
        <ion-card class="token-card">
          <ion-item lines="none">
            <ion-icon src="src/assets/svgs/agency.svg" slot="start" class="token-icon" />
            <ion-label>
              <h2>Agency</h2>
              <p>AGENCY</p>
            </ion-label>
          </ion-item>
        </ion-card>
        <ion-card class="token-card">
          <ion-item lines="none">
            <ion-icon src="src/assets/svgs/eliza.svg" slot="start" class="token-icon" />
            <ion-label>
              <h2>Eliza</h2>
              <p>ELIZA</p>
            </ion-label>
          </ion-item>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardContent, IonItem, IonButton, IonIcon, IonInput, IonLabel } from "@ionic/vue";
import { searchOutline } from "ionicons/icons";

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
.search-bar-container {
  margin: 20px;
}
.search-bar {
  border-radius: 12px;
  background: var(--ion-color-primary-contrast);
  border: 1px solid var(--ion-color-primary);
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  height: 44px;
}
.search-icon {
  font-size: 22px;
  color: var(--ion-color-lightmedium);
  margin-right: 8px;
}
.search-input {
  color: var(--ion-color-primary);
  font-size: 16px;
}
.section-label {
  color: var(--ion-color-lightmedium);
  font-size: 15px;
  font-weight: 600;
  margin: 18px 0 8px 18px;
}
.token-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 12px 0 12px;
}
.token-card {
  background: var(--ion-color-light);
  border-radius: 16px;
  box-shadow: none;
  margin: 0 8px 0 8px;
  border: 1px solid var(--ion-color-lightmedium);
}
.token-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 14px;
  object-fit: cover;
  background: var(--ion-color-dark);
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
</style>
