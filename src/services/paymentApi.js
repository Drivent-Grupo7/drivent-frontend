import api from './api';

export async function processPayment(data, ticketId, token) {
  const body = {
    cardData: data,
    ticketId,
  };

  const response = await api.post('/payments/process', body, {    
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
