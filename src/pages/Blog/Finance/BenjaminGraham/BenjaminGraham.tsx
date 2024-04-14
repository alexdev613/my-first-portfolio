import AdvertiseBannerComponent from "../../../../components/BlogPageComponents/AdvertiseBannerComponent/AdvertiseBannerComponent";
import Layout from "../../../../components/BlogPageComponents/Layout/Layout";
import YouTubeVideo from "../../../../components/BlogPageComponents/YouTubeVideo/YouTubeVideo";
import { Link } from "react-router-dom";
import {
    MainContentWrapper,
    TitlePost,
    DatePost,
    ResponsiveImage,
    BookImage,
} from "./styles"

import anuncie from "../../../../assets/images/banner-anuncie-770x198.png";
import benjamin from "../../../../assets/images/benjamin-graham-qual-sua estrategia.jpg";
import benjamin2 from "../../../../assets/images/Benjamin-Graham-wikpedia.jpg";
import benjamin3 from "../../../../assets/images/benjaminGraham.webp";
import oInvestidorInteligente from "../../../../assets/images/o-investidor-inteligente.jpg";
import securityAnalysis from "../../../../assets/images/security-analysis.jpg";
import B3BrasilBolsaBalcao from "../../../../assets/images/B3-Bolsa.jpg";

const BenjaminGraham = () => {
    return (
        <Layout>
          <AdvertiseBannerComponent src={anuncie} />
          <MainContentWrapper>
            <TitlePost>Benjamin Graham, O Investidor Inteligente</TitlePost>
            <DatePost>01 de Abril de 2024</DatePost>
            
            <br />
            <p>
                Benjamin Graham é uma figura entre os grandes nomes do universo dos investimentos. Além disso, ele é reconhecido como o pioneiro da abordagem <Link to={""}>buy and hold</Link>, que foi posteriormente adotada por seu seguidor renomado, o magnata Warren Buffet.
            </p>

            <p>
            Portanto, se você deseja aprofundar seus conhecimentos sobre essa figura notável do cenário financeiro, está no lugar certo. Neste texto, iremos explorar quem é Benjamin Graham, sua estratégia de investimentos, os segredos de sua prosperidade financeira e os livros que deixou como legado. Vamos embarcar nessa jornada?
            </p>
            <br />

            <h2>Quem é Benjamin Graham?</h2>
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                <ResponsiveImage src={benjamin2} alt="" />
                <p> <i>Quem é BenJamin Graham? - Foto do Wikpedia.</i></p>
            </div>

            <p>
                Benjamin Graham veio ao mundo em 8 de Maio de 1894, em Londres, como um destacado economista inglês. Nascido com o nome de Benjamin Grossbaum, viu sua família alterar o sobrenome de origem judaica durante os tempos conturbados da Primeira Guerra Mundial.
            </p>
            
            <p>
                Aos meros 12 meses de idade, Benjamin e sua família partiram para Nova Iorque, buscando recomeçar suas vidas. Contudo, a morte prematura de seu pai, quando ainda era criança, mergulhou-os em uma fase de privações.
            </p>
            

            <p>
                Entretanto, o jovem Benjamin transformou esse período adverso em uma oportunidade de brilhar academicamente. Com apenas 20 anos, graduou-se em Economia pela Universidade de Columbia.
            </p>

            <p>
                Durante esse tempo, recebeu várias ofertas para lecionar em disciplinas diversas como Matemática, Inglês e Filosofia. No entanto, optou por rejeitá-las, buscando aventurar-se em Wall Street.
            </p>

            <p>
                Assim, iniciou sua jornada na empresa Newburguer, Henderson and Loeb. Inicialmente, atuou como estagiário multitarefas, recebendo módicos US$12 por semana.
            </p>

            <p>
                Porém, Benjamin rapidamente ascendeu na empresa. Em apenas seis anos, tornou-se um dos sócios do grupo.
            </p>

            <p>
                Em 1926, decidiu deixar a empresa e fundar seu próprio negócio, a Graham-Newman, ao lado de Jerry Newman. Esse empreendimento quase o arruinou quando a crise do mercado atingiu seu ápice em 1929.
            </p>

            <p>
                Em 1928, começou a lecionar sobre investimentos na Columbia, onde conheceu David Dodd, seu parceiro na criação de um dos livros de maior sucesso, "Security Analysis", de 1934. Em 1949, publicou sua obra mais renomada, "The Intelligent Investor" (O Investidor Inteligente), introduzindo ao mundo conceitos cruciais como o investimento em valor (value investing) e a análise de riscos.
            </p>

            <p>
                Com essa abordagem inovadora, Benjamin desafiou o status quo, criticando a mentalidade de curto prazo predominante no mercado. Ele identificava esses agentes como especuladores, enfatizando a importância do conhecimento do mercado.
            </p>

            <p>
                Enquanto professor, teve como aluno Warren Buffet, que o considera um dos maiores investidores de sucesso. Buffet é um fiel seguidor dos ensinamentos de Graham, aplicando e adaptando suas lições até os dias de hoje.
            </p>
            <br />

            <h2>Qual a estratégia de investimentos de Benjamin?</h2>
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                <ResponsiveImage src={benjamin} alt="" />
                <p> <i>Qual a estratégia de investimentos utilizada por Benjamin Graham? <br />Fonte: Acervo pessoal.</i></p>
            </div>

            <br />
            <p>
                As estratégias de investimentos que Benjamin Graham formulou são princípios vitais ainda em uso. Fundamentados na <b>análise fundamentalista</b> e no <b>investimento em valor</b>, seus métodos são adotados por grandes investidores.
            </p>

            <p>
                Além disso, conforme ele destaca, um investimento inteligente se assemelha a um empreendimento. Por isso, é crucial identificar as características essenciais dele e o que você considera importante.
            </p>
            
            <p>
                Com base em suas teorias, Benjamin enfatiza a <b>distinção entre preço e valor</b> de uma ação. Enquanto o <b>preço</b> é o montante pago pela ação, o <b>valor</b> é o retorno que ela proporciona.
            </p>

            <p>
                Em resumo, as oportunidades favoráveis na Bolsa de Valores são aquelas ações de empresas com bons fundamentos, negociadas abaixo de seu valor intrínseco.
            </p>

            <p>
                Assim, essas ações têm potencial para <b>agregar valor</b> ao investidor, seja por meio do aumento do valor das ações ou pelo recebimento de dividendos.
            </p>

            <p>
                Agora que entendemos esses pontos, vamos explorar os três principais princípios da estratégia de investimentos de Benjamin Graham:
            </p>
            <br />

            <h2>1 - Busque lucrar com a volatilidade do mercado!</h2>

            <p>
                Segundo Benjamin, o investidor inteligente é aquele que se beneficia das variações do mercado para realizar negócios vantajosos. Em sua obra "O investidor inteligente", Benjamin caracteriza o mercado como o "Sr. Mercado".
            </p>

            <p>
                Assim, o Sr. Mercado é retratado como alguém que procura os investidores oferecendo a compra ou venda de ações, com preços diferentes a cada dia.
            </p>
            <p>
                Utilizando essa metáfora para ilustrar a volatilidade do mercado, Benjamin destaca que nenhum investidor está obrigado a aceitar as propostas do Sr. Mercado, já que este estará disponível para negociação novamente no dia seguinte.
            </p>

            <p>
                Em resumo, na visão de Benjamin, o mercado muitas vezes age de forma irracional. Portanto, uma das principais diretrizes para o investidor em valor é <b>não permitir que as emoções influenciem suas decisões de compra e venda de ações.</b>
            </p>

            <h2>2 - Invista com uma margem de segurança</h2>

            <p>
                Devido à flutuação do mercado, surgem várias oportunidades de adquirir ações com descontos significativos em seu valor intrínseco, ou seja, ações que estão sendo negociadas abaixo do seu valor habitual.
            </p>

            <p>
                Esse <b>"desconto"</b> representa a margem de segurança, que ajuda a reduzir os riscos de flutuação no preço das ações.
            </p>

            <p>
                Além disso, a essência desse conceito reside não apenas em buscar excelentes negócios, mas também em identificar oportunidades que ofereçam alto potencial de retorno com baixo risco de desvalorização.
            </p>

            <h2>
                3 - Autoconhecimento é a chave!
            </h2>

            <p>
                Por último, o terceiro princípio essencial para Benjamin é o autoconhecimento. Ele enfatiza que o <b>investidor ativo</b> é aquele que dedica tempo e esforço para entender o mercado, o que, por sua vez, resulta em retornos favoráveis.
            </p>

            <p>
                Por outro lado, o <b>investidor passivo</b> é aquele que não dispõe de tempo ou interesse para se aprofundar no mercado. Diante disso, Graham sugere que esse tipo de investidor opte por investir em índices ou em carteiras que replicam esses índices.
            </p>
            <br />
            <h1>A fórmula de Graham</h1>

            <p>
                Benjamin Graham também ganhou reconhecimento global devido à <b>Fórmula de Graham</b>, uma equação que ele afirmava poder calcular o Valor Intrínseco (valor justo) de uma ação.
            </p>

            <p>
                A formula é:
            </p>
            <p>
                <b>VI = √22,5 x LPA x VPA</b>
            </p>

            <p>
                Para entender a fórmula, é importante saber que Graham nunca pagava mais do que 15 vezes o lucro de uma empresa e até 1,5 vezes o seu patrimônio. Portanto, ele incorpora ao cálculo o <b>Índice de Graham (22,5)</b>, que é essencialmente o produto de 15 vezes o PL e 1,5 vezes o PVP, ou seja: 15 x 1,5 = 22,5.
            </p>

            <p>
                Em seguida, o LPA representa o Lucro por Ação e o VPA representa o Valor Patrimonial por Ação.
            </p>

            <p>
                <b>
                É importante destacar que a aplicabilidade da fórmula não é tão eficaz para empresas de tecnologia, já que essas empresas não devem ser avaliadas com base apenas em seu patrimônio.
                </b>
            </p>
            <br />

            <h1>
                Como ele enriqueceu?
            </h1>

            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                <ResponsiveImage src={benjamin3} alt="" />
                <p> <i>Como Benjamin Graham enriqueceu? - Fonte: Acervo pessoal.</i></p>    
            </div>

            <p>De fato, Benjamin Graham alcançou enorme sucesso em suas operações, acumulando uma grande fortuna.</p>

            <p>Além disso, logo no início de sua trajetória como investidor, Graham enfrentou a <b>Crise de 1929</b>, perdendo quase todos os seus investimentos. No entanto, foi esse período que lhe proporcionou valiosas lições.</p>
            
            <p>Dessa forma, foi a partir daí que Graham desenvolveu a estratégia de <b>comprar ações com desconto em relação ao valor real da empresa</b>. Baseando-se nisso, aos 25 anos, ele alcançou um retorno anual próximo a US$500 mil na época.</p>
            
            <p>Adicionalmente, por meio da parceria com a Graham-Newman, ele também obteve retornos impressionantes. Durante um período de 10 anos, o preço das ações saltou de US$99 para US$245.</p>
            
            <p>Ainda, em 1958, ano da liquidação da Graham-Newman, uma distribuição total de US$840,62 por ação foi feita para os investidores, resultando em um retorno total de 750% em 30 anos.</p>
            
            <p>Portanto, fica evidente que os ensinamentos de Benjamin são atemporais e essenciais para quem busca sucesso no longo prazo.</p>
            
            <p>Comprovando sua eficiente estratégia de investimentos, Graham superou consistentemente, por 20 anos consecutivos, o índice de ações <b>Standard & Poor’s 500</b>(S&P 500) em pelo menos 2,5 vezes.</p>
            <br />
            
            <h1>Livros escritos por Benjamin Graham:</h1>
            <br />

            <YouTubeVideo videoId={"5CTkeIyxZMM"} />

            <p>Os livros de Benjamin Graham são amplamente considerados os mais importantes quando o assunto é investimento. De fato, no vídeo acima, você pode conferir o depoimento de Warren Buffet sobre o livro "O Investidor Inteligente".</p>
            
            <p>Portanto, para concluir nosso artigo sobre essa figura notável, vamos apresentar os dois livros escritos por Benjamin Graham. São eles:</p>            

            <h2>
                O Investidor Inteligente
            </h2>

            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                <BookImage src={oInvestidorInteligente} alt="" />
                <p> <i>O investidor inteligente – Fonte: Capa de livro</i></p>    
            </div>

            <p>
            No livro "O Investidor Inteligente", você encontrará as mais importantes lições sobre análise fundamentalista que todo investidor perspicaz deve possuir: educação financeira, compreensão do mercado e visão de longo prazo.
            </p>
            <p>
            Além disso, de acordo com Warren Buffet, esta obra é considerada o melhor livro de investimentos já escrito.
            </p>

            <h2>
                Security Analysis
            </h2>

            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',}}>
                <BookImage src={securityAnalysis} alt="" />
                <p> <i>Security Analysis – Fonte: Capa de livro</i></p>    
            </div>

            <p>
                <i>Security Analysis</i>, publicado em 1934 em co-autoria com David Dodd, é frequentemente considerado a <b>Bíblia dos investidores fundamentalistas</b>.
            </p>
            <p>
                No livro, Graham e Dodd apresentam técnicas de <b>value investing</b> que resistem ao teste do tempo e às diferentes condições de mercado.
            </p>
            <p>
                E então, seu interesse pelo investimento em ações foi aumentado? Que tal continuar essa tour visitando nossa página sobre a B3, a bolsa de valores do Brasil?
            </p>

            <br /> <br /> <br />

          </MainContentWrapper>

          <MainContentWrapper>
          <TitlePost>Você também poderá se interessar: B3 a Bolsa de Valores do Brasil!</TitlePost>
          <Link to={"/dashboard/finance/BolsaExchange"} style={{textDecoration: 'none'}}>
            <p style={{ color: "black" }}>Clique na imagem para ser direcionado até a página!</p> 
            <ResponsiveImage src={B3BrasilBolsaBalcao} />
          </Link>
          
          <b>
            <p>
                Conheça mais sobre a Bolsa de Valores do Brasil!
            </p>
            <p>
                O que é uma Bolsa de Valores, para que serve, e porquê ela é importante para a saúde financeira de uma nação?
            </p>
          </b>

          </MainContentWrapper>
        </Layout>
    )
}

export default BenjaminGraham;
