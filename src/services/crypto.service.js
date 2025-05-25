import axios from 'axios';
import { useAccountStore } from '../stores/account.store';

const API_URL = 'http://157.245.207.138';
const accountStore = useAccountStore();
// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to add session ID to all requests
api.interceptors.request.use((config) => {
  const sessionId = accountStore.session_id;
  if (sessionId) {
    config.headers['X-Session-ID'] = sessionId;
  }
  return config;
});

export const cryptoService = {
  // Get user's crypto portfolio
  getPortfolio: async () => {
    try {
      const response = await api.get('/crypto/portfolio');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get user's crypto transaction history
  getTransactionHistory: async (limit = 10, offset = 0) => {
    try {
      const response = await api.get(`/crypto/transactions?limit=${limit}&offset=${offset}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Buy cryptocurrency
  buyCrypto: async (cryptoCode, amount, price) => {
    try {
      const response = await api.post('/crypto/buy', {
        crypto_code: cryptoCode,
        amount,
        price
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Convert between cryptocurrencies
  convertCrypto: async (fromCrypto, toCrypto, amount, exchangeRate) => {
    try {
      const response = await api.post('/crypto/convert', {
        from_crypto: fromCrypto,
        to_crypto: toCrypto,
        amount,
        exchange_rate: exchangeRate
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
}; 