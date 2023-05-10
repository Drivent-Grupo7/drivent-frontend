import styled from 'styled-components';
import { useState, useEffect } from 'react';
import useHotel from '../../../hooks/api/useHotel';
import useTicket from '../../../hooks/api/useTicket';

export default function Hotel() {
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
  return (
    <HotelContainer>
      <Titulo>Escolha de hotel e quarto</Titulo>
      {hotelsError ? <Erro>{message}</Erro> : ''}
    </HotelContainer>
  );
}

const HotelContainer = styled.div`
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
