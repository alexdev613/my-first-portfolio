import styled from "styled-components";

export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.875rem;
    padding-top: 6em;
    background-color: beige;
`;

export const FAQContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0rem 1.875rem 1.875rem 1.875rem;
    background-color: #343434;
    margin-bottom: 3rem;
    `;

export const BoxTitle = styled.div`
    width: 95%;

    h1 {
        color: white;
        font-size: 2.25rem;
        font-weight: bold;
        height: 1.25rem;
    }
    
    h2 {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        height: 1.5rem;
        margin-bottom: 2.25rem;
    }
`;
