<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <GenericHeader title="FPBANK Dashboard" :root_page="true">
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
import {
  IonPage,
  IonContent,
} from '@ionic/vue';
import { homeOutline, personOutline, settingsOutline, walletOutline, helpCircleOutline, logOutOutline, searchOutline } from 'ionicons/icons';
import ItemGrid from '@/components/ItemGrid.vue';
import DashboardHeader from '@/components/DashboardHeader.vue';
import FeaturedArticle from '@/components/DashboardArticle.vue';
import GenericCardWidgets from "@/components/GenericCardWidgets.vue";
import GenericHeader from "@/components/GenericHeader.vue";

const account = {
  amount: '370,740.21',
  number: '002376543210',
  currency: 'PHP',
};

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
