import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useNavigate } from "react-router-dom";
import WideCard from "../WideCard/WideCard";
import jaspionImage from "../../../src/assets/images/jaspion.webp";

const CarouselToCard = () => {
  const navigate = useNavigate();

  const navigateToJaspionPage = () => {
    navigate("/dashboard/tv/jaspion");
  };

  return (
    <div>
      <h1>Slider with React JS</h1>
      <Swiper
        slidesPerView={1}
        navigation={true} // Defina navigation como true
        pagination={{ clickable: true }}
        autoplay
      >
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
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
      </Swiper>
    </div>
  );
};

export default CarouselToCard;
