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

export async function listActivitiesOne(token) {
  const response = await api.get('activity/1', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function listActivitiesTwo(token) {
  const response = await api.get('activity/2', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function listActivitiesThree(token) {
  const response = await api.get('activity/3', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
