import api from './api';

export async function save(body, token) {
  const response = await api.post('/booking', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function update(bookingId, body, token) {
  const response = await api.put(`/booking/${bookingId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getHotels(token) {
  try {
    const response = await api.get('/hotels', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function getHotelsWithRooms(hotelId, token) {
  if (hotelId) {
    const response = await api.get(`/hotels/${hotelId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } else {
    return [];
  }
}

export async function getBookingByHotelId(hotelId, token) {
  if (hotelId) {
    try {
      const response = await api.get(`/booking/${hotelId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return { 'bookings': [[]] };
    }
  }
  return { 'bookings': [[]] };
}

export async function getBookingByUserId(token) {
  try {
    const response = await api.get('/booking', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return { id: 0, 'Room': {} };
  }
}
//
