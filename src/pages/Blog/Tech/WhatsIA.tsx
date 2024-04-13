import styled from "styled-components";
import AdvertiseBannerComponent from "../../../components/BlogPageComponents/AdvertiseBannerComponent/AdvertiseBannerComponent";
import Layout from "../../../components/BlogPageComponents/Layout/Layout";
import anuncie from "../../../assets/images/banner-anuncie-770x198.png";
import stars from "../../../assets/images/stars.gif";
import aiCode from "../../../assets/images/ia-e-produtividade.jpg";
import devsXai from "../../../assets/images/inteligencia-artificial-x-programador.webp";
import iaProgrammers from "../../../assets/images/ia-programmers.png";

import { Link } from "react-router-dom";

const ResponsiveImage = styled.img`
  width: 100%; /* Largura da imagem em relação ao contêiner pai */
  max-width: 700px; /* Largura máxima da imagem */
  height: auto; /* Altura automática para manter a proporção */
  display: block; /* Para garantir que a margem automática funcione corretamente */
`;

const SubImage = styled(ResponsiveImage)`
  max-width: 490px;
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

const WhatsIA = () => {
    return (
        <Layout>
            <AdvertiseBannerComponent src={anuncie} />
            <MainContentWrapper>
            <TitlePost>O que é Inteligência Artificial, amiga ou inimiga?</TitlePost>
            <DatePost>29 de Março de 2024</DatePost>

                <br />

                <p>
                    A <b>Inteligência Artificial (IA)</b> é um campo da ciência da computação que se concentra no desenvolvimento de sistemas <b>capazes de realizar tarefas que normalmente exigiriam inteligência humana</b>. Isso inclui atividades como reconhecimento de padrões, tomada de decisões, aprendizado, processamento de linguagem natural e muito mais. Em termos simples, a <b>IA permite que os computadores ajam de maneira inteligente</b>, simulando <b>processos cognitivos humanos.</b>
                </p>
                
                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                    <ResponsiveImage src={aiCode} />
                    <p><i>Ilustração: Robô programando - Acervo pessoal.</i></p>
                </div>

                <p>
                    Os sistemas de IA são projetados para automatizar tarefas que consomem tempo, como análise de dados complexos, gerenciamento de informações e execução de processos repetitivos. Ao fazer isso, a <b>IA visa aumentar a eficiência e a produtividade em diversos setores</b>, incluindo empresas, saúde, finanças, entretenimento e muito mais.
                </p>
                
                <p>
                    É importante ressaltar que a Inteligência Artificial não tem a intenção de "tomar empregos", mas sim de <b>colaborar com os seres humanos.</b> Embora algumas ocupações possam ser transformadas ou até mesmo substituídas por sistemas automatizados, muitas outras surgirão à medida que novas tecnologias forem adotadas.
                </p>
                
                <p>
                    Para se adaptar às mudanças trazidas pela IA, é essencial investir em <b>qualificação profissional.</b> Os profissionais devem buscar aprender sobre tecnologias emergentes e como <b>trabalhar em conjunto com sistemas de IA</b> para otimizar processos e resultados.
                </p>

                <br />

                <h2>Programadores X Inteligência Artificial (ou relação de cooperação?).</h2>
                <p>
                    Os programadores, em particular, estão na linha de frente das transformações trazidas pela Inteligência Artificial. Embora a automação possa simplificar tarefas de programação, ela também <b>abre novas oportunidades para desenvolver soluções mais avançadas e eficazes.</b>
                </p>
                
                <p>
                    Em vez de se sentir ameaçado pela Inteligência Artificial, os <b>programadores devem abraçar a oportunidade de melhorar suas habilidades e se tornarem especialistas na integração de sistemas inteligentes em seus projetos.</b> Isso não apenas aumentará sua relevância no mercado de trabalho, mas também tornará suas <b>atividades mais produtivas e eficientes.</b>
                </p>

                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                    <SubImage src={devsXai} />
                    <p><i>Homem VS Máquina - Acervo pessoal.</i></p>
                </div>

                
                <p>
                    Uma das <b>vantagens da Inteligência Artificial</b> é sua capacidade de lidar com grandes volumes de dados e <b>executar análises complexas em tempo real</b>. Isso permite que empresas tomem decisões mais informadas e ágeis, baseadas em insights precisos fornecidos por sistemas inteligentes.
                </p>
                
                <p>
                    Além de seu impacto nos negócios, a IA está revolucionando a <b>área da saúde</b>, auxiliando diagnósticos médicos, personalizando tratamentos e acelerando a pesquisa científica.
                </p>
                
                <p>
                    Na indústria automotiva, a IA está impulsionando o desenvolvimento de veículos autônomos, <b>capazes de tomar decisões instantâneas e garantir maior segurança nas estradas.</b>
                </p>
                
                <p>
                    A educação também está sendo transformada pela Inteligência Artificial, com <b>plataformas de aprendizado adaptativo</b> que personalizam o conteúdo de acordo com as necessidades individuais dos alunos.
                </p>
                
                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                    <ResponsiveImage src={iaProgrammers} />
                    <p><i>IA está revolucionando a tecnologia! - Acervo pessoal.</i></p>
                </div>

                <p>
                    Apesar de seus benefícios, a adoção da IA também levanta <b>questões éticas e sociais.</b> É fundamental garantir que esses sistemas sejam desenvolvidos e utilizados de forma responsável, respeitando a <b>privacidade e a segurança dos indivíduos.</b>
                </p>
                
                <p>
                    Em um mundo cada vez mais impulsionado pela tecnologia, a <b>Inteligência Artificial</b> representa uma <b>evolução inevitável.</b> Ao compreender e se adaptar a essas mudanças, os profissionais podem não apenas sobreviver, mas <b>prosperar em um ambiente cada vez mais digitalizado.</b>
                </p>
                
                <p>
                    A capacidade de trabalhar em conjunto com sistemas inteligentes <b>será uma habilidade valorizada em todas as áreas profissionais.</b> Aqueles que abraçarem essa evolução terão <b>a oportunidade de moldar o futuro e contribuir para uma sociedade mais eficiente e inovadora.</b>
                </p>
                
            </MainContentWrapper>
            <MainContentWrapper>
                <TitlePost>Mais artigos? Volte a página principal do nosso Blog!</TitlePost>
                <Link style={{ textDecoration: 'none' }} to={"/dashboard"}>
                    <p style={{ color: "black" }}>
                        Clique na imagem para ser redirecionado até página principal do nosso Blog!
                    </p>
                    <ResponsiveImage src={stars} />
                    <br />
                    <b style={{ color: "black" }}>
                        Fique por dentro das últimas notícias sobre uma variedade de temas atuais e envolventes!
                    </b>
                </Link>
                <br /><br /><br />
            </MainContentWrapper>
        </Layout>
    )
}

export default WhatsIA;