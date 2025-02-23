import React, { useState } from "react";
import * as S from "./Detail.style";
import Header from "../common/Header";
import { useParams } from "react-router-dom";
import productexampleavif from "./product_example.avif";
import { Comment } from "./Comment";

export function Detail() {
  const items = [
    { id: 1, title: "새상품/폴로 ...", price: "16,800" },
    { id: 2, title: "사용감 없음/쿠션", price: "8,000" },
    { id: 3, title: "스타벅스 기프트카드", price: "10,000" },
    { id: 4, title: "새상품/자켓 ...", price: "20,000" },
    { id: 5, title: "새상품/폴로 ...", price: "16,800" },
    { id: 6, title: "사용감 없음/쿠션", price: "8,000" },
    { id: 7, title: "스타벅스 기프트카드", price: "10,000" },
    { id: 8, title: "새상품/자켓 ...", price: "20,000" },
    { id: 9, title: "새상품/폴로 ...", price: "16,800" },
    { id: 10, title: "사용감 없음/쿠션", price: "8,000" },
    { id: 11, title: "스타벅스 기프트카드", price: "10,000" },
    { id: 12, title: "아디다스", price: "20,000" },
    { id: 13, title: "폴로 ...", price: "16,800" },
    { id: 14, title: "사용감 없음/쿠션", price: "8,000" },
    { id: 15, title: "스타벅스 기프트카드", price: "10,000" },
    { id: 16, title: "새상품/자켓 ...", price: "20,000" },
  ];

  const { postId } = useParams();
  console.log(postId);

  const foundItem = items.find((item) => item.id === Number(postId));

  const [product, setProduct] = useState({
    post_id: foundItem.id,
    title: foundItem.title,
    location: "학생문화관",
    status: "사용감 적음",
    price: foundItem.price,
    content: "거래 원하시는 분은 댓글 달아주세요!",
    transaction_status: "판매 중",
    image: productexampleavif,
    likes_count: 15,
    bookmarks_count: 7,
    liked: false,
    bookmarked: false,
    user_id: "ewha1886",
  });

  const handleLikeToggle = () => {
    setProduct((prev) => ({
      ...prev,
      liked: !prev.liked,
      likes_count: prev.liked ? prev.likes_count - 1 : prev.likes_count + 1,
    }));
  };

  const handleBookmarkToggle = () => {
    setProduct((prev) => ({
      ...prev,
      bookmarked: !prev.bookmarked,
      bookmarks_count: prev.bookmarked
        ? prev.bookmarks_count - 1
        : prev.bookmarks_count + 1,
    }));
  };

  return (
    <div>
      <Header />

      <S.TitleContainer>
        <S.MainTitle>중고 거래 상세 페이지</S.MainTitle>

        <S.ButtonContainer>
          <S.Button onClick={handleLikeToggle}>
            <img
              src={product.liked ? likedbuttonfillpng : likedbuttonemptypng}
              alt="like button"
              style={{ width: "32px", height: "32px" }}
            />
          </S.Button>

          <S.Button onClick={handleBookmarkToggle}>
            <img
              src={product.bookmarked ? bookmarkedpng : bookmarkemptypng}
              alt="bookmark_button"
              style={{ width: "32px", height: "32px" }}
            />
          </S.Button>
        </S.ButtonContainer>
      </S.TitleContainer>

      <S.Line />

      <S.ProductContainer>
        <S.ProductImage src={product.image} alt="상품 이미지" />

        <S.ProductDetails>
          <S.ProductTitle>{product.title}</S.ProductTitle>
          <S.InfoRow>
            <S.InfoLabel>거래 상태 |</S.InfoLabel>
            <S.InfoValue>{product.transaction_status}</S.InfoValue>
          </S.InfoRow>
          <S.InfoRow>
            <S.InfoLabel>거래 장소 |</S.InfoLabel>
            <S.InfoValue>{product.location}</S.InfoValue>
          </S.InfoRow>
          <S.InfoRow>
            <S.InfoLabel>상품 상태 |</S.InfoLabel>
            <S.InfoValue>{product.status}</S.InfoValue>
          </S.InfoRow>
          <S.InfoRow>
            <S.InfoLabel>가격 |</S.InfoLabel>
            <S.PriceValue>{product.price.toLocaleString()}원</S.PriceValue>
          </S.InfoRow>
        </S.ProductDetails>
      </S.ProductContainer>

      <S.Description>
        <S.InfoLabel>설명</S.InfoLabel>
        <S.DescText>{product.content}</S.DescText>
      </S.Description>

      <S.SellerInfo>
        <S.InfoLabel>거래자 정보</S.InfoLabel>
        <S.SellerName>판매자 ID: {product.user_id}</S.SellerName>
      </S.SellerInfo>

      <Comment />
    </div>
  );
}
