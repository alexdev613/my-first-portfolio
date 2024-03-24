import React from "react";
import { Author, BoxImage, BoxInfo, CardContainer, Content, DatePublished, Description, Image, Title } from "./styles"

interface MiniCardProps {
    imageUrl: string;
    title: string;
    description: string;
    author: string;
    date: string;
    onClick: () => void;
}

const MiniCard: React.FC<MiniCardProps> = ({ imageUrl, title, description, author, date, onClick }) => {
    return (
        <CardContainer onClick={onClick}>
            <BoxImage>
                <Image src={imageUrl} alt={title} />
            </BoxImage>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <BoxInfo>
                    <Author>{author}</Author>
                    <DatePublished>{date}</DatePublished>
                </BoxInfo>
            </Content>
        </CardContainer>
    )
}

export default MiniCard;