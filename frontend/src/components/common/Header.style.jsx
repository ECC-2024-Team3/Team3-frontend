import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00462a;
  height: 60px;
  padding: 0 20px;
`;

export const Logo = styled.div`
  img {
    height: 40px;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 5px 0 0 0;
`;

export const BuyButton = styled.div`
  display: inline-block;
  color: #00462a;
  font-size: 28px;
  background-color: #fcffec;
  padding: 5px 10px;
  border-radius: 50px;

  &:hover {
    background-color: #00462a;
    color: #fcffec;
  }
`;

export const MypageButton = styled.div`
  img {
    height: 45px;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;
