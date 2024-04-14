import styled from "styled-components";

export const WideCardContainer = styled.div`
    width: 94%;
    max-width: 1200px;
    min-width: 280px;
    border: 1px solid #454545;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 50px;
    background-color: #1f1f1f;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: auto 1fr auto; /* Ajuste da altura das linhas */
    cursor: pointer;
    transition: filter 0.4s;

    &:hover {
        filter: brightness(1.2) saturate(1.05) contrast(1.1);
    }

    @media (max-width: 680px) {
        grid-template-columns: 50% 50%;
    }

    @media (max-width: 580px) {
        grid-template-columns: 55% 45%;
    }

    @media (max-width: 480px) {
        grid-template-columns: 48% 52%;
    }

    @media (max-width: 420px) {
        grid-template-columns: 40% 60%;
    }
`;

export const BoxImage = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    border-right: 1px solid #454545;
    /* background-color: black; */
    background-image: url("src/assets/images/stars.gif");
    background-size: cover;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;

    @media (max-width: 420px) {
        height: 45%;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-rows: min-content auto 10%;
`;

export const Title = styled.h2`
    padding: 5px 20px;
    font-size: 1.5rem;
    margin-bottom: 5px;

    @media (max-width: 900px) {
        font-size: 1.25rem;
    }

    @media (max-width: 780px) {
        font-size: 1.15rem;
        padding: 5px 15px;
    }

    @media (max-width: 720px) {
        padding: 5px 10px;
        font-size: 1.1rem;
    }

    @media (max-width: 580px) {
        font-size: 0.825rem;
        padding: 5px 8px;
    }
`;

export const Description = styled.p`
    padding: 5px 20px;
    overflow: hidden;
    font-size: 1.25rem;
    text-align: justify;
    color: #888;
    margin-bottom: 15px; /* Reduzi a margem inferior */
    border-bottom: 1px solid #454545;
    padding: 5px 20px;

    &:hover {
        filter: brightness(20);
    }

    @media (max-width: 900px) {
        font-size: 0.925rem;
    }

    @media (max-width: 780px) {
        font-size: 0.825rem;
        padding: 5px 15px;
    }

    @media (max-width: 680px) {
        padding: 5px 10px;
        font-size: 0.75rem;
    }

    @media (max-width: 580px) {
        font-size: 0.725rem;
    }
`;

export const BoxInfo = styled.div`
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; /* Alinha BoxInfo na parte inferior */

    @media (max-width: 580px) {
        padding: 5px 5px;
    }
`;

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    color: #999;
    font-weight: 600;
    font-size: 12px;
    max-width: 180px;

    @media (max-width: 580px) {
        font-size: 10px;
    }
`;

export const DatePublished = styled.div`
    color: #999;
    font-weight: 600;
    font-size: 12px;

    @media (max-width: 580px) {
        font-size: 10px;
    }
`;
