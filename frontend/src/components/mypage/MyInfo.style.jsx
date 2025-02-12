import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0 0 0;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  flex-direction: column;
`;

export const Guide = styled.label`
  font-size: 24px;
  color: black;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px 30px;
  font-size: 20px;
  border: 3px solid #00462a;
  border-radius: 10px;
  margin-botton: 10px;
`;

export const Pw = styled.label`
  font-size: 16px;
  color: #00462a;
  margin-top: 10px;
`;

export const Button = styled.div`
  padding: 5px 15px;
  font-size: 24px;
  color: white;
  background-color: #00462a;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 30px;
`;
