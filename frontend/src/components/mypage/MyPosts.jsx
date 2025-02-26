import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./MyPosts.style";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import { fetchApi } from "../../utils";
import { API_URLS } from "../../consts";

export function MyPosts() {
  const { postId } = useParams();

  const [myPosts, setMyPosts] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  
  useEffect(() => {
    async function fetchMyPosts() {
      try {
        const userId = localStorage.getItem("userId");
        const response = await fetchApi(API_URLS.mypageById(userId), { method: "GET" });
        
        if (Array.isArray(response)) {
          setMyPosts(response.map((p) => ({
            id: p.postId,
            title: p.title,
            price: p.price,
            representativeImage: p.representativeImage,
          })));
        } else if (response && Array.isArray(response.content)) {
          setMyPosts(response.content.map((post) => ({
            id: post.postId,
            title: post.title,
            price: post.price,
            representativeImage: post.representativeImage,
        })));
        }
      } catch (error) {
        console.error(error);
        alert("게시글 조회 중 오류가 발생했습니다.");
      }
    }
  
    fetchMyPosts();
  }, []);

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

  const handleDeleteSelected = async () => {
    if (selectedPosts.length === 0) {
      alert("선택된 게시글이 없습니다.");
      return;
    }

    const confirmed = window.confirm("선택한 게시글을 삭제하시겠습니까?");
    if (!confirmed) return;

    try {
      const queryParam = selectedPosts.join(",");
      const response = await fetchApi(
        `${API_URLS.mypage}/posts?postIds=${queryParam}`,
        {
          method: "DELETE",
        }
      );
      if (response) {
        const updated = myPosts.filter((post) => !selectedPosts.includes(post.id));
        setMyPosts(updated);
        setSelectedPosts([]);
      }
    } catch (error) {
      console.error(error);
      alert("선택 게시글 삭제 중 오류가 발생했습니다.");
    }
  };

  const handleDeleteAll = async () => {
    const confirmed = window.confirm("전체 게시글을 삭제하시겠습니까?");
    if (!confirmed) return;

    try {
      const response = await fetchApi(`${API_URLS.mypage}/posts/all`, {
        method: "DELETE",
      });
      if (response) {
        setMyPosts([]);
        setSelectedPosts([]);
      }
    } catch (error) {
      console.error(error);
      alert("전체 게시글 삭제 중 오류가 발생했습니다.");
    }
  };

  const handleEdit = async () => {
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
    <Link to={`/register/${postId}`}/>
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