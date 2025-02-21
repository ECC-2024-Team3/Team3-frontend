import React, { useEffect, useState } from "react";
import * as S from "./Detail.style";
import Header from "../common/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

import likedbuttonfillpng from "./liked_button_fill.png";
import likedbuttonemptypng from "./liked_button_empty.png";
import bookmarkemptypng from "./bookmark_empty.png";
import bookmarkedpng from "./bookmarked.png";

export function Detail() {
  const baseUrl = "http://oimarket-backend.ap-northeast-2.elasticbeanstalk.com";

  const { postId } = useParams();
  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
    .get(`${baseUrl}/api/posts/${postId}`)
      .then((res) => {
        const data = res.data.data;
        setProduct({
          post_id: data.postId,
          user_id: data.userId,
          title: data.title,
          location: data.location,
          price: data.price,
          content: data.content,
          transaction_status: data.transactionStatus,
          image: data.images?.[0] || "",
          likes_count: data.likesCount,
          bookmarks_count: data.bookmarksCount,
          liked: data.liked,
          bookmarked: data.bookmarked,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("게시글 조회 오류:", err);
        setLoading(false);
      });
  }, [postId]);

  const handleLikeToggle = async () => {
    if (!product) return;
    try {
      const res = await axios.post(`${baseUrl}/api/posts/${postId}/like`);
      if (res.data.status === 200) {
        alert(res.data.message);
        setProduct((prev) => ({
          ...prev,
          liked: true,
          likes_count: res.data.data.likesCount,
        }));
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data.message);
      } else {
        console.error("좋아요 오류:", err);
        alert("좋아요 처리에 실패했습니다.");
      }
    }
  };

  const handleBookmarkToggle = async () => {
    if (!product) return;
    try {
      const res = await axios.post(`${baseUrl}/api/posts/${postId}/bookmark`);
      if (res.data.status === 200) {
        alert(res.data.message);
        setProduct((prev) => ({
          ...prev,
          bookmarked: true,
          bookmarks_count: res.data.data.bookmarksCount,
        }));
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data.message);
      } else {
        console.error("북마크 오류:", err);
        alert("북마크 처리에 실패했습니다.");
      }
    }
  };

  if (error) return <div>오류 발생: {error.message}</div>;
  if (!product) return <div>게시글 정보 없음</div>;

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
    </div>
  );
}