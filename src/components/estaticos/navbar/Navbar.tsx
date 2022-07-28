import React from 'react';
import "../navbar/Navbar.css";
import { Box, Paper, Toolbar, Typography, AppBar } from "@material-ui/core";
function Navbar() {


    return (
        <>
            <AppBar position="static">
                <Toolbar className='header' variant="dense">
                    <div className="containerBlog">
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                               Blog Pessoal
                            </h2>
                            
                        </div>

                    </div>

                    <div className="containerNav">

                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                               home 
                            </h2>
                        </div>
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                                postagens
                            </h2>
                        </div>
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                                temas
                            </h2>
                        </div>
                        <div className="Box" style={{ cursor: "pointer" }}>
                            <h2>
                                cadastrar tema
                            </h2>
                        </div>
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2 >
                                logout
                            </h2>
                        </div>

                    </div>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;