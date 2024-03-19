import { Box, Container, Grid, Typography, styled } from "@mui/material";
import FingerPrintScanAnimation from "../../../../components/FingerPrintScanAnimation/FingerPrintScanAnimation";

const About = () => {
    const StyledAbout = styled("div")(({ }) => ({
        backgroundColor: "beige",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "40px",
        paddingBottom: "40px"
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
                        <Box position="relative" border="2px black solid" borderRadius="18px" padding="1.5rem 2.5rem">
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
                                Estou sempre em busca de novos desafios e oportunidades para aprimorar minha carreira.<br/><br/>
                                Se você precisa de um profissional comprometido e criativo, veio ao lugar certo! Trabalho por
                                contrato e com pequenos freelancers, oferecendo flexibilidade e eficiência em cada projeto.
                                Explore meu portfólio para conhecer um pouco do meu trabalho.<br/><br/> Sua presença é muito
                                bem-vinda e espero que tenha uma experiência agradável e inspiradora!
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={2}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <button>Veja a biografia completa</button>
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
