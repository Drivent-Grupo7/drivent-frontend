import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHotel } from '../../../hooks/api/useHotel';
import useTicket from '../../../hooks/api/useTicket';
import Hotel from '../../../components/Dashboard/Hotel';

export default function Hotels() {
  const { ticket } = useTicket();
  const { hotels, hotelsError } = useHotel();
  const [ message, setMessage ] = useState('Não foi possível listar hotéis disponíveis!');
  useEffect(() => {
    if(ticket) {
      if(ticket.status === 'RESERVED') {
        setMessage('Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem');
      }
      if(ticket.TicketType.isRemote || !ticket.TicketType.includesHotel) {
        setMessage('Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades');
      }
    }
  }, [ticket, setMessage]);
  function hotelContainer() {
    if(hotels) {
      return (
        <>
          <SubTitulo>
            Primeiro, escolha seu hotel
          </SubTitulo>
          <HotelsContainer>
            {hotels.map((hotel) => <Hotel key={hotel.id} hotel={hotel}/>)}
          </HotelsContainer>
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

const SubTitulo = styled.h1`
  margin-top: 36px;
  margin-bottom: 18px;
  font-size: 20px;
  line-height: 23px;
  color: #8E8E8E;
`;

const HotelsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
`;
