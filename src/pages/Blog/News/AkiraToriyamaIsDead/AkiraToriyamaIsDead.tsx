import styled from "styled-components";
import AdvertiseBannerComponent from "../../../../components/BlogPageComponents/AdvertiseBannerComponent/AdvertiseBannerComponent";
import Layout from "../../../../components/BlogPageComponents/Layout/Layout";
import { Link } from "react-router-dom";

import anuncie from '../../../../assets/images/banner-anuncie-770x198.png';
import akiratoriyama from "../../../../assets/images/akiratoriyama.jpg";
import toriyamaGoku from "../../../../assets/images/akira-goku.webp";
import toriyamaSenna from "../../../../assets/images/toriyama-e-senna.png";
import gokuFormule1 from "../../../../assets/images/goku-e-companhia-f1.jpg";
import dragonBallDrSlump from "../../../../assets/images/dragon-ball-e-dr-slump-de-akira-toriyama-.png";
import YouTubeVideo from "../../../../components/BlogPageComponents/YouTubeVideo/YouTubeVideo";
import hematomaSubdural from "../../../../assets/images/hematoma-subdural.png";
import xmenPopCorn from "../../../../assets/images/x-men-pop-corn.jpg";


const ResponsiveImage = styled.img`
  width: 100%; /* Largura da imagem em relação ao contêiner pai */
  max-width: 600px; /* Largura máxima da imagem */
  height: auto; /* Altura automática para manter a proporção */
  display: block; /* Para garantir que a margem automática funcione corretamente */
`;

const SubImage = styled(ResponsiveImage)`
  max-width: 360px;
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


const AkiraToriyamaIsDead = () => {
    return (
        <Layout>
            <AdvertiseBannerComponent src={anuncie} />
            <MainContentWrapper>
            <TitlePost>Akira Toriyama, criador do fenômeno Dragon Ball nos deixa!</TitlePost>
            <DatePost>09 de Março de 2024</DatePost>

                <p>
                    O criador japonês de quadrinhos Akira Toriyama, mais conhecido por sua série Dragon Ball que deu origem a filmes, videogames e programas de TV amplamente populares, morreu em 1º de março devido a um coágulo de sangue no cérebro, informou seu estúdio de produção nesta sexta-feira (8).
                </p>


                <p>
                    Um comunicado no site de Dragon Ball explicou que a morte foi causada por um hematoma subdural, que ocorre quando há um acúmulo de sangue entre o cérebro e o crânio.
                </p>
                
                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                    <ResponsiveImage src={toriyamaGoku} />
                    <p><i>Toriyama e Goku DBZ. - Fonte: Acervo próprio.</i></p>
                </div>

                <p>
                    Existem dois tipos de hematomas subdurais: crônico e agudo. O hematoma crônico é mais comum e geralmente ocorre após um impacto leve na cabeça.
                </p>


                <p>
                    "O sangramento pode ocorrer quando alguém bate a cabeça ao sair de um carro. Já operei um paciente que estava em um navio, que balançou e ele bateu a cabeça levemente. A causa mais comum é a queda de própria altura, como escorregar e cair no chão", explicou o neurocirurgião do Hospital Santa Lúcia, Dr. Ivan Coelho Ferreira, ao comentar o caso que levou o ex-ministro José Dirceu a passar por uma cirurgia."
                </p>

                <p>
                    De acordo com o especialista, esse tipo de hematoma pode ocorrer até 2 meses após o trauma inicial, e muitas vezes o paciente não se lembra do que causou isso.
                </p>

                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                    <SubImage src={hematomaSubdural} />
                    <p><i>Hematoma subdural - Fonte: Imagem recolhida na internet.</i></p>
                </div>
                

                <p>
                    "A pessoa pode cair em casa, fazer uma tomografia que não identifica nada de imediato. No entanto, dias depois, pode ocorrer um sangramento venoso que continua a aumentar progressivamente, e o corpo pode não conseguir absorver o hematoma", afirma.
                </p>

                <p>
                   "Quando alguém bate a cabeça, é normal sentir um pouco de dor. Mas se essa dor está aumentando ao longo dos dias, isso é preocupante. Outros sintomas comuns relatados pelos pacientes são desorientação e dificuldade em mover um lado do corpo, como fraqueza no braço e na perna", acrescenta.
                </p>

                <p>
                    Quando o diagnóstico é de hematoma subdural recente e há necessidade de intervenção cirúrgica, os especialistas realizam a craniotomia. O procedimento envolve a abertura do osso craniano para drenar o hematoma.
                </p>

                <p>
                    A recuperação nos casos de longa duração requer uma estadia hospitalar de 2 a 3 dias. Nos casos recentes, se a cirurgia for realizada prontamente, o paciente pode estar em casa dentro de uma semana.
                </p>

                <br />

                <h2>"O Legado de Dragon Ball: Akira Toriyama e sua Contribuição à Cultura Pop Brasileira"</h2>

                <p>
                    Akira Toriyama é um renomado mangaká japonês conhecido por suas contribuições significativas para a cultura pop, especialmente através de sua obra mais famosa, Dragon Ball. Nascido em 1955, Toriyama iniciou sua carreira como ilustrador de mangás em 1978 e alcançou o reconhecimento internacional com a criação de Dragon Ball em 1984. Essa série revolucionária introduziu ao mundo personagens icônicos como Goku, Vegeta, Piccolo e muitos outros, além de popularizar os conceitos de artes marciais e aventura épica.
                </p>

                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                    <ResponsiveImage src={akiratoriyama} alt="" />
                    <p> <i>Toriyama e turma de Dragon Ball Z. - Fonte: Acervo pessoal.</i></p>
                </div>

                <p>
                    No Brasil, Dragon Ball rapidamente conquistou uma legião de fãs devido à sua narrativa cativante, humor peculiar e emocionantes batalhas de artes marciais. A saga foi transmitida na TV e ganhou destaque nos anos 90, tornando-se uma das franquias de anime mais queridas no país. O impacto de Dragon Ball na cultura brasileira é notável até hoje, com convenções e eventos dedicados à série e seus personagens.
                </p>

                <br />

                <h2>Fã de Ayrton Senna e do Brasil</h2>

                <p>
                    Toriyama não só gostava do Brasil como era um grande fã do piloto Ayrton Senna. Entre as décadas de 1980 e 1990, Senna vivia seu auge na carreira, com muitos fãs pelo Japão.
                </p>

                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                    <ResponsiveImage src={toriyamaSenna} alt="" />
                    <p> <i>Toriyama e Senna. - Fonte: Reprodução/Shueisha.</i></p>
                </div>

                <p>
                    Um deles era Akira Toriyama, que no final da década de 1980 já era reconhecido por Dragon Ball. Nesse Período, ele foi convocado para fazer um desenho da equipe McLaren de Fórmula 1 com personagens da tão famosa série. No desenho, o Goku foi colocao como Senna.
                </p>

                <p>
                    Em 1990, os dois se conheceram no GP da Alemanha. Ele fez um mangá chamado "BattleMan F-1 GP" que conta a história desse grande prêmio e de quando conheceu o piloto brasileiro.
                </p>

                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                    <ResponsiveImage src={gokuFormule1} alt="" />
                    <p> <i>Toriyama foi convidado para fazer um desenho da equipe McLarem de Fórmula 1 - Fonte: Reprodução/Shueisha.</i></p>
                </div>

                <p>
                    Além de Dragon Ball, Akira Toriyama criou outras obras igualmente notáveis. Uma delas é Dr. Slump, uma série de mangá cômica que apresenta Arale, uma androide superpoderosa, e que também foi muito bem recebida pelo público. Embora tenha sido um sucesso, Dr. Slump não alcançou o mesmo nível de popularidade global que Dragon Ball.
                </p>
                <p>
                    A jornada de Toriyama como artista não se limita apenas ao sucesso de suas criações; ele deixou um legado duradouro na indústria do entretenimento. Dragon Ball tornou-se um fenômeno mundial, influenciando gerações de fãs e inspirando uma infinidade de produções derivadas, incluindo séries de TV, filmes, jogos e merchandise. Sua influência também transcende fronteiras culturais, como evidenciado pelo emocionante tributo na Argentina.
                </p>

                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                    <ResponsiveImage src={dragonBallDrSlump} alt="" />
                    <p> <i>Goku como Super Saiyajin e Arale de Dr. Slump - Fonte: Acervo pessoal.</i></p>
                </div>

                <p>
                    Na Argentina, milhares de fãs se reuniram em um evento especial para homenagear Akira Toriyama, realizando um gesto semelhante à Genki Dama de Goku. Levantando as mãos para o céu, eles recriaram esse momento emblemático da série como uma forma de expressar gratidão e reverência ao mestre por trás de Dragon Ball. Esse episódio demonstra a profunda conexão emocional que Toriyama estabeleceu com seu público ao longo dos anos.
                </p>
                <p>
                    Akira Toriyama deixou um impacto indelével na cultura pop global e seu nome permanecerá associado à história do mangá e do anime. Sua habilidade em criar mundos imaginativos e personagens carismáticos conquistou milhões de corações em todo o mundo, influenciando a forma como percebemos e apreciamos histórias de aventura e fantasia. Em nome dos fãs e entusiastas de Dragon Ball e suas outras obras, expressamos profunda gratidão a Akira Toriyama por seu legado extraordinário e duradouro.
                </p>

                <br />
                <b>
                    Veja a homenagem feita pelos argentinos em Buenos Aires em tributo a Akira Toriyama:
                </b>
                <br /><br /><br />

                <YouTubeVideo videoId={"zj0cWY2iROI"} />

                <br />

                <p>
                    <b>
                        Obrigado, Akira Toriyama, por nos presentear com um universo tão vibrante e inspirador que continua a encantar e unir pessoas de diferentes culturas e gerações. Sua criatividade e imaginação deixaram uma marca eterna na história da cultura pop, e sua obra continuará a ser apreciada por muitas gerações vindouras. Você é verdadeiramente um mestre cujo legado transcende as páginas dos mangás, vivendo no coração de todos aqueles que foram tocados por suas histórias.
                    </b>
                </p>

                <br />

            </MainContentWrapper>
            <MainContentWrapper>
            <TitlePost>X-MEN 97' Série animada, chega arrebentando a audiência</TitlePost>
            <Link to={"/dashboard/tv/x-men97"} style={{ textDecoration: 'none' }} >
                <p style={{ color: "black" }}>Clique na imagem para ser direcionado até a página!</p> 
                <ResponsiveImage src={xmenPopCorn} />
            </Link>
            
            <b>
                <p>
                    Veja como foi a estreia da série animada continuação direta do sucesso dos anos 90!
                </p>
            </b>

            </MainContentWrapper>
        </Layout>
    )
}

export default AkiraToriyamaIsDead;
