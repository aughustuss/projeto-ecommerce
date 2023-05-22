import React, { useContext } from 'react'
import { CartContext } from '../contexts/Cart';
import CartpageItem from '../components/CartpageItem';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#19456B',
    border: '1px solid #19456B',
    padding: '1rem',
    margin: '0',
    minWidth: '0',
    borderRadius: '0',
    display: 'flex',
    alignItems: 'center',
    fontSize: '.8em',
    '&:hover': {
        backgroundColor: '#0f3f69'
    }
}));

const CheckoutButton = styled(Button)(({ theme }) => ({
    color: '#19456B',
    backgroundColor: 'transparent',
    border: '1px solid #19456B',
    padding: '1rem',
    margin: '0',
    minWidth: '0',
    borderRadius: '0',
    display: 'flex',
    alignItems: 'center',
    fontSize: '.8em',
    '&:hover': {
        border: '1px solid #19456B',
        backgroundColor: '#0f3f69',
        color: 'white'
    }
}));

const Cartpage = () => {

    const { cart, totalPrice, itemAmount } = useContext(CartContext);

    return (
        <>
            <section className='w-full pb-6 md:pt-32 pt-36 md:h-screen'>
                
                <div className='border bg-white h-screen md:h-full flex flex-col justify-between px-4 lg:px-8 py-2' >
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
                                <ColorButton className=' w-full'>
                                    Continuar comprando
                                </ColorButton>
                            </Link>
                            <CheckoutButton className='w-full' >
                                checkout
                            </CheckoutButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cartpage