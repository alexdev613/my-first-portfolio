import { BoxTitle, FAQAnswer, FAQContainer, FAQContent, FAQItem, FAQQuestion } from "./FAQSection/styles";

const FAQSection = () => {
    return (
        <FAQContainer>
            <FAQContent>
                <BoxTitle>
                    <h1>FAQ</h1>
                    <h2>Perguntas Frequentes</h2>
                </BoxTitle>
                <FAQItem>
                    <FAQQuestion>O que é desenvolvimento web?</FAQQuestion>
                    <FAQAnswer>
                        Desenvolvimento web é o processo de criação de sites e aplicativos web que são
                        acessíveis através da internet. Isso envolve a utilização de linguagens de marcação,
                        como HTML, estilização com CSS e funcionalidades dinâmicas usando JavaScript.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem>
                    <FAQQuestion>Como podemos ajudar os pequenos negócios serem bem-sucedidos?</FAQQuestion>
                    <FAQAnswer>
                        Nosso objetivo é oferecer uma solução completa para que os pequenos negócios
                        prosperem na internet. Através de nossos serviços, fornecemos desde o design
                        e desenvolvimento do site até estratégias de marketing digital personalizadas,
                        ajudando a aumentar a visibilidade e o alcance da sua empresa.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem>
                    <FAQQuestion>O que torna nossos serviços diferentes?</FAQQuestion>
                    <FAQAnswer>
                        Nossa abordagem personalizada e foco no sucesso do cliente nos destacam.
                        Não fornecemos apenas um site, mas uma experiência completa de desenvolvimento
                        web, com suporte contínuo e orientação para garantir que sua presença online seja
                        eficaz e bem-sucedida a longo prazo.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem>
                    <FAQQuestion>Quais são os benefícios de ter um site profissional?</FAQQuestion>
                    <FAQAnswer>
                        Um site profissional é uma ferramenta essencial para construir credibilidade, aumentar
                        a visibilidade da marca e alcançar novos clientes. Além disso, um site bem projetado e
                        otimizado pode ajudar a impulsionar as vendas, melhorar a comunicação com os clientes e
                        expandir o alcance do seu negócio.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem>
                    <FAQQuestion>Como podemos garantir que nosso site seja encontrado pelos clientes?</FAQQuestion>
                    <FAQAnswer>
                        Implementamos estratégias de otimização para mecanismos de busca (SEO) para garantir que seu
                        site seja facilmente encontrado pelos clientes em potencial. Isso inclui a otimização de
                        palavras-chave, tags meta, conteúdo relevante e uma estrutura de site amigável para SEO.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem>
                    <FAQQuestion>Como podemos atrair mais tráfego para nosso site?</FAQQuestion>
                    <FAQAnswer>
                        Além das estratégias de SEO, também oferecemos serviços de marketing digital, como publicidade
                        online, mídia social, marketing de conteúdo e e-mail marketing, para atrair mais tráfego
                        qualificado para o seu site. Nossa abordagem integrada maximiza a visibilidade da sua marca e
                        gera leads de alta qualidade.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem>
                    <FAQQuestion>O que é SEO e por que é importante para um site?</FAQQuestion>
                    <FAQAnswer>
                        SEO, ou Search Engine Optimization, é o conjunto de práticas para melhorar a visibilidade de um
                        site nos resultados dos mecanismos de busca, como o Google. Isso é importante porque sites bem
                        otimizados têm mais chances de serem encontrados pelos usuários, aumentando o tráfego orgânico.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem>
                    <FAQQuestion>Quais são as opções de suporte e manutenção oferecidas após o lançamento do site?</FAQQuestion>
                    <FAQAnswer>
                        Após o lançamento do seu site, continuamos a fornecer suporte e manutenção contínuos para garantir
                        que tudo funcione perfeitamente. Oferecemos atualizações regulares de software, monitoramento de
                        desempenho, backup de dados e suporte técnico para resolver qualquer problema que possa surgir.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem>
                    <FAQQuestion>Quais são as medidas de segurança implementadas para proteger nosso site e os dados dos clientes?</FAQQuestion>
                    <FAQAnswer>
                        Levamos a segurança do seu site e dos dados dos clientes muito a sério. Implementamos medidas de
                        segurança avançadas, como certificados SSL, firewalls, monitoramento de segurança em tempo real e
                        backups regulares, para garantir a proteção contra ameaças cibernéticas e a privacidade dos dados
                        dos clientes.
                    </FAQAnswer>
                </FAQItem>
                <FAQItem>
                    <FAQQuestion>Como podemos começar a trabalhar juntos?</FAQQuestion>
                    <FAQAnswer>
                        Para começar, entre em contato conosco para uma consulta inicial. Durante esta reunião, discutiremos
                        suas metas e requisitos específicos e elaboraremos um plano personalizado para o seu projeto. Estamos
                        ansiosos para ajudá-lo a alcançar o sucesso online!
                    </FAQAnswer>
                </FAQItem>
            </FAQContent>
        </FAQContainer>
    );
};

export default FAQSection;