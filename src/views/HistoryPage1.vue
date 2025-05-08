<template>
  <GenericHeader title="Transaction History">
    <ion-item color="primary">
      <ion-searchbar placeholder="Search Transaction..."/>
      <ion-button size="large" fill="solid" shape="round">
        <ion-icon slot="icon-only" :src="downloadOutline"/>
      </ion-button>
    </ion-item>
  </GenericHeader>
  <ion-content>
    <HistoryFilters/>
    <HistoryTransactionCards/>


  </ion-content>
</template>

<script>
import { IonIcon, IonContent, IonButton, } from '@ionic/vue';
import { downloadOutline } from 'ionicons/icons';
import GenericHeader from "@/components/GenericHeader.vue";
import HistoryFilters from "@/components/HistoryFilters.vue";
import HistoryTransactionCards from "@/components/HistoryTransactionCards.vue";
export default {
  components: {
    IonIcon,
    IonContent,
    IonButton,
    GenericHeader,
    HistoryFilters,
    HistoryTransactionCards,
  },
  data () {
    return {
      downloadOutline,
    };
  },
};
</script>

<style scoped>
ion-searchbar {
  --border-radius: 100px;
}
</style>