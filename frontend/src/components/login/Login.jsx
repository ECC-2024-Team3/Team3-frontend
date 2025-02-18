import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cucumberpng from "./cucumber.png";
import * as S from "../signup/Signup.style.jsx";
import axios from "axios";

// TODO: 실제 API 연동
//const User = {
//  email: "ewha1886@naver.com",
//  pw: "womansuni012!",
//};

export function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const onClickConfirmButton = async () => {
    try {
      const response = await axios.post(
        "http://oimarket-backend.ap-northeast-2.elasticbeanstalk.com/api/login",
        { id: email, pw }
      );
      alert(response.data.message);
      navigate("/main");
    } catch (error) {
      if (error.response) {
        const { status, error: errorMessage } = error.response.data;

        if (status === 401) {
          if (
            errorMessage === "가입되지 않은 id입니다." ||
            errorMessage === "틀린 password 입니다."
          ) {
            alert(errorMessage);
          } else {
            alert("인증 오류가 발생했습니다. 다시 시도해 주세요.");
          }
        } else if (status === 400) {
          alert("올바르지 않은 형식입니다.");
        } else {
          alert("알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.");
        }
      } else {
        alert("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
      }
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
