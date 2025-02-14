import React, { useState } from "react";
import * as S from "./Detail.style";
import Header from "../common/Header";
import { useParams } from "react-router-dom";
import likedbuttonfillpng from "./liked_button_fill.png"
import likedbuttonemptypng from "./liked_button_empty.png"

const User = {
  id: "ewha1886",
  pw: "womansuni012!",
  name: "이대댕김",
};

export function Detail() {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  return (
    <div>
      <Header />

      <S.TitleContainer>
        <S.MainTitle>중고 거래 상세 페이지</S.MainTitle>
        <S.LikeButton>
          {product.liked ? {likedbuttonfillpng} : {likedbuttonemptypng}}
        </S.LikeButton>
        <S.BookmarkButton>
          {product.bookmarked ? "" : ""}
        </S.BookmarkButton>
      </S.TitleContainer>
      <S.Line />

      <S.ProductContainer>
        <S.ProductImage src={product.images[0]} alt="상품 이미지" />

      <S.ProductDetails>
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.InfoRow>
        <S.InfoLabel>카테고리</S.InfoLabel>
        <S.InfoValue>전자기기</S.InfoValue>
      </S.InfoRow>
      <S.InfoRow>
        <S.InfoLabel>상품 상태</S.InfoLabel>
        <S.InfoValue>{product.transaction_status}</S.InfoValue>
      </S.InfoRow>
      <S.InfoRow>
        <S.InfoLabel>거래 장소</S.InfoLabel>
        <S.InfoValue>{product.location}</S.InfoValue>
      </S.InfoRow>
      <S.InfoRow>
        <S.InfoLabel>가격</S.InfoLabel>
        <S.InfoValue>{product.price.toLocaleString()}원</S.InfoValue>
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

    </div>
  );
}
