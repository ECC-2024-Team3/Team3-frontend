import React from "react";
import * as S from "./MyPage.style";
import Header from "../common/Header";
import { Link, useNavigate } from "react-router-dom";
import { fetchApi } from "../../utils";
import { API_URLS } from "../../consts";

export function MyPage() {

  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    const confirmed = window.confirm("정말 탈퇴하시겠습니까?");
    if (!confirmed) return;

    try {
      const response = await fetchApi(API_URLS.mypage + "info", {
        method: "DELETE",
      });

      alert("회원 탈퇴가 완료되었습니다.");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("탈퇴 중 오류가 발생했습니다.");
    }
  };

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
        <S.Text onClick={handleDeleteUser} style={{ cursor: "pointer" }}>
          탈퇴하기
        </S.Text>
      </S.SelectMenu>
    </div>
  );
}
