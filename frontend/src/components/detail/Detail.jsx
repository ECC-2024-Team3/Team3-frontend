import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./Detail.style";
import Header from "../common/Header";
import { Comment } from "./Comment";
import { fetchApi } from "../../utils";
import { API_URLS } from "../../consts";

export function Detail() {

  const { postId } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetchApi(API_URLS.posts, { method: "GET" });
        console.log(response);

        if (response.status === 200) {
          
          const contentArray = response.content;
          
          const selectedItem = contentArray.find(
            (item) => String(item.postId) === postId
          );

          if (selectedItem) {
            setProduct({
              post_id: selectedItem.postId,
              user_id: selectedItem.userId,
              title: selectedItem.title,
              location: selectedItem.location,
              price: selectedItem.price,
              content: selectedItem.content,
              transaction_status: selectedItem.transactionStatus,
              image: selectedItem.representativeImage || "https://picsum.photos/600/300",
              category: selectedItem.category,
              itemCondition: selectedItem.itemCondition,
            });
          }
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
            <S.InfoValue>{product.itemCondition}</S.InfoValue>
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
