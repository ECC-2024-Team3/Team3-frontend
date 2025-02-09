import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <img src=".\images\logo.png" alt="로고" />
      </S.Logo>
      <S.Nav>
        <Link to="/main">
          <S.BuyButton>중고거래</S.BuyButton>
        </Link>
        <Link to="/mypage">
          <S.MypageButton>
            <img src=".\images\button_mypage.png" alt="마이페이지" />
          </S.MypageButton>
        </Link>
      </S.Nav>
    </S.Header>
  );
}
