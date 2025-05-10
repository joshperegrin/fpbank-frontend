<template>
  <ion-page>
    <ion-content>
      <GenericHeader
          title="Successful Transaction"
          :icon_src="checkmark"
      />
      <HistoryTransactionDetails/>
      <HistoryCopyableCard content="MBCACC241222075807865447777">
        Transaction Number
      </HistoryCopyableCard>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import GenericHeader from "@/components/GenericHeader.vue";
import { checkmark } from "ionicons/icons";
import HistoryTransactionDetails from "@/components/HistoryTransactionDetails.vue";
import HistoryCopyableCard from "@/components/HistoryCopyableCard.vue";
</script>

<style scoped>

</style>