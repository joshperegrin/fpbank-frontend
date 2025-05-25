import { defineStore } from 'pinia';
import { useAccountStore } from '../stores/accounts.store';
const server_address = '157.245.207.138'
const accountStore = useAccountStore()
export const useServicesStore = defineStore(
  'services',
  {
  state: () => {
    return {
      serviceType: '',
      serviceDetails: {
        biller_BillerName: '',
        biller_RefNumber: '',
        biller_Amount: '',
        biller_Note: '',
        transfer_ReceivingBank: '',
        transfer_ReceivingAccountNumber: '',
        transfer_ReceivingAccountName: '',
        transfer_Amount: '',
        transfer_Channel: '',
        transfer_Note: '',
        ewallet_EWalletName: '',
        ewallet_WalletNumber: '',
        ewallet_Amount: '',
        ewallet_Note: '',
        cardlessWithdrawal_ApprovalNumber: ''
      },
      listOfBanks: [],
      transferLimit: {
        instapay: 50000.00,
        pesonet: 500000.00,
        internal: 500000.00,
        bills: 100000.00,
        ewallet: 100000.00,
      },
      serviceCharge: {
        instapay: 15.00,
        pesonet: 0.00,
        internal: 0.00,
        bills: 0.00,
        ewallet: 0.00,
      }
    }
  },
  actions: {
    async fetchBanks(){
      let response;
      try {
        response = await fetch('http://' + server_address + '/transfer/externals', {
          method: 'GET',
          headers: {
            'X-Session-ID': accountStore.session_id
          },
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

        this.listOfBanks = body.banks
      } catch (error) {
        console.error('Error:', error.message);
      }
    
    },
    async payBills(){
      console.log(this.serviceDetails.biller_BillerName)
      console.log(this.serviceDetails.biller_RefNumber)
      console.log(this.serviceDetails.biller_Amount)
      console.log(this.serviceDetails.biller_Note)

    },
    async fundTransfer(){
      if(false){
        throw new Error("Transaction Error");
      }

      console.log(this.serviceDetails.transfer_ReceivingBank)
      console.log(this.serviceDetails.transfer_ReceivingAccountNumber)
      console.log(this.serviceDetails.transfer_ReceivingAccountName)
      console.log(this.serviceDetails.transfer_Amount)
      console.log(this.serviceDetails.transfer_Channel)
      console.log(this.serviceDetails.transfer_Purpose)
      return {
        serviceCharge: 15.00,
        transactionDateTime: new Date(),
        transactionName: 'Internal Fund Transfer',
        referenceNumber: 'MAV1234567890U8',
        transactionStatus: 'success',
      }
    },
    async externalTransfer(){
      const request_body = {
        amount: this.serviceDetails.transfer_Amount,
        note: this.serviceDetails.transfer_Note,
        recipient_AccountNumber: this.serviceDetails.transfer_ReceivingAccountNumber,
        recipient_Bank: this.serviceDetails.transfer_ReceivingBank,
        recipient_AccountName: this.serviceDetails.transfer_ReceivingAccountName,
        transferChannel: this.serviceDetails.transfer_Channel,
      }
      
      const response = await fetch("http://" + server_address + "/transfer/external", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-ID': accountStore.session_id
        },
        body: JSON.stringify(request_body)
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
      return {
        transactionDateTime: body.transactionDate,
        transactionName: body.transactionName,
        referenceNumber: body.transactionReferenceNumber,
        transactionStatus: body.transactionStatus,
        serviceCharge: body.serviceCharge,
      }

      
    },
    async internalTransfer(){
      const request_body = {
        amount: this.serviceDetails.transfer_Amount,
        note: this.serviceDetails.transfer_Note,
        destination_AccountNumber: this.serviceDetails.transfer_ReceivingAccountNumber,
      }
      
      const response = await fetch("http://" + server_address + "/transfer/internal", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-ID': accountStore.session_id
        },
        body: JSON.stringify(request_body)
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
      return {
        transactionDateTime: body.transactionDate,
        transactionName: body.transactionName,
        referenceNumber: body.transactionReferenceNumber,
        transactionStatus: body.transactionStatus,
        serviceCharge: body.serviceCharge,
      }
    },
    async loadEWallet(){
      console.log(this.serviceDetails.ewallet_EWalletName)
      console.log(this.serviceDetails.ewallet_WalletNumber)
      console.log(this.serviceDetails.ewallet_Amount)
      console.log(this.serviceDetails.ewallet_Note)
      
    },
    async cardlessWithdrawal(){
      console.log(this.serviceDetails.cardlessWithdrawal_ApprovalNumber)
      
    },
    setServiceDetails(newDetails){
      this.serviceDetails = newDetails;
    },
    updateServiceDetails(newDetails){
      this.serviceDetails = { ...this.serviceDetails, ...newDetails};
      console.log(this.serviceDetails);
    }
  },
  getters: {
    getServiceDetails(){
      console.log("lmaowefiajewofijoij");
      return this.serviceDetails;
    }
    
  },
})
