import { useState, useEffect } from 'react';
import useTicket from '../../../hooks/api/useTicket';
import styled from 'styled-components';
import { ActivitiesDayContentOne } from '../../../components/Dashboard/Activities/ActivityDay';
import { ActivitiesDayContentTwo } from '../../../components/Dashboard/Activities/ActivityDay';
import { ActivitiesDayContentThree } from '../../../components/Dashboard/Activities/ActivityDay';
import useToken from '../../../hooks/useToken';
import * as activityApi from '../../../services/activityApi';

export default function Activities() {
  const { ticket } = useTicket();
  const [message, setMessage] = useState('');
  const [reservedTicket, setReservedTicket] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null);
  const [contentToShow, setContentToShow] = useState('');
  const [newConfig, setNewConfig] = useState(false);
  const token = useToken();
  const dates = activityApi.listDates(token);
  const [showDates, setShowDates] = useState([]);

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
        dates.then((res) => setShowDates(res));
        setMessage('');
      }
    }
  }, [ticket, setMessage]);

  function SelectDay(event) {
    const index = parseInt(event.target.dataset.index);
    setSelectedButton(index);

    let content = '';
    switch (index) {
    case 0:
      content = <ActivitiesDayContentOne />;
      setNewConfig(true);
      setMessage('');
      break;

    case 1:
      content = <ActivitiesDayContentTwo />;
      setNewConfig(true);
      setMessage('');
      break;

    case 2:
      content = <ActivitiesDayContentThree />;
      setNewConfig(true);
      setMessage('');
      break;

    default:
      content = '';
    }

    setContentToShow(content);
  }

  return (
    <Container>
      <Titulo>Escolha de atividades</Titulo>
      <Erro>{message}</Erro>

      <Conteudo reservedTicket={reservedTicket}>
        <SubTitulo newConfig={newConfig}>Primeiro, filtre pelo dia do evento:</SubTitulo>

        <CaixaBotoes newConfig={newConfig}>
          {showDates.map((date, i) => (
            <button
              key={i}
              onClick={SelectDay}
              data-index={i}
              style={{ backgroundColor: selectedButton === i ? '#FFD37D' : '#E0E0E0' }}
            >
              {date.title}
            </button>
          ))}
        </CaixaBotoes>

        {contentToShow && <ConteudoSelecionado>{contentToShow}</ConteudoSelecionado>}
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
  top: ${(props) => (props.newConfig ? '-200px' : '-500px')};
  margin-bottom: 27px;
  margin-bottom: 23px;
  width: 60%;
`;

const CaixaBotoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${(props) => (props.newConfig ? '-200px' : '-500px')};
  margin-bottom: 40px;
  button {
    width: 131px;
    height: 37px;
    border-radius: 4px;
    background-color: #e0e0e0;
    align-items: center;
    text-align: center;
    border: none;
    margin-right: 17px;
    &:hover {
      cursor: pointer;
    }
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

const ConteudoSelecionado = styled.div`
  margin-top: 20px;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;
