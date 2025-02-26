import styled from "styled-components";

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainTitle = styled.h1`
    font-size: 32px;
    color: #00462a;
`;

export const Button = styled.button`
  background-color: #00462a;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Line = styled.hr`
    border: none;
    border-top: 3px solid #00462a;
    margin-top: -10px;
    margin-bottom: 20px;
    width: 95%;
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 0 20px 0 20px;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ProductDetails = styled.div`
    flex: 1;
    margin-top: -20px;
`;

export const ProductTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const InfoRow = styled.div`
  font-size: 24px;
  display: flex;
  margin-bottom: 10px;
`;

export const InfoLabel = styled.div`
  width: 100px;
  font-weight: 400;
  color: #00462a;
`;

export const InfoValue = styled.div`
  flex: 1;
`;

export const PriceValue = styled.div`
  font-size: 48px;
`;

export const Description = styled.div`
  border: 1px solid #ddd;
  padding: 20px 20px;
  margin: 20px;
  font-size: 20px;
`;

export const DescText = styled.p`
  margin-top: 10px;
  color: #333;
`;

export const SellerInfo = styled.div`
  border: 1px solid #ddd;
  padding: 20px 20px;
  margin: 20px;
  font-size: 20px;
`;

export const SellerName = styled.div`
  margin-top: 10px;
  color: #333;
`;

export const ChatButton = styled.button`
  padding: 10px 20px;
  background-color: #00462a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;