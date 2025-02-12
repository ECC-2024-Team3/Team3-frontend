import React, { useState } from "react";
import * as S from "./MyInfo.style";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";

const User = {
  id: "ewha1886",
  pw: "womansuni012!"
};

export default function MyInfo() {
  return (
    <div>
      <Header />
    </div>
  );
}