import styled from "styled-components"

export const BiographyButton = styled.button`
    background-color: #ddd;
    border: none;
    border-radius: 8px;
    padding: 15px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: black;
    box-shadow: 8px 8px 12px rgba(0, 52, 52, 0.9);
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:active {
        transform: scale(0.84);
    }

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #fff;
    }
`;
