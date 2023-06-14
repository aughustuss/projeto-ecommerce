import { ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../utils/theme'
import ReusableTextfield from './reusables/Textfield'
import { RiSendPlaneFill } from 'react-icons/ri'
import ReusableIconButton from './reusables/Iconbutton'
import { IoMdMail } from 'react-icons/io'
import ReusableButton from './reusables/Button'
const Newsletter = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <section className='w-full py-10 flex flex-col bg-white shadow-md min-h-[340px] h-auto max-h-fit items-center rounded-md mb-10 text-gray'>
                    <div className='flex flex-col justify-evenly h-full w-5/6 items-center gap-y-4'>
                        <p className='text-5xl font-semibold text-center text-primary font-title '>Assine nossa Newsletter!</p>
                        <div className='w-full'>
                            <form className='flex flex-col sm:flex-row w-full gap-y-2 lg:bg-primary rounded-l-xl'>
                                <input className='w-full text-sm bg-slate-200 h-full lg:rounded-l-md outline-none p-2' placeholder='Digite seu email...'/>
                                <ReusableButton size='small' variant='contained' classes='min-w-[200px]' endIcon={<RiSendPlaneFill />}>
                                    Enviar
                                </ReusableButton>
                            </form>
                        </div>
                        <div className='w-full text-center'>
                            Receba novidades em seu e-mail, como promoções, cupons de desconto e muito mais. Além disso, ao se cadastrar agora você receberá um cupom de <span className='text-primary font-semibold text-2xl font-title'>20%</span> de desconto!
                        </div>
                    </div>
                </section>
            </ThemeProvider>
        </>
    )
}

export default Newsletter