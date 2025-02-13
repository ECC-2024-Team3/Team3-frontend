import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
`;

export const Button = styled.button`
  background-color: white;
  color: #004d25;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

export const SearchInput = styled.input`
  width: 60%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 24px;
  font-size: 14px;
  color: #555;
`;

export const SearchButton = styled.button`
  margin-left: 8px;
  padding: 12px;
  background-color: #e5e7eb;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 0 24px;
`;

export const ProductCard = styled.div`
  background: white;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 160px;
  background-color: #d1d5db;
  border-radius: 8px;
`;

export const ProductName = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const RegisterButton = styled.button`
  bottom: 24px;
  left: 24px;
  background-color: #006d35;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;
