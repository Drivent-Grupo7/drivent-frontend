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
  } = useAsync(() => hotelApi.getHotelsWithRooms(token, hotelId));

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
  } = useAsync(() => hotelApi.getBookingByHotelId(token, hotelId));

  return {
    bookingsByHotel,
    bookingsByHotelLoading,
    bookingsByHotelError,
    getBookingsByHotel
  };
}
