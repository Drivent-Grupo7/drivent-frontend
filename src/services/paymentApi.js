import api from './api';

export async function processPayment(token, ticketId, cardData) {
  const response = await api.post('/payments', {
    ticketId, 
    cardData,
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
}
