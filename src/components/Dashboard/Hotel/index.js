import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHotelWithRooms, useBookingByHotelId } from '../../../hooks/api/useHotel';

export default function Hotel({ hotel }) {
  const { hotelWithRoom } = useHotelWithRooms(hotel.id);
  const { bookingsByHotel } = useBookingByHotelId(hotel.id);
  const [ type, setType ] = useState('');
  const [ totalCapacity, setTotalCapacity ] = useState(0);
  useEffect(() => {
    if(hotelWithRoom && bookingsByHotel) {
      let count = 0;
      let types = [];
      const bookings = bookingsByHotel.bookings.flat();
      for(const room of hotelWithRoom.Rooms) {
        count += room.capacity;
        if(room.capacity === 1 && !type.includes('Single')) {
          types.push('Single');
        }
        if(room.capacity === 2 && !type.includes('Double')) {
          types.push('Double');
        }
        if(room.capacity === 3 && !type.includes('Triple')) {
          types.push('Triple');
        }
      }
      if(types.length === 3) {
        setType(`${types[0]}, ${types[1]} e ${types[2]}`);
      }
      if(types.length === 2) {
        setType(`${types[0]} e ${types[1]}`);
      }
      if(types.length === 1) {
        setType(`${types[0]}`);
      }
      setTotalCapacity(count-bookings.length);
    }
  }, [hotelWithRoom, setTotalCapacity, setType]);
  if(hotelWithRoom) {
    return (
      <HotelContainer>
        <img src={hotel.image} alt={hotel.name}/>
        <h2>{hotel.name}</h2>
        <div>
          <h3>Tipos de acomodação:</h3>
          <h4>{type}</h4>
        </div>
        <div>
          <h3>Vagas disponíveis:</h3>
          <h4>{totalCapacity}</h4>
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
  background: #EBEBEB;
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
