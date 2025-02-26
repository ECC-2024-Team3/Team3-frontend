import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./Detail.style";
import Header from "../common/Header";
import { Comment } from "./Comment";
import { fetchApi } from "../../utils";
import { API_URLS } from "../../consts";

export function Detail() {

  const { postId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const userId = localStorage.getItem("userId"); // ✅ 로그인한 사용자 ID 가져오기
    
        const response = await fetchApi(API_URLS.postById(postId, userId), { method: "GET" });
    
        console.log("📌 상세페이지 API 응답:", response); // 응답 로그 확인
    
        if (response?.status === 200 && response.data) {
          setProduct({
            post_id: response.data.postId,
            user_id: response.data.userId,
            title: response.data.title,
            location: response.data.location,
            price: response.data.price,
            content: response.data.content,
            transaction_status: response.data.transactionStatus,
            image: response.data.representativeImage,
            category: response.data.category,
            itemCondition: response.data.itemCondition
          });
        } else {
          console.error("🚨 상품 데이터를 불러올 수 없습니다:", response);
          alert("상품 데이터를 불러올 수 없습니다.");
        }
      } catch (err) {
        console.error("🚨 상품 불러오기 실패:", err);
        alert("오류가 발생했습니다.");
      }
    };    
    

    fetchProduct();
  }, [postId]);

  const handleEdit = () => {
    navigate(`/register/${postId}`);
  };

  return (
    <div>
      <Header />

      <S.TitleContainer>
        <S.MainTitle>중고 거래 상세 페이지</S.MainTitle>
        <S.Button onClick={handleEdit}>수정</S.Button>
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
