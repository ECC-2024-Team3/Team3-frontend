import React from "react";
import * as S from "./Header.style";
import { Link, Links } from "react-router-dom";
import logopng from "./logo.png";
import buttonmypagepng from "./button_mypage.png";

export default function Header() {
  return (
    <S.Header>
      <Link to="/main">
        <S.Logo>
          <img src={logopng} alt="로고" />
        </S.Logo>
      </Link>
      <S.Nav>
        <Link to="/main">
          <S.BuyButton>중고거래</S.BuyButton>
        </Link>
        <Link to="/mypage">
          <S.MypageButton>
            <img src={buttonmypagepng} alt="마이페이지" />
          </S.MypageButton>
        </Link>
      </S.Nav>
    </S.Header>
  );
}
