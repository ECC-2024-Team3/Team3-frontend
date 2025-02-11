import styled from "styled-components";

export const HomeContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 500px;
`;

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

export const Button = styled.button`
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
  background-color: #00462a;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`;

export const SignupButton = styled(Button)``;

export const LoginButton = styled(Button)``;

export const GoButton = styled.p`
  font-size: 15px;
  color: #857f7f;

  &:hover {
    opacity: 0.8;
  }
`;
