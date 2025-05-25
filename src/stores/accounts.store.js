import { defineStore } from "pinia";
import { useRegistrationStore } from './registration.store';
const server_address = '157.245.207.138'
export const useAccountStore = defineStore(
    'accounts',
    {
        state: () => {
            return {
                session_id: localStorage.getItem('session_id') || "",
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
                    debitCardNumber: '',
                    balance: 0,
                    currency: '',
                },
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

                this.session_id = body.sessionID;
                localStorage.setItem('session_id', body.sessionID);
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
            async requestLogout() {
                try {
                    if (!this.session_id) {
                        this.session_id = '';
                        localStorage.removeItem('session_id');
                        this.user = { firstname: '', middlename: '', lastname: '', email: '', mobile: '', birthdate: '', nationality: '', address: '' };
                        this.accountInfo = { accountNumber: '', debitCardCVV: '', debitCardExpiry: '', debitCardNumber: '', balance: 0 };
                        return true;
                    }
                    const response = await fetch(`http://${server_address}/auth/logout`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Session-ID': this.session_id
                        }
                    });
                    let body;
                    try {
                        body = await response.json();
                    } catch (parseError) {
                        console.warn('Invalid JSON response from logout:', await response.text());
                    }
                    if (!response.ok && response.status !== 404) {
                        throw new Error(body?.message || `Server returned ${response.status}`);
                    }
                    this.session_id = '';
                    localStorage.removeItem('session_id');
                    this.user = { firstname: '', middlename: '', lastname: '', email: '', mobile: '', birthdate: '', nationality: '', address: '' };
                    this.accountInfo = { accountNumber: '', debitCardCVV: '', debitCardExpiry: '', debitCardNumber: '', balance: 0 };
                    return true;
                } catch (error) {
                    console.error('Logout failed:', error.message);
                    throw error;
                }
            },
            async signup() {
                const registrationStore = useRegistrationStore();
                const formData = new FormData();
                formData.append('firstname', registrationStore.firstname);
                formData.append('middlename', registrationStore.middlename);
                formData.append('lastname', registrationStore.lastname);
                formData.append('dateOfBirth', registrationStore.dateOfBirth);
                formData.append('nationality', registrationStore.nationality);
                formData.append('address', registrationStore.address);
                formData.append('email', registrationStore.email);
                formData.append('idtype', registrationStore.idType);
                formData.append('password', registrationStore.password);
                if (registrationStore.validID) {
                    formData.append('validid', registrationStore.validID);
                }
                try {
                    // Comment out backend call for debugging
                    const response = await fetch('http://${server_address}/account/', {
                      method: 'POST',
                      body: formData,
                    });
                    const body = await response.json();
                    if (!response.ok) {
                      throw new Error(body.message || `Server returned ${response.status}`);
                    }
                    this.session_id = body.sessionID;
                    this.user.firstname = body.user.firstname;
                    this.user.middlename = body.user.middlename;
                    this.user.lastname = body.user.lastname;
                    this.accountInfo.accountNumber = body.accountInfo.accountNumber;
                    // Mock successful response
                    /*
                    this.session_id = 'mock-session-id';
                    this.user.firstname = registrationStore.firstname;
                    this.user.middlename = registrationStore.middlename;
                    this.user.lastname = registrationStore.lastname;
                    this.accountInfo.accountNumber = 'mock-account-number';
                    */
                    registrationStore.clear();
                    return true;
                } catch (error) {
                    console.error('Signup failed:', error);
                    throw error; // Let the caller handle the error
                }
            },
            async fetchBalance() {
                try {
                    if (!this.session_id) {
                        throw new Error('No session ID available. Please log in.');
                    }
                    const response = await fetch(`http://${server_address}/account/balance`, {
                        method: 'GET',
                        headers: {
                            'X-Session-ID': this.session_id // Match backend expectation
                        }
                    });
                    let body;
                    try {
                        body = await response.json();
                    } catch (parseError) {
                        throw new Error(`Invalid JSON response from server: ${await response.text()}`);
                    }
                    if (!response.ok) {
                        throw new Error(body?.message || `Server returned ${response.status}`);
                    }
                    this.accountInfo.balance = body.balance;
                    return true;
                } catch (error) {
                    console.error('Failed to fetch balance:', error.message);
                    throw error;
                }
            },
            async fetchUserTransactionHistory(page, limit) {
                try {
                    const response = await fetch(`http://${server_address}/account/transactions?page=${page}&limit=${limit}`, {
                        method: 'GET',
                        headers: {
                            'X-Session-ID': this.session_id // Match backend expectation
                        }
                    });
                    if (!response.ok) {
                        const body = await response.json();
                        throw new Error(body?.message || `Server returned ${response.status}`);
                    }
                    const data = await response.json();
                    console.log(data)
                    return data.transactions;
                } catch (error) {
                    console.error('Failed to fetch transaction history:', error);
                    return [];
                }
            },
            //DEBUG feel free to remove, note that this is used as a function on OnMount(): in Dashboardpage1 before fetchbalance
            async verifySession() {
                try {
                    if (!this.session_id) return false;
                    const response = await fetch(`http://${server_address}/account/balance`, {
                        method: 'GET',
                        headers: { 'X-Session-ID': this.session_id }
                    });
                    return response.ok;
                } catch (error) {
                    console.error('Session verification failed:', error.message);
                    return false;
                }
            },
        }
    }
)
