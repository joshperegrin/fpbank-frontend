<template>
  <ion-page>
    <ion-content :fullscreen="true" class="background no-scroll">
      <div class="container">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button text="" default-href="/startup"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
        <div class="logo-title-container">
          <img :src="logo" alt="Full Port Bank Logo" class="logo"/>
          <div class="title-container">
            <span class="title-line">Full Port</span>
            <span class="title-line">Bank</span>
          </div>
        </div>
          <div class="input-area">
            <ion-card-header class="aligned-content">
                <ion-card-title>Enter your credentials</ion-card-title>
            </ion-card-header>
            <div class="ion-inputs">
              <ion-input
                v-model="email"
                label="Email Address"
                label-placement="floating"
                fill="outline"
                placeholder="*******@example.com"
              ></ion-input>
              <ion-input
                v-model="password"
                label="Password"
                label-placement="floating"
                fill="outline"
                type="password"
              >
              <ion-input-password-toggle slot="end"></ion-input-password-toggle>
            </ion-input>
            <ion-card-subtitle @click="goToCredentials">Forgot my account number</ion-card-subtitle>
            </div>
          </div>
          <div class="button-container">
            <ion-button expand="block" shape="round" size="large" @click="validateAndProceed">Confirm</ion-button>
          </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {arrowBack } from 'ionicons/icons';
import logo from "@/assets/imgs/logo.png";
import { ref } from "vue";
import { useRouter } from "vue-router";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton,
  IonIcon,
} from "@ionic/vue";

const icons = {
  arrowBack
}
const router = useRouter(); 

/*const goToOTP = () => {
router.push("/otp"); //last
}

const goToCredentials = () => {
  router.push("/login");
};*/

const email = ref(""); // Bind email input
const password = ref(""); // Bind password input

// Function to sanitize password input
function sanitizePassword(password) {
  if (!password) {
    alert("Password is required");
    return false;
  }

  // Check if the password contains forbidden characters
  const forbiddenCharacters = /[-'";]/; // Matches single quotes, double quotes, semicolons, and SQL comment markers
  if (forbiddenCharacters.test(password)) {
    alert("Password contains invalid characters");
    return false;
  }

  // Ensure the password meets length requirements
  if (password.length < 7 || password.length > 15) {
    alert("Password must be between 7 and 15 characters");
    return false;
  }

  return true;
}

// Function to validate and proceed
const validateAndProceed = () => {
  if (validateEmail(email.value) && sanitizePassword(password.value)) {
    // If email and password are valid, navigate to the OTP page
    router.push("/tabs/tab1");
  }
};

// Function to validate email
function validateEmail(email) {
  if (!email) {
    alert("Email is required");
    return false;
  }

  if (typeof email !== "string") {
    alert("Email must be a string");
    return false;
  }

  if (email.length > 320) {
    alert("Email is too long");
    return false;
  }

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(email)) {
    alert("Invalid email format");
    return false;
  }

  return true;
}

const goToCredentials = () => {
  router.push("/login");
};

</script>

<style scoped>
  .background {
    --background: linear-gradient(to top, #5C55C9, white 60%);
    display: flex; 
    flex-direction: column; 
    height: 100vh;
    overflow: hidden; 
  }

  .no-scroll {
    overflow: hidden !important; 
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
  }

  ion-toolbar {
    --background: transparent;
    color: #292966;
  }

  .logo-title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .logo {
    width: 15%; 
    height: auto;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .title-line {
    font-size: 1.5rem;
    font-weight:800;
    color: #292966;
    font-style: italic;
    line-height: 1;
  }

  .input-area{
    width: 100%;
    text-align: center;
    padding: 18px;
    flex-grow: 1;
    margin-top: 35px;
  }

  .ion-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  ion-input {
    --placeholder-color: #292966; 
    text-align: left;
    font-size: large;
    color: #292966;
  }

  .aligned-content {
    padding: 0;
    width: 100%;
  }

  ion-card-title{
    color: #292966;
    font-size: 2rem;
    font-weight: bold;
    text-align: left; 
    margin-bottom: 1rem;
  }

  ion-card-subtitle {
  color: #292966;
  text-align: left;
  margin-top: 0;
  cursor: pointer;
}


  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 10%;
  }

  ion-button {
    width: 90%;
    font-size: large;
    padding: 10px;
  }
</style>
