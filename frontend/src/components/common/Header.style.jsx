import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00462A;
  height: 60px;
  padding: 0 20px;
`;

export const Logo = styled.div`
  img {
    height: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 5px 0 0 0;
`;

export const BuyButton = styled.a`
  display: inline-block;
  color: #00462A;
  font-size: 28px;
  background-color: #FCFFEC;
  padding: 5px 10px;
  border-radius: 50px;
`;

export const MypageButton = styled.a`
  img {
    height: 45px;
  }
`;