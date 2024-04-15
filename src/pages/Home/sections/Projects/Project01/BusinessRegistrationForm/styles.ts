import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 52rem;
    padding: 1.875rem;
    background-color: whitesmoke;
    border: 1px solid #bdbdbd;
    border-radius: 1.875rem;

    @media (max-width: 900px) {
        width: 30rem;
    }
`;

export const DivContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.875rem;
    @media (max-width: 900px) {
        width: 26.125rem;
        flex-direction: column;
        gap: 0rem;
    }
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.275rem;
    margin-left: 0.325rem;
    color: #666;
`;

export const Input = styled.input`
    padding: 0rem;
    border-radius: 1.125rem;
    border: 1px solid #007A6C;
    box-shadow: 0px 0px 5px rgba(0, 0, 0,0.1);
    width: 23.125rem;
    height: 2.75rem;
    align-items: center;
    text-indent: 20px;

    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &.spaced {
        letter-spacing: 4px;
    }

    &::placeholder {
        letter-spacing: 0;
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const ExclusiveRowBox = styled.div`
    display: flex;
    flex-direction: row;

    .Phone {
        width: 17.275rem;
        @media (max-width: 900px) {
            width: 20.275rem;
        }
    }

    .DDI {
        width: 4.875rem;
        margin-right: 1rem;
    }

    .UF {
        width: 7.3125rem;
        margin-right: 1rem;
    }

    .City {
        width: 14.8rem;
        @media (max-width: 900px){
            width: 17.8rem ;
        }
    }
`;

export const MessageError = styled.p`
    position: absolute; // usei absolute para poder usar bottom e não quebrar o layout aumentando a altura do formulário era importante pra mim.
    bottom: 0px;
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 1.125rem;
    margin-left: 0.75rem;
    color: red;
    width: max-content; // permite que o parágrafo extravase o box
    
    &.pEmail {
        bottom: 1.25rem;

        @media (max-width: 900px) {
            bottom: 0.2rem;
        }
    }

    &.pDdi {
        bottom: 0.25rem;
        left: -0.5rem;
    }

    &.pPhone {
        bottom: 0.2rem;
    }

    &.pCep {
        bottom: 1.25rem;
    }

    &.pStreet {
        bottom: 1.25rem;
        @media (max-width: 900px) {
            bottom: 0rem;
        }
    }

    &.pNumber {
        bottom: 1.25rem;
        left: -0.5rem;

        @media (max-width: 900px) {
            bottom: 0rem;
        }
    }
`;

export const BoxForm = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 1.875rem;
    min-height: 5rem; /* Defina uma altura mínima para garantir consistência */

    span {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.125rem;
        margin-top: 0.25rem;
        color: #007a6c;
        text-decoration: underline;

    }

    select {
        padding: 0.4rem;
        border-radius: 18px;
        border: 1px solid #007a6c;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        width: 27rem;
        height: 2.75rem;
        border-radius: 1.125rem;
    }

    option {
        font-size: 1.125rem;
    }

    .linkCep > a{
        color: inherit;
        margin-left: 70%;
    }

    .street {
        width: 15.825rem;
        margin-right: 1rem;
        @media (max-width: 900px) {
            width: 18.775rem;
        }
    }

    .number {
        width: 6.35rem;
    }

    .complement {
        width: 48.15rem;
        @media (max-width: 900px) {
        width: 26.125rem;
    }
    }
`;

export const BoxButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-top: 1.5rem;
    gap: 1rem;

    @media (max-width: 900px) {
        justify-content: center;
        padding-bottom: 1.5rem;
    }
`;

export const CancelButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12.5rem;
    height: 3.75rem;
    font-weight: 600;
    color: #007a6c;
    border: 1px solid #007a6c;
    border-radius: 2.5rem;
    background-color: whitesmoke;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:active {
        transform: scale(0.72);
    }

    &:hover {
        background-color: #007a6c;
        color: white;
    }

    @media (max-width: 900px) {
        height: 2.75rem;
        width: 9.5rem;
    }
`;

export const SaveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12.5rem;
    height: 3.75rem;
    font-weight: 600;
    color: white;
    border: 1px solid #007a6c;
    border-radius: 2.5rem;
    background-color: #007a6c;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:active {
        transform: scale(0.72);
    }

    &:hover {
        background-color: white;
        color: #007a6c;
    }

    @media (max-width: 900px) {
        height: 2.75rem;
        width: 9.5rem;
    }
`;
