import api from './api';

export async function processPayment(body, token) {
  const response = await api.post('/payments', body, {
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
