import api from './api';

export async function processPayment(ticketId, data, token) {
  const response = await api.post('/payments/process', {
    ticketId,
    cardData: data,
  }, {    
    headers: { 
      Authorization: `Bearer ${token}`, 
    },
  });
  return response.data;
}

export async function getPayment(ticketId, token) {
  const response = await api.get(`/payments?${ticketId}`, {
    headers: { 
      Authorization: `Bearer ${token}`, 
    },
  });

  return response.data;
}
