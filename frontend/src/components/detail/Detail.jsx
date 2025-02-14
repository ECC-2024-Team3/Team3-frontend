import React, { useState } from "react";
import * as S from "./Detail.style";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";

const User = {
  id: "ewha1886",
  pw: "womansuni012!"
};

export default function Detail() {
  return (
    <div>
      <Header />
    </div>
  );
}
