<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/tabs/tab4"></ion-back-button>
          </ion-buttons>
          <ion-title>Personal Information</ion-title>
        </ion-toolbar>
        <ion-avatar>
          <img :src="avatar_src"/>
        </ion-avatar>
        <span class="username">{{user_name}}</span>
        <span class="subtext">{{user_email}}</span>
        <span class="subtext">{{user_mobile}}</span>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding">
        <div class="content-body">
          <ion-item class="card-control">
            <ion-label>
              <p>Name</p>
              <h2>{{ user_name }}</h2>
            </ion-label>
          </ion-item>
          <ion-item class="card-control">
            <ion-label>
              <p>Phone Number</p>
              <h2>{{ user_mobile }}</h2>
            </ion-label>
            <ion-icon :icon="createOutline" slot="end" @click="showEditModal('mobile')"></ion-icon>
          </ion-item>

          <ion-item class="card-control">
            <ion-label>
              <p>Email</p>
              <h2>{{ user_email }}</h2>
            </ion-label>
            <ion-icon :icon="createOutline" slot="end" @click="showEditModal('email')"></ion-icon>
          </ion-item>

          <ion-item class="card-control">
            <ion-label>
              <p>Birthdate</p>
              <h2>{{ user_birthdate }}</h2>
            </ion-label>
          </ion-item>

          <ion-item class="card-control">
            <ion-label>
              <p>Nationality</p>
              <h2>{{ user_nationality }}</h2>
            </ion-label>
          </ion-item>

          <ion-item class="card-control">
            <ion-label>
              <p>Address</p>
              <h2>{{ user_address }}</h2>
            </ion-label>
          </ion-item>
        </div>
      </ion-content>
    <ion-alert
      :is-open="isEditing"
      :header="`Edit ${editField === 'email' ? 'Email' : 'Mobile Number'}`"
      :inputs="[
        {
          name: 'editValue',
          type: editField === 'email' ? 'email' : 'tel',
          placeholder: editField === 'email' ? 'Enter new email' : 'Enter 10-digit mobile number',
          value: editField === 'email' ? editValue : editValue,
          attributes: {
            maxlength: 13,
            pattern: '\\d*'
          }
        }
      ]"
      :buttons="[
        { text: 'Cancel', role: 'cancel', handler: () => (isEditing = false) },
        { text: 'Save', handler: saveEdit }
      ]"
      @didDismiss="isEditing = false"
    />
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
  .username {
    font-size: medium;
    font-weight: 700;
    color: var(--ion-color-primary-contrast);
    margin: 5px 0px;
  }
  .subtext {
    font-size: xx-small;
    font-weight: 400;
    color: var(--ion-color-primary-contrast);
  }
  ion-avatar {
    box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
    height: 110px;
    width: 110px;
  }
  .content-body {
    display: flex;
    flex-direction: column;
    background: var(--ion-item-background);
    color: var(--ion-text-color);
    box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
    border-radius: 10px;
  }
  
  .card-control h2 {
    margin: 0;
    font-size: 18px;
    color: rgb(0, 0, 0);
    font-weight: bold;
  }

.buttons {
    padding: 10px;
    margin: 15px;
  }

.alert {
  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
}

  </style>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonBackButton, IonAlert } from '@ionic/vue';
  import { createOutline } from 'ionicons/icons';
  import { useAccountStore } from '../stores/accounts.store';
  export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAvatar,
    IonBackButton,
    IonAlert,
  },
  data() {
    return {
      avatar_src: "src/assets/imgs/angry.jpg",
      isEditing: false,
      editField: "",
      editValue: "",
      createOutline,
    };
  },
  computed: {
    accountStore() {
      return useAccountStore();
    },
    user_name() {
      return this.accountStore.user.firstname + " " + this.accountStore.user.middlename + " " + this.accountStore.user.lastname;
    },
    user_email() {
      return this.accountStore.user.email;
    },
    user_mobile() {
      return this.accountStore.user.mobile;
    },
    user_birthdate() {
      return this.accountStore.user.birthdate;
    },
    user_nationality() {
      return this.accountStore.user.nationality;
    },
    user_address() {
      return this.accountStore.user.address;
    }
  },
  methods: {
    showEditModal(field) {
      this.editField = field;
      this.editValue = field === "email"
        ? this.user_email
        : this.user_mobile;
      this.isEditing = true;
    },
    saveEdit(value) {
      const rawValue = value.editValue.trim();

      if (this.editField === "email") {
        this.accountStore.personalInfo.user_email = value.editValue;
      } else if (this.editField === "mobile") {
        this.accountStore.personalInfo.user_mobile = value.editValue;
      }
      this.isEditing = false;
    }
  }
};
</script>
