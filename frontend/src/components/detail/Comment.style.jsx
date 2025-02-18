import styled from "styled-components";

export const CommentContainer = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  border-top: 2px solid #00462a;
`;

export const CommentTitle = styled.h3`
  color: #00462a;
  margin-bottom: 10px;
`;

export const CommentList = styled.div`
  margin-bottom: 10px;
`;

export const CommentItem = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

export const CommentAuthor = styled.span`
  font-weight: bold;
  color: #00462a;
`;

export const CommentText = styled.span`
  margin-left: 10px;
  color: #333;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const CommentInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  background-color: #00462a;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;
