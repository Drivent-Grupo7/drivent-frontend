import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHotel, useHotelWithRooms } from '../../../hooks/api/useHotel';
import useTicket from '../../../hooks/api/useTicket';
import Hotel from '../../../components/Dashboard/Hotel';
import Room from '../../../components/Dashboard/Room';
import { useSaveBooking } from '../../../hooks/api/useHotel';
import { toast } from 'react-toastify';

export default function Hotels() {
  const { ticket } = useTicket();
  const { hotels, hotelsError } = useHotel();
  const [ message, setMessage ] = useState('Não foi possível listar hotéis disponíveis!');
  const [ hotelClick, setHotelClick ] = useState(0);
  const [ roomClick, setRoomClick ] = useState(0);
  const { getHotelWithRoom } = useHotelWithRooms(hotelClick);
  const [ rooms, setRooms ] = useState([]);
  const { saveBooking, saveBookingLoading } = useSaveBooking();

  useEffect(() => {
    if(ticket) {
      if(ticket.status === 'RESERVED') {
        setMessage('Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem');
      }
      if(ticket.TicketType.isRemote || !ticket.TicketType.includesHotel) {
        setMessage('Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades');
      }
    }
    if(hotelClick) {
      getHotelWithRoom(hotelClick).then(res => setRooms([...res.Rooms]));
    }
  }, [ticket, setMessage, hotelClick]);
  async function reserve() {
    try {
      const data = {
        roomId: roomClick
      };
      await saveBooking(data);
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }
  function hotelContainer() {
    if(hotels) {
      return (
        <>
          <h1>
            Primeiro, escolha seu hotel
          </h1>
          <HotelsContainer>
            {hotels.map((hotel) => <Hotel hotelClick={hotelClick} setHotelClick={setHotelClick} key={hotel.id} hotel={hotel}/>)}
          </HotelsContainer>
          <Rooms hotelClick={hotelClick}>
            <h1>
              Ótima pedida! Agora escolha seu quarto:
            </h1>
            <HotelsContainer>
              {rooms.map((room) => <Room hotelClick={hotelClick} key={room.id} room={room} roomClick={roomClick} setRoomClick={setRoomClick}/>)}
            </HotelsContainer>
          </Rooms>
          <ReserveButton disabled={saveBookingLoading} roomClick={roomClick} onClick={() => reserve()}>RESERVAR QUARTO</ReserveButton>
        </>
      ); 
    }
  }
  return (
    <Container>
      <Titulo>Escolha de hotel e quarto</Titulo>
      {hotelsError ? <Erro>{message}</Erro> : hotelContainer()}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  h1{
    margin-top: 36px;
    margin-bottom: 18px;
    font-size: 20px;
    line-height: 23px;
    color: #8E8E8E;
  }
`;

const Titulo = styled.div`
  font-size: 34px;
  line-height: 40px;
  color: #000000;
`;

const Erro = styled.div`
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8E8E8E;
  margin-top: auto;
  margin-bottom: auto;
  align-self: center;
  width: 60%;
`;

const Rooms = styled.div`
  display: ${props => props.hotelClick ? 'flex' : 'none'};
  flex-direction: column;
`;

const HotelsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const ReserveButton = styled.button`
  display: ${props => props.roomClick ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  width: 182px;
  height: 37px;
  background-color: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  border: none;
  margin-top: 46px;
`;
