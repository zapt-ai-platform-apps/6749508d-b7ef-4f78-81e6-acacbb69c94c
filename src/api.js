import axios from 'axios';
import * as Sentry from '@sentry/browser';

const api = {
  async submitQuestion(question) {
    try {
      console.log('Submitting question:', question);
      const response = await axios.post('/api/chat', { question });
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      Sentry.captureException(error);
      throw error;
    }
  }
};

export default api;