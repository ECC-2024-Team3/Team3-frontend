import React, { useState, useEffect } from "react";
import * as S from "./MyInfo.style";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../../utils";
import { API_URLS } from "../../consts";

export function MyInfo() {

  const [userId, setUserId] = useState(userId);
  const [userName, setUserName] = useState(userName);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("로그인이 필요합니다!");
          return navigate("/login");
        }

        const response = await fetchApi(`${API_URLS.mypage}/info`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200 && response.data) {
          setUserId(response.userId || "");
          setUserName(response.userName || "");
        }
      } catch (error) {
        console.error(error);
        alert("내 정보를 불러오는 데 실패했습니다.");
      }
    }
    fetchUserInfo();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword) {
      alert("비밀번호를 입력해주세요.");
      return;
    } if (currentPassword === newPassword) {
        alert("비밀번호를 변경해주세요.");
        return;
      }

      try {
        const body = {
          userId,
          userName,
          currentPassword,
          newPassword,
        };
  
        const response = await fetchApi(`${API_URLS.mypage}/info`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
  
        if (response) {
          alert("회원 정보가 수정되었습니다.");
          navigate("/mypage");
        }
      } catch (err) {
        console.error(err);
        alert("회원 정보 수정 중 오류가 발생했습니다.");
      }
    };

  return (
    <form onSubmit={handleSubmit} className="user-edit">
      <Header />

      <S.Container>
        <S.Form>
          <S.Guide>아이디</S.Guide>
          <S.Input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </S.Form>

        <S.Form>
          <S.Guide>이름(닉네임)</S.Guide>
          <S.Input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </S.Form>

        <S.Form>
          <S.Guide>비밀번호 변경</S.Guide>
          <S.Pw>현재 비밀번호</S.Pw>
          <S.Input
            type="text"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </S.Form>

        <S.Form>
          <S.Pw>변경할 비밀번호</S.Pw>
          <S.Input
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </S.Form>

        <S.Form>
          <S.Button type="submit">수정</S.Button>
        </S.Form>
      </S.Container>
    </form>
  );
}
