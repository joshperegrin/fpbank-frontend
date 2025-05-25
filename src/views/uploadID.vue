<template>
  <ion-page>
    <ion-content class="custom-content">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="RegisterInformation"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
      <h3 class="page-title">Register</h3>
      <div class="card-wrapper">
        <ion-card class="main-card">
          <div class="card-content-wrapper">
            <p>
              <strong>II. Upload Valid ID</strong><br><br />
              1. Your valid ID photo should be aligned within the guideline border.<br />
              2. Your valid ID photo should be original and not tampered/modified in any form.<br />
              3. Your valid ID photo should be clear and readable.<br />
              4. Expired, blurry, dark, and with glare will not be accepted.
            </p>
            <div class="valid-ids-1">
              <img :src="expired" alt="Not Valid 1" class="not-valid-id" />
              <img :src="blurry" alt="Not Valid 2" class="not-valid-id" />
              <img :src="dark" alt="Not Valid 3" class="not-valid-id" />
              <img :src="glare" alt="Not Valid 4" class="not-valid-id" />
            </div>
            <div class="valid-ids-2"></div>
            <ion-input v-model="selectedID" id="select-id" fill="outline" placeholder="Select ID Type" readonly>
              <ion-icon slot="end" :icon="chevronDown" size="small"></ion-icon>
            </ion-input>
            <ion-card class="uploadID-card">
              <img :src="IDupload" alt="Upload ID" class="IDupload" />
              <input type="file" @change="handleFile" accept="image/*" />
              <p>Upload your ID</p>
            </ion-card>
            <ion-card class="checkbox-card">
              <ion-checkbox label-placement="end" justify="start"></ion-checkbox>
              <p>
                I have read and I accept the <strong>FPBank Terms and Conditions</strong> and
                <strong>FPBank Privacy Policy</strong>. I authorize FPBank to use and share my data with compliance Data
                Privacy Act of 2012.
              </p>
            </ion-card>
            <div class="button-container">
              <ion-button expand="block" shape="round" size="large" @click="enterPassword">Confirm</ion-button>
            </div>
          </div>
          <ion-popover id="ID-popover" trigger="select-id" size="cover">
            <ion-list class="ID-list">
              <ion-item v-for="(id, index) in ids" :key="index" button @click="selectID(id)">
                {{ id }}
              </ion-item>
            </ion-list>
          </ion-popover>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import { chevronDown } from 'ionicons/icons';
  import blurry from '@/assets/imgs/blurry.jpg';
  import dark from '@/assets/imgs/dark.jpg';
  import glare from '@/assets/imgs/with glare.jpg';
  import expired from '@/assets/imgs/expired.jpg';
  import IDupload from '@/assets/imgs/IDupload.jpg';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  import { useRegistrationStore } from '../stores/registration.store';
  import { popoverController, toastController } from '@ionic/vue';
  import {
    IonPage,
    IonToolbar,
    IonContent,
    IonCard,
    IonCheckbox,
    IonItem,
    IonInput,
    IonButton,
    IonButtons,
    IonBackButton,
    IonPopover,
    IonList,
  } from '@ionic/vue';

  const ids = [
    'Passport',
    "Driver's License",
    'National ID',
    "Voter's ID",
    'SSS ID',
    'PhilHealth ID',
    'Postal ID',
    'PRC ID',
    'Other',
  ];

  const router = useRouter();
  const registrationStore = useRegistrationStore();
  const selectedID = ref('');
  const validID = ref(null);

  function selectID(id) {
    selectedID.value = id;
    popoverController.dismiss(null, null, 'ID-popover');
  }

  function handleFile(event) {
    validID.value = event.target.files[0];
  }

  async function showToast(message) {
    const toast = await toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  function enterPassword() {
    if (!selectedID.value) {
      showToast('Please select an ID type.');
      return;
    }
    if (!validID.value) {
      showToast('Please upload a valid ID file.');
      return;
    }
    registrationStore.setIDInfo({ idType: selectedID.value, validID: validID.value });
    router.push('/enterPW');
  }
</script>

<style scoped>
    ion-content.custom-content {
        --background: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        height: 100%;
        flex: 1;
    }

    ion-page {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    ion-toolbar {
        --background: #292966;
        color: white;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    h3.page-title {
        color: white;
        text-align: center;
        font-weight: bold;
        background: #292966;
        margin-top: -1px;
        padding-bottom: 10px;
        border: transparent;
    }

    .card-wrapper {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        min-height: 0;
    }

    .card-content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        gap: 20px; /* consistent spacing between elements */
        padding: 10px 0;    
        flex-grow: 1;
    }

    ion-card.main-card {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        --background: transparent;
        color:#5C5C99;
        margin: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-inline-start: 3%;
        padding-inline-end: 3%;
        height: auto;
        box-shadow: none;
    }

    .valid-ids-1, .valid-ids-2 {
        display: flex;
        justify-content: center;
        flex-direction: row;
        width: 80%;
        margin: auto;
    }

    .valid-ids-1 img, .valid-ids-2 img {
        width: 30%;
        height: auto;
        border-radius: 10px;
    }

    ion-list.ID-list {
        background: transparent;
        padding: 0%;
        align-items: center;
    }

    #ID-chev{
        cursor: pointer;
    }

    ion-item.id-item {
        --background: white;
        border: #5C5C99;
        color: #5C5C99;
        width: 100%;
        height: 100%;
        --wheel-highlight-background: #c5c5e2;
        --wheel-highlight-background-opacity: 0.5;
        --wheel-highlight-border-radius: 48px;
        --wheel-fade-background-rgb: transparent;
    }
    
    ion-card.uploadID-card{
        --background: white;
        border: 2px solid #292966;
        border-radius: 10px;
        color: #292966;
        width: 100%;
        text-align: center;
        padding: 20px;
        box-shadow: none;
        height: auto;
        max-height: fit-content;
        margin: auto;
        cursor: pointer;
    }

    ion-card.uploadID-card p {
        color: #292966;
        margin:auto;
        font-size: 20px;
    }

    .IDupload {
        width: 55%;
        height: auto;
        border-radius: 10px;
        justify-content: center;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    }

    ion-card.checkbox-card {
        --background: white;
        box-shadow: none;
        color: #292966;
        width: 100%;
        text-align: left;
        padding: 0;
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;
        height: auto;
        max-height: fit-content;
        text-align: left;
        margin: auto;
    }

    ion-card.checkbox-card p {
        margin: 0; /* Remove default margins */
        padding: 1px;
        text-align: justify;
        font-size: small;
        line-height: 1.5; /* Adjust line height for readability */
    }

    ion-checkbox {
        --size: 20px;
        --checkbox-background-checked: #292966;
        --checkbox-background: transparent;
    }

    ion-checkbox::part(container) {
        border-radius: 5px;
        border: 1px solid #292966;
    }

    .button-container {
        margin-top: 45px;
        margin-bottom: 25px;
    }
</style>