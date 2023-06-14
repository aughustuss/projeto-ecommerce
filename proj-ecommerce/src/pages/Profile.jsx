import React from 'react'
import { AiOutlineHistory } from 'react-icons/ai'
import { BsBagFill, BsFillBoxSeamFill } from 'react-icons/bs'
import { MdAccountBox } from 'react-icons/md'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
const Profile = () => {
    return (
        <main className='min-h-screen w-full z-0 font-body'>
            <div>
                <Tabs className='flex flex-col lg:flex-row'>
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
                    <TabPanel className='lg:pt-28 '>
                        Produtos...
                    </TabPanel>
                    <TabPanel className='lg:pt-28 '>
                        Histórico...
                    </TabPanel>
                </Tabs>
            </div>
        </main>
    )
}

export default Profile