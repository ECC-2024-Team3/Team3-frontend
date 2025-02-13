import Header from "../common/Header";
import * as S from "./Main.style";
import { Link } from "react-router-dom";

//TODO: 메인 페이지 연동
export function Main() {
  const items = [
    { name: "새상품/폴로 ...", price: "16,800" },
    { name: "사용감 없음/쿠션", price: "8,000" },
    { name: "스타벅스 기프트카드", price: "10,000" },
    { name: "새상품/자켓 ...", price: "20,000" },
  ];

  return (
    <S.Container>
      <Header />
      <S.SearchContainer>
        <S.SearchInput placeholder="상품명, 카테고리, 거래 장소 검색" />
        <S.SearchButton>🔍</S.SearchButton>
        <Link to="/Register">
          <S.RegisterButton>상품 등록하기</S.RegisterButton>
        </Link>
      </S.SearchContainer>
      <S.ProductGrid>
        {items.map((item, index) => (
          <S.ProductCard key={index}>
            <S.ProductImage />
            <S.ProductName>{item.name}</S.ProductName>
            <S.ProductPrice>{item.price}원</S.ProductPrice>
          </S.ProductCard>
        ))}
      </S.ProductGrid>
    </S.Container>
  );
}
/*TODO: 페이지네이션 추가*/
