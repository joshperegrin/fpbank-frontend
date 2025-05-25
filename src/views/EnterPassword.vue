<template>
    <ion-page>
        <ion-content>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="" default-href="uploadID"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
            <h3 class="page-title">Register</h3>
            <ion-card>
                <p>
                    <strong>III. Security Setup</strong>
                </p>
                <ion-card-title>Enter a password</ion-card-title>
                <ion-input v-model="password" id="pw-input" label="Password" label-placement="floating" fill="outline" type="password">
                    <ion-input-password-toggle slot="end"></ion-input-password-toggle>
                </ion-input> <br>
                <ion-input v-model="confirmPassword" id="pw-input" label="Confirm Password" label-placement="floating" fill="outline" type="password">
                    <ion-input-password-toggle slot="end"></ion-input-password-toggle>
                </ion-input>
                <ion-card-content>
                    <p>Password is a case-sensitive and should:</p>
                    <p style="text-indent: 15px;">* be 7 to 15 characters</p>
                    <p style="text-indent: 15px;">* have at least one uppercase letter</p>
                    <p style="text-indent: 15px;">* have a least one lowercase letter</p>
                    <p style="text-indent: 15px;">* have at least one number</p>
                    <p style="text-indent: 15px;">* not contain special characters</p>
                    <p style="text-indent: 15px;">* not contain your User ID and the word “password”</p>
                    <p style="text-indent: 15px;">* in any case</p>
                </ion-card-content>
                <div class="button-container">
                    <ion-button expand="block" shape="round" size="large" @click="enterPassword">Confirm</ion-button>
                </div> 
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import {
      IonPage,
      toastController,
      IonToolbar,
      IonContent,
      IonCard,
      IonCardTitle,
      IonCardContent,
      IonInput,
      IonButton,
      IonButtons,
      IonBackButton,
  } from "@ionic/vue";
  import { useAccountStore } from '../stores/accounts.store.js';
  import { useRegistrationStore } from '../stores/registration.store.js';

  const password = ref('');
  const confirmPassword = ref('');
  const router = useRouter();
  const accountStore = useAccountStore();
  const registrationStore = useRegistrationStore();

  function validatePassword(password) {
    if (!password) {
      alert('Password is required');
      return false;
    }
    if (password.length < 7 || password.length > 15) {
      alert('Password must be between 7 and 15 characters.');
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      alert('Password must have at least one uppercase letter.');
      return false;
    }
    if (!/[a-z]/.test(password)) {
      alert('Password must have at least one lowercase letter.');
      return false;
    }
    if (!/[0-9]/.test(password)) {
      alert('Password must have at least one number.');
      return false;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      alert('Password must not contain special characters.');
      return false;
    }
    return true;
  }

  async function showToast(message) {
    const toast = await toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  async function enterPassword() {
    if (!validatePassword(password.value)) return;
    if (password.value !== confirmPassword.value) {
      showToast('Passwords do not match.');
      return;
    }
    try {
      registrationStore.setPassword(password.value);
      console.log('Registration Data:', {
        firstname: registrationStore.firstname,
        middlename: registrationStore.middlename,
        lastname: registrationStore.lastname,
        dateOfBirth: registrationStore.dateOfBirth,
        nationality: registrationStore.nationality,
        address: registrationStore.address,
        email: registrationStore.email,
        idType: registrationStore.idType,
        validID: registrationStore.validID ? registrationStore.validID.name : null,
        password: registrationStore.password,
      });
      await accountStore.signup();
      // Ensure session is set
      if (!accountStore.session_id) {
        throw new Error('Session not established');
      }
      await showToast('Signup successful!');
      router.replace('/tabs/tab1'); // Use replace to avoid back navigation issues
    } catch (error) {
      console.error('Signup error:', error);
      showToast(`Signup failed: ${error.message}`);
    }
  }
</script>

<style scoped>
ion-content {
        --background: linear-gradient(to top, #5c55c9, white 40%); /* Ensure the page background is set */
        display: flex; /* Use flexbox to control layout */
        flex-direction: column; /* Stack children vertically */
        justify-content: flex-start; /* Align content at the top */
        align-items: stretch; 
}

ion-toolbar {
    --background: #292966;
    color: white;
    padding: 10px;
}

h3.page-title {
    color: white;
    text-align: center;
    font-weight: bold;
    background: #292966;
    margin-top: -1px;
    padding-bottom: 20px;
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
    height: fit-content;
    box-shadow: none;
}

ion-card-title {
  color: #5c5c99;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1rem;
  margin-top: 50px;
}

ion-card-content {
  color: gray;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1rem;
  margin-top: 10px;
  text-align: justify;
}

.button-container {
    margin-top: 227px;
    margin-bottom: 25px;

}

</style>
