import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./Detail.style";
import Header from "../common/Header";
import { Comment } from "./Comment";
import { fetchApi } from "../../utils";
import { API_URLS } from "../../consts";

export function Detail() {

  const { postId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetchApi(`${API_URLS.posts}?postId=${postId}`, {
          method: "GET",
        });
        if (response.status === 200) {
          const data = response.data;
          setProduct({
            post_id: data.postId,
            user_id: data.userId,
            title: data.title,
            location: data.location,
            price: data.price,
            content: data.content,
            transaction_status: data.transactionStatus,
            image: data.representativeImage,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchProduct();
  }, [postId]);

  return (
    <div>
      <Header />

      <S.TitleContainer>
        <S.MainTitle>중고 거래 상세 페이지</S.MainTitle>
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
            <S.PriceValue>{product.price}원</S.PriceValue>
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
