import React, { useState } from 'react'
import { AiOutlineHistory } from 'react-icons/ai'
import { BsBagFill, BsFillBoxSeamFill } from 'react-icons/bs'
import { MdAccountBox, MdArrowBack } from 'react-icons/md'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import ReusableButton from '../components/reusables/Button'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../utils/theme'
import { InputLabel, MenuItem, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import Categories from '../components/Categories'
import { CategoriesArray } from '../utils/datas'
const Profile = () => {
    const [registeringProd, setRegisteringProd] = useState(false);
    const { register, getValues, formState: { errors }, watch } = useForm();
    const productValue = watch("price");
    const percentageValue = productValue ? productValue * 0.1 : 0;
    return (
        <ThemeProvider theme={theme}>
            <main className='min-h-screen w-full z-0 font-body'>
                <div>
                    <Tabs className='flex flex-col lg:flex-row w-screen' allowFullScreen>
                        <TabList className='flex text-sm lg:max-w-[280px] mr-4 mb-4 w-full pb-6 lg:min-h-screen shadow-sm bg-white pt-20 lg:pt-28 items-center flex-col gap-1 px-4'>
                            <Tab selectedClassName='bg-gray/20' className='relative flex flex-row items-center w-full justify-center hover:bg-gray/20 p-4 transition duration-200 rounded-md' >
                                <p className=' text-center'>Minha Conta</p>
                                <MdAccountBox size={20} className='absolute left-4' />
                            </Tab>
                            <Tab selectedClassName='bg-gray/20' className='relative flex flex-row items-center w-full justify-center hover:bg-gray/20 p-4 transition duration-200 rounded-md'>
                                <p className=' text-center'>Meus Pedidos</p>
                                <BsBagFill size={18} className='absolute left-4' />
                            </Tab>
                            <Tab selectedClassName='bg-gray/20' className='relative flex flex-row items-center w-full justify-center hover:bg-gray/20 p-4 transition duration-200 rounded-md'>
                                <p className=' text-center'>Meus Produtos</p>
                                <BsFillBoxSeamFill size={18} className='absolute left-4' />
                            </Tab>
                            <Tab selectedClassName='bg-gray/20' className='relative flex flex-row items-center w-full justify-center hover:bg-gray/20 p-4 transition duration-200 rounded-md'>
                                <p className=' text-center'>Meu Histórico</p>
                                <AiOutlineHistory size={18} className='absolute left-4' />
                            </Tab>
                        </TabList>
                        <TabPanel className='lg:pt-28 w-auto'>
                            <h1>Conta...</h1>
                        </TabPanel>
                        <TabPanel className='lg:pt-28'>
                            <h1>pedidos...</h1>
                        </TabPanel >
                        <TabPanel allowTransparency className='lg:pt-28 h-auto max-h-fit lg:max-h-[620px] mx-4 mb-4 lg:mb-0 lg:mx-0 '>
                            {!registeringProd ? (
                                <div className='h-full  max-w-full flex flex-col gap-y-6 justify-between items-center'>
                                    <div className='flex flex-col gap-y-6 self-start'>
                                        <h1 className='text-xl'>Seus produtos cadastrados: </h1>
                                        <div className='w-auto max-w-xl '>
                                            map no produtos...
                                            <div className='min-h-[160px] w-[260px] border border-slate-300 bg-white rounded-md '>

                                            </div>
                                        </div>
                                    </div>
                                    <ReusableButton onClick={() => setRegisteringProd(true)} variant='contained' classes='w-[260px] self-start'>
                                        novo produto +
                                    </ReusableButton>
                                </div>
                            ) : (
                                <div className='flex flex-col gap-y-6 items-center'>
                                    <div onClick={() => setRegisteringProd(false)} className='bg-primary rounded-md text-white 
                                    w-fit px-4 py-1 hover:bg-primary/90 transition duration-200 cursor-pointer self-start'>
                                        <MdArrowBack size={24} />
                                    </div>
                                    <form action="" className='flex flex-col gap-y-10 w-[320px] sm:w-[420px] md:w-[520px] items-center lg:min-w-[900px] gap-2'>
                                        <div className='flex flex-col lg:flex-row gap-2 w-full'>
                                            <div className='flex flex-col w-full gap-y-4'>
                                                <div className='flex flex-col md:flex-row gap-4 md:gap-1 w-full'>
                                                    <TextField
                                                        label='Nome do produto'
                                                        size='small'
                                                        fullWidth
                                                        type='text'
                                                    />
                                                    <TextField
                                                        label="Preço do produto"
                                                        size='small'
                                                        fullWidth
                                                        type='text'
                                                    />
                                                </div>
                                                <div className='flex flex-col md:flex-row gap-4 md:gap-1 w-full'>
                                                    <TextField
                                                        label='Valor'
                                                        size='small'
                                                        type='number'
                                                        fullWidth
                                                        {...register("price", {
                                                            required: true,
                                                        })}
                                                    />
                                                    <TextField
                                                        size='small'
                                                        disabled
                                                        variant='outlined'
                                                        className='cursor-not-allowed'
                                                        value={percentageValue}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputLabel
                                                                shrink={percentageValue}
                                                                htmlFor='percentage-value'
                                                                >
                                                                    Valor do Seguro      
                                                                </InputLabel>
                                                            )
                                                        }}
                                                    />
                                                </div>
                                                <TextField
                                                    label='Categoria'
                                                    select
                                                    size='small'
                                                >
                                                    {CategoriesArray.map((cat) => (
                                                        <MenuItem key={cat.id} value={cat.title}>
                                                            {cat.title}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                <TextField
                                                    label="Tipo do tecido"
                                                    size='small'
                                                />
                                            </div>
                                            <div className='flex flex-col w-full gap-y-4'>
                                                <TextField
                                                    label="Medidas"
                                                    size='small'
                                                />
                                                <TextField
                                                    label="Marca"
                                                    size='small'
                                                />
                                                <TextField
                                                    multiline
                                                    rows={6}
                                                    label='Descrição'
                                                />
                                            </div>
                                        </div>
                                        <ReusableButton variant='contained' classes='w-[240px] self-center'>Salvar</ReusableButton>
                                    </form>
                                </div>
                            )}
                        </TabPanel>
                        <TabPanel className='lg:pt-28 max-w-full' >
                            historico
                        </TabPanel>
                    </Tabs>
                </div>
            </main>
        </ThemeProvider>
    )
}

export default Profile