import React from 'react'
import { useForm } from 'react-hook-form'
import { ThemeProvider} from '@mui/material'
import { theme } from '../utils/theme';
import ReusableTextfield from '../components/reusables/Textfield';
import ReusableButton from '../components/reusables/Button';
import { RiSendPlaneFill } from 'react-icons/ri';


const Contact = () => {

    const {trigger, register, formState: {errors}, reset} = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        } else {
            reset();
        }
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <section className='w-full pb-6 md:pt-32 pt-36' >
                    <div className='flex border border-slate-200 shadow-md rounded-md bg-white justify-center h-fit max-h-[800px] w-full p-4'>
                        <div className='flex flex-col w-full justify-center items-center '>
                            <div className='uppercase text-3xl font-semibold py-6 rounded-md text-white bg-primary w-full text-center'>
                                Entre em contato
                            </div>
                            <form onSubmit={onSubmit} className='flex flex-col items-center h-full w-full md:w-1/2 py-2 gap-y-4 justify-between' action="">
                                <div className='w-full flex flex-col gap-y-4' >
                                    <ReusableTextfield
                                        label='Nome'
                                        name='username'
                                        {...register("name", {
                                            required: true,
                                            maxLength: 100,
                                        })}
                                        size="small"
                                        helperText={errors.name && (errors.name.type === 'required' ? 'Preencha seu nome' : 'Máximo de 100 caractéres.')}
                                    />
                                    <ReusableTextfield
                                        label='Email'
                                        name='useremail'
                                        {...register("email",{ 
                                            required: true,
                                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        })}
                                        size="small"
                                        helperText={errors.email && (errors.email.type === 'required' ? 'Preencha seu e-mail' : 'E-mail inválido')}
                                    />
                                    <ReusableTextfield
                                        rows={8}
                                        multiline
                                        label='Mensagem'
                                        name='usermsg'
                                        {...register("msg", {
                                            required: true,
                                            maxLength: 2000
                                        })}
                                        
                                        helperText={errors.msg && (errors.msg.type === 'required' ? 'Escreva sua mensagem' : 'Máximo de 2000 caractéres. ')}
                                    />
                                </div>
                                <div className='w-full'>
                                    <ReusableButton type='submit' endIcon={<RiSendPlaneFill/>} variant='contained' classes='w-full' >Enviar</ReusableButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </ThemeProvider>
        </>
    )
}

export default Contact