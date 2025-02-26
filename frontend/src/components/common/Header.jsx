import React, { useState, useEffect } from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logopng from "./logo.png";
import buttonmypagepng from "./button_mypage.png";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("token");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <S.Header>
      <Link to="/easteregg">
        <S.Logo>
          <img src={logopng} alt="로고" />
        </S.Logo>
      </Link>
      <S.Nav>
        {!isLoggedIn && (
          <Link to="/">
            <S.BuyButton>로그인</S.BuyButton>
          </Link>
        )}
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
