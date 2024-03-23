import styled from "styled-components";

export const BodyContainer = styled.body`
    padding: 1.875rem;
    background-color: #232323;
    color: #fff;
    min-height: 80vh;
`;

export const MiniCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
    column-gap: 1.5rem;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
`;