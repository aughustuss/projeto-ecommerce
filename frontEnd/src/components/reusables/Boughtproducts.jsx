import { Alert, Snackbar } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/Product'

const Boughtproducts = ({ product }) => {
    const [confirmedReceive, setConfirmedReceive] = useState(false);
    const [confirmedDevolution, setConfirmedDevolution] = useState(false);
    return (
        <>
            <div className='flex flex-col font-body max-w-[480px] min-h-[160px] justify-between bg-white rounded-md border border-slate-300 p-4 relative gap-y-4'>
                <div className='flex flex-col lg:flex-row min-h-[110px] gap-4'>
                    <img src={product.image} className='h-full w-20 object-contain self-center' />
                    <div className='flex flex-col gap-y-2'>
                        <p className='text-sm'>{product.title}</p>
                        <p className='text-xs'>Valor Único do produto: R$<span className='text-secondary font-bold'>{product.price}</span> </p>
                        <p className='text-xs cursor-not-allowed'>Valor do seguro: R$<span className=' text-secondary font-bold'>{((product.price) * 0.1).toFixed(2)}</span> </p>
                        <p className='text-xs'>Valor pago pelo Produto: R$<span className=' text-secondary font-bold'>{((product.price) + ((product.price)*0.1)).toFixed(2)}</span> </p>
                        <p className='text-xs'>Status: <span className=' text-tertiary'>Aguardando envio</span> </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-start lg:items-center gap-x-10 self-start'>

                    <div className='flex flex-row items-center gap-2'>
                        <input onClick={() => setConfirmedReceive(true)} type="checkbox" />
                        <label className='text-xs' htmlFor="">Confirmar Recebimento</label>
                    </div>

                    <div className={`${!confirmedReceive ? 'cursor-not-allowed text-gray' : ''} flex flex-row items-center gap-2`}>
                        <input disabled={!confirmedReceive} onClick={() => setConfirmedDevolution(true)} type="checkbox" />
                        <label className='text-xs' htmlFor="">Confirmar Devolução</label>
                    </div>
                </div>

                <Snackbar open={confirmedReceive} autoHideDuration={4000} onClose={() => setConfirmedReceive(!confirmedReceive)}>
                    <Alert onClose={() => setConfirmedReceive(false)} severity='success' >
                        Confirmação de recebimento realizada com sucesso.
                    </Alert>
                </Snackbar>
                <Snackbar open={confirmedDevolution} autoHideDuration={4000} onClose={() => confirmedReceive(!confirmedDevolution)}>
                    <Alert onClose={() => setConfirmedDevolution(false)} severity='success' >
                        Confirmação de devolução realizada com sucesso.
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default Boughtproducts