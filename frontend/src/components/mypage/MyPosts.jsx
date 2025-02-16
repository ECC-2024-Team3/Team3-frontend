import React, { useState } from "react";
import * as S from "./MyPosts.style";
import Header from "../common/Header";
import { Link } from "react-router-dom";

export function MyPosts() {

  const initialMyPosts = [
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

  const [myPosts, setMyPosts] = useState(initialMyPosts);
  const [selectedPosts, setSelectedPosts] = useState([]);

  const handleSelect = (id) => {
    if (selectedPosts.includes(id)) {
      setSelectedPosts(selectedPosts.filter((postId) => postId !== id));
    } else {
      setSelectedPosts([...selectedPosts, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedPosts.length === myPosts.length) {
      setSelectedPosts([]);
    } else {
      const allIds = myPosts.map((post) => post.id);
      setSelectedPosts(allIds);
    }
  };

  const handleDeleteSelected = () => {
    if (selectedPosts.length === 0) {
      alert("선택된 게시글이 없습니다.");
      return;
    }
    const confirmed = window.confirm("선택한 게시글을 삭제하시겠습니까?");
    if (confirmed) {
      const updated = myPosts.filter((post) => !selectedPosts.includes(post.id));
      setMyPosts(updated);
      setSelectedPosts([]);
    }
  };

  const handleDeleteAll = () => {
    const confirmed = window.confirm("전체 게시글을 삭제하시겠습니까?");
    if (confirmed) {
      setMyPosts([]);
      setSelectedPosts([]);
    }
  };

  const handleEdit = () => {
    if (selectedPosts.length === 0) {
      alert("수정할 게시글을 선택해주세요.");
      return;
    }
    if (selectedPosts.length > 1) {
      alert("게시글은 하나만 선택해야 수정할 수 있습니다.");
      return;
    }
    const postId = selectedPosts[0];
    alert(`수정 페이지로 이동합니다.`);
    <Link></Link>
  };

  return (
    <S.Container>
      <Header />
      <S.Title>내 게시물</S.Title>
      <S.ButtonContainer>
        <S.Button onClick={handleDeleteSelected}>선택삭제</S.Button>
        <S.Button onClick={handleDeleteAll}>전체삭제</S.Button>
        <S.Button
          onClick={handleEdit}
          disabled={selectedPosts.length !== 1}
        >
          게시글 수정
        </S.Button>
      </S.ButtonContainer>

      <S.PostGrid>
        {myPosts.map((post) => (
          <S.PostCard key={post.id}>
            <S.CheckboxContainer>
              <input
                type="checkbox"
                checked={selectedPosts.includes(post.id)}
                onChange={() => handleSelect(post.id)}
              />
            </S.CheckboxContainer>
            <S.PostImage />
            <S.PostTitle>{post.title}</S.PostTitle>
          </S.PostCard>
        ))}
      </S.PostGrid>

      <S.SelectAllContainer>
        <S.SelectAllButton onClick={handleSelectAll}>
          {selectedPosts.length === myPosts.length ? "전체해제" : "전체선택"}
        </S.SelectAllButton>
      </S.SelectAllContainer>

    </S.Container>
  );
}
