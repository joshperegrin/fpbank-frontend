<template>
  <ion-page>
    <GenericHeader
        title="Account Details"
        :icon_src="bank"
    >
      <DashboardHeader
          :account="account"
          :show_acc_number="true"
      />
    </GenericHeader>
    <ion-content class="ion-padding">
      <DashboardSavingsDetails />
      <HistoryPreview/>
    </ion-content>
  </ion-page>
</template>

<script setup>
import GenericHeader from "@/components/GenericHeader.vue";
import { IonPage, IonContent, } from "@ionic/vue";
import bank from "@/assets/svgs/bank.svg";
import DashboardSavingsDetails from "@/components/DashboardSavingsDetails.vue";
import HistoryPreview from "@/components/HistoryPreview.vue";
import DashboardHeader from "@/components/DashboardHeader.vue";

const account = {
  amount: '370,740.21',
  number: '002376543210',
  currency: 'PHP',
};
</script>

<style scoped>
</style>