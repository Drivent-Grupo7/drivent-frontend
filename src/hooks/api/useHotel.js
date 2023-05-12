import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export function useSaveBooking() {
  const token = useToken();

  const {
    loading: saveBookingLoading,
    error: saveBookingError,
    act: saveBooking
  } = useAsync((data) => hotelApi.save(data, token), false);

  return {
    saveBookingLoading,
    saveBookingError,
    saveBooking
  };
}

export function useUpdateBooking() {
  const token = useToken();

  const {
    loading: updateBookingLoading,
    error: updateBookingError,
    act: updateBooking
  } = useAsync((bookingId, data) => hotelApi.update(bookingId, data, token), false);

  return {
    updateBookingLoading,
    updateBookingError,
    updateBooking
  };
}

export function useHotel() {
  const token = useToken();
  
  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    act: getHotels
  } = useAsync(() => hotelApi.getHotels(token));

  return {
    hotels,
    hotelsLoading,
    hotelsError,
    getHotels
  };
}

export function useHotelWithRooms(hotelId) {
  const token = useToken();
  
  const {
    data: hotelWithRoom,
    loading: hotelWithRoomLoading,
    error: hotelWithRoomError,
    act: getHotelWithRoom
  } = useAsync(() => hotelApi.getHotelsWithRooms(hotelId, token));

  return {
    hotelWithRoom,
    hotelWithRoomLoading,
    hotelWithRoomError,
    getHotelWithRoom
  };
}

export function useBookingByHotelId(hotelId) {
  const token = useToken();
  
  const {
    data: bookingsByHotel,
    loading: bookingsByHotelLoading,
    error: bookingsByHotelError,
    act: getBookingsByHotel
  } = useAsync(() => hotelApi.getBookingByHotelId(hotelId, token));

  return {
    bookingsByHotel,
    bookingsByHotelLoading,
    bookingsByHotelError,
    getBookingsByHotel
  };
}

export function useBookingByUserId() {
  const token = useToken();
  
  const {
    data: bookingsByUser,
    loading: bookingsByUserLoading,
    error: bookingsByUserError,
    act: getBookingsByUser
  } = useAsync(() => hotelApi.getBookingByUserId(token));

  return {
    bookingsByUser,
    bookingsByUserLoading,
    bookingsByUserError,
    getBookingsByUser
  };
}
