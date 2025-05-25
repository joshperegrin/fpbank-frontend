<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Load EWallet</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="content-container ion-padding">
        <div class="stick">
          <ion-input fill="outline" placeholder="Search EWallets">
            <ion-icon style="font-size: 25px;" slot="end" color="primary" :icon="searchOutline" aria-hidden="true"></ion-icon>
          </ion-input>
        </div>
        <ion-item-group v-for="(value, key) in ewalletSorted" :key="key">
          <ion-item-divider>{{key}}</ion-item-divider>
          <ion-item v-for="ewalletname in value" :key="ewalletname" @click="handleClick(ewalletname)">
            <ion-label>{{ewalletname}}</ion-label>
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
import { useServicesStore } from '../stores/services.store'
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
      ewallets: [],
      searchOutline,
      servicesStore: useServicesStore(),
    }
  },
  mounted(){
    this.initEWallet()
  },
  computed: {
    ewalletSorted(){
      const result = {};
      this.ewallets.sort()
      this.ewallets.forEach(ewallet => {
        // Get the first letter of the bank name (make sure it's uppercase)
        const firstLetter = ewallet.charAt(0).toUpperCase();

        // If the first letter key doesn't exist, create an empty array
        if (!result[firstLetter]) {
        result[firstLetter] = [];
        }

        // Push the bank name to the corresponding array
        result[firstLetter].push(ewallet);
      });

      return result;
      
    }
  },
  methods: {
    async initEWallet(){
      if (this.servicesStore.listOfEWallet.length == 0){
        try{
        debugger;
          await this.servicesStore.fetchEWallets();
        } catch(e){
          console.log("do stuff");
        }
      }
      this.ewallets = this.servicesStore.listOfEWallet;
    },
    handleClick(ewallet_name){
      this.servicesStore.serviceDetails.ewallet_EWalletName = ewallet_name;
      this.$router.back();
    }
  }
  
}

</script>
