import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { EffectFade, Pagination, A11y } from "swiper/modules";

import { useNavigate } from "react-router-dom";
import WideCard from "../WideCard/WideCard";
import jaspionImage from "../../../src/assets/images/jaspion.webp";
import benjaminGrahan from "../../../src/assets/images/benjaminGrahan.jpg";
import akiraToriyama from "../../../src/assets/images/akiratoriyama.jpg";
import b3 from "../../../src/assets/images/b3.jpg";

const CarouselToCard = () => {
  const navigate = useNavigate();

  const navigateToJaspionPage = () => {
    navigate("/dashboard/tv/jaspion");
  };

  return (
    <div>
      <h1>Slider with React JS</h1>
      <Swiper
        modules={[EffectFade, Pagination, A11y]}
        effect="fade"
        slidesPerView={1}
        navigation={true} // Defina navigation como true
        pagination={{ clickable: true }}
        loop={true}
        keyboard={true}
        spaceBetween={50}
        scrollbar={{ draggable: true }}
        autoplay={true}
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
            onClick={navigateToJaspionPage}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <WideCard
            imageUrl={benjaminGrahan}
            title={"Benjamin Grahan, Investidor Inteligente"}
            description={
              "Na visão de Graham, o investimento deve incluir a garantia de retorno sobre o capital investido, incluindo ainda a taxa de variação da inflação."
            }
            author={"Alex Heisenberg"}
            date={"25-mar-2024"}
            onClick={navigateToJaspionPage}
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
            onClick={navigateToJaspionPage}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselToCard;
