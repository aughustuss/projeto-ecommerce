import React from 'react'
import { useForm } from 'react-hook-form'
import { ThemeProvider, TextField, createTheme, Button, styled } from '@mui/material'

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root' : {
        '&:hover fieldset': {
            'borderColor' : 'rgb(126, 34, 206)'
        }
    }
})

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'rgb(126, 34, 206)',
    padding: '1rem',
    margin: '0',
    minWidth: '0',
    borderRadius: '0',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '&:hover': {
      backgroundColor: 'rgb(88, 28, 135)'
    }
  }));

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

    const theme = createTheme({
        components: {

        },
        palette: {
            mode: 'light',
            primary: {
                main: 'rgb(126, 34, 206)'
            }
        }
    })

    return (
        <>
            <ThemeProvider theme={theme}>
                <section className='container mx-auto pb-16 pt-48 font-montserrat' >
                    <div className='flex border bg-white justify-center h-fit max-h-[800px] w-full p-4'>
                        <div className='flex flex-col w-full justify-center items-center '>
                            <div className='uppercase text-3xl font-semibold py-10 text-white bg-purple-700 w-full text-center'>
                                Entre em contato
                            </div>
                            <form onSubmit={onSubmit} className='flex flex-col items-center h-full w-full md:w-1/2 py-2 gap-y-4 justify-between' action="">
                                <div className='w-full flex flex-col gap-y-4' >
                                    <StyledTextField
                                        label='Nome'
                                        name='username'
                                        {...register("name", {
                                            required: true,
                                            maxLength: 100,
                                        })}
                                        helperText={errors.name && (errors.name.type === 'required' ? 'Preencha seu nome' : 'Máximo de 100 caractéres.')}
                                    />
                                    <StyledTextField
                                        label='Email'
                                        name='useremail'
                                        {...register("email",{ 
                                            required: true,
                                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        })}
                                        helperText={errors.email && (errors.email.type === 'required' ? 'Preencha seu e-mail' : 'E-mail inválido')}
                                    />
                                    <StyledTextField
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
                                    <ColorButton type='submit' variant='contained'fullWidth >Enviar</ColorButton>
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