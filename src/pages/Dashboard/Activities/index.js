import { useState, useEffect } from 'react';
import useTicket from '../../../hooks/api/useTicket';
import styled from 'styled-components';

export default function Activities() {
  const { ticket } = useTicket();
  const [ message, setMessage ] = useState('Em breve!');

  useEffect(() => {
    if(ticket) {
      if(ticket.status === 'RESERVED') {
        setMessage('Você precisa ter confirmado pagamento antes de fazer a escolha de atividades');
      }
      if(ticket.TicketType.isRemote) {
        setMessage('Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades');
      }
    }
  }, [ticket, setMessage]);

  return (
    <Container>
      <Titulo>Escolha de atividades</Titulo>
      <Erro>{message}</Erro>
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

