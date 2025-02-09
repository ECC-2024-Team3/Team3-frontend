import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Login } from "./components";
import { createGlobalStyle } from "styled-components";
import MyPage from "./components/mypage/MyPage";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Do Hyeon', sans-serif;
    font-weight: 400;
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
