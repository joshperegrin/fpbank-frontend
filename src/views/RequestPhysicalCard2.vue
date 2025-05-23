<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/request-physical-card"></ion-back-button>
          </ion-buttons>
          <ion-title>Order Confirmation</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding">
      <div class="content-header">
        <h2>Delivery Information</h2>
      </div>
      <div class="order-info">
        <p> {{delivery_name}} </p>
        <p> {{delivery_mobile}} </p>
        <p> {{delivery_address}}, {{ delivery_barangay }}, {{ delivery_city }}, {{ delivery_province }}, {{ delivery_region }}, Philippines </p>
      </div>
      <div class="breakdown">
        <h2>Card Fee Breakdown</h2>
        <div class="price">
            <p class="label">FPBank Card</p>
            <p class="value">PHP 185.00</p>
        </div>
        <div class="price">
            <p class="label">Delivery Fee</p>
            <p class="value">PHP 65.00</p>
        </div>
        <div class="amount-due">
            <p>Total Amount Due</p>
            <p>PHP 250.00</p>
        </div>
      </div>
    </ion-content>
        <ion-item lines="none" class="checkbox-container">
            <ion-checkbox slot="start" color="primary" aria-label="Agreement" v-model="agreed"></ion-checkbox>
            <ion-label class="checkbox-label">
                I understand that the foregoing fees are not refundable. By ordering a FPBank Card, I agree to be bound by the terms and conditions for the use of the FPBank Card as set out in the FPBank App Terms and Card Protect Terms.
            </ion-label>
        </ion-item>
      <ion-button class="buttons" shape="round" size="large" @click="goToRequestPhysicalCard" :disabled="!agreed">Submit</ion-button>
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

.order-info {
    background: var(--ion-item-background);
    color: var(--ion-text-color);
    box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
    margin-top: 20px;
}

.order-info p{
  font-size: 16px;
  color: black;
  font-weight: light;
  text-align: justify;
  text-justify: inter-word;
  margin: 0;
  padding-top: 10px;
}

.price {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.price p {
    font-size: 16px;
    font-weight: 300;
}

.amount-due {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 2px;
}

.amount-due p {
    font-size: 18px;
    font-weight: 600;
}

.breakdown {
    margin: 5px;
}

.checkbox-label {
  font-size: 12px;
  line-height: 1.4;
  color: #333;
}

.buttons {
    padding: 10px;
    margin: 15px;
  }
</style>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButton, IonItem, IonLabel } from '@ionic/vue';
import { useDeliveryStore } from '../stores/delivery.store';
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
    IonLabel
  },  data() {
    return {
      agreed: false,
      flipped: false,
      isSubmitDisabled: false,
      logo_src: "src/assets/imgs/image 11.jpg",
    };
  },
  computed: {
    deliveryStore() {
    return useDeliveryStore();
  },
  delivery_name() {
    return this.deliveryStore.requestCard.delivery_name;
  },
  delivery_mobile() {
    return this.deliveryStore.requestCard.delivery_mobile;
  },
  delivery_region() {
    return this.deliveryStore.requestCard.delivery_region;
  },
  delivery_province() {
    return this.deliveryStore.requestCard.delivery_province;
  },
  delivery_city() {
    return this.deliveryStore.requestCard.delivery_city;
  },
  delivery_barangay() {
    return this.deliveryStore.requestCard.delivery_barangay;
  },
  delivery_address() {
    return this.deliveryStore.requestCard.delivery_address;
  },
},
  methods: {
    goToRequestPhysicalCard() {
      this.$router.push('/request-physical-card');
    },
  }
};
</script>