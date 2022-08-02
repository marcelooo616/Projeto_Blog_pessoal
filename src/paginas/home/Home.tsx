import React from "react";
import { Grid, Box, Typography, Button, Paper } from "@material-ui/core";
import "./Home.css";


function Home() {
    return (



        <>

            <div className="container"   >
                <div className="home">
                    <div className="texto"  >
                        <h3 >Seja bem vindo(a)!</h3>
                        <h5>expresse aqui os seus pensamentos e opiniões!</h5>
                    </div>
                    <button className="button">
                        <span  className="shadow"></span>
                        <span  className="edge"></span>
                        <span  className="front text"> Ver Postagens
                        </span>
                    </button>
                </div>
                <div className="img" >
                    <img src="https://i.imgur.com/GxMP4HH.png" alt="" width="500px" height="500px" />

                </div>

            </div>
        </>


    )
}

export default Home;