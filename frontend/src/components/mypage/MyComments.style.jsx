import styled from "styled-components";

export const Container = styled.div`
  min-height: 100px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  padding: 0 0 0 20px;
`;

export const CommentCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const CommentContent = styled.p`
  font-size: 20px;
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  padding: 10px 16px;
  background-color: #00462a;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
`;