import React, { useState } from "react";
import * as S from "./Comment.style";

export function Comment() {

  const [comments, setComments] = useState([
    { id: 1, author: "사용자1", text: "안녕하세요! 물건 아직 남아있나요?" },
    { id: 2, author: "이대댕김 (ewha1886)", text: "네 있어요!" },
    { id: 3, author: "사용자 1", text: "혹시 언제 구매하셨던 물건인가요?" },
    { id: 4, author: "이대댕김 (ewha1886)", text: "작년 12월이요~" }
  ]);

  const [newComment, setNewComment] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [editText, setEditText] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newId = comments.length + 1;
    const newCommentObj = {
      id: newId,
      author: "이대댕김 (ewha1886)",
      text: newComment,
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleDeleteComment = (id) => {
    const confirmed = window.confirm("댓글을 삭제하시겠습니까?");
    if (!confirmed) return;

    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleEditComment = (comment) => {
    setEditingId(comment.id);
    setEditText(comment.text);
  };

  const handleSaveEdit = (id) => {
    if (editText.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    setComments(
      comments.map((c) =>
        c.id === id ? { ...c, text: editText } : c
      )
    );
    setEditingId(null);
    setEditText("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div>
      <S.Line />
      <S.CommentContainer>
        <S.CommentTitle>댓글</S.CommentTitle>

        <S.CommentList>
          {comments.map((comment) => (
            <S.CommentItem key={comment.id}>
              {editingId === comment.id ? (
                <S.EditContainer>
                  <S.CommentAuthor>{comment.author}</S.CommentAuthor>
                  <S.EditInput
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <S.EditButton onClick={() => handleSaveEdit(comment.id)}>
                    저장
                  </S.EditButton>
                  <S.CancelButton onClick={handleCancelEdit}>
                    취소
                  </S.CancelButton>
                </S.EditContainer>
              ) : (
                <>
                  <S.CommentAuthor>{comment.author}</S.CommentAuthor>
                  <S.CommentText>{comment.text}</S.CommentText>
                  <S.ButtonGroup>
                    <S.SmallButton onClick={() => handleEditComment(comment)}>
                      수정
                    </S.SmallButton>
                    <S.SmallButton onClick={() => handleDeleteComment(comment.id)}>
                      삭제
                    </S.SmallButton>
                  </S.ButtonGroup>
                </>
              )}
            </S.CommentItem>
          ))}
        </S.CommentList>

        <S.InputContainer>
          <S.CommentInput
            placeholder="댓글을 입력하세요..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <S.SubmitButton onClick={handleAddComment}>등록</S.SubmitButton>
        </S.InputContainer>
      </S.CommentContainer>
    </div>
  );
}