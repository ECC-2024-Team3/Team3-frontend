import { useState } from "react";
import cucumberpng from "./cucumber.png";
import { useNavigate } from "react-router-dom";
import * as S from "./Signup.style.jsx";
import { API_URLS } from "../../consts";
import { fetchApi } from "../../utils";

export function Signup() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = //정규표현식- 영문, 문자 또는 숫자... 뒤에 com과 같은 최상위 도메인이 들어갈 자리 2-3자리 지정
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (regex.test(e.target.value)) {
      setEmailValid(true); //valid하면 값을 true로 변경
    } else {
      setEmailValid(false); //valid 하지 않으면 false로 유지
    }
  };

  const handlePassword = (e) => {
    //event 받아줌
    setPassword(e.target.value);
    const regex = /^[A-Za-z0-9]{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleSignup = async () => {
    if (!emailValid || !pwValid || password !== confirmPassword) {
      alert("입력한 정보를 다시 확인해주세요.");
      return;
    }
  
    try {
      const response = await fetchApi(API_URLS.signup, {
        method: "POST",
        body: JSON.stringify({ 
          email, 
          nickname, 
          password, 
          confirmPassword 
        }),
      });
  
      console.log("📌 회원가입 API 응답:", response);
  
      if (response?.userId) {  // API 응답에 userId가 존재하는지 확인
        localStorage.setItem("userId", response.userId);
        alert("회원가입이 완료되었습니다!");
        navigate("/main");
      } else {
        alert(response?.error || "회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("🚨 회원가입 오류:", error);
      alert(
        error.response?.data?.error || "서버 오류가 발생했습니다. 다시 시도해주세요."
      );
    }
  };

  return (
    <S.Page>
      <S.Logo src={cucumberpng} alt="로고" />
      <S.ContentWrap>
        <S.InputTitle marginTop="100px">이메일</S.InputTitle>
        <S.InputWrap>
          <S.Input type="text" value={email} onChange={handleEmail} />
        </S.InputWrap>
        <S.ErrorMessageWrap>
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </S.ErrorMessageWrap>

        <S.InputTitle marginTop="26px">비밀번호</S.InputTitle>
        <S.InputWrap>
          <S.Input type="password" value={password} onChange={handlePassword} />
        </S.InputWrap>
        <S.ErrorMessageWrap>
          {!pwValid && password.length > 0 && (
            <div>올바른 비밀번호를 입력해주세요.</div>
          )}
        </S.ErrorMessageWrap>

        <S.InputTitle>비밀번호 확인</S.InputTitle>
        <S.InputWrap>
          <S.Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </S.InputWrap>
        <S.ErrorMessageWrap>
          {password !== confirmPassword && confirmPassword.length > 0 && (
            <div>비밀번호가 일치하지 않습니다.</div>
          )}
        </S.ErrorMessageWrap>

        <S.InputTitle>닉네임</S.InputTitle>
        <S.InputWrap>
          <S.Input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </S.InputWrap>

        <S.BottomButton onClick={handleSignup}>
          회원가입
        </S.BottomButton>
      </S.ContentWrap>
    </S.Page>
  );
}
