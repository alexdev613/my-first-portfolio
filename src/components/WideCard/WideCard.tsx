import { Author, BoxImage, BoxInfo, Content, DatePublished, Description, Image, Title, WideCardContainer } from "./styles";
import React from "react";

interface WideCardProps {
    imageUrl: string;
    title: string;
    description: string;
    author: string;
    date: string;
    onClick: () => void;
}

const WideCard: React.FC<WideCardProps> = ({ imageUrl, title, description, author, date, onClick }) => {
    return (
        <WideCardContainer onClick={onClick}>
            <BoxImage>
                <Image src={imageUrl} alt={imageUrl}/>
            </BoxImage>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <BoxInfo>
                    <Author>{author}</Author>
                    <DatePublished>{date}</DatePublished>
                </BoxInfo>
            </Content>
        </WideCardContainer>
    )
}

export default WideCard;
