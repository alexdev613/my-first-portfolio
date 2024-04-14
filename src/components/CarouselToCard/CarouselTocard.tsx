import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectFade, Pagination, A11y, Navigation, Autoplay } from "swiper/modules";

import { To, useNavigate } from "react-router-dom";
import WideCard from "../WideCard/WideCard";
import jaspionImage from "../../../src/assets/images/jaspion.webp";
import benjaminGraham from "../../../src/assets/images/benjaminGraham.jpg";
import akiraToriyama from "../../../src/assets/images/akiratoriyama.jpg";
import b3 from "../../../src/assets/images/b3.jpg";
import wolverine1997 from "../../../src/assets/images/wolverine97.jpg";
import './styles.css';

const CarouselToCard = () => {
  const navigate = useNavigate();

  const navigateToJaspionPage = () => {
    navigate("/dashboard/tv/jaspion");
  };
  
  const navigateToPage = (route: To) => {
    navigate(route);
  };

  return (
    <div style={{margin: '4rem 0'}}>
      <Swiper
        modules={[Navigation, EffectFade, Pagination, A11y, Autoplay]} // tem que colocar Navigation para as setas de navegação funcionarem!
        effect=""
        slidesPerView={1}
        navigation={true} // Defina navigation como true
        pagination={{ clickable: true }}
        loop={true}
        keyboard={true}
        spaceBetween={5}
        // scrollbar={{ draggable: true }}
        autoplay={{delay: 4000}}
      >
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }} className="">
          <WideCard
            imageUrl={jaspionImage}
            title={"Jaspion no Prime Video"}
            description={
              "O Fantástico Jaspion, criado pelo profeta Edin, ele foi preparado para enfrentar o terrível Satan Goss..."
            }
            author={"Alex Nascimento"}
            date={"24-mar-2024"}
            onClick={navigateToJaspionPage}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <WideCard
            imageUrl={akiraToriyama}
            title={"Akira Toriyama, um Legado"}
            description={
              "Morre Akira Toriyama aos 68 anos, mas seu legado ficará vivo e fãs de Dragon Ball prestam homenagem ao mangaká..."
            }
            author={"Alex Nascimento"}
            date={"25-mar-2024"}
            onClick={() => navigateToPage('/dashboard/news/akiratoriyamaumlegado')}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <WideCard
            imageUrl={benjaminGraham}
            title={"Benjamin Graham, Investidor Inteligente"}
            description={
              "Na visão de Graham, o investimento deve incluir a garantia de retorno sobre o capital investido, incluindo ainda a taxa de variação da inflação."
            }
            author={"Alex Heisenberg"}
            date={"25-mar-2024"}
            onClick={() => navigateToPage('/dashboard/finance/benjamingraham')}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <WideCard
            imageUrl={b3}
            title={"Bolsa de Valores, pra que serve?"}
            description={
              "Como investir na bolsa de valores do Brasil, a B3? Sabia que na Bolsa de Valores vocÊ pode diversificar muito seus investimentos?"
            }
            author={"Alex Nascimento"}
            date={"26-mar-2024"}
            onClick={() => navigateToPage('/dashboard/finance/BolsaExchange')}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <WideCard
            imageUrl={wolverine1997}
            title={"X-MEN 97' bate Record!"}
            description={
              "Produção mutante, faz sucesso no mundo inteiro, confira (sem spoilers) o que aconteceu de relevante nos 2 primeiros episódios!"
            }
            author={"Alex Heisenberg"}
            date={"26-mar-2024"}
            onClick={() => navigateToPage('/dashboard/tv/x-men97')}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselToCard;
