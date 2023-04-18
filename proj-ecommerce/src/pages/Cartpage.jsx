import React, { useContext } from 'react'
import { CartContext } from '../contexts/Cart';
import CartpageItem from '../components/CartpageItem';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'rgb(126, 34, 206)',
    border: '1px solid rgb(126, 34, 206)',
    padding: '1rem',
    margin: '0',
    minWidth: '0',
    borderRadius: '0',
    display: 'flex',
    alignItems: 'center',
    fontSize: '.8em',
    '&:hover': {
        backgroundColor: 'rgb(88, 28, 135)'
    }
}));

const CheckoutButton = styled(Button)(({ theme }) => ({
    color: 'rgb(126, 34, 206)',
    backgroundColor: 'transparent',
    border: '1px solid rgb(126, 34, 206)',
    padding: '1rem',
    margin: '0',
    minWidth: '0',
    borderRadius: '0',
    display: 'flex',
    alignItems: 'center',
    fontSize: '.8em',
    '&:hover': {
        border: '1px solid rgb(126, 34, 206)',
        backgroundColor: 'rgb(88, 28, 135)',
        color: 'white'
    }
}));

const Cartpage = () => {

    const { cart, totalPrice, itemAmount } = useContext(CartContext);

    return (
        <>
            <section className='container mx-auto pb-16 md:pt-56 pt-72 md:h-screen font-montserrat'>
                <div className='border bg-white h-screen md:h-full flex flex-col justify-between px-4 lg:px-8 py-2' >
                    <div className='flex flex-col items-center w-full gap-y-2 overflow-x-hidden overflow-auto mb-4'>
                        {cart.map((item) => {
                            return (
                                <CartpageItem item={item} key={item.id} />
                            )
                        })}
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between items-center relative gap-2' >
                        <div className='font-semibold text-sm sm:text-md'>
                            Total das compras: R${parseFloat(totalPrice).toFixed(2)}
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