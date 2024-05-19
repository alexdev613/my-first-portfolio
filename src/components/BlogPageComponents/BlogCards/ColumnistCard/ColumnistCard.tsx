import React from "react";
import {
  Container,
  Content,
  BoxImage,
  ImageCharacter,
  BoxInfo,
  ColumnistsName,
  Subject
} from "./styles";
import { Link } from "react-router-dom";

interface ColumnistCardProps {
  imageUrl: string;
  author: string;
  text: string;
  hrefAuthor: string;
  hrefSubject: string;
}

const ColumnistCard: React.FC<ColumnistCardProps> = (
  {
    imageUrl,
    author,
    text,
    hrefAuthor,
    hrefSubject
  }
) => {

  return (
    <Container>
      <Content>
        <BoxInfo>
          <BoxImage>
            <Link to={hrefAuthor}>
              <ImageCharacter src={imageUrl} alt="imagem do coluna" />
            </Link>
          </BoxImage>
          <ColumnistsName>
            <Link to={hrefAuthor}>
              {author}
            </Link>
          </ColumnistsName>
          <Subject>
            <Link to={hrefSubject}>
              {text}
            </Link>
          </Subject>
        </BoxInfo>
      </Content>
    </Container>
  );
};

export default ColumnistCard;
