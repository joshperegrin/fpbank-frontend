<template>
  <ion-page>
    <ion-header>
      <ion-avatar>
        <img :src="avatar_src"/>
      </ion-avatar>
      <span class="greetings"> {{first_name}}, </span>
      <span class="greetings"> What would you like to do? </span> 
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="content-body">
        <ServicesPageButton 
          :icon_name="receiptOutline"
          @click="this.$router.push('/tabs/tab2/transfer/bills')">
          Pay Bills
        </ServicesPageButton>
        <ServicesPageButton
          icon_name="src/assets/svgs/bank.svg"
          @click="this.$router.push('/tabs/tab2/transfer/external')">
          Transfer to Other Banks
        </ServicesPageButton>
        <ServicesPageButton :icon_name="walletOutline"
          @click="this.$router.push('/tabs/tab2/transfer/ewallet')">
          Topup eWallet
        </ServicesPageButton>
        <ServicesPageButton
          :icon_name="sendOutline"
          @click="this.$router.push('/tabs/tab2/transfer/internal')">
          Transfer to Other FullPort
        </ServicesPageButton>
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

  padding-top: 45px;
  padding-bottom: 15px;
  border-radius: 0px 0px 16px 16px;
}
ion-avatar {
  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
  height: 80px;
  width: 80px;
}
ion-header span.greetings:first-of-type {
  margin-top: 10px;
}
.greetings {
  font-size: larger;
  font-weight: 600;
  color: var(--ion-color-primary-contrast);
}
.content-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

</style>

<script>
import { IonLabel, IonIcon, IonPage, IonHeader, IonContent, IonAvatar } from '@ionic/vue';
import CustomButton01 from '../components/CustomButton01.vue';
import ServicesPageButton from '../components/ServicesPageButton.vue'
import { cashOutline, walletOutline, sendOutline, receiptOutline, qrCodeOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router'
import { useAccountStore } from '../stores/accounts.store';
export default {
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonAvatar,
    CustomButton01,
    IonIcon,
    ServicesPageButton,
    IonLabel
  },
  data(){
    return {
      avatar_src: "src/assets/imgs/angry.jpg",
      accountStore: useAccountStore(),
      receiptOutline,
      qrCodeOutline,
      sendOutline,
      walletOutline,
      cashOutline
    }
  },
  computed: {
    first_name(){
      return this.accountStore.user.firstname;
    }
  }
}
</script>
