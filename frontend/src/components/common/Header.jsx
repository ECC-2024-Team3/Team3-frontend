import React from "react";
import * as S from "./Header.style";

export default function Header() {
  return (
    <div>
      <header className="header">
        <S.Title>오이</S.Title>
        <div className="logo">
          <img src=".\src\assets\images\logo.png" alt="로고" />
        </div>
        <nav className="nav">
          <a href="/buy" className="nav-button">
            중고거래
          </a>
          <a href="/mypage" className="mypage-button">
            마이페이지
          </a>
        </nav>
      </header>
    </div>
  );
}
