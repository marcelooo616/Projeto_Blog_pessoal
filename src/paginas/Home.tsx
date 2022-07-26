import React from "react";
import "./home/Home.css";

function Home(){
    return(
        /** '  <></> ' - Caminho abreviado fragment que o react utiliza para poder retornar um ou mais elementos*/
        <>
            <div className="containerHome">
                <h1>Home</h1>
                <img src="http://i.imgur.com/H88yIo2.png"  alt="tela inicial"/>
            </div>
        </>
    )
}

export default Home;