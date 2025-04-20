import { defineStore } from 'pinia';

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
      if(false){
        throw new Error("Failed to fetch list of banks");
      }
      this.listOfBanks = ['LMAO', 'BPI', 'BDO', 'CHINA BANK', 'CIMB BANK', 'CITIBANK', 'EAST WEST BANK', 'GCASH', 'GOTYME BANK'];
    },
    async payBills(){
      console.log(this.serviceDetails.biller_BillerName)
      console.log(this.serviceDetails.biller_RefNumber)
      console.log(this.serviceDetails.biller_Amount)
      console.log(this.serviceDetails.biller_Note)

    },
    async fundTransfer(){
      console.log(this.serviceDetails.transfer_ReceivingBank)
      console.log(this.serviceDetails.transfer_ReceivingAccountNumber)
      console.log(this.serviceDetails.transfer_ReceivingAccountName)
      console.log(this.serviceDetails.transfer_Amount)
      console.log(this.serviceDetails.transfer_Channel)
      console.log(this.serviceDetails.transfer_Purpose)
      
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
