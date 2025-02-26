import { useState, useEffect } from "react";
import Header from "../common/Header";
import * as S from "./Register.style";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URLS } from "../../consts";
import { fetchApi } from "../../utils";

// 🔹 카테고리 변환 함수
const convertCategory = (category) => {
  const mapping = {
    "패션 & 액세서리": "FASHION_ACCESSORIES",
    "뷰티 & 잡화": "BEAUTY_GOODS",
    "생활 & 식품": "HOME_FOOD",
    "기타": "OTHERS",
  };
  return mapping[category] || "OTHERS"; // 기본값 OTHERS
};

// 🔹 상품 상태 변환 함수
const convertItemCondition = (condition) => {
  const mapping = {
    "새 상품": "NEW",
    "사용감 적음": "LIGHTLY_USED",
    "사용감 많음": "HEAVILY_USED",
    "고장/파손 상품": "DAMAGED",
  };
  return mapping[condition] || "NEW"; // 기본값 NEW
};

// 🔹 거래 상태 변환 함수
const convertTransactionStatus = (status) => {
  const mapping = {
    "판매 중": "ON_SALE",
    "예약 중": "RESERVED",
    "나눔": "FREE",
    "거래 완료": "COMPLETED",
  };
  return mapping[status] || "ON_SALE"; // 기본값 ON_SALE
};


export function Register() {
  const navigate = useNavigate();
  const { postId } = useParams(); 
  const isEditMode = !!postId;

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [itemCondition, setitemCondition] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [location, setLocation] = useState([]);
  const [transactionStatus, setTransactionStatus] = useState("");

  useEffect(() => {
    if (isEditMode) {
      async function fetchPostDetail() {
        try {
          const response = await fetchApi(`${API_URLS.posts}/${postId}`, {
            method: "GET",
          });
          if (response) {
            const postData = response.data || response;
            setTitle(postData.title || "");
            setCategory(postData.category || "");
            setitemCondition(postData.itemCondition || "");
            setContent(postData.content || "");
            setPrice(postData.price || "");
            setLocation(postData.location || "");
            setTransactionStatus(postData.transactionStatus || "ON_SALE");

            if (postData.price === 0) {
              setIsFree(true);
            }
            if (postData.images) {
              setImages(postData.images);
            }
          }
        } catch (err) {
          console.error(err);
          alert("게시글 정보를 불러오는 데 실패했습니다.");
        }
      }
      fetchPostDetail();
    }
  }, [isEditMode, postId]);

  //이미지 파일을 업로드할 때 미리보기
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const finalPrice = isFree ? 0 : Number(price) || 0;
    const finalStatus = isFree ? "나눔" : transactionStatus || "판매 중";
  
    const postData = {
      title,
      category: convertCategory(category), // ✅ 카테고리 변환
      itemCondition: convertItemCondition(itemCondition), // ✅ 상품 상태 변환
      content,
      price: finalPrice,
      location,
      transactionStatus: convertTransactionStatus(finalStatus), // ✅ 거래 상태 변환
      images: images.length > 0 ? images : [],  // ✅ 빈 배열 방지
    };
  
    console.log("📌 서버로 보낼 데이터:", JSON.stringify(postData, null, 2));
  
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }
  
      const response = await fetchApi(API_URLS.posts, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });
  
      console.log("📌 게시글 등록 API 응답:", response);
  
      if (response && (response.status === 200 || response.status === 201)) {
        alert("게시글이 등록되었습니다.");
        navigate("/main");
      } else {
        console.error("🚨 오류 응답:", response);
        alert(response?.message || "요청 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("🚨 요청 실패:", error);
      alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
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
            name="itemCondition"
            value={itemCondition}
            onChange={(e) => setitemCondition(e.target.value)}
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
