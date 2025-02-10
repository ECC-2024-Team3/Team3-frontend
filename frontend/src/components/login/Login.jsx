import React, { useState } from "react";
import cucumberpng from "./cucumber.png";
import { useNavigate } from "react-router-dom";
//import axios from "axios";

//더미 데이터
const User = {
  email: "ewha1886@naver.com",
  pw: "womansuni012!",
};

export function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      //email, pw 체크
      alert("로그인에 성공했습니다.");
      navigate("/main");
    } else {
      alert("이메일 또는 비밀번호를 확인해 주세요. ");
    }
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>

        <div>
          <button
            style={{ marginTop: "26px" }}
            onClick={onClickConfirmButton} //function 호출
            className="bottomButton"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
