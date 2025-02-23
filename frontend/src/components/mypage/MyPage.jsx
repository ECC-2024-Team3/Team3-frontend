import React from "react";
import * as S from "./MyPage.style";
import Header from "../common/Header";
import { Link } from "react-router-dom";

export function MyPage() {
  return (
    <div>
      <Header />
      <S.SelectMenu>
        <Link to="/mypage/myinfo" style={{ textDecorationLine: "none" }}>
          <S.Button>내 정보 관리</S.Button>
        </Link>
        <Link to="/mypage/myposts" style={{ textDecorationLine: "none" }}>
          <S.Button>내가 올린 게시물 관리</S.Button>
        </Link>
        <Link to="/mypage/mycomments" style={{ textDecorationLine: "none" }}>
          <S.Button>내 댓글 관리</S.Button>
        </Link>
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <S.Button>로그아웃</S.Button>
        </Link>
        <Link to="/">
          <S.Text>탈퇴하기</S.Text>
        </Link>
      </S.SelectMenu>
    </div>
  );
}
