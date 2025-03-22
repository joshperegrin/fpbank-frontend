<template>
  <ion-page>
    <ion-header>
      <span class="title">My Account</span>
      <ion-avatar>
        <img :src="avatar_src"/>
      </ion-avatar>
      <span class="username">{{user_name}}</span>
      <span class="subtext">{{user_email}}</span>
      <span class="subtext">{{user_mobile}}</span>
    </ion-header>
    <ion-content :fullscreen="true">
    </ion-content>
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

  padding-top: 45px;
  padding-bottom: 15px;
}
.title {
  font-size: x-large;
  font-weight: 700;
  color: var(--ion-color-primary-contrast)
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
  color: var(--ion-color-primary-contrast)
}
ion-avatar {
  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
  height: 110px;
  width: 110px;
  margin-top: 15px;
}
</style>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar } from '@ionic/vue';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAvatar,
  },
  data(){
    return {
      avatar_src: "src/assets/imgs/angry.jpg",
      user_name: "Washing Machine",
      user_email: "washing.machine@gmail.com",
      user_mobile: "+63-912-345-6789",
    }
  },
}
</script>
