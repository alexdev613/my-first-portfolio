import React from "react";
import { Author, BoxImage, BoxInfo, CardContainer, Content, DatePublished, Description, Image, Title } from "./styles"

interface MiniCardProps {
    imageUrl: string;
    title: string;
    description: string;
    author: string;
    date: string;
}

const MiniCard: React.FC<MiniCardProps> = ({ imageUrl, title, description, author, date }) => {
    return (
        <CardContainer>
            <BoxImage>
                <Image src={imageUrl} alt={title} />
            </BoxImage>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <BoxInfo style={{ bottom: "100px" }}>
                    <Author>{author}</Author>
                    <DatePublished>{date}</DatePublished>
                </BoxInfo>
            </Content>
        </CardContainer>
    )
}

export default MiniCard;