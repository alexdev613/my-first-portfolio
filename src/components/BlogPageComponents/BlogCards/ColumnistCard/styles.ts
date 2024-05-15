import styled from "styled-components";

export const Container = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  min-height: 96px;
  min-width: 240px;
  margin-bottom: 22px;
  line-height: 0;
  background-color: whitesmoke;
  border: 1px solid lightgrey;

  :hover {
    background-color: #eee;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxImage = styled.div`
  box-sizing: border-box;
  float: left;
  margin-right: 8px;
  border: 1px solid lightgrey;
  box-sizing: border-box;
`;

export const ImageCharacter = styled.img`
  width: 96px;
  height: 96px;
`;

export const BoxInfo = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-width: 240px;
  padding-right: 8px;
`;

export const ColumnistsName = styled.h4`
  display: block;
  margin-block-start: 0.8em;
  margin-block-end: 0.8em;
  color: black;
  line-height: 0;

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export const Subject = styled.p`
  color: darkslategray;
  font-family: sans-serif;
  font-size: 16px;
  text-align: justify;
  line-height: 22px;

  @media (max-width: 300px) {
    font-size: 14px;
    text-align: inherit;
    
  }
`;