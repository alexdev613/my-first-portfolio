import Layout from "../../../components/BlogPageComponents/Layout/Layout";
import styled from 'styled-components';
import AdvertiseBannerComponent from "../../../components/BlogPageComponents/AdvertiseBannerComponent/AdvertiseBannerComponent";
import YouTubeVideo from "../../../components/BlogPageComponents/YouTubeVideo/YouTubeVideo";

import anuncie from '../../../assets/images/banner-anuncie-770x198.png';
import w from '../../../assets/images/wolverine97.jpg';
import xmen from '../../../assets/images/x-men97.jpg';
import magneto from '../../../assets/images/magneto-x-men97.jpg';

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

const XmenAnimatedSeries = () => {
    return (
        <Layout>
          <AdvertiseBannerComponent src={anuncie} />
          <MainContentWrapper>
            <TitlePost>X-MEN 97' série animada</TitlePost>
            <DatePost>29 de Março de 2024</DatePost>
            <p>
            Em meio a uma enxurrada de novidades no universo dos super-heróis, os fãs dos X-Men foram presenteados com uma emocionante surpresa: a estreia da aguardada série animada "X-Men '97". Para aqueles que cresceram nos anos 90, essa nova produção é mais do que uma simples continuação; é uma viagem nostálgica de volta à infância, repleta de memórias afetivas e aventuras inesquecíveis.
            </p>

            <ResponsiveImage src={xmen} alt="" />
            
            <p>
            "X-Men '97" é uma continuação direta da aclamada série animada "X-Men '92", que cativou uma geração inteira com suas cinco temporadas de emocionantes batalhas e complexas tramas envolvendo os mutantes mais icônicos da Marvel. Agora, os fãs adultos têm a oportunidade de reviver esses momentos emocionantes e introduzir uma nova geração aos heróis que moldaram sua infância.
            </p>

            <p>
            Com um elenco repleto de personagens amados, como Ciclope, Jean Grey, Wolverine, Fera, Vampira, Gambit, Jubileu e Morfo, "X-Men '97" promete recontar as aventuras dos heróis após os eventos dramáticos da série anterior. Após um ataque que deixou o Professor Charles Xavier gravemente ferido, ele é forçado a partir para o Planeta Shi'ar com Lilandra, em busca de tecnologia avançada para salvar sua vida.
            </p>

            <p>
            Entretanto, antes de partir, o Professor Xavier deixa um legado para seus X-Men e um presente para seu amigo Magneto: um testamento que concede a Magneto o controle sobre a Mansão Charles Xavier. Com novos desafios pela frente e uma herança a ser protegida, os X-Men se preparam para enfrentar mais uma vez as ameaças que espreitam o mundo dos mutantes.
            </p>

            <ResponsiveImage src={magneto} alt="" />

            <p>
              No emocionante primeiro episódio de "X-Men '97", somos apresentados a um novo e intrigante personagem: Roberto da Costa, um brasileiro mutante e milionário atormentado pelo medo de suas próprias habilidades. Sequestrado pelo temido grupo terrorista anti-mutante "Amigos da Humanidade", Roberto é forçado a usar um colar de inibição de poderes que o impede de usar suas habilidades.
            </p>
            <p>
            Felizmente, os X-Men entram em ação e conseguem resgatar Roberto, levando-o para a segurança da Mansão Xavier. Mas a surpresa não para por aí: Magneto, antigo rival dos X-Men, aparece na mansão anunciando que, de acordo com o testamento do Professor Xavier, agora ele está no comando da equipe e da mansão. Essa reviravolta deixa Ciclope desconfortável, mas ele reconhece e respeita a decisão de seu mentor.
            </p>

            <p>
            No segundo episódio, vemos a ONU tentando prender Magneto por seus crimes contra a humanidade. Surpreendentemente, Magneto aceita ser preso sob a condição de ter a oportunidade de se defender em um julgamento justo. Após ser acorrentado e ter um colar de inibição de poderes colocado em seu pescoço, ele se prepara para enfrentar as consequências de seus atos.
            </p>
            <ResponsiveImage src={w} alt="" />

            <p>
            Com os episódios 1, 2 e 3 já disponíveis no Disney+, os fãs estão ansiosos para descobrir o desenrolar do julgamento de Magneto e o impacto que terá sobre o futuro dos mutantes. Será um momento crucial que poderá moldar o destino da comunidade mutante e desencadear uma série de eventos imprevisíveis.
            </p>


            <h3>
              Assista o trailer da animação:
            </h3>

            <YouTubeVideo videoId={"xlptXikE7X0"} />

            <br />
            <p style={{fontWeight: '900'}}>
              Assim, "X-Men '97" não apenas resgata a magia da série original, mas também lança as bases para uma nova era de aventuras e descobertas para os fãs de todas as idades. Prepare-se para mergulhar de volta no mundo dos X-Men e testemunhar o legado de um dos mais amados grupos de super-heróis da história dos quadrinhos. Prepare-se para mais reviravoltas e emoções intensas em "X-Men '97", uma jornada que promete surpreender e cativar os fãs antigos e novos.
            </p>
          </MainContentWrapper>

        </Layout>
    );
};

export default XmenAnimatedSeries;
