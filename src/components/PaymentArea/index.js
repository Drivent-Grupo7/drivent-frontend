import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import { useEffect, useState } from 'react';
import PaymentForm from './PaymentForm';
import check from '../../assets/images/check.png';

export default function PaymentArea() {
  const { ticket } = useTicket();
  const [ ticketName, setTicketName ] = useState('Carregando...');
  const [ ticketPrice, setTicketPrice ] = useState('');

  useEffect(() => {
    if(ticket) {
      setTicketName(ticket.TicketType.name);
      setTicketPrice(ticket.TicketType.price);
    }
  }, [ticket]);

  return (
    <PaymentContainer>
      <Subtitle>Ingresso escolhido</Subtitle>
      <TicketData>
        <p>{ticketName}</p>
        <p>R$ {ticketPrice}</p>
      </TicketData>
      <Subtitle>Pagamento</Subtitle>
      {/* <PaymentConfirmed>
        <img src={check} alt='check-icon'/>
        <div>
          <p>Pagamento confirmado!</p>
          <p>Prossiga para escolha de hospedagem e atividades</p>
        </div>
      </PaymentConfirmed> */}
      <PaymentForm />
    </PaymentContainer>
  );
}

const PaymentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Subtitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8E8E8E;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const TicketData = styled.div`
  width: 290px;
  height: 108px;
  background: #FFEED2;
  border-radius: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }

  p:nth-child(2){
    color: #898989;
    font-size: 14px;
    margin-top: 8px;
  }
`;

const PaymentConfirmed = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  div {
    margin-left: 10px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }

  p:nth-child(1){
    font-weight: bold;
  }
`;
