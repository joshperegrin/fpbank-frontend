<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <GenericHeader title="FP Bank" :root_page="true">
        <DashboardHeader :account="account"/>
      </GenericHeader>
      <div class="content-body">
        <GenericCardWidgets title="Favorite Accounts">
            <item-grid :items="favoriteAccounts"/> <!--TODO: Property '$slots' was accessed via 'this'. Avoid using 'this' in templates.-->
        </GenericCardWidgets>

        <GenericCardWidgets title="Favorite Billers">
          <item-grid :items="favoriteBillers"/>
        </GenericCardWidgets>

        <GenericCardWidgets title="Services">
          <item-grid :items="services"/>
        </GenericCardWidgets>

        <FeaturedArticle/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import {
  IonPage,
  IonContent,
  IonToast,
} from '@ionic/vue';
import { homeOutline, personOutline, settingsOutline, walletOutline, helpCircleOutline, logOutOutline, searchOutline } from 'ionicons/icons';
import ItemGrid from '@/components/ItemGrid.vue';
import DashboardHeader from '@/components/DashboardHeader.vue';
import FeaturedArticle from '@/components/DashboardArticle.vue';
import GenericCardWidgets from "@/components/GenericCardWidgets.vue";
import GenericHeader from "@/components/GenericHeader.vue";
import { useAccountStore } from '../stores/accounts.store';

const accountStore = useAccountStore();
const router = useRouter();
const isToastOpen = ref(false);
const toastMessage = ref('');

const account = computed(() => ({
  amount: accountStore.accountInfo.balance,
  number: accountStore.accountInfo.accountNumber,
  currency: 'PHP',
}));

onMounted(async () => {
  try {
    if (!accountStore.session_id) {
      toastMessage.value = 'No session found. Please log in.';
      isToastOpen.value = true;
      setTimeout(() => router.push('/login'), 3000);
      return;
    }
    const isValid = await accountStore.verifySession();
    if (!isValid) {
      toastMessage.value = 'Session expired. Please log in again.';
      isToastOpen.value = true;
      setTimeout(() => router.push('/login'), 3000);
      return;
    }
    await accountStore.fetchBalance();
    console.log(accountStore.accountInfo);
  } catch (error) {
    toastMessage.value = `Failed to load balance: ${error.message}`;
    isToastOpen.value = true;
    if (error.message.includes('session')) {
      setTimeout(() => router.push('/login'), 3000);
    }
  }
});

const favoriteAccounts = [
  { name: 'Juan Dela Cruz', avatar: 'src/assets/imgs/angry.jpg' },
  { name: 'Catriona Gray', avatar: 'src/assets/imgs/angry.jpg' },
  { name: 'Refri G. Rator', avatar: 'src/assets/imgs/angry.jpg' },
  { name: 'Transfer', icon: 'src/assets/svgs/bank.svg' },
];

const favoriteBillers = [
  { name: 'Biller 1', avatar: 'src/assets/imgs/angry.jpg' },
  { name: 'Biller 2', avatar: 'src/assets/imgs/angry.jpg' },
  { name: 'Biller 3', avatar: 'src/assets/imgs/angry.jpg' },
  { name: 'Pay Billers', icon: 'src/assets/svgs/bank.svg' },
];

const services = [
  { name: 'Service 1', icon: homeOutline },
  { name: 'Service 2', icon: personOutline },
  { name: 'Service 3', icon: settingsOutline },
  { name: 'Service 4', icon: walletOutline },
  { name: 'Service 5', icon: helpCircleOutline },
  { name: 'Service 6', icon: logOutOutline },
  { name: 'Service 7', icon: searchOutline },
  { name: 'Service 8', icon: 'src/assets/svgs/bank.svg' },
];
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
