import React from "react";
import {
    MicroCardContainer,
    CardImage,
    ContentContainer,
    Title,
    Text
} from "./styles";

interface MicroCardProps {
  imageUrl: string;
  title: string;
  text: string;
  titleColor: string;
}

const MicroCard: React.FC<MicroCardProps> = ({ imageUrl, title, text, titleColor }) => {
  return (
    <MicroCardContainer>
      <CardImage src={imageUrl} alt="Imagem do card" />
      <ContentContainer>
        <Title color={titleColor}>{title}</Title>
        <Text>{text}</Text>
      </ContentContainer>
    </MicroCardContainer>
  );
};

export default MicroCard;
