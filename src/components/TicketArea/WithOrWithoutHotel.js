import React from 'react';
import { useEffect, useState } from 'react';
import useToken from '../../hooks/useToken';
import * as S from './style';
import { getTicketTypes } from '../../services/ticketApi';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

export function WithOrWithoutHotel() {
  const token = useToken();
  const [noHotel, setNoHotel] = useState(false);
  const [confirmHotel, setConfirmHotel] = useState(false);
  const [ticketTypeData, setTicketTypeData] = useState();
  const { userData: user } = useContext(UserContext);

  const handleButtonClick = (type) => {
    if (type === 'confirmHotel') {
      setConfirmHotel(!confirmHotel);
      setNoHotel(false);
    } else if (type === 'noHotel') {
      setConfirmHotel(false);
      setNoHotel(!noHotel);
    }
  };

  return (
    <>
      <S.PaymentContainer>
        <S.Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</S.Subtitle>
        <S.BoxContainer>
          <S.Box isSelected={confirmHotel} onClick={() => handleButtonClick('confirmHotel')}>
            <p>Com hotel</p>
            <p>+ R$ 350</p>
          </S.Box>
          <S.Box isSelected={noHotel} onClick={() => handleButtonClick('noHotel')}>
            <p>Sem hotel</p>
            <p>+ R$ 0</p>
          </S.Box>
        </S.BoxContainer>
      </S.PaymentContainer>
      {confirmHotel ? (
        <>
          <S.Subtitle>Fechado! O total ficou R$ 600,00. Agora é só confirmar: </S.Subtitle>
          <S.ReservedButton>Reservar Ingresso</S.ReservedButton>
        </>
      ) : (
        <></>
      )}
      {noHotel ? (
        <>
          <S.Subtitle>Fechado! O total ficou R$ 250,00. Agora é só confirmar: </S.Subtitle>
          <S.ReservedButton>Reservar Ingresso</S.ReservedButton>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
