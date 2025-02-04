import React from "react";

const BuyPage = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="../assets/images/logo.png" alt="로고" />
        </div>
        <nav className="nav">
          <a href="/buy" className="nav-button">중고거래</a>
          <a href="/mypage" className="mypage-button"></a>
        </nav>
      </header>
    </div>
  );
};

export default BuyPage;