import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import cucumberpng from "./cucumber.png";

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
    <div className="page">
      <img src={cucumberpng} alt="로고" className="logo" />
      <div className="contentWrap">
        <div className="inputTitle">이메일</div>
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
