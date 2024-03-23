import styled from "styled-components";

export const WideCardContainer = styled.div`
    width: 95%;
    min-width: 613px;
    border: 1px solid #454545;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: auto 1fr auto; /* Ajuste da altura das linhas */
    cursor: pointer;
    transition: filter 0.4s;

    &:hover {
        filter: brightness(1.2) saturate(1.05) contrast(1.1);
    }
`;

export const BoxImage = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: black;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Content = styled.div`
    display: grid;
    grid-template-rows: min-content auto 10%;
`;

export const Title = styled.h2`
    padding: 5px 20px;
    font-size: 1.875rem;
    margin-bottom: 5px;
`;

export const Description = styled.p`
    padding: 5px 20px;
    overflow: hidden;
    font-size: 1.25rem;
    text-align: justify;
    color: #888;
    margin-bottom: 15px; /* Reduzi a margem inferior */
    border-bottom: 1px solid #454545;

    &:hover {
        filter: brightness(20);
    }
`;

export const BoxInfo = styled.div`
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; /* Alinha BoxInfo na parte inferior */
`;

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    color: #999;
    font-weight: 600;
    font-size: 12px;
    max-width: 180px;
`;

export const DatePublished = styled.div`
    color: #999;
    font-weight: 600;
    font-size: 12px;
`;
