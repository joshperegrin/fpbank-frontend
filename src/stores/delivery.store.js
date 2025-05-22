import { defineStore } from "pinia";

export const useDeliveryStore = defineStore(
    'delivery',
    {
        state: () => {
            return {
                requestCard: {
                    delivery_name: '',
                    delivery_mobile: '',
                    delivery_region: '',
                    delivery_province: '',
                    delivery_city: '',
                    delivery_barangay: '',
                    delivery_address: ''
                }
            }
        },
        actions: {
            async logpersonalInfo(){
                console.log(this.requestCard.delivery_name)
                console.log(this.requestCard.delivery_mobile)
                console.log(this.requestCard.delivery_region)
                console.log(this.requestCard.delivery_province)
                console.log(this.requestCard.delivery_city)
                console.log(this.requestCard.delivery_barangay)
                console.log(this.requestCard.delivery_address)
            }

        }
    }
)