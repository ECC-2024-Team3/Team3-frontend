import React from "react";
import styled from "styled-components";
import Header from "../common/Header";
import cucumberpng from "./cucumber.png";

export function EasterEgg() {
  return (
    <>
      <Header />
      <Container>
          <MainTitle>이화여자대학교 교내 중고거래 플랫폼</MainTitle>
        <Banner>
          <CucumberIcon src={cucumberpng} alt="오이" />
        </Banner>
        <TeamInfo>
          <TeamTitle>만든 사람 : ECC 프로젝트 3팀</TeamTitle>
          <RoleText>UX/UI 이서연 최다빈</RoleText>
          <RoleText>Front-End 이서연 최다빈</RoleText>
          <RoleText>Back-End 이경선 이형주 임수지</RoleText>
        </TeamInfo>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #00462A;
`;

const MainTitle = styled.h1`
  margin: 20;
  font-size: 24px;
  font-weight: 400;
  color: white;
`;

const Banner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background-color: white;
`;

const CucumberIcon = styled.img`
  width: 40%;
  height: auto;
  margin-right: 8px;
`;

const TeamInfo = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const TeamTitle = styled.h3`
  font-size: 42px;
  margin-bottom: 16px;
  color: white;
  font-weight: 400;
`;

const RoleText = styled.div`
  font-size: 36px;
  margin: 4px;
  color: white;
`;
