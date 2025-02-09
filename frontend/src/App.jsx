import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Home, Login, Signup } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
