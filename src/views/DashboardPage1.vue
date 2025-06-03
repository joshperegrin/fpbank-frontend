<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <GenericHeader title="FP Bank" :root_page="true">
        <DashboardHeader :account="account"/>
      </GenericHeader>
      <div class="content-body">
        <div class="card-container" @click="flipped = !flipped">
          <div class="card-inner" :class="{ flipped }">
            <div class="card-face card-front">
              <div class="card-text">
                <h3>FullPort Debit Card</h3>
              </div>
              <div class="card-icons">
                <div class="chip-icon"></div>
                <img :src="logo_src" alt="FullPort Logo" class="logo" />
              </div>
            </div>
            <div class="card-face card-back">
              <div class="card-text">
                <h3>{{accountStore.user.firstname + ' ' + accountStore.user.middlename + ' ' + accountStore.user.lastname}}</h3>
                <div class="back-details">
                  <div>
                      <p> Expiry Date</p>
                      <h3>{{accountStore.accountInfo.debitCardExpiry}}</h3>
                  </div>
                  <div>
                      <p> CVV</p>
                      <h3>{{accountStore.accountInfo.debitCardCVV}}</h3>
                  </div>
                </div>
              </div>
              <div class="card-icons">
                  <h3>9876532112345</h3>
                  <img :src="logo_src" alt="FullPort Logo" class="logo" />
              </div>
          </div>
          </div>
        </div>
<!--        <GenericCardWidgets title="Favorite Accounts">-->
<!--            <item-grid :items="favoriteAccounts"/> <!--TODO: Property '$slots' was accessed via 'this'. Avoid using 'this' in templates.-->
<!--        </GenericCardWidgets>-->
<!---->
<!--        <GenericCardWidgets title="Favorite Billers">-->
<!--          <item-grid :items="favoriteBillers"/>-->
<!--        </GenericCardWidgets>-->
<!---->
<!--        <GenericCardWidgets title="Services">-->
<!--          <item-grid :items="services"/>-->
<!--        </GenericCardWidgets> -->
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

const flipped = ref(false)
const logo_src = ref("src/assets/imgs/image 11.jpg")
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
.card-container {
  perspective: 1000px;
  width: 100%;
  max-width: 350px;
  margin: 2rem auto;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 200px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  backface-visibility: hidden;
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.card-front {
  background: linear-gradient(135deg, #3f3d56, #5a55ae);
}

.card-back {
  background: linear-gradient(135deg, #3f3d56, #5a55ae);
  transform: rotateY(180deg);
}

.card-text h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
}

.card-text p {
  font-size: 14px;
  color: #e0e0e0;
}

.card-icons {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.back-details {
  display:inline-flex;
  justify-content: space-between;
  gap: 1.5rem;
}

.chip-icon {
  width: 30px;
  height: 20px;
  background: linear-gradient(to right, #ccc, #999);
  border-radius: 4px;
}

.logo {
  width: 32px;
  height: 32px;
}

.buttons {
  padding: 10px;
  margin: 15px;
}

.content-body {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1em;
}
</style>
