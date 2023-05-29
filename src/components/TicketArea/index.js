import { useEffect, useState } from 'react';
import * as S from './style';
import useTicketType from '../../hooks/api/useTicketType';
import useEnrollment from '../../hooks/api/useEnrollment';
import { WithOrWithoutHotel } from './WithOrWithoutHotel';
import { useSaveReserve } from '../../hooks/api/useTicketType';
import { toast } from 'react-toastify';

export default function TicketArea({ getTicket }) {
  const [ remote, setRemote ] = useState(false);
  const [ inPerson, setInPerson ] = useState(false);
  const { ticketTypes } = useTicketType();
  const { enrollment } = useEnrollment();
  const [ clicked, setClicked ] = useState();
  const { saveReserve, saveReserveLoading } = useSaveReserve();

  useEffect(() => {
    let ticketTypeArray = [];

    if (ticketTypes) {
      ticketTypeArray = ticketTypes.filter((item) => item.isRemote);
      setClicked(ticketTypeArray[0].id);
    }
  }, [ticketTypes]);

  const handleButtonClick = (type) => {
    if (type === 'inPerson') {
      setInPerson(!inPerson);
      setRemote(false);
    } else if (type === 'remote') {
      setInPerson(false);
      setRemote(!remote);
    }
  };

  async function reserve() {
    try {
      const data = {
        ticketTypeId: clicked,
      };
      await saveReserve(data);
      toast('Ticket reservado com sucesso!');
      getTicket();
    } catch (err) {
      toast('Não foi possível reservar seu ticket!');
    }
  }

  if (enrollment) {
    return (
      <>
        <S.PaymentContainer>
          <S.Subtitle>Primeiro, escolha sua modalidade de ingresso</S.Subtitle>
          <S.BoxContainer>
            <S.Box isSelected={inPerson} onClick={() => handleButtonClick('inPerson')}>
              <p>Presencial</p>
              <p>R$ 250</p>
            </S.Box>
            <S.Box isSelected={remote} onClick={() => handleButtonClick('remote')}>
              <p>Online</p>
              <p>R$ 100</p>
            </S.Box>
          </S.BoxContainer>
        </S.PaymentContainer>
        {inPerson ? <WithOrWithoutHotel getTicket={getTicket} /> : <></>}
        {remote ? (
          <>
            <S.Subtitle>
              Fechado! O total ficou <strong>R$ 100,00</strong>. Agora é só confirmar:{' '}
            </S.Subtitle>
            <S.ReserveButton disabled={saveReserveLoading} onClick={() => reserve()}>
              Reservar Ingresso
            </S.ReserveButton>
          </>
        ) : (
          <></>
        )}
      </>
    );
  } else {
    return (
      <>
        <S.Information>
          Você precisa completar sua inscrição antes de prosseguir para escolha de ingresso de prosseguir para escolha
          de ingresso
        </S.Information>
      </>
    );
  }
}
