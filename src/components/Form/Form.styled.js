import styled from '@emotion/styled';

export const ContactForm = styled.form`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 350px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
`;

export const Input = styled.input`
  &:hover,
  &:focus {
    border: 2px solid blue;
  }
`;

export const Button = styled.button`
  width: 100px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  &:hover,
  &:focus {
    background-color: blue;
    border: 1px solid blue;
    color: white;
  }
`;
