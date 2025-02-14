import { useState } from "react";
import Header from "../common/Header";
import * as S from "./Register.style";
import { Link } from "react-router-dom";

export function Register() {
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState(false);

  return (
    <S.Container>
      <Header />
      <S.Title>중고 거래 상품 등록</S.Title>
      <S.Form>
        <S.Label>상품명</S.Label>
        <S.Input type="text" placeholder="상품명을 입력하세요" />

        <S.Label>카테고리</S.Label>
        <S.Select>
          <option>선택하세요</option>
          <option>하의</option>
          <option>외투</option>
          <option>신발</option>
          <option>액세서리 (양말, 모자, 가방 포함)</option>
          <option>뷰티</option>
          <option>잡화</option>
          <option>식품</option>
          <option>인테리어</option>
          <option>취미 (음반/도서/티켓/수집품)</option>
          <option>기타</option>
        </S.Select>

        <S.Label>상품 상태</S.Label>
        <S.Select>
          <option>선택하세요</option>
          <option>새 상품</option>
          <option>사용감 없음</option>
          <option>사용감 적음</option>
          <option>사용감 많음</option>
          <option>고장/파손 상품</option>
        </S.Select>

        <S.Label>설명</S.Label>
        <S.TextArea placeholder="상품 설명을 입력하세요"></S.TextArea>

        <S.Label>가격 (원)</S.Label>
        <S.CheckboxContainer>
          <S.Input
            type="number"
            placeholder="가격을 입력하세요"
            value={isFree ? "" : price}
            onChange={(e) => setPrice(e.target.value)}
            disabled={isFree}
          />
          <input
            type="checkbox"
            id="free"
            checked={isFree}
            onChange={() => setIsFree(!isFree)}
          />
          <label htmlFor="free">무료</label>
        </S.CheckboxContainer>
        {isFree && <p style={{ color: "#004d2b", fontWeight: "bold" }}>나눔</p>}

        <S.Label>거래 장소</S.Label>
        <S.Input type="text" placeholder="거래 장소를 입력하세요" />

        <S.ButtonContainer>
          <Link to="/Main">
            <S.Button>돌아가기</S.Button>
          </Link>

          <Link to="/Main">
            <S.Button primary>등록</S.Button>
          </Link>
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  );
}
