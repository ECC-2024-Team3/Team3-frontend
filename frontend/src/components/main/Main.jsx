import Header from "../common/Header";
import * as S from "./Main.style";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URLS } from "../../consts";
import { fetchApi } from "../../utils";

const ITEMS_PER_PAGE = 8; // 한 페이지당 표시할 아이템 개수

export function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetchApi(API_URLS.posts, {
        method: "GET",
      });

      if (response.status === 200) {
        setItems(response?.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const data = [
    {
      postId: 1,
      userId: 10,
      title: "맥북 프로 16인치 판매합니다",
      location: "이대역",
      price: 1200000,
      transactionStatus: "ON_SALE",
      representativeImage: "https://picsum.photos/600/300",
      createdAt: "2025-02-15T12:34:56",
      updatedAt: "2025-02-15T12:34:56",
    },
    {
      postId: 5,
      userId: 20,
      title: "갤럭시 S23 울트라 팝니다",
      location: "학교 정문",
      price: 800000,
      transactionStatus: "RESERVED",
      representativeImage: "https://picsum.photos/600/200",
      createdAt: "2025-02-14T15:12:30",
      updatedAt: "2025-02-14T15:12:30",
    },
  ];

  // 검색 필터 적용
  const filteredItems = items.filter(
    (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())
    // item.title을 소문자로 변환하여 searchTerm을 소문자로 변환한 값이 포함되는지 검사
  );

  // 현재 페이지의 아이템 계산
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  //전체 페이지 수 계산 = 현재 필터링된 항목의 총 개수/ 한 페이지에 표시할 항목 수 - 나눗셈 결과 올림
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; //현재 페이지에서 시작할 데이터의 인덱스
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
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
        {data.length > 0 ? (
          data.map(({ representativeImage, title, price, postId }) => (
            <Link
              to={`/post/${postId}`}
              key={postId}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <S.ProductCard key={postId}>
                <S.ImageContainer>
                  <S.ProductImage src={representativeImage} alt="상품 이미지" />
                </S.ImageContainer>
                <S.ProductTitle>{title}</S.ProductTitle>
                <S.ProductPrice>{price.toLocaleString()}원</S.ProductPrice>
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
