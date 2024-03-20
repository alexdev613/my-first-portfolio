import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="fixed">
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Porjects</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <MenuItem>Blog</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar;