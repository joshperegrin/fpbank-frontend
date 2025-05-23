import { defineStore } from "pinia";

export const useAccountStore = defineStore(
    'accounts',
    {
        state: () => {
            return {
                personalInfo: {
                    user_name: 'Marky',
                    user_mobile: '+639123456789',
                    user_email: 'washing.machine@agmail.com',
                    user_birthdate: 'February 28, 1990',
                    user_nationality: 'FILIPINO',
                    user_address: 'BLK 78 LOT 99 STREET ST., BRGY 7, NAIC CITY CAVITE, PHILIPPINES, 4102'
                }
            }
        },
        actions: {
            async logpersonalInfo(){
                console.log(this.personalInfo.user_name)
                console.log(this.personalInfo.user_mobile)
                console.log(this.personalInfo.user_email)
                console.log(this.personalInfo.user_birthdate)
                console.log(this.personalInfo.user_nationality)
                console.log(this.personalInfo.user_address)
            }

        }
    }
)