<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/tab2/externalTransfer"></ion-back-button>
        </ion-buttons>
        <ion-title>Transfer Funds</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="content-container ion-padding">
        <div class="stick">
          <ion-input fill="outline" placeholder="Search Bank">
            <ion-icon style="font-size: 25px;" slot="end" color="primary" :icon="searchOutline" aria-hidden="true"></ion-icon>
          </ion-input>
        </div>
        <ion-item-group v-for="(value, key) in banksSorted" :key="key">
          <ion-item-divider>{{key}}</ion-item-divider>
          <ion-item v-for="bankname in value" :key="bankname" @click="handleClick(bankname)">
            <ion-label>{{bankname}}</ion-label>
          </ion-item>
        </ion-item-group>
      </div>
    </ion-content>
  </ion-page>
</template>
<style scoped>
ion-header {
  background-color: var(--ion-color-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  height: max-content;
}
.stick {
  position: sticky;
  top: 0;
  z-index: 2;
  padding-top: 20px;
  background-color: var(--ion-color-light);
}
ion-input {
  box-shadow: 1px 1px 25px -10px rgba(0,0,0,0.3);
}
.content-container{
  padding-top: 0;
}
</style>
<script>
import { IonItemGroup, IonItemDivider, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonInput } from '@ionic/vue';
import { searchOutline } from 'ionicons/icons';
import { useServicesStore } from '../store/services.store.js'
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonInput,
    IonItemGroup,
    IonItemDivider,
    IonItem,
    IonLabel,
  },
  data(){
    return {
      banks: [],
      searchOutline,
      servicesStore: useServicesStore(),
    }
  },
  mounted(){
    this.initBanks()
  },
  computed: {
    banksSorted(){
      const result = {};
      this.banks.sort()
      this.banks.forEach(bank => {
        // Get the first letter of the bank name (make sure it's uppercase)
        const firstLetter = bank.charAt(0).toUpperCase();

        // If the first letter key doesn't exist, create an empty array
        if (!result[firstLetter]) {
        result[firstLetter] = [];
        }

        // Push the bank name to the corresponding array
        result[firstLetter].push(bank);
      });

      return result;
      
    }
  },
  methods: {
    async initBanks(){
      console.log(this.servicesStore.listOfBanks);
      if (this.servicesStore.listOfBanks.length == 0){
        try{
          await this.servicesStore.fetchBanks();
        } catch(e){
          console.log("do stuff");
        }
      }
      this.banks = this.servicesStore.listOfBanks;
    },
    handleClick(receiving_bank){
      this.servicesStore.serviceDetails.transfer_ReceivingBank = receiving_bank;
      this.$router.back();
    }
  }
  
}

</script>
