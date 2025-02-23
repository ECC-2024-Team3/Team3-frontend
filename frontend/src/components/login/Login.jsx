import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cucumberpng from "./cucumber.png";
import * as S from "../signup/Signup.style.jsx";
import axios from "axios";

//TODO: 실제 API 연동
const User = {
  email: "ewha1886@naver.com",
  pw: "womansuni012",
};

export function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

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
    if (email === User.email && pw === User.pw) {
      //email, pw 체크
      alert("로그인에 성공했습니다.");
      navigate("/main");
    } else {
      alert("이메일 또는 비밀번호를 확인해 주세요. ");
    }
  };

  /*const onClickConfirmButton = async () => {
    try {
      const response = await axios.post(
        "http://oimarket-backend.ap-northeast-2.elasticbeanstalk.com/api/users/login",
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
  };*/

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
