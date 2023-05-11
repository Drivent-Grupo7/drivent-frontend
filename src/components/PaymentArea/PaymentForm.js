import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { useForm } from '../../hooks/useForm';
import { toast } from 'react-toastify';
import usePayment from '../../hooks/api/usePayment';
import useSavePayment from '../../hooks/api/useSavePayment';
import PaymentFormValidations from '../../components/PaymentArea/PaymentFormValidations';

export default function PaymentForm() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const { payment } = usePayment();
  const { savePaymentLoading, processPayment } = useSavePayment();

  const {
    handleSubmit,
    data
  } = useForm({
    validations: PaymentFormValidations,

    onSubmit: async(data) => {
      const newData = {
        cvc: data.cvc,
        expiry: data.expiry,
        name: data.cardName,
        number: data.cardNumber,
      };

      try {
        await processPayment(newData);
        console.log(newData);
        toast('Pagamento realizado com sucesso!');
      } catch (err) {
        toast('Não foi possível srealizar seu pagamento!');
      }
    },

    initialValues: {
      cardNumber: '',
      cardName: '',
      expiry: '',
      cvc: '',
    },
  });

  return (
    <CardContainer>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <Form onSubmit={handleSubmit}>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="expiry"
          placeholder="Valid Thru"
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          onChange={e => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <Button type="submit">FINALIZAR PAGAMENTO</Button>
      </Form>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 250px;
`;

const Form = styled.form`
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  margin-top: 15px;
  position: relative;

    input {
      border: 1px solid #8E8E8E;
      border-radius: 7px;
      height: 40px;
      width: 326px;
      margin-bottom: 13px;
      padding: 0 10px;
      font-family: 'Raleway';
      font-size: 20px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
    }

    input:nth-child(3){
      width: 200px;
      display: inline;
    }

    input:nth-child(4){
      width: 110px;
      display: inline;
      margin-left: 16px;
    }
`;

const Button = styled.button`
  position: absolute;
  top: 210px;
  left: -310px;
  width: 182px;
  height: 37px;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-style: none;
  border-radius: 4px;
`;
