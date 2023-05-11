import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';

export default class PaymentForm extends React.Component {
    state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    };

    handleInputFocus = (e) => {
      this.setState({ focus: e.target.name });
    }
    
    handleInputChange = (e) => {
      const { name, value } = e.target;
      
      this.setState({ [name]: value });
    }
    
    render() {
      return (
        <CardContainer>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <Form>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="text"
              name="expiry"
              placeholder="Valid Thru"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

          </Form>
        </CardContainer>
      );
    }
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
