<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Component Library Samples</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

        <IconButton
         shape="circle"
         text_size="x-small"
         icon_size='large'
         icon_src='src/assets/svgs/bank.svg'
         style="font-size:x-small">Services</IconButton>

        <IconButton
         outlined="true"
         shape="circle"
         text_size="x-small"
         icon_size='large'
         icon_src='src/assets/svgs/bank.svg'
         style="font-size:x-small">Services</IconButton>

        <IconButton
         shape="square"
         text_size="x-small"
         icon_size='large'
         icon_src='src/assets/svgs/bank.svg'
         style="font-size:x-small">Services</IconButton>

        <IconButton
         shape="square"
         outlined="true"
         text_size="x-small"
         icon_size='large'
         icon_src='src/assets/svgs/bank.svg'
         style="font-size:x-small">Services</IconButton>

        <ion-input fill='outline'></ion-input>

        <ion-input label="Enter Email" label-placement="floating"fill='outline'></ion-input>

        <ion-button shape='round' size="large"> Open an Account  </ion-button>

        <ion-button shape='round' size="default"> Done </ion-button>

        <ion-button shape='round' size="small"> Download Statement of Accounts  </ion-button>

        <ion-button fill='outline' shape='round' size="large"> This  </ion-button>

        
        <ion-button fill='outline' shape='round' size="default"> This  </ion-button>
        
        <ion-button fill='outline' shape='round' size="small"> This  </ion-button>

        <ion-button fill='outline' size="large" expand="block"> <ion-icon slot="start" src="src/assets/svgs/bank.svg"></ion-icon> Manage Accounts  </ion-button>
        
        <ion-toggle></ion-toggle>

        <ion-toggle :checked="true"></ion-toggle>
        
        <ion-checkbox></ion-checkbox>

        <ion-checkbox :checked="true"></ion-checkbox>
        
        <ion-checkbox><ion-label style="font-size: x-small"> I Accept the terms and condition</ion-label></ion-checkbox>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import IconButton from '../components/IconButton.vue';
</script>
