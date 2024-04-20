import { Link, To, useNavigate } from "react-router-dom";
import Footer from "../Home/sections/Footer/Footer";
import { BodyContainer, MiniCardContainer, ProvisoryContainer } from "./styles";
import MiniCard from "../../components/BlogPageComponents/BlogCards/MiniCard/MiniCard";
import xmen from "../../../src/assets/images/x-men92.jpg";
import jaspionSword from "../../../src/assets/images/jaspion2.jpg";
import jaspion from "../../../src/assets/images/jaspion.webp";
import IA from "../../../src/assets/images/IA.jpg";
import WideCard from "../../components/BlogPageComponents/BlogCards/WideCard/WideCard";
import CarouselToCard from "../../components/CarouselToCard/CarouselTocard";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/BlogPageComponents/Header/Header";
import AdvertiseBannerComponent from "../../components/BlogPageComponents/AdvertiseBannerComponent/AdvertiseBannerComponent";
import anuncie from '../../assets/images/banner-anuncie-770x198.png'

const Blog = () => {
    const navigate = useNavigate();

    // Criação de função que envia diretamente o destino para o onCLick:

    const navigateToJaspionPage = () => {
        navigate('/dashboard/tv/jaspion');
    };

    // Criação de uma função genérica que recebe o destino da rota como parâmetro:

    const navigateToPage = (route: To) => {
        navigate(route);
    };

    return (
        <BodyContainer  id="top">
            <NavBar position={"static"} />
            <Header />
            <ProvisoryContainer>
                <AdvertiseBannerComponent src={anuncie}/>
                <CarouselToCard />
                
                <MiniCardContainer>
                    <MiniCard
                        imageUrl={xmen}
                        title={"X-MEN 97'"}
                        description={"Reviva a nostalgia com X-MEN 97' na Disney Plus! Esta série dos anos 90 retorna com recordes de audiência, trazendo de volta os amados personagens e aventuras épicas."}
                        author={"Alex Heisenberg"}
                        date={"22-03-2024"}
                        onClick={() => navigateToPage('/dashboard/tv/x-men97')}
                    />
                    
                    <MiniCard
                        imageUrl={jaspionSword}
                        title={"Jaspion Expo Brasil"}
                        description={"A exposição está programada para ocorrer no Pavilhão Japonês, localizado no Parque do Ibirapuera, fãs do personagem poderão..."}
                        author={"Alex Heisenberg"}
                        date={"23-03-2024"}
                        onClick={() => navigateToPage('/dashboard/expo/jaspionexpo')}
                    />

                    <MiniCard
                        imageUrl={IA}
                        title={"IA: O que é?"}
                        description={"IA é tecnologia que simula inteligência humana, usando algoritmos e dados para aprender e resolver problemas complexos de forma autônoma."}
                        author={"Alex Heisenberg"}
                        date={"22-03-2024"}
                        onClick={() => navigateToPage('/dashboard/tech/whatsia')}
                    />
        
                </MiniCardContainer>

                <br /> <br /> <br />
                <div style={{ display: "flex", justifyContent: "center"}}>
                    <WideCard
                        imageUrl={jaspion}
                        title={"Jaspion no Prime Video"}
                        description={"O Fantástico Jaspion, criado pelo profeta Edin, ele foi preparado para enfrentar o terrível Satan Goss..."}
                        author={"Alex Nascimento"}
                        date={"23-mar-2024"}
                        onClick={navigateToJaspionPage}
                    />
                </div>

                <br /> <br /> <br /><br />
               <center>
                <Link to="/" style={{ textDecoration: "underline", color: "#fff" }}>
                  <h3>Voltar pra Home</h3>
                </Link>
               </center>
            </ProvisoryContainer>
            <Footer />
        </BodyContainer>
    )
}

export default Blog;