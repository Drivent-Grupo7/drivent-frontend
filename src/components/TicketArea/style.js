import styled from 'styled-components';

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
  color: #8e8e8e;
  margin-top: 20px;
  margin-bottom: 17px;
`;

const BoxContainer = styled.div`
  display: flex;
`;

const Box = styled.button`
  width: 145px;
  height: 145px;
  background: ${(props) => (props.isSelected ? '#FFEED2' : '#ffffff')};
  border-radius: 20px;
  border: 2px solid;
  border-color: ${(props) => (props.isSelected ? 'transparent' : '#cecece')};
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }

  p:nth-child(2) {
    color: #898989;
    font-size: 14px;
    margin-top: 8px;
  }
`;

const Information = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50vh;
  padding: 100px;
`;

const ReservedButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
  height: 30px;
  width: 145px;
  cursor: pointer;
`;

export { PaymentContainer, Subtitle, BoxContainer, Box, Information, ReservedButton };
