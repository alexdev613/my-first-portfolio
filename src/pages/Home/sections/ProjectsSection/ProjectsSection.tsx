import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    const projects = [
        { id: 1, title: "Projeto 1", link: "/" },
        { id: 2, title: "Projeto 2", link: "/" },
        { id: 3, title: "Projeto 3", link: "/" },
        { id: 4, title: "Projeto 4", link: "/" },
        { id: 5, title: "Projeto 5", link: "/" },
        { id: 6, title: "Projeto 6", link: "/" },
        { id: 7, title: "Projeto 7", link: "/" },
        { id: 8, title: "Projeto 8", link: "/" },
        // Adicione mais projetos conforme necessário
    ];

    return (
        <Grid container spacing={3} display={"flex"} textAlign='center' justifyContent="center" mt={0} pb={10} bgcolor={"beige"} >
            <h1 style={{width: '70%'}}>Área dos Projetos (Em construção) aguarde ...</h1>
            {projects.map((project) => (
                <Grid item xs={10} key={project.id}>
                    <Link to={project.link} style={{ textDecoration: "none" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ height: "60px" }}
                        >
                            {project.title}
                        </Button>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProjectsSection;
