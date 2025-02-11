import React, { useState } from "react";
import * as S from "./MyInfo.style";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";

const User = {
  id: "ewha1886",
  pw: "womansuni012!"
};

export default function MyInfo() {

  const [userId, setUserId] = useState(User.id);
  const [userName, setUserName] = useState("이대댕김");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    else {
      if (currentPassword !== User.pw) {
        alert("현재 비밀번호를 확인해주세요.");
        return;
      }
      else {
        if (currentPassword === newPassword) {
          alert("비밀번호를 변경해주세요.");
          return;
        }
      }
    }

    console.log({
      userId,
      userName,
      currentPassword,
      newPassword,
    });

    alert("회원 정보가 수정되었습니다.");
    
    return navigate('/mypage');
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