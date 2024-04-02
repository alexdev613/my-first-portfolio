import styled from "styled-components";

export const BodyContainer = styled.body`
    background-color: #232323;
    color: #fff;
    min-height: 80vh;
`;

export const ProvisoryContainer = styled.div`
    padding: 1.875rem;
`;

export const MiniCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1.875rem;
    column-gap: 1.5rem;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
`;