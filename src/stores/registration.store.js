import { defineStore } from 'pinia';

export const useRegistrationStore = defineStore('registration', {
    state: () => ({
        firstname: '',
        middlename: '',
        lastname: '',
        dateOfBirth: '',
        nationality: '',
        address: '',
        email: '',
        idType: '',
        validID: null, // File object
        password: '',
    }),
    actions: {
        setPersonalInfo({ firstname, middlename, lastname, dateOfBirth, nationality, address, email }) {
            this.firstname = firstname;
            this.middlename = middlename;
            this.lastname = lastname;
            this.dateOfBirth = new Date(dateOfBirth).toISOString().slice(0, 10);
            this.nationality = nationality;
            this.address = address;
            this.email = email;
        },
        setIDInfo({ idType, validID }) {
            this.idtype = 'valid2"';
            this.validID = validID;
        },
        setPassword(password) {
            this.password = password;
        },
        clear() {
            this.firstname = '';
            this.middlename = '';
            this.lastname = '';
            this.dateOfBirth = '';
            this.nationality = '';
            this.address = '';
            this.email = '';
            this.idType = '';
            this.validID = null;
            this.password = '';
        },
    },
});
