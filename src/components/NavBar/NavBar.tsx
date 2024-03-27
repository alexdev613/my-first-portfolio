import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
    position: "fixed" | "sticky" | "relative" | "static" | "absolute" | undefined // Aqui defini os tipos permitidos para a propriedeade position
}

const NavBar: React.FC<NavBarProps> = ({ position }) => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-around",
    }));

    return (
        <>
            <AppBar position={position}>
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>
                            Projects
                    </MenuItem>
                    <MenuItem>
                        <Link
                            to="/contact"
                            style={{ textDecoration: "inherit", color: "#fff" }}
                        >
                                Contact
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            to="/dashboard"
                            style={{ textDecoration: "inherit", color: "#fff" }}
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



// import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
// import { Link } from "react-router-dom";

// const NavBar = () => {

//     const StyledToolbar = styled(Toolbar)(() => ({
//         display: "flex",
//         justifyContent: "space-evenly",
//     }))

//     return (
//         <>
//             <AppBar position="fixed">
//                 <StyledToolbar>
//                     <MenuItem>About</MenuItem>
//                     <MenuItem>Skills</MenuItem>
//                     <MenuItem>Projects</MenuItem>
//                     <MenuItem>
//                         <Link
//                             to="/contact"
//                             style={{ textDecoration: "inherit", color: "#fff" }}
//                         >
//                                 Contact
//                         </Link>
//                     </MenuItem>
//                     <MenuItem>
//                         <Link
//                             to="/dashboard"
//                             style={{ textDecoration: "inherit", color: "#fff" }}
//                         >
//                             Blog
//                         </Link>
//                     </MenuItem>
//                 </StyledToolbar>
//             </AppBar>
//         </>
//     )
// }

// export default NavBar;