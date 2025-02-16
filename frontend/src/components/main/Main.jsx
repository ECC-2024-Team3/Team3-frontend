import Header from "../common/Header";
import * as S from "./Main.style";
import { Link } from "react-router-dom";
import { useState } from "react";

const itemsPerPage = 8; // 한 페이지당 표시할 아이템 개수

export function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  //TODO: 상품 데이터 API 연결
  const items = [
    { title: "새상품/폴로 ...", price: "16,800" },
    { title: "사용감 없음/쿠션", price: "8,000" },
    { title: "스타벅스 기프트카드", price: "10,000" },
    { title: "새상품/자켓 ...", price: "20,000" },
    { title: "새상품/폴로 ...", price: "16,800" },
    { title: "사용감 없음/쿠션", price: "8,000" },
    { title: "스타벅스 기프트카드", price: "10,000" },
    { title: "새상품/자켓 ...", price: "20,000" },
    { title: "새상품/폴로 ...", price: "16,800" },
    { title: "사용감 없음/쿠션", price: "8,000" },
    { title: "스타벅스 기프트카드", price: "10,000" },
    { title: "아디다스", price: "20,000" },
    { title: "폴로 ...", price: "16,800" },
    { title: "사용감 없음/쿠션", price: "8,000" },
    { title: "스타벅스 기프트카드", price: "10,000" },
    { title: "새상품/자켓 ...", price: "20,000" },
  ];

  // 검색 필터 적용
  const filteredItems = items.filter(
    (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())
    // item.title을 소문자로 변환하여 searchTerm을 소문자로 변환한 값이 포함되는지 검사
  );

  // 현재 페이지의 아이템 계산
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  //전체 페이지 수 계산 = 현재 필터링된 항목의 총 개수/ 한 페이지에 표시할 항목 수 - 나눗셈 결과 올림
  const startIndex = (currentPage - 1) * itemsPerPage; //현재 페이지에서 시작할 데이터의 인덱스
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  ); //현재 페이지의 데이터만 추출

  return (
    <S.Container>
      <Header />
      <S.SearchContainer>
        <S.SearchInput
          type="text"
          placeholder="상품명, 카테고리, 거래 장소 검색"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // 검색 시 첫 페이지로 이동
          }}
        />
        <S.SearchButton>🔍</S.SearchButton>
        <Link to="/Register">
          <S.RegisterButton>상품 등록하기</S.RegisterButton>
        </Link>
      </S.SearchContainer>

      <S.ProductGrid>
        {/* currentItems 배열이 비어 있지 않으면 상품 목록을 출력 */}
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <Link to={"/post/1"} style={{ textDecoration: "none"}}>
            <S.ProductCard key={index}>
              {/* 상품 이미지 컴포넌트 */}
              <S.ProductImage />
              {/* 상품 이름 표시 */}
              <S.ProductTitle>{item.title}</S.ProductTitle>
              {/* 상품 가격 표시 (천 단위 구분 기호 추가) */}
              <S.ProductPrice>
                {Number(item.price.replace(/,/g, "")).toLocaleString()}원
              </S.ProductPrice>
            </S.ProductCard>
            </Link>
          ))
        ) : (
          <S.NoResults>검색 결과가 없습니다.</S.NoResults>
        )}
      </S.ProductGrid>

      {/* 페이지네이션 */}
      <S.Pagination>
        {/* 다음 버튼 */}
        <S.PageButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          이전
        </S.PageButton>{" "}
        {/*첫 페이지일 때 비활성화 */}
        {/* 페이지 번호 버튼들 (totalPages 만큼 생성) */}
        {Array.from({ length: totalPages }, (_, i) => (
          <S.PageButton
            key={i} // 각 버튼에 고유 키 부여
            onClick={() => setCurrentPage(i + 1)} // 페이지 번호 클릭 시 해당 페이지로 이동
            active={currentPage === i + 1} // 현재 페이지 강조
          >
            {i + 1} {/* 페이지 번호 표시 */}
          </S.PageButton>
        ))}
        {/* 다음 버튼 */}
        <S.PageButton
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages} // 마지막 페이지일 때 비활성화
        >
          다음
        </S.PageButton>
      </S.Pagination>
    </S.Container>
  );
}
