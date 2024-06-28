import { Box, Container, Grid, Typography, styled } from "@mui/material";
import FingerPrintScanAnimation from "../../../../components/FingerPrintScanAnimation/FingerPrintScanAnimation";
import { Link } from "react-router-dom";
import { BiographyButton } from "./styles";

const About = () => {
    const StyledAbout = styled("div")(({ }) => ({
        // backgroundColor: "beige",
        backgroundImage: 'linear-gradient(to top right, rgba(255, 6, 6, 0.2), rgba(0, 0, 0, 0.2)), url(https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010125.jpg?w=826&t=st=1719543461~exp=1719544061~hmac=e0c05b52fb534c1e391e03fae368766a8be49a902cac6c54f0e42ea4944ba569)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
    }));

    const StyledAnimationContainer = styled(Grid)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            order: 1,
            marginTop: "30px",
        },
        [theme.breakpoints.up('md')]: {
            order: 2,
        },
    }));

    const StyledTextGrid = styled(Grid)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            order: 1,
        },
        [theme.breakpoints.up('md')]: {
            order: 2,
        },
    }));

    return (
        <StyledAbout>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <StyledAnimationContainer item xs={12} md={4}>
                        <Box position="relative" width={"100%"}>
                            <FingerPrintScanAnimation />
                        </Box>
                    </StyledAnimationContainer>
                    <StyledTextGrid item xs={12} md={8}>
                        <Box
                            position="relative"
                            border="2px solid silver"
                            borderRadius="1.875rem"
                            padding="1.5rem 2.5rem"
                            color="#eee"
                            //color="#000"
                            boxShadow="25px 25px 22px rgba(63, 239, 239, 0.05)"
                        >
                            <Typography variant="h4" fontWeight="bold">Apresentação:</Typography>
                            <Typography fontSize={18} fontWeight="bold" pl={4}>Desenvolvedor Front-end</Typography>
                            <Typography
                                fontSize={15}
                                fontWeight="bold"
                                pt={2}
                                display="flex"
                                textAlign="justify"
                            >
                                Olá! Sou Alex Heisenberg, um apaixonado desenvolvedor de sites corporativos e
                                aplicativos web com mais de 3 anos de experiência. Baseado em Pernambuco, trabalho
                                remotamente, garantindo serviços de qualidade para clientes em qualquer lugar do mundo.
                                Estou sempre em busca de novos desafios e oportunidades para aprimorar minha carreira.
                            </Typography>
                            <Typography
                                fontSize={15}
                                fontWeight="bold"
                                pt={2}
                                display="flex"
                                textAlign="justify"
                            >
                                Se você precisa de um profissional comprometido e criativo, veio ao lugar certo! Trabalho por
                                contrato e com pequenos freelancers, oferecendo flexibilidade e eficiência em cada projeto.
                                Explore meu portfólio para conhecer um pouco do meu trabalho.
                            </Typography>
                            <Typography
                                fontSize={15}
                                fontWeight="bold"
                                pt={2}
                                display="flex"
                                textAlign="justify"
                            >
                                Sua presença é muito bem-vinda e espero que tenha uma experiência agradável e inspiradora!
                            </Typography>
                            
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={2}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Link to={"/biography"}>
                                        <BiographyButton>Veja a biografia completa</BiographyButton>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </StyledTextGrid>
                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;
