<template>
  <ion-page>
    <ion-header>
      <ion-avatar>
        <img :src="avatar_src"/>
      </ion-avatar>
      <span class="greetings"> {{first_name}}, </span>
      <span class="greetings"> What would you like to do? </span> 
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
  border-radius: 0px 0px 16px 16px;
}
ion-avatar {
  box-shadow: 1px 1px 25px -5px rgba(0,0,0,0.46);
  height: 80px;
  width: 80px;
}
ion-header span.greetings:first-of-type {
  margin-top: 10px;
}
.greetings {
  font-size: larger;
  font-weight: 600;
  color: var(--ion-color-primary-contrast);
}
</style>

<script>
import { IonPage, IonHeader, IonContent, IonAvatar } from '@ionic/vue';

export default {
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonAvatar
  },
  data(){
    return {
      avatar_src: "src/assets/imgs/angry.jpg",
      first_name: "Washing",
    }
  },
}
</script>
