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
                <p>Fill out the details below to complete opening an account. 
                    Please ensure all details are correct and match the information in your valid ID.
                    <br><br>
                    <strong>I. Personal Information</strong>
                </p>
                <ion-input label="FIRST NAME" label-placement="floating" fill="outline"></ion-input>
                <ion-card-subtitle>e.g. JUAN</ion-card-subtitle> <br>
                <ion-input label="MIDDLE NAME" label-placement="floating" fill="outline"></ion-input>
                <ion-card-subtitle>e.g. GARCIA</ion-card-subtitle> <br>
                <ion-input label="LAST NAME" label-placement="floating" fill="outline"></ion-input>
                <ion-card-subtitle>e.g. DELA CRUZ</ion-card-subtitle> <br>
                <ion-input id="date-input" label="DATE OF BIRTH" label-placement="floating" fill="outline" type="text" v-model="selectedDate"  readonly>
                    <ion-icon id="date-calendar" slot="end" :icon="calendarClearOutline" size="small"></ion-icon>
                </ion-input> 
                <ion-card-subtitle>e.g. mm/dd/yyyy</ion-card-subtitle> <br>
                <ion-input id="nationality-input" label="NATIONALITY" label-placement="floating" fill="outline" placeholder="Select Nationality" readonly :value="selectedNationality">
                    <ion-icon id="nationality-chev" slot="end" :icon="chevronDown" size="small"></ion-icon>
                </ion-input><br>
                <ion-input label="ADDRESS" label-placement="floating" fill="outline"></ion-input>
                <ion-card-subtitle>e.g. house no., street name, city, province</ion-card-subtitle> <br>
                <ion-input label="EMAIL ADDRESS" label-placement="floating" fill="outline"></ion-input>
                <ion-card-subtitle>e.g. juandelacruz@gmail.com</ion-card-subtitle>
                <div class="button-container">
                    <ion-button expand="block" shape="round" size="large" @click="uploadID">Next</ion-button>
                </div>
                
                <ion-popover id="nationality-popover" trigger="nationality-input" ref="nationalityPopover" size="cover" readonly>
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
    import { arrowBack, calendarClearOutline, chevronDown} from 'ionicons/icons';
    import logo from "@/assets/imgs/logo.png";
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { popoverController } from '@ionic/vue';
    import { subYears, format, parseISO } from 'date-fns';

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

    const uploadID = () => {
        router.push("/uploadID");
    }

    const nationalities = [
        'Filipino',
        'Afghan',
        'Albanian',
        'Algerian',
        'American',
        'Andorran',
        'Angolan',
        'Antiguans',
        'Argentinean',
        'Armenian',
        'Australian',
        'Austrian',
        'Azerbaijani',
        'Bahamian',
        'Bahraini',
        'Bangladeshi',
        'Barbadian',
        'Barbudans',
        'Batswana',
        'Belarusian',
        'Belgian',
        'Belizean',
        'Beninese',
        'Bhutanese',
        'Bolivian',
        'Bosnian',
        'Brazilian',
        'British',
        'Bruneian',
        'Bulgarian',
        'Burkinabe',
        'Burmese',
        'Burundian',
        'Cambodian',
        'Cameroonian',
        'Canadian',
        'Cape Verdean',
        'Central African',
        'Chadian',
        'Chilean',
        'Chinese',
        'Colombian',
        'Comoran',
        'Congolese',
        'Costa Rican',
        'Croatian',
        'Cuban',
        'Cypriot',
        'Czech',
        'Danish',
        'Djibouti',
        'Dominican',
        'Dutch',
        'East Timorese',
        'Ecuadorean',
        'Egyptian',
        'Emirian',
        'Equatorial Guinean',
        'Eritrean',
        'Estonian',
        'Ethiopian',
        'Fijian',
        'Finnish',
        'French',
        'Gabonese',
        'Gambian',
        'Georgian',
        'German',
        'Ghanaian',
        'Greek',
        'Grenadian',
        'Guatemalan',
        'Guinea-Bissauan',
        'Guinean',
        'Guyanese',
        'Haitian',
        'Herzegovinian',
        'Honduran',
        'Hungarian',
        'I-Kiribati',
        'Icelander',
        'Indian',
        'Indonesian',
        'Iranian',
        'Iraqi',
        'Irish',
        'Israeli',
        'Italian',
        'Ivorian',
        'Jamaican',
        'Japanese',
        'Jordanian',
        'Kazakhstani',
        'Kenyan',
        'Kittian and Nevisian',
        'Kuwaiti',
        'Kyrgyz',
        'Laotian',
        'Latvian',
        'Lebanese',
        'Liberian',
        'Libyan',
        'Liechtensteiner',
        'Lithuanian',
        'Luxembourger',
        'Macedonian',
        'Malagasy',
        'Malawian',
        'Malaysian',
        'Maldivan',
        'Malian',
        'Maltese',
        'Marshallese',
        'Mauritanian',
        'Mauritian',
        'Mexican',
        'Micronesian',
        'Moldovan',
        'Monacan',
        'Mongolian',
        'Moroccan',
        'Mosotho',
        'Motswana',
        'Mozambican',
        'Namibian',
        'Nauruan',
        'Nepali',
        'New Zealander',
        'Nicaraguan',
        'Nigerian',
        'Nigerien',
        'North Korean',
        'Northern Irish',
        'Norwegian',
        'Omani',
        'Pakistani',
        'Palauan',
        'Panamanian',
        'Papua New Guinean',
        'Paraguayan',
        'Peruvian',
        'Polish',
        'Portuguese',
        'Qatari',
        'Romanian',
        'Russian',
        'Rwandan',
        'Saint Lucian',
        'Salvadoran',
        'Samoan',
        'San Marinese',
        'Sao Tomean',
        'Saudi',
        'Scottish',
        'Senegalese',
        'Serbian',
        'Seychellois',
        'Sierra Leonean',
        'Singaporean',
        'Slovakian',
        'Slovenian',
        'Solomon Islander',
        'Somali',
        'South African',
        'South Korean',
        'Spanish',
        'Sri Lankan',
        'Sudanese',
        'Surinamer',
        'Swazi',
        'Swedish',
        'Swiss',
        'Syrian',
        'Taiwanese',
        'Tajik',
        'Tanzanian',
        'Thai',
        'Togolese',
        'Tongan',
        'Trinidadian/Tobagonian',
        'Tunisian',
        'Turkish',
        'Tuvaluan',
        'Ugandan',
        'Ukrainian',
        'Uruguayan',
        'Uzbekistani',
        'Venezuelan',
        'Vietnamese',
        'Welsh',
        'Yemenite',
        'Zambian',
        'Zimbabwean'
];

    const router = useRouter(); 
    const nationalityPopover = ref(null);
    const selectedNationality = ref("");
    const selectedDate = ref('');
    const datePopover = ref(null);
    const maxDate = ref('');
    
    const today = new Date()
    const year = today.getFullYear() - 18
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    maxDate.value = `${year}-${month}-${day}`

    function selectNationality(nationality) {
        selectedNationality.value = nationality;
        nationalityPopover.value.dismiss();
    }

    function selectDate(event) { //if this does not work, just create 3 separete inputs (mm/dd/yyyy) and then use ion-list like the nationality picking
        const value = event.detail.value
        const date = new Date(value)
        const formatted = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })
        selectedDate.value = formatted
        datePopover.value?.dismiss()
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