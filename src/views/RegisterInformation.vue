<template>
  <ion-page>
    <ion-content>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="imAFilipino"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
      <h3 class="page-title">Register</h3>
      <ion-card>
        <p>
          Fill out the details below to complete opening an account. Please ensure all details are correct and match the
          information in your valid ID.
          <br><br>
          <strong>I. Personal Information</strong>
        </p>
        <ion-input v-model="firstname" label="FIRST NAME" label-placement="floating" fill="outline"></ion-input>
        <ion-card-subtitle>e.g. JUAN</ion-card-subtitle> <br>
        <ion-input v-model="middlename" label="MIDDLE NAME" label-placement="floating" fill="outline"></ion-input>
        <ion-card-subtitle>e.g. GARCIA</ion-card-subtitle> <br>
        <ion-input v-model="lastname" label="LAST NAME" label-placement="floating" fill="outline"></ion-input>
        <ion-card-subtitle>e.g. DELA CRUZ</ion-card-subtitle> <br>
        <ion-input
            id="date-input"
            readonly
            fill="outline"
            :value="selectedDate ? selectedDate : ''"
            label="DATE OF BIRTH"
            label-placement="floating"
            placeholder="YYYY/MM/DD"
        >
          <ion-icon slot="end" :icon="calendarClearOutline" size="small"></ion-icon>
        </ion-input>
        <ion-card-subtitle>e.g. YYYY/MM/DD</ion-card-subtitle> <br>
        <ion-input
            id="nationality-input"
            v-model="selectedNationality"
            label="NATIONALITY"
            label-placement="floating"
            fill="outline"
            readonly
        >
          <ion-icon id="nationality-chev" slot="end" :icon="chevronDown" size="small"></ion-icon>
        </ion-input>
        <ion-card-subtitle>e.g. Filipino</ion-card-subtitle> <br>
        <ion-input v-model="address" label="ADDRESS" label-placement="floating" fill="outline"></ion-input>
        <ion-card-subtitle>e.g. house no., street name, city, province</ion-card-subtitle> <br>
        <ion-input v-model="email" label="EMAIL ADDRESS" label-placement="floating" fill="outline"></ion-input>
        <ion-card-subtitle>e.g. juandelacruz@gmail.com</ion-card-subtitle>
        <div class="button-container">
          <ion-button expand="block" shape="round" size="large" @click="uploadID">Next</ion-button>
        </div>

        <ion-popover id="nationality-popover" trigger="nationality-input" ref="nationalityPopover" size="cover">
          <ion-list class="nationality-list">
            <ion-item
                v-for="(nationality, index) in nationalities"
                :key="index"
                button
                @click="selectNationality(nationality)"
            >
              {{ nationality }}
            </ion-item>
          </ion-list>
        </ion-popover>
        <ion-popover id="date-popover" trigger="date-input" ref="datePopover" size="cover">
          <ion-content>
            <ion-datetime
                presentation="date"
                @ionChange="selectDate"
                size="cover"
                :max="maxDate"
            ></ion-datetime>
          </ion-content>
        </ion-popover>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import { calendarClearOutline, chevronDown } from 'ionicons/icons';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useRegistrationStore } from '../stores/registration.store';
  import { subYears, format, isValid, parse } from 'date-fns';
  import { toastController, popoverController } from '@ionic/vue';
  import {
    IonPage,
    IonToolbar,
    IonContent,
    IonCard,
    IonCardSubtitle,
    IonItem,
    IonInput,
    IonButton,
    IonButtons,
    IonBackButton,
    IonPopover,
    IonList,
    IonDatetime,
  } from '@ionic/vue';

    const nationalities = [
        'Filipino',
];

  const registrationStore = useRegistrationStore();
  const router = useRouter();
  const firstname = ref('');
  const middlename = ref('');
  const lastname = ref('');
  const address = ref('');
  const email = ref('');
  const selectedNationality = ref('');
  const selectedDate = ref('');
  const maxDate = subYears(new Date(), 18).toISOString().split('T')[0];

  function selectNationality(nationality) {
    selectedNationality.value = nationality;
    selectedNationality.value = 'PH' //Hardcoded PH
    popoverController.dismiss(null, null, 'nationality-popover');
  }

  function selectDate(event) {
    const value = event.detail.value;
    if (value) {
      selectedDate.value = format(new Date(value), 'yyyy/MM/dd');
    }
    popoverController.dismiss(null, null, 'date-popover');
  }

  async function showToast(message) {
    const toast = await toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  function validateInputs() {
    if (!firstname.value.trim()) {
      showToast('First name is required.');
      return false;
    }
    if (!lastname.value.trim()) {
      showToast('Last name is required.');
      return false;
    }
    if (!selectedDate.value) {
      showToast('Date of birth is required.');
      return false;
    }
    const parsedDate = parse(selectedDate.value, 'yyyy/MM/dd', new Date());
    if (!isValid(parsedDate)) {
      showToast('Invalid date of birth.');
      return false;
    }
    if (!selectedNationality.value) {
      showToast('Nationality is required.');
      return false;
    }
    if (!address.value.trim()) {
      showToast('Address is required.');
      return false;
    }
    if (!email.value.trim()) {
      showToast('Email address is required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      showToast('Invalid email format.');
      return false;
    }
    return true;
  }

  async function uploadID() {
    if (!validateInputs()) return;
    registrationStore.setPersonalInfo({
      firstname: firstname.value,
      middlename: middlename.value,
      lastname: lastname.value,
      dateOfBirth: selectedDate.value,
      nationality: selectedNationality.value,
      address: address.value,
      email: email.value,
    });
    router.push('/uploadID');
  }
</script>

<style scoped>
    ion-content {
        --background:  white; /* Ensure the page background is set */
        display: flex; /* Use flexbox to control layout */
        flex-direction: column; /* Stack children vertically */
        justify-content: flex-start; /* Align content at the top */
        align-items: stretch;
    }

    ion-toolbar {
        --background: #292966;
        color: white;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        box-shadow: none;
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

    ion-card {
        flex: 1;
        --background: transparent;
        color:#5C5C99;
        margin: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-inline-start: 3%;
        padding-inline-end: 3%;
        text-align: justify;
        box-shadow: none;
    }

    ion-icon {
        cursor: pointer;
        color: #292966;
    }

    ion-datetime {
        --background: white;
        color: #5C5C99;
        border-radius: 5px;
        --wheel-highlight-background: #c5c5e2;
        --wheel-highlight-background-opacity: 0.5;
        --wheel-highlight-border-radius: 48px;
        --wheel-fade-background-rgb: transparent;
    }

    #date-calendar {
        cursor: pointer;
    }

    .nationality-list {
        background: transparent;
        padding: 0%;
        align-items: center;
    }

    #nationality-chev{
        cursor: pointer;
    }

    ion-item {
        --background: white;
        border: #5C5C99;
        color: #5C5C99;
        width: 100%;
        --wheel-highlight-background: #c5c5e2;
        --wheel-highlight-background-opacity: 0.5;
        --wheel-highlight-border-radius: 48px;
        --wheel-fade-background-rgb: transparent;
    }

    .button-container {
        margin-top: 15px;
        margin-bottom: 25px;
    }
</style>