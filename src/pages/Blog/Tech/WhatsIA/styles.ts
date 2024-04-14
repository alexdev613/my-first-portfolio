import styled from "styled-components";

export const ResponsiveImage = styled.img`
  width: 100%; /* Largura da imagem em relação ao contêiner pai */
  max-width: 700px; /* Largura máxima da imagem */
  height: auto; /* Altura automática para manter a proporção */
  display: block; /* Para garantir que a margem automática funcione corretamente */
`;

export const SubImage = styled(ResponsiveImage)`
  max-width: 490px;
`;

export const MainContentWrapper = styled.div`
  padding: 0 20px; // Adiciona espaçamento interno para o conteúdo
  box-sizing: border-box; // Inclui padding e border no tamanho total do elemento
  background-color: whitesmoke;
  padding-bottom: 1rem;
  margin-bottom: 20px;

  p {
    font-size: 14px; /* Tamanho de fonte relativo */
    line-height: 1.5rem; /* Espaçamento entre linhas relativo */
    text-align: justify;

    @media (max-width: 352px) {
      font-size: 11px;
    }
  }
`;

export const TitlePost = styled.h2`
  color: #004AAD;
  font-size: 24px;
  line-height: auto;
  font-weight: 900;
  padding-top: 25px;
  margin-bottom: 0px;
  
  @media (max-width: 352px) {
    font-size: 20px;
    font-weight: 900;
    padding-top: 16px;
  }
`;

export const DatePost = styled.span`
  /* line-height: 0px; */
  font-size: 0.8em;
  font-weight: 600;
  margin-left: 2px;
  display: block;

  @media (max-width: 352px) {
    font-size: 0.64rem;
  }
`;
