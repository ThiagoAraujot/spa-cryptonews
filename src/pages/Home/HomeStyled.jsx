import styled from "styled-components";

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 1rem auto;
  width: 85%;
`;

export const HomeHeader = styled.section`
  width: 85%;
  display: flex;
  margin: 1rem auto;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 20px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
