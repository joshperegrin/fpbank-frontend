<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/settings"></ion-back-button>
          </ion-buttons>
          <ion-title>Change Password</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true" class="ion-padding">
        <div class="content-header">
          <h2>Enter Password Details</h2>
        </div>
  
        <div class="content-body">
          <ion-item>
            <ion-label class="details" position="floating">Current Password</ion-label>
            <hide-password v-model:value="currentPassword" />
          </ion-item>
  
          <ion-item>
            <ion-label class="details" position="floating">New Password</ion-label>
            <hide-password v-model:value="newPassword" />
          </ion-item>
  
          <ion-item>
            <ion-label class="details" position="floating">Confirm Password</ion-label>
            <hide-password v-model:value="confirmPassword" />
          </ion-item>
  
          <div v-if="newPassword" class="password-requirements">
            <ul>
              <li :class="{'valid': isValidLength}">7 to 15 characters</li>
              <li :class="{'valid': hasUppercase}">At least one uppercase letter</li>
              <li :class="{'valid': hasLowercase}">At least one lowercase letter</li>
              <li :class="{'valid': hasNumber}">At least one number</li>
              <li :class="{'valid': !hasSpecialChars}">No special characters</li>
              <li :class="{'valid': !containsPassword}">No "password" in the password </li>
            </ul>
          </div>
        </div>
      </ion-content>
      <ion-button class="buttons" shape="round" size="large" :disabled="isSubmitDisabled">Submit</ion-button>
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
  .subtext {
    font-size: xx-small;
    font-weight: 400;
    color: var(--ion-color-primary-contrast);
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
  .password {
    background: var(--ion-item-background);
    color: var(--ion-text-color);
    box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
    border-radius: 10px;
  }
  
  .details {
    color: rgba(66, 66, 66, 0.715);
    font-weight: light;
    font-size: 18px;
    display: block;
    margin-top: 10px;
    margin-bottom: 25px;
  }
  
  .password-requirements {
    margin-top: 10px;
    margin-left: 20px;
  }
  
  .password-requirements ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .password-requirements li {
    color: rgba(66, 66, 66, 0.715);
    font-size: 15px;
  }
  
  .password-requirements li.valid {
    color: rgb(2, 29, 92);
    font-size: 15px;
  }

  .buttons {
    padding: 10px;
    margin: 15px;
  }  

  </style>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton  } from '@ionic/vue';
  import hidePassword from '../components/HidePassword.vue'
  import { IonButton } from '@ionic/vue';
  
  export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButton,
    hidePassword
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  },
  computed: {
    isValidLength() {
      return this.newPassword.length >= 7 && this.newPassword.length <= 15;
    },
    hasUppercase() {
      return /[A-Z]/.test(this.newPassword);
    },
    hasLowercase() {
      return /[a-z]/.test(this.newPassword);
    },
    hasNumber() {
      return /\d/.test(this.newPassword);
    },
    hasSpecialChars() {
      return /[^a-zA-Z0-9]/.test(this.newPassword);
    },
    containsPassword() {
      return /password/i.test(this.newPassword);
    },
    isFormValid() {
      return (
        this.isValidLength &&
        this.hasUppercase &&
        this.hasLowercase &&
        this.hasNumber &&
        !this.hasSpecialChars &&
        !this.containsPassword &&
        this.newPassword === this.confirmPassword
      );
    },
    isSubmitDisabled() {
      return !this.isFormValid;
    }
  }
};
  </script>
  