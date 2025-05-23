<template>
    <ion-page>
        <ion-content>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="" default-href="enterPW"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
            <h3 class="page-title">Register</h3>
            <ion-card>
                <p>
                    <strong>III. Security Setup</strong>
                </p>
                <ion-card-title>Enter your Philippine mobile number</ion-card-title>
                <ion-input id="num-input" label="+63   "  fill="outline">
                </ion-input> <br>
                <div class="button-container">
                    <ion-button expand="block" shape="round" size="large" @click="gotoOTPnumber">Verify with OTP</ion-button>
                </div> 
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { arrowBack } from 'ionicons/icons';
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
} from "@ionic/vue";

const icons = {
    arrowBack
}
const router = useRouter(); 
const gotoOTPnumber = () => {
    router.push("/OTPnum");
  };
</script>

<style scoped>

ion-content {
        --background: linear-gradient(to top, #5c55c9, white 40%);; /* Ensure the page background is set */
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

.button-container {
    margin-top: 429px;
    margin-bottom: 25px;

}

</style>