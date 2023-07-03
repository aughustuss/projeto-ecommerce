import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../contexts/Product';
import Product from '../components/Product';

const Searchedproduct = () => {
    const { search } = useParams();
    const { product } = useContext(ProductContext);

    const filteredProducts = product.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <>
            <section className='pb-4 md:pt-24 pt-20 w-full container mx-auto px-2 md:px-0 min-h-[800px]' >
                <div className='flex p-1 w-full h-[900px] border-gray rounded-md '>
                    <div className='w-full flex flex-col gap-y-4 h-full '>
                        <div className=' text-base md:text-xl flex-wrap lg:text-3xl font-bold font-title py-2 text-primary w-full px-2 rounded-md flex flex-row gap-x-2 items-center' >
                            Foram encontrados <span className='underline'>{filteredProducts.length}</span>  produtos para a sua pesquisa: <span className='capitalize'>{search}</span> 
                        </div>
                        <div className='grid grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full h-auto overflow-y-auto overflow-x-hidden pb-4 '>
                            {filteredProducts.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <Product product={item} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Searchedproduct