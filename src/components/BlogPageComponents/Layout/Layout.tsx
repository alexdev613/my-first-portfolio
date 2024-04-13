import React from 'react';
import Header from '../Header/Header';
import Footer from '../../../pages/Home/sections/Footer/Footer';
import {
  PageContainer,
  ContentWrapper,
  MainContent,
  SidebarWrapper,
  AdvertiseHere,
  SocialsList,
  IconLink,
  Icon,
  RowLink,
  CarouselContainer,
  ComponenteNovo,
  FooterSpace
} from './styles';

import github from '../../../assets/images/icons/github.ico';
import linkedin from '../../../assets/images/icons/linkedin.ico';
import facebook from '../../../assets/images/icons/facebook.ico';
import instagram from '../../../assets/images/icons/instagram.ico';
import twitter from '../../../assets/images/icons/twitter.ico';
import youtube from '../../../assets/images/icons/youtube.ico';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import stars from "../../../assets/images/stars.gif";
import universe from "../../../assets/images/universe.jpg";
import w from "../../../assets/images/wolverine97.jpg";
import advertise from '../../../assets/images/advertise.png';
import chavinho from '../../../assets/images/chavinho.jpg';
import NavBar from '../../NavBar/NavBar';
import { Link } from 'react-router-dom';
import MicroCard from '../../MicroCard/MicroCard';
import CarouselToCard from '../../CarouselToCard/CarouselTocard';
import MiniCard from '../../MiniCard/MiniCard';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageContainer>
      <NavBar position={'absolute'} />
      <Header />
      <ContentWrapper>
        <MainContent>{children}</MainContent>
        <SidebarWrapper>
          <div className='conteudo-lateral'>
            <div className='post-destaque'>
            <h3>DESTAQUES</h3>
                <h4>Benjamin Grahan, Investidor Inteligente</h4>
                <p>
                  Na visão de Graham, o investimento deve incluir a garantia de retorno sobre o capital investido,
                  incluindo ainda a taxa de variação da inflação.
                </p>
                <Link to={'/dashboard/finance/benjamingrahan'}>
                  Leia Mais
                </Link>
              </div>
              <div className='post-destaque'>
                <h4>IA: O que é e como funciona?</h4>
                <p>
                  IA é tecnologia que simula inteligência humana, usando algoritmos e dados para aprender e resolver
                  problemas complexos de forma autônoma.
                </p>
                <Link to={'/dashboard/tech/whatsia'}>
                  Leia Mais
                </Link>
              </div>
              <div className='post-destaque'>
                <h4>Jaspion no Prime Video</h4>
                <p>
                  O Fantástico Jaspion, criado pelo profeta Edin, ele foi preparado para enfrentar o terrível Satan Goss...
                  Reviva a nostalgia da série que fez sucesso no Brasil e no Japão!
                </p>
                <Link to={'/dashboard/tv/jaspion'}>
                  Leia Mais
                </Link>
              </div>
          </div>
          <div className='conteudo-lateral categories'>
              <h3>Categorias</h3>
              <div className='categories'>
                <a href="">TV e Séries</a>
                <a href="">Exposições</a>
                <a href="">Notícias</a>
                <a href="">Ciências</a>
                <a href="">Tecnologia</a>
                <a href="">Finanças e Investimento</a>
                <a href="">Jogos</a>
              </div>
          </div>

          <div className='conteudo-lateral categories'>
            <AdvertiseHere >
              <img src={stars} alt="" />
              <div className='texto'>Anuncie aqui!</div>
            </AdvertiseHere>
          </div>

          <div className='conteudo-lateral socials-media'>
              <h3>Redes Sociais</h3>
              <SocialsList>
                <RowLink href="https://github.com" target='_blank'>
                <IconLink>
                  <Icon src={github} />
                  <span>GitHub</span>
                </IconLink>
                </RowLink>

                <RowLink href="https://linkedin.com" target='_blank'>
                  <IconLink>
                    <Icon src={linkedin} />
                    <span>LinkeIn</span>
                  </IconLink>
                </RowLink>

                <RowLink href="https://facebook.com" target='_blank'>
                  <IconLink>
                    <Icon src={facebook} />
                    <span>Facebook</span>
                  </IconLink>
                </RowLink>

                <RowLink href="https://instagram.com" target='_blank'>
                  <IconLink>
                    <Icon src={instagram} />
                    <span>Instagram</span>
                  </IconLink>
                </RowLink>

                <RowLink href="https://twitter.com" target='_blank'>
                  <IconLink>
                    <Icon src={twitter} />
                    <span>Twitter</span>
                  </IconLink>
                </RowLink>

                <RowLink href="https://youtube.com" target='_blank'>
                  <IconLink>
                    <Icon src={youtube} />
                    <span>YouTube</span>
                  </IconLink>
                </RowLink>
                
              </SocialsList>

          </div>
              <CarouselContainer>
                <Swiper
                  modules={[ Pagination, Autoplay, EffectFade ]}
                  effect='fade'
                  slidesPerView={1}
                  autoplay={{delay: 3000}}
                  spaceBetween={50}
                >
                  <SwiperSlide>
                    <p style={{ fontWeight: "900"}}>__ Quero ver, outra vez, seus olhinhos de noite Serena! Quero ouvir... <br /> __ Lave as Orelhas!</p>
                    <img src={chavinho} alt="" style={{ objectFit: 'fill', width: '100%', height: '58.5%'}}/>
                  </SwiperSlide>
                  <SwiperSlide style={{ display: 'flex'}}>
                    <img src={stars} style={{ objectFit: 'cover' }} alt="" />
                  </SwiperSlide>
                  <SwiperSlide style={{ display: 'flex'}}>
                    <img src={w} alt="" style={{ objectFit: 'contain', width: '100%', height: '100%'}}/>
                  </SwiperSlide>
                  <SwiperSlide style={{ display: 'flex'}}>
                    <img src={w} alt="" style={{ objectFit: 'fill', width: '100%', height: '100%'}}/>
                  </SwiperSlide>
                  <SwiperSlide style={{ display: 'flex'}}>
                    <img src={w} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%'}}/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={advertise} alt="" style={{ objectFit: 'fill', width: '100%', height: '100%'}} />
                  </SwiperSlide>
                </Swiper>
              </CarouselContainer>
        </SidebarWrapper>
        <ComponenteNovo>
          <MicroCard imageUrl={universe} title={'Horóscopo'}  titleColor={'green'} text={'O que os astros dizem sobre o seu signo para esta semama? Um big bang de emoções pros signos de água!'} />
          <MicroCard imageUrl={w} title={'Quadrinhos'} titleColor={'blue'} text={'Droga! Wolverine fatia mais um! Mas os X-MEN fingem quena da aconteceu! Mas será possível?'} />
          <MicroCard imageUrl={chavinho} title={'Tech'} titleColor={'red'} text={'Tecnologia da Informação, é uma área promissora, que disponibiliza muitas vagas de trabalho no Brasil e no mundo!'} />
        </ComponenteNovo>
      </ContentWrapper>
      <FooterSpace>
        <Footer />
      </FooterSpace>
    </PageContainer>
  );
};

export default Layout;
