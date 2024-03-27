import styled from "styled-components";

interface FAQItemContainerProps {
    isOpen?: boolean;
}

export const FAQItemContainer = styled.details<FAQItemContainerProps>`
    margin: 10px 0;
    padding: 5px;
    border: 1px solid black;
    border-radius: 0.375rem;
    width: 95%;
    min-height: ${({ isOpen }) => (isOpen ? "auto" : "1.8rem")};
    overflow: hidden; // evita que o conteúdo vaze pra fora caso o componente fique diminua muito!
    background-color: whitesmoke;

    &[open] {
        min-height: auto; /* Quando aberto, a altura é ajustada automaticamente */
    }
`;

export const FAQQuestion = styled.summary`
    display: flex;
    justify-content: space-between;
    color: navy;
    cursor: pointer;
    font-weight: bold;
    list-style: none; // esconde a seta padrão
    padding-left: 1rem;

    // Colocando as setas desejadas!
    &:after {
        content: "\\2B9F";
        color: black;
        font-size: 1.5rem;
        font-weight: bold;
        padding-right: 1rem;
    }

    ${FAQItemContainer}[open] &::after {
        content: "\\2B9D";
    }
`;

export const FAQAnswer = styled.p`
    margin: 10px 32px;
    color: black;
    font-weight: 500;
`;


// import styled from "styled-components";

// export const FAQItemContainer = styled.details`
//     margin: 10px 0;
//     padding: 5px;
//     border: 1px solid black;
//     border-radius: 0.375rem;
//     width: 95%;
//     min-height: 2.8rem;
//     background-color: whitesmoke;
// `;

// export const FAQQuestion = styled.summary`
//     color: navy;
//     cursor: pointer;
//     font-weight: bold;
// `;

// export const FAQAnswer = styled.p`
//     margin: 10px 32px;
//     color: black;
//     font-weight: 500;
// `;
