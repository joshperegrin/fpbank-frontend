<template>
  <ion-page>
    <ion-content>
      <GenericHeader
          title="Account Details"
          :icon_src="bank"
      >
        <DashboardHeader
            :account="account"
            :acc_details="true"
        />
      </GenericHeader>
      <div class="content-body">
        <!--<DashboardSavingsDetails/>--> <!--NOTE: Backlogged-->

        <GenericCardWidgets title="Recent Transactions">
          <HistoryPreview :Transactions="transactions" />
          <ion-button expand="block" shape="round" :router-link="{ name: 'history_page_1' }" router-direction="forward">
            <ion-icon slot="end" :src="timeOutline" />
            See Full History
          </ion-button>
        </GenericCardWidgets>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import GenericHeader from "@/components/GenericHeader.vue";
import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { timeOutline } from "ionicons/icons";
import bank from "@/assets/svgs/bank.svg";
import DashboardHeader from "@/components/DashboardHeader.vue";
import HistoryPreview from "@/components/HistoryPreview.vue";
import {computed, onMounted, ref} from "vue";
import GenericCardWidgets from "@/components/GenericCardWidgets.vue";
import CreditCard from "@/components/DashboardCC.vue";
import { useAccountStore } from "../stores/accounts.store";

const accountStore = useAccountStore();
const transactions = ref([]);


const account = computed(() => ({
  amount: accountStore.accountInfo.balance,
  number: accountStore.accountInfo.accountNumber,
  currency: 'PHP',
}));

const cardDetails = computed(() => ({
  type: 'Visa',
  number: accountStore.accountInfo.debitCardNumber || 'N/A',
  name: [
    accountStore.user.firstname,
    accountStore.user.middlename,
    accountStore.user.lastname
  ].filter(Boolean).join(' ') || 'Unknown',
  expiry: accountStore.accountInfo.debitCardExpiry || 'N/A',
  cvv: accountStore.accountInfo.debitCardCVV || 'N/A',
  logo: 'src/assets/svgs/logo.svg'
}));

onMounted(async () => {
  const balanceSuccess = await accountStore.fetchBalance();
  if (!balanceSuccess) alert('Failed to load balance');
  const rawTransactions = await accountStore.fetchUserTransactionHistory(1, 3);
  transactions.value = rawTransactions.map(t => {
    const mapped = {
      transactionName: t.transactionName || 'Unknown',
      transactionDate: t.transactionDate,
      transferAmount: Number(t.transferAmount) || 0,
      transactionStatus: t.transactionStatus || 'Pending',
      transactionReferenceNumber: t.transactionReferenceNumber || '',
      entryType: t.entryType || ''
    };
    console.log('Mapped raw transaction:', mapped); // Debug log
    return mapped;
  });
  console.log('Mapped transactions:', transactions.value);
  if (!transactions.value.length) console.log('No transactions found');
});
</script>

<style scoped>
.content-body {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1em;
}
</style>
