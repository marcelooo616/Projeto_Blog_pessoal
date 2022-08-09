import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import "../login/Login.css";
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/Actions';
function Login() {


    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState ('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""

        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token != ""){
            dispatch( addToken(token))
            navigate('/home')
        }
    },[token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
             await login(`/usuarios/logar`, userLogin,setToken)
            

            alert("Usuario logado com sucesso!")
        } catch (error) {
            alert("Dados do usuario inconsistentes. Erro ao logar!")
            
        }

    }
    return (
        <>
            <Grid className=" containerLogin" >
                <Grid xs={6}>
                    <div className='cardLogin'  >
                        <div className='box'>
                            <form onSubmit={onSubmit} className='form'>

                                <h2>Enter</h2>
                                <div className='div'>
                                    <div className='div2'>
                                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='login' id='usuario' label="usuario" variant='outlined' name='usuario' fullWidth />
                                    </div>
                                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='senha' id='senha' label="senha" variant='outlined' name='senha' type="password" fullWidth />
                                </div>
                                <div className='paddingX' >

                                    <button type = "submit">
                                        <span className="shadow"></span>
                                        <span className="edge"></span>
                                        <span className="front text"> Logar
                                        </span>
                                    </button>




                                </div>

                                <div className='cadastro'>
                                    <h2>Não tem conta?</h2>
                                    <Link to="/cadastrousuario">
                                        <h1> Cadastre-se</h1>
                                    </Link>

                                </div>


                            </form>
                        </div>
                    </div>



                </Grid>

                <Grid xs={6} className="secao-principal-imagem">
                    <img src='https://i.imgur.com/qtd3a9w.png' width="500px" height="450px" className='principal-imagem-item'/>
                </Grid>
            </Grid>
        </>
    )
}

export default Login;