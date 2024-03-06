import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/alex.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <=mobile 600-
            // paddingTop: "100px",
            height: "100vh",
        },
        [theme.breakpoints.up('sm')]: { // <=mobile 600+
            paddingTop: "20px",
            height: "120vh",
        },
        [theme.breakpoints.up('md')]: { // >=tablet 900+
            paddingTop: "0",
            height: "100vh",
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        // width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        [theme.breakpoints.up('xs')]: { // <=mobile 600-
            width: "65%",
        },
        [theme.breakpoints.up('sm')]: { // <=mobile 600+
            width: "70%",
        },
        [theme.breakpoints.up('md')]: { // >=tablet 900+
            width: "75%",
        }
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center">Alex Heisenberg</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>I'm a Software Engineer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon />
                                    Download CV
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <MailOutlineIcon />
                                    Contact me
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  