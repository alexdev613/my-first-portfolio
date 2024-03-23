import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: 420px;
    min-width: 200px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    cursor: pointer;
    transition: filter 0.4s;

    &:hover {
        filter: brightness(1.2) saturate(1.05) contrast(1.1) ;
    }

    @media (max-width: 900px) {
        display: flex;
        max-height: 400px;
        max-width: max-content;

        @media (max-width: 420px) {
            flex-direction: column;
        }
    }
`;

export const BoxImage = styled.div`
    width: 100%;
    overflow: hidden;

    @media (max-width: 900px) {
        display: flex;
        justify-content: center;
        width: 40%;
        max-height: none;

        @media (max-width: 420px) {
            width: 100%;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const Content = styled.div`
    padding: 0 20px;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(20);
    }

    @media (max-width: 900px) {
        width: 60%;
        padding: 0 16px;

        @media (max-width: 420px) {
            width: 100%;
        }
    }
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 0.875rem;
    text-align: justify;
    color: #777;
    margin-bottom: 16px;
`;

export const BoxInfo = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Author = styled.div`
    color: #999;
    font-weight: 600;
    font-size: 14px;
    max-width: 180px;
`;

export const DatePublished = styled.div`
    color: #999;
    font-weight: 600;
    font-size: 14px;
`;
