import styled from "styled-components";

export const FAQItemContainer = styled.details`
    margin: 10px 0;
    padding: 5px;
    border: 1px solid black;
    border-radius: 0.375rem;
    width: 95%;
    min-height: 2.8rem;
    background-color: whitesmoke;
`;

export const FAQQuestion = styled.summary`
    color: navy;
    cursor: pointer;
    font-weight: bold;
`;

export const FAQAnswer = styled.p`
    margin: 10px 32px;
    color: black;
    font-weight: 500;
`;
