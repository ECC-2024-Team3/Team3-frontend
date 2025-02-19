import { useState } from "react";
import Header from "../common/Header";
import * as S from "./Register.style";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Register() {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [location, setLocation] = useState([]);
  const [transactionStatus, setTransactionStatus] = useState("");

  //이미지 파일을 업로드할 때 미리보기
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      images,
      title,
      category,
      condition,
      content,
      price: isFree ? 0 : price,
      location,
      transactionStatus: isFree ? "나눔" : transactionStatus,
    };

    try {
      await axios.post(
        "http://oimarket-backend.ap-northeast-2.elasticbeanstalk.com/",
        postData
      );
      navigate("/main");
    } catch (error) {
      console.error(
        "요청 실패:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleFreeItem = () => {
    setIsFree(!isFree);

    if (isFree) {
      setTransactionStatus("판매 중");
    } else {
      setTransactionStatus("나눔");
    }
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>중고 거래 상품 등록</S.Title>
        <S.Form>
          <S.Label>상품 이미지</S.Label>
          <S.Input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />

          {/* 이미지 미리보기 */}
          <S.ImagePreviewContainer>
            {images.map((src, index) => (
              <S.ImagePreview
                key={index}
                src={src}
                alt={`미리보기 ${index + 1}`}
              />
            ))}
          </S.ImagePreviewContainer>

          <S.Label>상품명</S.Label>
          <S.Input
            type="text"
            placeholder="상품명을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <S.Label>카테고리</S.Label>
          <S.Select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>선택하세요</option>
            <option>패션 & 액세서리</option>
            <option>뷰티 & 잡화</option>
            <option>생활 & 식품</option>
            <option>기타</option>
          </S.Select>

          <S.Label>상품 상태</S.Label>
          <S.Select
            name="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <option>선택하세요</option>
            <option>새 상품</option>
            <option>사용감 적음</option>
            <option>사용감 많음</option>
            <option>고장/파손 상품</option>
          </S.Select>

          <S.Label>설명</S.Label>
          <S.TextArea
            placeholder="상품 설명을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></S.TextArea>

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
              onChange={handleFreeItem}
            />
            <label htmlFor="free">무료</label>
          </S.CheckboxContainer>
          {isFree && (
            <p style={{ color: "#004d2b", fontWeight: "bold" }}>나눔</p>
          )}

          <S.Label>거래 장소</S.Label>
          <S.Input
            type="text"
            value={location}
            placeholder="거래 장소를 입력하세요"
            onChange={(e) => setLocation(e.target.value)}
          />

          <S.Label>거래 상태</S.Label>
          <S.Select
            type="transactionStatus"
            value={transactionStatus}
            onChange={(e) => setTransactionStatus(e.target.value)}
          >
            <option>판매 중</option>
            <option>예약 중</option>
            <option>거래 완료</option>
            <option>나눔</option>
          </S.Select>

          <S.ButtonContainer>
            <Link to="/Main">
              <S.Button>돌아가기</S.Button>
            </Link>
            <S.Button primary onClick={handleSubmit}>
              등록
            </S.Button>
          </S.ButtonContainer>
        </S.Form>
      </S.Container>
    </>
  );
}
