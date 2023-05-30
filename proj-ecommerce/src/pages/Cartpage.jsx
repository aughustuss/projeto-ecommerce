import React, { useContext } from 'react'
import { CartContext } from '../contexts/Cart';
import CartpageItem from '../components/CartpageItem';
import { Button, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../utils/theme';
import ReusableButton from '../components/reusables/Button';

const Cartpage = () => {

    const { cart, totalPrice, itemAmount } = useContext(CartContext);

    return (
        <>
            <ThemeProvider theme={theme}>
                <section className='w-full pb-6 md:pt-32 pt-20 md:h-screen text-gray'>
                    <div className='bg-white rounded-md shadow-md h-screen md:h-full flex flex-col justify-between p-2 lg:px-8' >
                        {cart.length === 0 ? (
                            <div className='flex items-center justify-center h-full w-full text-sm'>
                                Seu carrinho ainda está vazio...
                            </div>
                        ) : (null)}
                        <div className='flex flex-col items-center w-full gap-y-2 overflow-x-hidden overflow-auto mb-4'>
                            {cart.map((item) => {
                                return (
                                    <CartpageItem item={item} key={item.id} />
                                )
                            })}
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between items-center relative gap-2' >
                            <div className='font-semibold text-xs md:text-sm textse'>
                                Total das compras: <span className='text-secondary'>R$</span>{parseFloat(totalPrice).toFixed(2)}
                            </div>
                            <div className='flex flex-col sm:flex-row gap-y-2 sm:gap-x-2 sm:gap-y-0 w-full md:w-2/4'>
                                <Link to='/' className='w-full' >
                                    <ReusableButton variant='contained' className=' w-full'>
                                        Continuar comprando
                                    </ReusableButton>
                                </Link>
                                <ReusableButton variant='outlined' className='w-full' >
                                    checkout
                                </ReusableButton>
                            </div>
                        </div>
                    </div>
                </section>
            </ThemeProvider>
        </>
    )
}

export default Cartpage