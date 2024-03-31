import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
  position: relative;
  padding-bottom: 50%;
  height: auto;
  max-width: 560px; /* Defina a largura máxima do vídeo */
  margin: 0px auto; /* Centralize o vídeo horizontalmente */

  @media (max-width: 600px) {
    max-width: 100%; /* Altera a largura máxima para preencher a tela */
    height: 100%;
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;