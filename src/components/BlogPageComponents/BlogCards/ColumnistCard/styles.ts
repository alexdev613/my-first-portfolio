import styled from "styled-components";

export const Container = styled.div`
  display: block;
  box-sizing: border-box;
  unicode-bidi: isolate;
  margin: 0;
  padding: 0;
  max-width: 500px;
  min-height: 96px;
  margin-bottom: 22px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxImage = styled.div`
  box-sizing: border-box;
  float: left;
  margin-right: 8px;
  display: block;
  unicode-bidi: isolate;
`;

export const ImageCharacter = styled.img`
  width: 96px;
  height: 96px;
`;

export const BoxInfo = styled.div`
  box-sizing: border-box;
  display: block;
  unicode-bidi: isolate;
  min-width: 250px;
  min-height: 96px;
  border: 1px solid orange;
`;

export const ColumnistsName = styled.h4`
  display: block;
  margin-block-start: 0.8em;
  margin-block-end: 0.8em;
  color: black;
  line-height: 0;
`;

export const Subject = styled.p`
  color: darkslategray;
  font-family: sans-serif
`;