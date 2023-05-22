import { Button, styled } from '@mui/material';
import React, { useContext } from 'react'
import { CartContext } from '../contexts/Cart';

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: 'transparent',
    padding: '0',
    margin: '0',
    minWidth: '0',
    borderRadius: '0',
    '&:hover': {
        backgroundColor: 'transparent'
    }
}));

const CartpageItem = ({ item }) => {

    const {increase, decrease, removeFromCart} = useContext(CartContext);
    const {image, title, price, id, amount} = item

    return (
        <>
            <div className='border w-full px-4 h-[100px] flex items-center justify-between relative'>
                <div className='items-center flex flex-row gap-x-2'>
                    <div>
                        <img className='min-w-[60px] max-w-[70px] max-h-[80px] h-[80px]' src={image} />
                    </div>
                    <div className='flex flex-col' >
                        <div className='uppercase text-[10px] md:text-sm font-semibold' >{title}</div>
                        <div className='text-xs font-semibold' > <span className='text-secondary'>R$</span> {price}</div>
                    </div>
                    
                </div>
                <div className='flex flex-row gap-x-3 border justify-between items-center h-[40px] md:h-[30px]'>
                    <ColorButton onClick={() => increase(id)} className='h-full w-6'>+</ColorButton>
                    {amount}
                    <ColorButton onClick={() => decrease(id)} className=' h-full w-6' >-</ColorButton>
                </div>
                <div onClick={() => removeFromCart(id)} className='absolute right-0 top-0 px-1 text-[15px] sm:text-[13px] cursor-pointer' >
                    x
                </div>
            </div>
        </>
    )
}

export default CartpageItem