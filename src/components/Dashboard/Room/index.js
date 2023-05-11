import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useBookingByHotelId } from '../../../hooks/api/useHotel';
import { IoPerson, IoPersonOutline } from 'react-icons/io5';

export default function Room({ room, hotelClick, roomClick, setRoomClick }) {
  const { bookingsByHotel } = useBookingByHotelId(hotelClick);
  const [ bookingsByRoom, setBookingsByRoom] = useState([]);
  useEffect(() => {
    if(room && bookingsByHotel) {
      const bookings = bookingsByHotel.bookings.flat();
      setBookingsByRoom([...bookings.filter((booking) => booking.roomId === room.id)]);
    }
  }, [room, bookingsByHotel]);
  function icons() {
    let tags = [];
    for(let i = 0; i < room.capacity-bookingsByRoom.length; i++) {
      tags.push(<IconOutline />);
    }
    if(roomClick === room.id) {
      tags.pop();
      tags.push(<Icon click={roomClick === room.id}/>);
    }
    for(let i = 0; i < bookingsByRoom.length; i++) {
      tags.push(<Icon click={roomClick === room.id}/>);
    }
    return (
      <>
        {tags}
      </>
    );
  }
  if(room && bookingsByHotel) {
    return (
      <RoomContainer noVacancies={room.capacity === bookingsByRoom.length} click={roomClick === room.id} onClick={room.capacity === bookingsByRoom.length ? () => alert('Sem vagas') : () => setRoomClick(room.id)}>
        <h5>
          {room.name}
        </h5>
        <h5>
          {icons()}
        </h5>
      </RoomContainer>
    );
  } else {
    return (<></>);
  }
}

const RoomContainer = styled.div`
  box-sizing: border-box;
  width: 190px;
  height: 45px;
  border: 1px solid #CECECE;
  border-radius: 10px;
  margin-right: 17px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  background-color: ${props => props.noVacancies ? '#E9E9E9' : props.click ? '#FFEED2' : '#FFFFFF'};
  h5{
    font-size: 20px;
    line-height: 23px;
    color: #454545;
  }
`;

const Icon = styled(IoPerson)`
  color: ${props => props.click ? '#FF4791' : '#000000'};
  margin-left: 6px;
`;

const IconOutline = styled(IoPersonOutline)`
  color: #000000;
  margin-left: 6px;
`;
