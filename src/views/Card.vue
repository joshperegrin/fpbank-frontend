<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/manage-accounts"></ion-back-button>
          </ion-buttons>
          <ion-title>Request Physical Card</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding">
      <div class="content-header">
        <h2>Card Information</h2>
      </div>
      <div class="text-body">
            <p> This is the card you will receive, please note that it is non-refundable. </p>
            <p> You're FPBank Registered Name </p>
            <h2> Washing Delos Reyes </h2>
        </div>
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
        <div class="price">
            <p> FPBank Card </p>
            <p> PHP 250.00 </p>
        </div>
      </div>
    </ion-content>
      <ion-button class="buttons" shape="round" size="large" @click="goToRequestPhysicalCard">Next</ion-button>
  </ion-page>
</template>

<style scoped>
ion-header {
  box-shadow: none;
  background-color: var(--ion-color-primary);
  padding-top: 30px;
  padding-bottom: 15px;
  border-radius: 0px 0px 16px 16px;
}

.content-header {
  border-bottom: 2px solid var(--ion-color-medium);
  margin-top: 15px;
  display: flex;
  justify-content: left;
  align-items: center;
}

.content-header h2 {
  margin: 0;
  font-size: 22px;
  color: rgb(2, 29, 92);
  font-weight: light;
}

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

.text-body p {
  font-size: 16px;
  color: black;
  font-weight: light;
  text-align: justify;
  text-justify: inter-word;
  margin: 0;
  padding-top: 10px;
}

.text-body h2{
  font-size: 22px;
  margin: 0;
  color: rgb(2, 29, 92);
  font-weight: 300;
}

.price {  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;  
  padding: 10px;  
}

.price p{
  font-size: 16px;
  margin: 0;
  color: rgb(2, 29, 92);
}

</style>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption} from '@ionic/vue';
import { useAccountStore } from '../stores/accounts.store';
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButton,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption
  },  data() {
    return {
      flipped: false,
      isSubmitDisabled: false,
      logo_src: "src/assets/imgs/image 11.jpg",
      accountStore: useAccountStore()
    };
  },
    methods: {
    goToRequestPhysicalCard() {
      this.$router.push('/request-physical-card');
    },
  }
};
</script>
