import { Link } from "react-router-dom";
import Footer from "../Home/sections/Footer/Footer";
import { BodyContainer, MiniCardContainer } from "./styles";
import MiniCard from "../../components/MiniCard/MiniCard";
import xmen from "../../../src/assets/images/x-men92.jpg";
import jaspionSword from "../../../src/assets/images/jaspion2.jpg";
import IA from "../../../src/assets/images/IA.jpg";

const Blog = () => {
    return (
        <>
        <BodyContainer>
            <h1>Olá Mundo!</h1>
            <MiniCardContainer>
                <MiniCard
                    imageUrl={xmen}
                    title={"X-MEN 97'"}
                    description={"Reviva a nostalgia com X-MEN 97' na Disney Plus! Esta série dos anos 90 retorna com recordes de audiência, trazendo de volta os amados personagens e aventuras épicas."}
                    author={"Alex Heisenberg"}
                    date={"22-03-2024"}
                />
                
                <MiniCard
                    imageUrl={jaspionSword}
                    title={"Jaspion Expo Brasil"}
                    description={"A exposição está programada para ocorrer no Pavilhão Japonês, localizado no Parque do Ibirapuera, fãs do personagem poderão..."}
                    author={"Alex Heisenberg"}
                    date={"23-03-2024"}
                />

                <MiniCard
                    imageUrl={IA}
                    title={"IA: O que é?"}
                    description={"IA é tecnologia que simula inteligência humana, usando algoritmos e dados para aprender e resolver problemas complexos de forma autônoma."}
                    author={"Alex Heisenberg"}
                    date={"22-03-2024"}
                />
                
            </MiniCardContainer>
            <Link to="/" style={{ textDecoration: "underline", color: "#fff" }}>Voltar pra Home</Link>
        </BodyContainer>
        <Footer />
        </>
    )
}

export default Blog;