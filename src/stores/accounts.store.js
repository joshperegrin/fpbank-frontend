import { defineStore } from "pinia";
const server_address = '157.245.207.138'
export const useAccountStore = defineStore(
    'accounts',
    {
        state: () => {
            return {
                session_id: "",
                personalInfo: {
                    user_name: 'Marky',
                    user_mobile: '+639123456789',
                    user_email: 'washing.machine@agmail.com',
                    user_birthdate: 'February 28, 1990',
                    user_nationality: 'FILIPINO',
                    user_address: 'BLK 78 LOT 99 STREET ST., BRGY 7, NAIC CITY CAVITE, PHILIPPINES, 4102'
                },
                user: {
                    firstname: '',
                    middlename: '',
                    lastname: '',
                    email: '', 
                    mobile: '', // no mobile lmao katamad
                    birthdate: '',
                    nationality: '',
                    address: '',
                },
                accountInfo: {
                    accountNumber: '',
                    debitCardCVV: '',
                    debitCardExpiry: '',
                    debitCardNumber: ''
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
            },
            async requestLogin(email, password){
                console.log('lmao1')
                const response = await fetch('http://'+ server_address + '/auth/login', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    email: email,
                    password: password
                    })
                })
                let body;
                try {
                    body = await response.json();
                } catch (parseError) {
                    throw new Error(`Invalid JSON response from server: ${await response.text()}`);
                }

                if (!response.ok) {
                    throw new Error(body?.message || `Server returned ${response.status}`);
                }                

                this.session_id = body.sessionID
                this.user.firstname = body.user.firstname
                this.user.lastname = body.user.lastname
                this.user.middlename = body.user.middlename
                this.user.email = body.user.email
                this.user.birthdate = body.user.birthdate
                this.user.nationality = body.user.nationality
                this.user.address = body.user.address
                this.accountInfo.accountNumber = body.accountInfo.accountNumber
                this.accountInfo.debitCardCVV = body.accountInfo.debitCardCvv
                this.accountInfo.debitCardExpiry = body.accountInfo.debitCardExpiry
                this.accountInfo.debitCardNumber = body.accountInfo.debitCardNumber
                console.log(this.session_id)
                console.log(this.user.firstname)
                console.log(this.user.lastname)
                console.log(this.user.middlename)
                console.log(this.user.email)
                console.log(this.user.birthdate)
                console.log(this.user.nationality)
                console.log(this.user.address)
                console.log(this.accountInfo.accountNumber)
                console.log(this.accountInfo.debitCardCVV)
                console.log(this.accountInfo.debitCardExpiry)
                console.log(this.accountInfo.debitCardNumber)


                return true
            },
            async requestLogout(){
                
            },
            async signup(){
                
            },
            async fetchBalance(){
                
            },
            async fetchUserTransactionHistory(){
                
            },


        }
    }
)
