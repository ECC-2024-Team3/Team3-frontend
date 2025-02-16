import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Main,
  Home,
  Login,
  Signup,
  MyComments,
  MyPage,
  MyPosts,
  MyInfo,
  LikePosts,
  Register,
  Detail
} from "./components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Do Hyeon', sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
    margin: 0;
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
        <Route path="/register" element={<Register />} />
        <Route path="/post/:postId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
