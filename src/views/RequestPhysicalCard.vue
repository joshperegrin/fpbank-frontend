<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/card"></ion-back-button>
          </ion-buttons>
          <ion-title>Physical Card Order Form</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding">
        <div class="content-header">
          <h2>Contact Details</h2>
        </div>
        <ion-item lines="inset" class="border">
          <ion-label position="stacked" class="po">Recipient’s Name</ion-label>
          <ion-input v-model="delivery_name" placeholder="Enter name"></ion-input>
        </ion-item>
        <p class="subtext">This is who will receive the card.</p>

        <ion-item lines="inset" class="border">
          <ion-label position="stacked" class="po">Mobile Number</ion-label>
          <ion-input v-model="delivery_mobile" type="tel" inputmode="numeric" pattern="[0-9]*" @ionInput="validateMobile" placeholder="Enter Mobile"></ion-input>
        </ion-item>
        <p class="subtext">This is where we'll contact you regarding delivery.</p>

        <div class="content-header">
          <h2>Delivery Address</h2>
        </div>

        <ion-item lines="inset" class="border">
          <ion-label position="stacked" class="po">Region</ion-label>
          <ion-select v-model="delivery_region" @ionChange="fetchProvinces" interface="popover" class="custom-select">
            <ion-select-option v-for="region in regions" :key="region.code" :value="region.code">
              {{ region.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item lines="inset" class="border">
          <ion-label position="stacked" class="po">Province</ion-label>
          <ion-select v-model="delivery_province" @ionChange="fetchCities" interface="popover" :disabled="!provinces.length" class="custom-select">
            <ion-select-option v-for="province in provinces" :key="province.code" :value="province.code">
              {{ province.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item lines="inset" class="border">
          <ion-label position="stacked" class="po">City/Municipality</ion-label>
          <ion-select v-model="delivery_city" @ionChange="fetchBarangays" interface="popover" :disabled="!cities.length" class="custom-select">
            <ion-select-option v-for="city in cities" :key="city.code" :value="city.code">
              {{ city.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item lines="inset" class="border">
          <ion-label position="stacked" class="po">Barangay</ion-label>
          <ion-select v-model="delivery_barangay" interface="popover" :disabled="!barangays.length" class="custom-select">
            <ion-select-option v-for="barangay in barangays" :key="barangay.code" :value="barangay.code">
              {{ barangay.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item lines="inset" class="border">
          <ion-label position="stacked" class="po">Address</ion-label>
          <ion-input v-model="delivery_address" placeholder="Enter Address"></ion-input>
        </ion-item>

        </ion-content>
      <ion-button class="buttons" shape="round" size="large" :disabled="isSubmitDisabled" @click="goToRequestPhysicalCard2">Next</ion-button>
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
  
  .details {
    color: rgba(66, 66, 66, 0.715);
    font-weight: light;
    font-size: 18px;
    display: block;
    margin-top: 10px;
    margin-bottom: 25px;
  }

.buttons {
  padding: 10px;
  margin: 15px;
}

.custom-select {
  --background: transparent;
  --padding-start: 10px;
  --padding-end: 10px;
  --min-height: 44px;
  --color: rgb(2, 29, 92);
  font-size: 16px;
  border-radius: 10px;
}

ion-select::part(text) {
  font-size: 18px;
  position: var(--padding-end);
}

ion-select::part(icon) {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(2, 29, 92);
  pointer-events: none;
}


.select-wrapper {
  position: relative;
  margin: 10px;
  box-shadow: 1px 1px 25px -10px rgba(0, 0, 0, 0.46);
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 3px;
  margin-right: 3px;
  padding: 10px;
  background-color: white;
}

.subtext {
  font-size: 10px;
  color: gray;
  margin-left: 15px;
  margin-top: 1px;
}

.po{
  font-size: 18px;
  color: rgb(2, 29, 92);
  font-weight: light;
  padding-left: 1px;
}

.border{
  box-shadow: 1px 1px 25px -10px rgba(0, 0, 0, 0.46);
  border-radius: 10px;
  margin-top: 10px;
}

ion-input{
  font-size: 20px;
  color: rgb(2, 29, 92);
  margin-left: 5px;
}
</style>

  
<script>
import axios from 'axios';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonInput} from '@ionic/vue';
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
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput
  },
  data() {
    return {
      regions: [],
      provinces: [],
      cities: [],
      barangays: [],
    };
  },
  async mounted() {
    await this.fetchRegions();
  },
computed: {
  deliveryStore() {
    return useDeliveryStore();
  },
  delivery_name: {
    get() {
      return this.deliveryStore.requestCard.delivery_name;
    },
    set(value) {
      this.deliveryStore.requestCard.delivery_name = value;
    }
  },
  delivery_mobile: {
    get() {
      return this.deliveryStore.requestCard.delivery_mobile;
    },
    set(value) {
      this.deliveryStore.requestCard.delivery_mobile = value;
    }
  },
  delivery_region: {
    get() {
      return this.deliveryStore.requestCard.delivery_region;
    },
    set(value) {
      this.deliveryStore.requestCard.delivery_region = value;
    }
  },
  delivery_province: {
    get() {
      return this.deliveryStore.requestCard.delivery_province;
    },
    set(value) {
      this.deliveryStore.requestCard.delivery_province = value;
    }
  },
  delivery_city: {
    get() {
      return this.deliveryStore.requestCard.delivery_city;
    },
    set(value) {
      this.deliveryStore.requestCard.delivery_city = value;
    }
  },
  delivery_barangay: {
    get() {
      return this.deliveryStore.requestCard.delivery_barangay;
    },
    set(value) {
      this.deliveryStore.requestCard.delivery_barangay = value;
    }
  },
  delivery_address: {
    get() {
      return this.deliveryStore.requestCard.delivery_address;
    },
    set(value) {
      this.deliveryStore.requestCard.delivery_address = value;
    }
  },
  isSubmitDisabled() {
    const name = this.delivery_name?.trim();
    const mobile = this.delivery_mobile?.trim();
    const address = this.delivery_address?.trim();
    return !name || !/^\d+$/.test(mobile) || !this.delivery_region || !this.delivery_province || !this.delivery_city || !this.delivery_barangay || !address;
  }
},
  methods: {
    validateMobile(event) {
    const input = event.detail.value.replace(/\D/g, '');
    this.mobileNumber = input;
  },
    goToRequestPhysicalCard2() {
      this.$router.push('/request-physical-card2');
    },
    async fetchRegions() {
      try {
        const res = await axios.get('https://psgc.gitlab.io/api/regions/');
        this.regions = res.data;
      } catch (err) {
        console.error('Error fetching regions:', err);
      }
    },

    async fetchProvinces() {
    this.delivery_province = '';
    this.delivery_city = '';
    this.delivery_barangay = '';
    this.provinces = [];
    this.cities = [];
    this.barangays = [];
      try {
        const res = await axios.get(`https://psgc.gitlab.io/api/regions/${this.delivery_region}/provinces/`);
        this.provinces = res.data;
      } catch (err) {
        console.error('Error fetching provinces:', err);
      }
    },

    async fetchCities() {
    this.delivery_city = '';
    this.delivery_barangay = '';
    this.cities = [];
    this.barangays = [];
      try {
        const res = await axios.get(`https://psgc.gitlab.io/api/provinces/${this.delivery_province}/cities-municipalities/`);
        this.cities = res.data;
      } catch (err) {
        console.error('Error fetching cities:', err);
      }
    },


    async fetchBarangays() {
      this.delivery_barangay = '';
      this.barangays = [];

      try {
        const res = await axios.get(`https://psgc.gitlab.io/api/cities-municipalities/${this.delivery_city}/barangays/`);
        this.barangays = res.data;
      } catch (err) {
        console.error('Error fetching barangays:', err);
      }
    }
  }
};
</script>
