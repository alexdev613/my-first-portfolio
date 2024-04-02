import styled from "styled-components";
import Layout from "../../../components/BlogPageComponents/Layout/Layout";
import AdvertiseBannerComponent from "../../../components/BlogPageComponents/AdvertiseBannerComponent/AdvertiseBannerComponent";
import YouTubeVideo from "../../../components/BlogPageComponents/YouTubeVideo/YouTubeVideo";

import anuncie from '../../../assets/images/banner-anuncie-770x198.png';
import jaspionexpobrasil from '../../../assets/images/pavilhao-japones-exposicao-Jaspion.jpg.webp';
import jaspionGuiaDefinitivo from '../../../assets/images/jaspion-o-guia-definitivo.webp';

const ResponsiveImage = styled.img`
  width: 100%; /* Largura da imagem em relação ao contêiner pai */
  max-width: 700px; /* Largura máxima da imagem */
  height: auto; /* Altura automática para manter a proporção */
  display: block; /* Para garantir que a margem automática funcione corretamente */
`;

const MainContentWrapper = styled.div`
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

const TitlePost = styled.h2`
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

const DatePost = styled.span`
  /* line-height: 0px; */
  font-size: 0.8em;
  font-weight: 600;
  margin-left: 2px;
  display: block;

  @media (max-width: 352px) {
    font-size: 0.64rem;
  }
`;

const JaspionExpoBrasil = () => {
    return (
        <Layout>
          <AdvertiseBannerComponent src={anuncie} />
          <MainContentWrapper>
            <TitlePost>JASPION EXPO BRASIL NO PAVILHÃO JAPONÊS</TitlePost>
            <DatePost>20 de Março de 2024</DatePost>
            
            <br />
            <p>
                "Jaspion" é uma série de televisão japonesa do gênero tokusatsu, criada por Shotaro Ishinomori e produzida pela Toei Company. A série foi ao ar no Japão entre 1985 e 1986 e alcançou grande popularidade não só no Japão, mas também em muitos outros países, incluindo o Brasil.
            </p>

            <p>
                A exposição de um dos heróis japoneses mais famosos no Brasil chega ao Pavilhão Japonês!
            </p>

            <p>
                Nos dias <b>22, 23, 24, 28, 29, 30 e 31 de março</b> o Pavilhão Japonês, em parceria com a Editora Mozu e a Sato Company, produz uma exposição especial em comemoração ao lançamento do Livro <b>“Jaspion – Guia Visual Definitivo”</b>.
            </p>
            <br />

            <div style={{display:'flex', justifyContent: 'center'}}>
                <ResponsiveImage src={jaspionexpobrasil} alt="" />
            </div>
            
            <br />
            <p>
                A série é lembrada por suas cenas de ação empolgantes, efeitos especiais impressionantes (para a época) e mensagens positivas sobre coragem, amizade e justiça. No Brasil, "Jaspion" se tornou um fenômeno cultural, sendo exibido na TV aberta durante os anos 80 e 90 e conquistando uma legião de fãs, que ainda hoje reverenciam o herói espacial.
            </p>
            <br />
            <div style={{display:'flex', justifyContent: 'center'}}>
                <ResponsiveImage src={jaspionGuiaDefinitivo} alt="" />
            </div>
            <br />
            <p>
                Na exposição os visitantes poderão encontrar itens de colecionador relacionados ao universo Jaspion; Palestras com os responsáveis pelo livro e artistas ligados ao tema; um Pocket Show com o cantor Ricardo Cruz, interpretando os temas do seriado do herói de metal e exibições de episódios para relembrar o sucesso da série nos anos 90.
            </p>

            <p>
                Quem se interessar em adquirir o guia visual definitivo, o livro estará disponível para venda nos dias do evento.   
            </p>

            <br />
            <div style={{border: 'solid 1px black', marginBottom: '1rem'}} />
            <h4>JASPION EXPO BRASIL</h4>
            <span><b>Data:</b> 22 a 24 e 28 a 31 de março de 2024</span>
            <br />
            <span><b>Local:</b> Pavilhão Japonês no Parque do Ibirapuera em SP (ao lado do Planetário) – Av. Pedro Alvares Cabral, S/N</span>
            <br />
            <span><b>Ingressos</b> 5ª feira - entrada gratuita, 6ª feira a domingo - Inteira: R$ 15,00 / Meia: R$ 7,00*</span>
            <p>* Desconto dado a estudantes, professores e idosos acima de 60anos.</p>

          </MainContentWrapper>

          <MainContentWrapper>
          <TitlePost>Você também poderá se interessar: Trailer do Jaspion:</TitlePost>

          <br /><br />
          <YouTubeVideo videoId={"3sqq-tsEYzc"} />
          <br /><br />
          </MainContentWrapper>
        </Layout>
    )
}

export default JaspionExpoBrasil;
