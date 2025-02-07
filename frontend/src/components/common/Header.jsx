import React from "react";
import * as S from "./Header.style";

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <img src=".\images\logo.png" alt="로고" />
      </S.Logo>
      <S.Nav>
        <S.BuyButton href="/buy">중고거래</S.BuyButton>
        <S.MypageButton href="/mypage">
          <img src=".\images\button_mypage.png" alt="마이페이지" />
        </S.MypageButton>
      </S.Nav>
    </S.Header>
  );
}