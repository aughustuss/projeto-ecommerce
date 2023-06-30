import React, { useContext, useState } from 'react'
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
import { CategoriesArray } from '../utils/datas'
import { ProductContext } from '../contexts/Product'
import Registeredproduct from '../components/reusables/Registeredproduct'
import Boughtproducts from '../components/reusables/Boughtproducts'
import axios from 'axios'
const Profile = () => {
    const [registeringProd, setRegisteringProd] = useState(false);
    const { register, getValues, formState: { errors }, watch, handleSubmit } = useForm();
    const productValue = watch("price");
    const percentageValue = productValue ? productValue * 0.1 : 0;
    const { product } = useContext(ProductContext);
    const token = localStorage.getItem("token:");
    const {price} = getValues();
    const onSubmit = async (data) => {
        try {
            const res = await axios.post("http://localhost:3000/product/create",  {...data, price: parseFloat(price)},{
                headers: {
                    'Authorization': token
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        console.log(data);
    }
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

                        <TabPanel className='lg:pt-28 h-auto max-h-fit lg:max-h-[620px] mx-4 mb-4 lg:mb-0 lg:mx-0 '>
                            <div className='h-full  max-w-full flex flex-col gap-y-6 justify-between items-center'>
                                <div className='flex flex-col gap-y-6 self-start h-[400px] overflow-auto'>
                                    <h1 className='text-3xl text-center font-title'>Seus produtos pedidos</h1>
                                    <div className='grid grid-cols-2 gap-[2px] lg:gap-2'>
                                        {product.slice(2, 4).map((product) => (
                                            <Boughtproducts product={product} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabPanel >

                        <TabPanel allowTransparency className='lg:pt-28 h-auto max-h-fit lg:max-h-[620px] mx-4 mb-4 lg:mb-0 lg:mx-0 '>
                            {!registeringProd ? (
                                <div className='h-full  max-w-full flex flex-col gap-y-6 justify-between items-center'>
                                    <div className='flex flex-col gap-y-6 self-start h-[400px] overflow-auto'>
                                        <h1 className='text-3xl text-center font-title'>Seus produtos cadastrados </h1>
                                        <div className='grid grid-cols-2 gap-[2px] lg:gap-2'>
                                            {product.slice(0, 2).map((product) => (
                                                <Registeredproduct product={product} />
                                            ))}
                                        </div>
                                    </div>
                                    <ReusableButton onClick={() => setRegisteringProd(true)} variant='contained' classes='w-[260px] lg:self-start self-center'>
                                        novo produto +
                                    </ReusableButton>
                                </div>
                            ) : (
                                <div className='flex flex-col gap-y-6 items-center'>
                                    <div onClick={() => setRegisteringProd(false)} className='bg-primary rounded-md text-white 
                                    w-fit px-4 py-1 hover:bg-primary/90 transition duration-200 cursor-pointer self-start'>
                                        <MdArrowBack size={24} />
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-10 w-[320px] sm:w-[420px] md:w-[520px] items-center lg:min-w-[900px] gap-2'>
                                        <div className='flex flex-col lg:flex-row gap-2 w-full'>
                                            <div className='flex flex-col w-full gap-y-4'>
                                                <div className='flex flex-col md:flex-row gap-4 md:gap-1 w-full'>
                                                    <TextField
                                                        label='Nome do produto'
                                                        size='small'
                                                        fullWidth
                                                        type='text'
                                                        {...register("name", {
                                                            required: true,
                                                        })}

                                                    />
                                                    <TextField
                                                        label="Preço do produto"
                                                        size='small'
                                                        fullWidth
                                                        type='text'
                                                        {...register("price", {
                                                            required: true,
                                                        })}
                                                    />
                                                </div>
                                                <div className='flex flex-col md:flex-row gap-4 md:gap-1 w-full'>
                                                    
                                                    <TextField
                                                        size='small'
                                                        disabled
                                                        variant='outlined'
                                                        className='cursor-not-allowed'
                                                        value={percentageValue.toFixed(2)}
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
                                                    {...register("productType", {
                                                        required: true,
                                                    })}
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
                                                    {...register("tissueType", {
                                                        required: true,
                                                    })}

                                                />
                                            </div>
                                            <div className='flex flex-col w-full gap-y-4'>
                                                <TextField
                                                    label="Medidas"
                                                    size='small'
                                                    {...register("measure", {
                                                        required: true,
                                                    })}
                                                />
                                                <TextField
                                                    label="Marca"
                                                    size='small'
                                                    {...register("brand", {
                                                        required: true
                                                    })}
                                                />
                                                <TextField
                                                    multiline
                                                    rows={6}
                                                    label='Descrição'
                                                    {...register("productDescription", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <ReusableButton type="submit" variant='contained' classes='w-[240px] self-center'>Salvar</ReusableButton>
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