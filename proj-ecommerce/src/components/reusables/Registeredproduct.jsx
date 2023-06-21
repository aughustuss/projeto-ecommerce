import React, { useState } from 'react'
import { BsPen } from 'react-icons/bs'
import ReusableButton from './Button'
import { Alert, Snackbar } from '@mui/material';

const Registeredproduct = ({ product }) => {
    const [confirmedReceive, setConfirmedReceive] = useState(false);
    const [confirmedSend, setConfirmedSend] = useState(false);
    return (
        <>
            <div className='flex flex-col font-body max-w-[480px] min-h-[160px] justify-between bg-white rounded-md border border-slate-300 p-4 relative gap-y-4'>
                <div className='flex flex-col lg:flex-row justify-between min-h-[110px] gap-4'>
                    <img src={product.image} className='h-full w-20 object-contain self-center' />
                    <div className='flex flex-col gap-y-2'>
                        <p className='text-sm'>{product.title}</p>
                        <p className='text-xs'>Valor do Produto: R$<span className=' text-secondary font-bold'>{product.price}</span> </p>
                        <p className='text-xs cursor-not-allowed'>Valor do seguro: R$<span className=' text-secondary font-bold'>{((product.price)*0.1).toFixed(2)}</span> </p>
                        <p className='text-xs'>Status: <span className='text-secondary'>Disponível</span> </p>
                    </div>
                    <div title='Editar' className='bg-primary rounded-md p-2 h-fit w-fit text-white cursor-pointer hover:bg-primary/90 transition duration-200 absolute right-2 top-4 lg:relative lg:right-0'>
                        <BsPen size={18} />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-start lg:items-center gap-x-10 self-start'>
                
                    <div className='flex flex-row items-center gap-2'>
                        <input onClick={() => setConfirmedSend(true)} type="checkbox" />
                        <label className='text-xs' htmlFor="">Confirmar Envio</label>
                    </div>

                    <div className={`${!confirmedSend ? 'cursor-not-allowed text-gray' : ''} flex flex-row items-center gap-2`}>
                        <input disabled={!confirmedSend} onClick={() => setConfirmedReceive(true)} type="checkbox" />
                        <label className='text-xs' htmlFor="">Confirmar Recebimento</label>
                    </div>
                </div>
                <Snackbar open={confirmedSend} autoHideDuration={4000} onClose={() => setConfirmedSend(!confirmedSend)}>
                    <Alert onClose={() => setConfirmedSend(false)} severity='success' >
                        Confirmação de envio realizada com sucesso.
                    </Alert>
                </Snackbar>
                <Snackbar open={confirmedReceive} autoHideDuration={4000} onClose={() => confirmedReceive(!confirmedReceive)}>
                    <Alert onClose={() => setConfirmedReceive(false)} severity='success' >
                        Confirmação de recebimento realizada com sucesso.
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default Registeredproduct