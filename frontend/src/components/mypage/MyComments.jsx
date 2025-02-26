import React, { useState, useEffect } from "react";
import * as S from "./MyComments.style";
import Header from "../common/Header";
import { fetchApi } from "../../utils";
import { API_URLS } from "../../consts";
import { useNavigate } from "react-router-dom";

export function MyComments() {
  
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchMyComments() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        alert("로그인이 필요합니다!");
        return navigate("/login");
      }

      try {
        const userId = localStorage.getItem("userId");
        const response = await fetchApi(
          `${API_URLS.mypage}/comments?userId=${userId}`, 
          { method: "GET" }
        );

        if (Array.isArray(response)) {
          setComments(response);
        } else if (response && Array.isArray(response.content)) {
          setComments(response.content);
        }
      } catch (error) {
        console.error(error);
        alert("댓글을 불러오는 데 실패했습니다.");
      }
    }
    fetchMyComments();
  }, [navigate]);

  const handleDelete = async (commentId) => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmed) return;

    try {
      const response = await fetchApi(
        `${API_URLS.mypage}/comments/${commentId}`, 
        { method: "DELETE" }
      );
      if (response) {
        setComments((prev) => prev.filter((c) => c.commentId !== commentId));
      }
    } catch (error) {
      console.error(error);
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <Header />
      <S.Container>
        <S.Title>내 댓글 관리</S.Title>
        {comments.map((comment) => (
          <S.CommentCard key={comment.commentId}>
            <S.CommentContent>{comment.content}</S.CommentContent>
            <S.CommentInfo>
              <S.DeleteButton onClick={() => handleDelete(comment.commentId)}>
                삭제
              </S.DeleteButton>
            </S.CommentInfo>
          </S.CommentCard>
        ))}
      </S.Container>
    </div>
  );
}
