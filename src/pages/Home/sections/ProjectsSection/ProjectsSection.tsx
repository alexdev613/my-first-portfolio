import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    const projects = [
        { id: 1, title: "Formulário com validação + Tabela", link: "/projects/formyup", target: "_self" },
        { id: 2, title: "Calculadora de Receitas e Despesas", link: "https://controledefinancas-alexdev613.netlify.app/", target: "_blank" },
        { id: 3, title: "Projeto 3", link: "/", target: "" },
        { id: 4, title: "Projeto 4", link: "/", target: "" },
        { id: 5, title: "Projeto 5", link: "/", target: "" },
        { id: 6, title: "Projeto 6", link: "/", target: "" },
        { id: 7, title: "Projeto 7", link: "/", target: "" },
        { id: 8, title: "Projeto 8", link: "/", target: "" },
    ];

    return (
        <Grid container spacing={3} display={"flex"} textAlign='center' justifyContent="center" mt={0} pb={10} bgcolor={"beige"} >
            <h1 style={{width: '70%'}}>"Conheça alguns projetos"</h1>
            {projects.map((project) => (
                <Grid item xs={10} key={project.id}>
                    <Link to={project.link} style={{ textDecoration: "none" }} target={project.target}>
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
