import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useBookingByHotelId, useHotelWithRooms } from '../../../hooks/api/useHotel';

export default function Hotel({ bookingsByUser }) {
  const { hotelWithRoom } = useHotelWithRooms(Number(bookingsByUser.Room.hotelId));
  const { bookingsByHotel } = useBookingByHotelId(Number(bookingsByUser.Room.hotelId));
  const [ type, setType ] = useState('');
  const [ message, setMessage] = useState('');
  useEffect(() => {
    if(bookingsByUser.Room.capacity === 1) {
      setType('Single');
    }
    if(bookingsByUser.Room.capacity === 2) {
      setType('Double');
    }
    if(bookingsByUser.Room.capacity === 3) {
      setType('Triple');
    }
    if(hotelWithRoom && bookingsByHotel) {
      if(bookingsByHotel.bookings.flat().filter((booking) => booking.roomId === bookingsByUser.Room.id).length >= 1) {
        if(bookingsByHotel.bookings.flat().filter((booking) => booking.roomId === bookingsByUser.Room.id).length === 1) {
          setMessage('Somente você');
        } else {
          const quant = bookingsByHotel.bookings.flat().filter((booking) => booking.roomId === bookingsByUser.Room.id).length - 1;
          setMessage(`Você e mais ${quant}`);
        }
      }
    }
  }, [bookingsByUser, setType, hotelWithRoom, bookingsByHotel]);
  if(hotelWithRoom && bookingsByHotel) {
    return (
      <HotelContainer>
        <img src={hotelWithRoom.image} alt={hotelWithRoom.name}/>
        <h2>{hotelWithRoom.name}</h2>
        <div>
          <h3>Quarto reservado</h3>
          <h4>{bookingsByUser.Room.name} ({type})</h4>
        </div>
        <div>
          <h3>Pessoas no seu quarto</h3>
          <h4>{message}</h4>
        </div>
      </HotelContainer>
    );
  } else {
    return (<></>);
  }
}

const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 196px;
  height: 264px;
  background-color: #FFEED2;
  border-radius: 10px;
  margin-right: 19px;
  padding: 16px 14px;
  img{
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  h2{
    font-size: 20px;
    line-height: 23px;
    color: #343434;
  }
  h3{
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
  }
  h4{
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
  }
`;
