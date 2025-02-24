import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cucumberpng from "./cucumber.png";
import * as S from "../signup/Signup.style.jsx";
import { API_URLS } from "../../consts";
import { fetchApi } from "../../utils";

// const User = {
//   email: "ewha1886@naver.com",
//   password: "womansuni012",
// };

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");

  const navigate = useNavigate();

  const onClickConfirmButton = async () => {
    try {
      const response = await fetchApi(API_URLS.login, {
        method: "POST",
        body: JSON.stringify({ id: email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.status === 200) {
        alert(response.data.message);
        navigate("/main");
      } else if (response.status === 401) {
        if (
          response.data.error === "가입되지 않은 id입니다." ||
          response.data.error === "틀린 password 입니다."
        ) {
          alert(response.data.error);
        } else {
          alert("인증 오류가 발생했습니다. 다시 시도해 주세요.");
        }
      } else if (response.status === 400) {
        alert("올바르지 않은 형식입니다.");
      } else {
        alert("알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      alert(
        error.response?.data?.error || "네트워크 오류가 발생했습니다. 다시 시도해 주세요."
      );
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
            value={password}
            onChange={(e) => setPw(e.target.value)}
          />
        </S.InputWrap>

        <S.BottomButton onClick={onClickConfirmButton}>로그인</S.BottomButton>
      </S.ContentWrap>
    </S.Page>
  );
}
