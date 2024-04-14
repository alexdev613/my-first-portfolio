import styled from "styled-components";

export const MicroCardContainer = styled.div`
  box-sizing: border-box;
  width: 226px; /* Largura fixa do card */
  height: 250px;
  margin: 8px;
  padding: 2px;
  display: grid;
  border: 1px solid #ddd;
  grid-template-rows: 54% auto 40%;
  gap: 0px; /* Espaçamento entre as linhas */
  overflow: hidden;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2) saturate(1.05) contrast(1.1) ;
    border: 1px #aaa solid;
  }

  @media (max-width: 740px) {
    width: 95%;
    height: 136px;
    grid-template-columns: 226px auto;
  }

  @media (max-width: 490px) {
    display: flex;
    flex-direction: column;
    width: 226px;
    height: 250px;
    background-color: initial; /* Pode remover o background-color aqui */
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const Title = styled.h4`
  font-family: monospace;
  font-size: 13.5px;
  margin: 0; /* Remova a margem padrão */
  text-transform: uppercase;
  color: ${props => props.color};
`;

export const Text = styled.p`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  font-weight: 600;
  margin: 4px 0; /* Ajuste a margem para cima e para baixo */
  text-align: justify;
`;
