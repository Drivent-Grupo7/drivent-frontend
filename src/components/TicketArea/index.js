import { useEffect, useState } from 'react';
import useToken from '../../hooks/useToken';
import * as S from './style';
import useTicketType from '../../hooks/api/useTicketType';
import useEnrollment from '../../hooks/api/useEnrollment';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { WithOrWithoutHotel } from './WithOrWithoutHotel';

export default function TicketArea() {
  const token = useToken();
  const [remote, setRemote] = useState(false);
  const [inPerson, setInPerson] = useState(false);
  const [ticketTypeData, setTicketTypeData] = useState();
  const { userData: user } = useContext(UserContext);
  const { ticketTypes } = useTicketType();
  const { enrollment } = useEnrollment();

  console.log(ticketTypes);

  //     setTicketTypeData(ticketType);

  //     console.log("")
  //   } catch (err) {
  //     return 'Ops, ocorreu um erro!';
  //   }
  // }

  // useEffect(() => {
  //   getTicketType();
  // }, []);

  const handleButtonClick = (type) => {
    if (type === 'inPerson') {
      setInPerson(!inPerson);
      setRemote(false);
    } else if (type === 'remote') {
      setInPerson(false);
      setRemote(!remote);
    }
  };

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
        {inPerson ? <WithOrWithoutHotel /> : <></>}
        {remote ? (
          <>
            <S.Subtitle>Fechado! O total ficou R$ 100,00. Agora é só confirmar: </S.Subtitle>
            <S.ReservedButton>Reservar Ingresso</S.ReservedButton>
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
