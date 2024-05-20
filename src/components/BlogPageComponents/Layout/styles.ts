/*----------------------------------- Div Mãe engloba tudo! -------------------------------------*/

import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ccd8d6;
`;

/*----------------------------------- Div Mãe engloba tudo! -------------------------------------*/

/*--------------------------------- Engloba Principal e Sidebar ---------------------------------*/

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  max-width: 1200px; /* Largura máxima do conteúdo principal */
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/*----------------------- Div con children para trabalhar na página em si -----------------------*/

export const MainContent = styled.div`
  margin: auto;

  @media (max-width: 900px) {
    width: 100%; /* Ocupa a largura total em telas menores */
  }
`;

/*----------------------- Div con childrn para trabalhar na página em si! -----------------------*/

/*------------------------------------- Bololô do Sidebar ---------------------------------------*/

export const SidebarWrapper = styled.aside`
  display: block;
  max-width: 250px; /* Largura máxima da sidebar */
  background-color: transparent;
  margin: 1.25rem 0;
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    display: none;
    gap: 10px;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .conteudo-lateral {
    margin-bottom: 1rem;
  }

  .conteudo-lateral h3 {
    padding: 5px;
    font-weight: 900;
    background-color: #004AAD;
    color: white;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .conteudo-lateral h4 {
    padding-left: 8px;
    font-size: 0.875em;
    line-height: normal;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  p {
    margin: 8px;
    color: black;
    font-size: 0.815em;
    font-weight: 500;
    text-align: justify;
  }

  .post-destaque {
    background-color: whitesmoke;
    border-bottom: 2px solid lightgrey;
    padding: 5px;

    a {
      font-size: 14px;
      font-weight: 900;
      margin-left: 8px;
      color: #004AAD;
      text-decoration: none;
    }
  }

  .post-destaque:last-child {
    border: none;
  }

  .categories {
    background-color: whitesmoke;
    padding: 5px;
  }

  .categories a {
    display: block;
    font-size: 14px;
    font-weight: 900;
    margin-left: 8px;
    padding-bottom: 8px;
    color: #004AAD;
    text-decoration: none;
  }
  
  .socials-media {
    background-color: white;
    padding: 5px;
    
    a {
      font-size: 14px;
      font-weight: 900;
      margin-left: 8px;
      color: #004AAD;
      text-decoration: none;
    }
  }

  .columnists {
    background-color: #FFF;
    font-family: 'Roboto';

    h3 {
      padding-top: 26px;
      padding-left: 10px;
      line-height: 0px;
    }
  }
`;

/*------------------------------------- Parada do Sidebar ---------------------------------------*/

/*-------------------------------------- Div do Carousel ----------------------------------------*/

export const CarouselContainer = styled.div`
  display: flex;
  border: 1px dotted black;
  max-width: 250px;
  max-height: 230px;
  overflow: hidden;
  background-color: whitesmoke;
  position: sticky;
  top: 1rem; /* Faz com que o componente fique no topo do viewport a 1rem de distância ;) */
  z-index: 1; /* Certifica-se de que o componente fique sobre o conteúdo ao fazer scroll */
`;

/*-------------------------------------- Div do Carousel ----------------------------------------*/

/*---------------------------------------- Anuncie Aqui! ----------------------------------------*/

export const AdvertiseHere = styled.div`
    display: flex;
    position: relative;
    border: 1px solid red;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }

    .texto {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
`;

/*---------------------------------------- Anuncie Aqui! ----------------------------------------*/

/*---------------------------------------- Redes Sociais ----------------------------------------*/

export const SocialsList = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    row-gap: 10px;
    justify-content: space-evenly;
`;

export const IconLink = styled.a`
    align-items: center;
    display: flex;
    justify-content: center;
    text-decoration: none; /* Remova a decoração de texto */

    span {
      font-size: 1rem;
      margin-left: 0.5rem;
      color: #004AAD;
    }
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 5px;

  &:hover {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export const RowLink = styled.a`
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
  height: 40px;
  text-decoration: none; /* Remova a decoração de texto */

  &:hover {
    background-color: lightgrey;
    
    ${Icon} {
      width: 40px;
      height: 40px;
    } // é preciso declarar Icon primeiro para funcionar!
  }
`;

/*---------------------------------------- Redes Sociais ----------------------------------------*/

/*--------------------------------------- Componente Novo ---------------------------------------*/

export const ComponenteNovo = styled.section`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 30px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 900px) {
    display: none;
  }

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

/*--------------------------------------- Componente Novo ---------------------------------------*/

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 16px 8px;
  margin-bottom: 16px;

  @media (min-width: 900px) {
    display: none;
  }

  h2 {
    line-height: 10px;
  }
`;

/*------------------------------------------- Footer --------------------------------------------*/

export const FooterSpace = styled.footer`
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
`;
/*------------------------------------------- Footer --------------------------------------------*/
