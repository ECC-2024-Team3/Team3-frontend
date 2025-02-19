import styled from "styled-components";

export const Line = styled.hr`
    border: none;
    border-top: 1px solid #00462a;
    width: 95%;
`;

export const CommentContainer = styled.div`
  margin-top: -30px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px 0;
`;

export const CommentTitle = styled.h3`
  color: #00462a;
  margin-bottom: 10px;
  font-size: 24px;
`;

export const CommentList = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
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
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const EditInput = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  min-height: 60px;
`;

export const EditButton = styled.button`
  background-color: #00462a;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background-color: #ccc;
  color: #333;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  margin-top: 4px;
  display: flex;
  gap: 8px;
`;

export const SmallButton = styled.button`
  background-color: #00462a;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
`;