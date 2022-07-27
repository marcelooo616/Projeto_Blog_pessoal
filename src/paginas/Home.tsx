import React from "react";
import {Box,  Button,  Paper } from "@material-ui/core";
import "./home/Home.css";


function Home(){
    return(
        /** '  <></> ' - Caminho abreviado fragment que o react utiliza para poder retornar um ou mais elementos
        <>

        Exemplo de grid 
            <Grid container spacing={2}>

                     <Grid item xs={12} sm={8}>
                        <Paper style={{ height: "100vh", background: "red"}}/>
                     </Grid>

                <Grid item container direction="column" xs ={12} sm={4} spacing={2}>
                         <Grid item>
                            <Paper style={{ height: "49vh", background: "orange"}} />
                         </Grid>
                         <Grid item>
                            <Paper style={{ height: "49vh", background: "green"}}/>
                         </Grid>

                </Grid>
           </Grid>
        </>
        */
       <>

           <h1>Home</h1>
       
       </>
    )
}

export default Home;