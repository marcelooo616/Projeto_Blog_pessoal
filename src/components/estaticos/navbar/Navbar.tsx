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
                                 <a href='http://localhost:3000/home'>home</a>
                            </h2>
                        </div>
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                               <a href=''>postagens</a> 
                            </h2>
                        </div>
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                                 <a href=''>temas</a> 
                            </h2>
                        </div>
                        <div className="Box" style={{ cursor: "pointer" }}>
                            <h2>
                                 <a href=''>cadastrar tema</a> 
                            </h2>
                        </div>
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2 >
                                    <a href='http://localhost:3000/login'>login</a>     
                            </h2>
                        </div>

                    </div>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;