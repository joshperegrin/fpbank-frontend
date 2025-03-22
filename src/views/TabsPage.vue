<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" src="src/assets/svgs/home.svg" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" src="src/assets/svgs/bank.svg" />
          <ion-label>Services</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" src="src/assets/svgs/invest.svg" />
          <ion-label>Invest</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon aria-hidden="true" src="src/assets/svgs/account.svg" />
          <ion-label>Account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<style scoped>
ion-tab-bar {
  height: 75px;
  box-shadow: 0px -4px 14px rgba(0, 0, 0, 0.2);
}
ion-icon {
  font-size: xx-large;
  margin-bottom: 3px;
}
ion-label {
  font-size: x-small;
  margin-bottom: 0px ;
}
ion-tab-button {
  --color: var(--ion-color-primary);
  --color-selected: var(--ion-color-secondary);
  --ripple-color: var(--ion-color-secondary);
}
</style>

<script setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
