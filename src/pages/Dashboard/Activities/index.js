import { useState, useEffect } from 'react';
import useTicket from '../../../hooks/api/useTicket';
import styled from 'styled-components';

export default function Activities() {
  const { ticket } = useTicket();
  const [message, setMessage] = useState('');
  const [reservedTicket, setReservedTicket] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    if (ticket) {
      if (ticket.TicketType.isRemote) {
        setMessage(
          'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades'
        );
      }

      if (ticket.status === 'RESERVED') {
        setMessage('Você precisa ter confirmado pagamento antes de fazer a escolha de atividades');
      } else {
        setReservedTicket(false);
        setMessage('');
      }
    }
  }, [ticket, setMessage]);

  function SelectDay(event) {
    const index = parseInt(event.target.dataset.index);
    setSelectedButton(index);
  }

  return (
    <Container>
      <Titulo>Escolha de atividades</Titulo>
      <Erro>{message}</Erro>

      <Conteudo reservedTicket={reservedTicket}>
        <SubTitulo>Primeiro, filtre pelo dia do evento:</SubTitulo>

        <CaixaBotoes>
          <button
            onClick={SelectDay}
            data-index={0}
            style={{ backgroundColor: selectedButton === 0 ? 'orange' : '#E0E0E0' }}
          >
            Sexta, 22/10
          </button>

          <button
            onClick={SelectDay}
            data-index={1}
            style={{ backgroundColor: selectedButton === 1 ? 'orange' : '#E0E0E0' }}
          >
            Sábado, 23/10
          </button>

          <button
            onClick={SelectDay}
            data-index={2}
            style={{ backgroundColor: selectedButton === 2 ? 'orange' : '#E0E0E0' }}
          >
            Domingo, 24/10
          </button>
        </CaixaBotoes>
      </Conteudo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  h1 {
    margin-top: 36px;
    margin-bottom: 18px;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;

const Titulo = styled.div`
  font-size: 34px;
  line-height: 40px;
  color: #000000;
`;

const Conteudo = styled.div`
  display: ${(props) => (props.reservedTicket ? 'none' : 'flex')};
  flex-direction: column;
  width: 100%;
`;

const SubTitulo = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
  position: relative;
  top: -490px;
  margin-bottom: 23px;
  width: 60%;
`;

const CaixaBotoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  button {
    width: 131px;
    height: 37px;
    border-radius: 4px;
    background-color: #e0e0e0;
    align-items: center;
    text-align: center;
    border: none;
    margin-right: 17px;
    margin-top: -890px;
  }
  p {
    width: 79px;
    height: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
`;

const Erro = styled.div`
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
  margin-top: auto;
  margin-bottom: auto;
  align-self: center;
  width: 60%;
`;
