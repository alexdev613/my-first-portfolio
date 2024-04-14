import AdvertiseBannerComponent from "../../../../components/BlogPageComponents/AdvertiseBannerComponent/AdvertiseBannerComponent";
import Layout from "../../../../components/BlogPageComponents/Layout/Layout";
import YouTubeVideo from "../../../../components/BlogPageComponents/YouTubeVideo/YouTubeVideo";
import { Link } from "react-router-dom";
import {
  MainContentWrapper,
  TitlePost,
  DatePost,
  ResponsiveImage
} from "./styles";

import anuncie from '../../../../assets/images/banner-anuncie-770x198.png';
import jaspion from '../../../../assets/images/jaspion.webp';
import jaspion2 from '../../../../assets/images/jaspion-elenco.jpg';
import jaspionprime from '../../../../assets/images/jaspion-primevideo.png';

const Jaspion = () => {
    return (
        <Layout>
          <AdvertiseBannerComponent src={anuncie} />
          <MainContentWrapper>
            <TitlePost>O Fantástico Jaspion</TitlePost>
            <DatePost>01 de Abril de 2024</DatePost>
            
            <br />
            <p>
                "Jaspion" é uma série de televisão japonesa do gênero tokusatsu, criada por Shotaro Ishinomori e produzida pela Toei Company. A série foi ao ar no Japão entre 1985 e 1986 e alcançou grande popularidade não só no Japão, mas também em muitos outros países, incluindo o Brasil.
            </p>

            <p>
                A trama de "Jaspion" gira em torno de um jovem guerreiro chamado Jaspion, que foi criado pelo sábio Edin após perder seus pais em um acidente. Edin o treina para combater as forças do mal que ameaçam a paz do universo. Jaspion viaja pela galáxia a bordo da nave Daileon, acompanhado de sua androide Anri e do alienígena Miya, enfrentando monstros e vilões enquanto busca pelas Pedras do Espírito, artefatos místicos capazes de selar o maligno Satan Goss.
            </p>
            <br />


            <ResponsiveImage src={jaspion} alt="" />
            
            <br />
            <p>
                A série é lembrada por suas cenas de ação empolgantes, efeitos especiais impressionantes (para a época) e mensagens positivas sobre coragem, amizade e justiça. No Brasil, "Jaspion" se tornou um fenômeno cultural, sendo exibido na TV aberta durante os anos 80 e 90 e conquistando uma legião de fãs, que ainda hoje reverenciam o herói espacial.
            </p>
            <br />
            
            <ResponsiveImage src={jaspion2} alt="" />
            <br />
            <p>
                A série "Jaspion" está disponível na plataforma de streaming Amazon Prime Video, trazendo de volta as aventuras emocionantes que cativaram os telespectadores dos anos 80 e 90. Essa iniciativa permite não apenas aos fãs mais antigos reviverem as emocionantes batalhas espaciais do lendário herói, mas também apresenta a nova geração à magia e ao encanto dessa produção clássica.
            </p>

            <p>
                Ao assistir "Jaspion" na Prime Video, os espectadores têm a oportunidade de se reconectar com personagens icônicos, como Jaspion, Anri e Miya, enquanto embarcam em uma jornada intergaláctica repleta de perigos, mistérios e confrontos épicos contra as forças do mal. A série continua a inspirar e entreter pessoas de todas as idades, reafirmando seu lugar especial na cultura pop.
            </p>

            <br />

            <ResponsiveImage src={jaspionprime} alt="" />

            <br />
            <p>
                A série "Jaspion" possui um total de 46 episódios. Cada episódio apresenta uma nova aventura do lendário herói Jaspion e seus companheiros, enquanto enfrentam ameaças intergalácticas e lutam para proteger a paz no universo. Essa série, que fez muito sucesso nas décadas de 80 e 90, continua a ser apreciada por fãs de todas as idades até os dias atuais
            </p>


            <h3>
              Assista o trailer da animação:
            </h3>

            <YouTubeVideo videoId={"3sqq-tsEYzc"} />

            <br />
            <p style={{fontWeight: '900'}}>
                Todos os 46 episódios de "Jaspion" estão disponíveis na plataforma de streaming Prime Video! Prepare-se para reviver as aventuras emocionantes deste lendário herói intergaláctico que conquistou os corações de milhões de fãs em todo o mundo nas décadas de 80 e 90. Junte-se a Jaspion e seus companheiros em sua jornada para proteger o universo contra ameaças malignas e trazer a paz aos povos de todos os planetas. Reviva os momentos inesquecíveis e emocionantes desta série clássica que continua a encantar públicos de todas as idades. Não perca a chance de mergulhar novamente no universo de "Jaspion" e embarcar em uma aventura épica cheia de ação, suspense e emoção, agora disponível na Prime Video.
            </p>
            <br /><br />
          </MainContentWrapper>

          <MainContentWrapper>
          <TitlePost>Você também poderá se interessar: Jaspion Expo Brasil</TitlePost>
          <Link to={"/dashboard/expo/jaspionexpo"} style={{textDecoration: 'none'}}>
              <p style={{ color: "black" }}>Clique na imagem para ser direcionado até a página!</p> 
              <ResponsiveImage src={jaspion} />
          </Link>

          <b>
            <p>
                A exposição de um dos heróis japoneses mais famosos no Brasil chega ao Pavilhão Japonês!
            </p>
            <p>
                Nos dias 22, 23, 24, 28, 29, 30 e 31 de março o Pavilhão Japonês, em parceria com a Editora Mozu e a Sato Company, produz uma exposição especial em comemoração ao lançamento do Livro “Jaspion – Guia Visual Definitivo”.
            </p>
          </b>

          </MainContentWrapper>
        </Layout>
    )
}

export default Jaspion;