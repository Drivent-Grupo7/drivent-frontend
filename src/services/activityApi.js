import api from './api';

export async function save(body, token) {
  const response = await api.post('/activity', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteSub(activityId, token) {
  const response = await api.delete(`/activity/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function listAuditoriums(token) {
  const response = await api.get('activity/auditoriums', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function listDates(token) {
  try {
    const response = await api.get('activity/dates', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return [];
  }
};

export async function listActivities(token, dateId) {
  if (dateId) {
    const response = await api.get(`activity/${dateId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } else {
    return [];
  }
};
