import { useState } from "react";
import cucumberpng from "./cucumber.png";
import { useNavigate } from "react-router-dom";
import * as S from "./Signup.style.jsx";

export function Signup() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwcheck, setPwcheck] = useState("");
  const [name, setName] = useState("");

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

  const handlePw = (e) => {
    //event 받아줌
    setPw(e.target.value);
    const regex = /^[A-Za-z0-9]{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    alert("회원가입에 성공했습니다.");
    navigate("/");
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
          <S.Input type="password" value={pw} onChange={handlePw} />
        </S.InputWrap>
        <S.ErrorMessageWrap>
          {!pwValid && pw.length > 0 && <div>8자 이상 입력해주세요.</div>}
        </S.ErrorMessageWrap>

        <S.InputTitle>비밀번호 확인</S.InputTitle>
        <S.InputWrap>
          <S.Input
            type="text"
            value={pwcheck}
            onChange={(e) => setPwcheck(e.target.value)}
          />
        </S.InputWrap>
        <S.ErrorMessageWrap>
          {!pwValid && pwcheck.length > 0 && (
            <div>비밀번호가 일치하지 않습니다.</div>
          )}
        </S.ErrorMessageWrap>

        <S.InputTitle>이름</S.InputTitle>
        <S.InputWrap>
          <S.Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.InputWrap>

        <S.BottomButton onClick={onClickConfirmButton}>회원가입</S.BottomButton>
      </S.ContentWrap>
    </S.Page>
  );
}
