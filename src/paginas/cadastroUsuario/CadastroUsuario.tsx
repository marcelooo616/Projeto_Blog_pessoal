import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto:''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto:''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate('/login')
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            console.log(user)
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        
            })
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        
            })
        }
    }




    return (
        <>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={6} className="imagem"></Grid>
                <Grid container item xs={6} justifyContent="center" >


                    <div>
                        <form className='form2' onSubmit={onSubmit}>

                            <h2>Cadastro</h2>

                            <div className='div'>

                                <div className='nome' >
                                    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label="nome" variant='outlined' name='nome' fullWidth />
                                </div>
                                <div className='usuario'>
                                    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label="usuario" variant='outlined' name='usuario' fullWidth />
                                </div>
                                <div className='senha'>
                                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label="senha" variant='outlined' name='senha' type="text" fullWidth />
                                </div >
                                <div>
                                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confimarSenha' label="confimarSenha" variant='outlined' name='confimarSenha' type="text" fullWidth />
                                </div>
                            </div>



                            <div className='buttontContainer' >

                                <div className="buttonCancelar">
                                    <Link to='/login' className='text-decorator-none'>
                                        <button>
                                            <span className="shadow"></span>
                                            <span className="edge"></span>
                                            <span className="front text"> Cancelar
                                            </span>
                                        </button>
                                    </Link>
                                </div>


                                <div className="buttonCadastrar">

                                    <button type='submit'>
                                        <span className="shadow"></span>
                                        <span className="edge"></span>
                                        <span className="front text"> Cadastrar
                                        </span>
                                    </button>

                                </div>




                            </div>












                        </form>


                    </div>
                </Grid>

            </Grid>


        </>
    )
}

export default CadastroUsuario;