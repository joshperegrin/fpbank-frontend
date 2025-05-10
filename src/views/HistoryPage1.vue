<template>
  <ion-page>
    <ion-content>
      <GenericHeader title="Transaction History">
        <ion-item color="primary">
          <ion-searchbar placeholder="Search Transaction..."/>
          <ion-button
              :router-link="{ name: 'history_page_2' }"
              size="large"
              fill="solid"
              shape="round"
          >
            <ion-icon slot="icon-only" :src="downloadOutline"/>
          </ion-button>
        </ion-item>
      </GenericHeader>
      <HistoryFilters/>
      <HistoryTransactionCards/>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonIcon, IonContent, IonButton } from '@ionic/vue';
import { downloadOutline } from 'ionicons/icons';
import GenericHeader from "@/components/GenericHeader.vue";
import HistoryFilters from "@/components/HistoryFilters.vue";
import HistoryTransactionCards from "@/components/HistoryTransactionCards.vue";
</script>

<style scoped>
ion-searchbar {
  --border-radius: 100px;
}
</style>