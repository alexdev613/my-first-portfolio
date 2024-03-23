import { Link } from "react-router-dom";
import Footer from "../Home/sections/Footer/Footer";
import { BodyContainer, MiniCardContainer } from "./styles";
import MiniCard from "../../components/MiniCard/MiniCard";
import xmen from "../../../src/assets/images/x-men92.jpg";

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
                    imageUrl={xmen}
                    title={"X-MEN 97'"}
                    description={"Reviva a nostalgia com X-MEN 97' na Disney Plus! Esta série dos anos 90 retorna com recordes de audiência, trazendo de volta os amados personagens e aventuras épicas."}
                    author={"Alex Heisenberg"}
                    date={"22-03-2024"}
                />

                <MiniCard
                    imageUrl={xmen}
                    title={"X-MEN 97'"}
                    description={"Reviva a nostalgia com X-MEN 97' na Disney Plus! Esta série dos anos 90 retorna com recordes de audiência, trazendo de volta os amados personagens e aventuras épicas."}
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