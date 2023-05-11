import { useEffect, useState } from 'react';
import useToken from '../../hooks/useToken';
import * as S from './style';

export default function TicketArea() {
  const token = useToken();
  const [remote, setRemote] = useState(false);
  const [inPerson, setInPerson] = useState(false);

  const handleButtonClick = (type) => {
    if (type === 'inPerson') {
      setInPerson(!inPerson);
      setRemote(false);
    } else if (type === 'remote') {
      setInPerson(false);
      setRemote(!remote);
    }
  };

  return (
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
  );
}
