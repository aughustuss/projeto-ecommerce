import { InputAdornment, TextField, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../utils/theme'
import ReusableButton from '../components/reusables/Button'
import { Link } from 'react-router-dom'
import { set, useForm } from 'react-hook-form'
import { MdMail, MdPassword } from 'react-icons/md'
import { IoMdArrowBack } from 'react-icons/io'
import axios from 'axios'

const Login = () => {
    const { register, formState: { errors }, reset, getValues, handleSubmit } = useForm();
    const [token, setToken] = useState("");
    const onSubmit = async (data) => {
        try {
            const res = await axios.post("http://localhost:3000/user/login", data);
            if(res.data.token){
                localStorage.setItem("token:", res.data.token);
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <main className='min-h-screen flex flex-col items-center justify-center container mx-auto px-2 md:px-0 relative'>
                    <div className='flex flex-col w-full md:w-1/2 lg:w-1/4 p-4 gap-4 items-center'>
                        <h1 className='text-5xl font-title font-semibold'>Faça seu login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} action="" className='w-full flex flex-col gap-4'>
                            <TextField
                                label='Email'
                                type='Email'
                                fullWidth
                                size='small'
                                {...register("email", {
                                    required: true,
                                })}
                                error={errors.email && (errors.email.type === 'required' ? true : false)}
                                helperText={errors.email && (errors.email.type === 'required' ? 'Digite seu email.' : '')}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <MdMail />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <TextField
                                label="Senha"
                                type="password"
                                fullWidth
                                size='small'
                                {...register("password", {
                                    required: true,
                                })}
                                error={errors.password && (errors.password.type === 'required' ? true : false)}
                                helperText={errors.password && (errors.password.type === 'required' ? 'Digite sua senha.' : '')}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <MdPassword />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <ReusableButton variant='contained' type="submit">Enviar</ReusableButton>
                        </form>
                        <p className='text-xs self-end'>Não possui uma conta? <Link to={'/register'} className='underline text-primary'>Crie uma!</Link></p>
                    </div>
                </main>
                <Link to={'/'} className='absolute left-0 top-1'>
                    <IoMdArrowBack size={32} />
                </Link>
            </ThemeProvider>
        </>
    )
}

export default Login