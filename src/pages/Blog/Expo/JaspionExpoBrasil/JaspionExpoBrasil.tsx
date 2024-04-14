import Layout from "../../../../components/BlogPageComponents/Layout/Layout";
import AdvertiseBannerComponent from "../../../../components/BlogPageComponents/AdvertiseBannerComponent/AdvertiseBannerComponent";
import YouTubeVideo from "../../../../components/BlogPageComponents/YouTubeVideo/YouTubeVideo";
import {
  MainContentWrapper,
  TitlePost,
  DatePost,
  ResponsiveImage
} from "./styles";

import anuncie from '../../../../assets/images/banner-anuncie-770x198.png';
import jaspionexpobrasil from '../../../../assets/images/pavilhao-japones-exposicao-Jaspion.jpg.webp';
import jaspionGuiaDefinitivo from '../../../../assets/images/jaspion-o-guia-definitivo.webp';

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
