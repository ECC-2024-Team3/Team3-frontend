import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cucumberpng from "./cucumber.png";
import * as S from "../signup/Signup.style.jsx";

// TODO: 실제 API 연동
const User = {
  email: "ewha1886@naver.com",
  pw: "womansuni012!",
};

export function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const onClickConfirmButton = () => {
    if (email !== User.email || pw !== User.pw) {
      alert("이메일 또는 비밀번호를 확인해 주세요.");
      return;
    }

    // TODO: 로그인 API 연동
    const res = { status: 200, message: "로그인 성공" };
    if (res.status === 200) {
      alert(res.message);
      navigate("/main");
    } else {
      alert(res.error);
    }
  };

  return (
    <S.Page>
      <S.Logo src={cucumberpng} alt="로고" />
      <S.ContentWrap>
        <S.InputTitle>이메일</S.InputTitle>
        <S.InputWrap>
          <S.Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputWrap>

        <S.InputTitle style={{ marginTop: "26px" }}>비밀번호</S.InputTitle>
        <S.InputWrap>
          <S.Input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </S.InputWrap>

        <S.BottomButton onClick={onClickConfirmButton}>로그인</S.BottomButton>
      </S.ContentWrap>
    </S.Page>
  );
}
