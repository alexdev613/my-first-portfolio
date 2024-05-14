import React from "react";
import {
  Container,
  Content,
  ImageCharacter,
  BoxInfo,
  ColumnistsName,
  Subject
} from "./styles";

interface ColumnistCardProps {
  imageUrl: string;
  author: string;
  text: string;
}

const ColumnistCard: React.FC<ColumnistCardProps> = ({ imageUrl, author, text }) => {
  return (
    <Container>
      <Content>
        <ImageCharacter src={imageUrl} alt="imagem do coluna" />
        <BoxInfo>
          <ColumnistsName>{author}</ColumnistsName>
          <Subject>{text}</Subject>
        </BoxInfo>
      </Content>
    </Container>
  );
};

export default ColumnistCard;
