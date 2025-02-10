import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Home, Login, Signup } from "./components";
import { createGlobalStyle } from "styled-components";
import MyPage from "./components/mypage/MyPage";
import MyInfo from "./components/mypage/MyInfo";
import MyPosts from "./components/mypage/MyPosts";
import LikePosts from "./components/mypage/LikePosts";
import MyComments from "./components/mypage/MyComments";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Do Hyeon', sans-serif;
    font-weight: 400;
    text-decoration: none;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/myinfo" element={<MyInfo />} />
        <Route path="/mypage/myposts" element={<MyPosts />} />
        <Route path="/mypage/likeposts" element={<LikePosts />} />
        <Route path="/mypage/mycomments" element={<MyComments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
