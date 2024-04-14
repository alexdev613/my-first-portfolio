import styled from "styled-components";

export const ResponsiveImage = styled.img`
  width: 60%;
  max-width: 680px;
  height: auto;
  display: block;
  min-width: 240px;
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 95%;
  }
`;

export const MainContentWrapper = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  background-color: whitesmoke;
  padding-bottom: 1rem;
  margin-bottom: 20px;
  p {
    font-size: 14px;
    line-height: 1.5rem;
    text-align: justify;
    @media (max-width: 352px) {
      font-size: 11px;
    }
  }
`;

export const TitlePost = styled.h2`
  color: #004aad;
  font-size: 24px;
  line-height: auto;
  font-weight: 900;
  padding-top: 25px;
  margin-bottom: 0px;
  @media (max-width: 352px) {
    font-size: 20px;
    font-weight: 900;
    padding-top: 16px;
  }
`;

export const DatePost = styled.span`
  font-size: 0.8em;
  font-weight: 600;
  margin-left: 2px;
  display: block;
  @media (max-width: 352px) {
    font-size: 0.64rem;
  }
`;