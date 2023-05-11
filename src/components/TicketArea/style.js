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

export { PaymentContainer, Subtitle, BoxContainer, Box };
