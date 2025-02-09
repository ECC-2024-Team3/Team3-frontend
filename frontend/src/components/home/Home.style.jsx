import styled from "styled-components";

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #e2e0e0;
  font-size: 16px;
  cursor: pointer;
  color: white;
  width: 150px;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SignupButton = styled(Button)`
  background-color: #fff8f3;
  color: black;
`;

export const LoginButton = styled(Button)`
  background-color: #fff8f3;
  color: black;
`;

export const GoButton = styled(Button)`
  color: #857f7f;
`;
