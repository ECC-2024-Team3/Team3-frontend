import React from "react";
import cucumberpng from "./cucumber.png";
import * as S from "./Home.style";

export function Home() {
  return (
    <div>
      <S.Logo>
        <img src={cucumberpng} alt="로고" className="logo" />
      </S.Logo>
      <S.Nav>
        <S.SignupButton href="/signup">회원가입</S.SignupButton>
        <S.LoginButton href="/login">로그인</S.LoginButton>
        <S.GoButton href="/main">일단 둘러보기</S.GoButton>
      </S.Nav>
    </div>
  );
}
