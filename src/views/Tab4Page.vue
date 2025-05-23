<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>My Account</ion-title>
      </ion-toolbar>
      <ion-avatar>
        <img :src="avatar_src"/>
      </ion-avatar>
      <span class="username">{{user_name}}</span>
      <span class="subtext">{{user_email}}</span>
      <span class="subtext">{{user_mobile}}</span>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="content-body">
        <CustomButton01 :icon_name="personCircleOutline" @click="goToPersonalInfo"> Personal Info </CustomButton01>
        <CustomButton01 :icon_name="walletOutline" @click="goToManageAccounts"> Manage Accounts </CustomButton01>
        <CustomButton01 :icon_name="settingsOutline" @click="goToSettings"> Settings </CustomButton01>
        <CustomButton01 :icon_name="searchCircleOutline" @click="goToFindUs"> Find Us </CustomButton01>
        <CustomButton01 :icon_name="helpCircleOutline" @click="goToContactUs"> Contact Us </CustomButton01>
        <CustomButton01 :icon_name="logOutOutline" @click="logout"> Log out </CustomButton01>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-header {
  -webkit-box-shadow: none;
  box-shadow: none;

  background-color: var(--ion-color-primary);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  padding-top: 30px;
  padding-bottom: 15px;
  border-radius: 0px 0px 16px 16px;
}
.username {
  font-size: medium;
  font-weight: 700;
  color: var(--ion-color-primary-contrast);
  margin: 5px 0px;
}
.subtext {
  font-size: xx-small;
  font-weight: 400;
  color: var(--ion-color-primary-contrast);
}
ion-avatar {
  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
  height: 110px;
  width: 110px;
}
.content-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch; 
  gap: 15px;
}
</style>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar } from '@ionic/vue';
import CustomButton01 from '../components/CustomButton01.vue'
import { personCircleOutline, walletOutline, settingsOutline, searchCircleOutline, helpCircleOutline, logOutOutline } from 'ionicons/icons';
import { useRouter } from "vue-router";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAvatar,
    CustomButton01,
  },
  data(){
    return {
      avatar_src: "src/assets/imgs/angry.jpg",
      user_name: "Washing Machine",
      user_email: "washing.machine@gmail.com",
      user_mobile: "+63-912-345-6789",
      personCircleOutline,
      walletOutline,
      settingsOutline,
      searchCircleOutline,
      helpCircleOutline,
      logOutOutline,
    }
  },
  methods: {
    goToPersonalInfo() {
      this.$router.push('/personal-info');
    },
    goToManageAccounts() {
      this.$router.push('/manage-accounts');
    },
    goToSettings() {
      this.$router.push('/settings');
    },
    goToFindUs() {
      this.$router.push('/find-us');
    },
    goToContactUs() {
      this.$router.push('/contact-us');
    },
    logout(){
      this.$router.push("/loginBio"); 
    }
  },
}
</script>
