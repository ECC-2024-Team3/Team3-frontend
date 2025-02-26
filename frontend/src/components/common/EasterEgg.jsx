import React from "react";
import styled from "styled-components";
import Header from "../common/Header";
import cucumberpng from "./cucumber.png";

export default function IntroPage() {
  return (
    <>
      <Header />
      <Container>
        <TopBanner>
          <MainTitle>이화여자대학교 교내 중고거래 플랫폼</MainTitle>
        </TopBanner>
        <GreenBanner>
          <CucumberIcon src={cucumberpng} alt="오이" />
        </GreenBanner>
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
`;

const TopBanner = styled.div`
  width: 100%;
  background-color: #004225;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const MainTitle = styled.h1`
  color: #ffffff;
  margin: 0;
  font-size: 24px;
`;

const GreenBanner = styled.div`
  width: 100%;
  background-color: #1e8c48;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

const CucumberIcon = styled.img`
  width: 30px;
  height: auto;
  margin-right: 8px;
`;

const TeamInfo = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const TeamTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
`;

const RoleText = styled.div`
  font-size: 16px;
  margin: 4px 0;
`;
