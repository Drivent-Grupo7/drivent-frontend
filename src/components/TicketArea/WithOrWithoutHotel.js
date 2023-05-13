import React from 'react';
import { useEffect, useState } from 'react';
import useToken from '../../hooks/useToken';
import * as S from './style';
import { getTicketTypes } from '../../services/ticketApi';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useSaveReserve } from '../../hooks/api/useTicketType';
import useTicketType from '../../hooks/api/useTicketType';

export function WithOrWithoutHotel() {
  const token = useToken();
  const [noHotel, setNoHotel] = useState(false);
  const [confirmHotel, setConfirmHotel] = useState(false);
  const [ticketTypeData, setTicketTypeData] = useState();
  const { userData: user } = useContext(UserContext);
  const { saveReserve, saveReserveLoading } = useSaveReserve();
  const { ticketTypes } = useTicketType();
  const [clicked, setClicked] = useState(undefined);

  useEffect(() => {
    let ticketTypeArray = [];

    if (ticketTypes) {
      if (confirmHotel) {
        ticketTypeArray = ticketTypes.filter((item) => item.includesHotel);
        setClicked(ticketTypeArray[0].id);
      } else if (noHotel) {
        ticketTypeArray = ticketTypes.filter((item) => !item.includesHotel && !item.isRemote);
        setClicked(ticketTypeArray[0].id);
      }
    }
  }, [ticketTypes, confirmHotel, noHotel]);

  const handleButtonClick = (type) => {
    if (type === 'confirmHotel') {
      setConfirmHotel(!confirmHotel);
      setNoHotel(false);
    } else if (type === 'noHotel') {
      setConfirmHotel(false);
      setNoHotel(!noHotel);
    }
  };

  async function reserve() {
    try {
      const data = {
        ticketTypeId: clicked,
      };
      await saveReserve(data);
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

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
          <S.Subtitle>
            Fechado! O total ficou <strong>R$ 600,00</strong>. Agora é só confirmar:{' '}
          </S.Subtitle>
          <S.ReserveButton disabled={saveReserveLoading} onClick={() => reserve()}>
            Reservar Ingresso
          </S.ReserveButton>
        </>
      ) : (
        <></>
      )}
      {noHotel ? (
        <>
          <S.Subtitle>
            Fechado! O total ficou <strong>R$ 250,00</strong>. Agora é só confirmar:{' '}
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
}
