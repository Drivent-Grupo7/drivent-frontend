import api from './api';

export async function listAuditoriums(token) {
  const response = await api.get('activity/auditoriums', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function listDates(token) {
  const response = await api.get('activity/dates', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function listActivities(token, dateId) {
  const response = await api.get(`activity/${dateId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
