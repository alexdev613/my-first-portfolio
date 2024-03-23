import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
    }))

    return (
        <>
            <AppBar position="fixed">
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                    <Link to="/contact">Contact</Link>
                    <MenuItem>
                        <Link
                            to="/dashboard"
                            style={{ textDecoration: "none", color: "#fff" }}
                        >
                            Blog
                        </Link>
                    </MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar;