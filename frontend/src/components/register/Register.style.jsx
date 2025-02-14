import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
`;

export const Title = styled.h2`
  color: #004d2b;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 100px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.primary ? "#004d2b" : "#ccc")};

  &:hover {
    background-color: ${(props) => (props.primary ? "#003d21" : "#aaa")};
  }
`;
