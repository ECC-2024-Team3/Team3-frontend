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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      console.log("📌 로그인 API 응답:", response);
      console.log("JWT Payload:", payload);
  
      if (response.status === 200) {
        if (response.data.token) {
          const payload = JSON.parse(jsonPayload);
          localStorage.setItem("userId", payload.id);

          alert("로그인 성공!");
          navigate("/main");
        } else {
          alert("로그인 오류: 응답에서 토큰을 찾을 수 없습니다.");
        }
      } else if (response.status === 400) {
        console.log("📌 400 응답 데이터:", response);
        alert(response.data?.error || "요청이 올바르지 않습니다.");
      } else if (response.status === 401) {
        console.log("📌 401 응답 데이터:", response);
        alert(response?.data?.error || "인증 오류가 발생했습니다.");
      } else {
        console.log("📌 예외 처리되지 않은 응답:", response);
        alert("알 수 없는 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("🚨 로그인 요청 오류:", error);
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
