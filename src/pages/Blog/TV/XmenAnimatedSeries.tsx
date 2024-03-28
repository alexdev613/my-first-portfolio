// XmenAnimatedSeries.tsx

import Layout from "../../../components/BlogPageComponents/Layout/Layout";
import styled from 'styled-components';
import w from '../../../assets/images/wolverine97.jpg';

const ResponsiveImage = styled.img`
  width: 100%; /* Largura da imagem em relação ao contêiner pai */
  max-width: 700px; /* Largura máxima da imagem */
  height: auto; /* Altura automática para manter a proporção */
  display: block; /* Para garantir que a margem automática funcione corretamente */
`;

const ContentWrapper = styled.div`
  padding: 0 20px; /* Adiciona espaçamento interno para o conteúdo */
  box-sizing: border-box; // Inclui padding e border no tamanho total do elemento
`;

const Paragraph = styled.p`
  font-size: 1rem; /* Tamanho de fonte relativo */
  line-height: 1.5; /* Espaçamento entre linhas relativo */
  text-align: 4;
`;

const XmenAnimatedSeries = () => {
    return (
        <Layout>
          <ContentWrapper>
            <h1>Olá mundo616</h1>
            <Paragraph>
              feokpwokpefffwkd fopwekfpowekfpowek opfpewokfopkweopfkewpkfp owkfopwkpoefipiejfp
              ewmfpewmpfwe pfmewpmp mmpmpwevewpfm pewofmopewfopewpmfewpfewmp Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Tempore tenetur quod doloribus blanditiis
              at vero! Aut, optio tempore. Soluta a non amet architecto eligendi consectetur
              perspiciatis error alias fuga labore? 
            </Paragraph>
            <ResponsiveImage src={w} alt="" />
            <Paragraph>
              feokpwokpefffwkf opwekfpowekfpowekopfpewokfo pkweopfkewpk fpeowkfopwkpoe fipiejfp
              ewmfpewmpfwepfmewpmp mmpmpwevewp fmpewofmopewfopewpm fewpfewmp Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Tempore tenetur quod doloribus blanditiis
              at vero! Aut, optio tempore. Soluta a non amet architecto eligendi consectetur
              perspiciatis error alias fuga labore? 
            </Paragraph>
            <ResponsiveImage src={w} alt="" />
          </ContentWrapper>
        </Layout>
    );
};

export default XmenAnimatedSeries;
