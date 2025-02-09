import React, { useState } from "react";
import cucumberpng from "./cucumber.png";
import { useNavigate } from "react-router-dom";

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
    <div className="page">
      <img src={cucumberpng} alt="로고" className="logo" />
      <div className="contentWrap">
        <div style={{ marginTop: "100px" }} className="inputTitle">
          이메일
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            value={email}
            onChange={handleEmail} //function 호출
          />
        </div>

        <div className="errorMessageWrap">
          {!emailValid &&
            email.length > 0 && ( //email을 적었는데 valid하지 않을 때 경고 문구(두 조건 다 만족), 아무것도 적지 않으면 띄우지 않음
              <div>올바른 이메일을 입력해주세요.</div>
            )}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="password"
            value={pw}
            onChange={handlePw} //function 호출
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid &&
            pw.length > 0 && ( //pw을 적었는데 valid하지 않을 때 경고 문구(두 조건 다 만족), 아무것도 적지 않으면 띄우지 않음
              <div>8자 이상 입력해주세요.</div>
            )}
        </div>

        <div className="inputTitle">비밀번호 확인</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            value={pwcheck}
            onChange={(e) => setPwcheck(e.target.value)}
          />
        </div>

        <div className="errorMessageWrap">
          {!pwValid &&
            pwcheck.length > 0 && ( //pw을 적었는데 valid하지 않을 때 경고 문구(두 조건 다 만족), 아무것도 적지 않으면 띄우지 않음
              <div>비밀번호가 일치하지 않습니다.</div>
            )}
        </div>

        <div className="inputTitle">이름</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "26px" }}>
          <button
            onClick={onClickConfirmButton} //function 호출
            className="bottomButton"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
