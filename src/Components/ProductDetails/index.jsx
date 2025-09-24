import { useContext } from 'react';
import { XMarkIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context/Context';
import './style.css';

const ProductDetails = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <>
            <aside className={`${context.isProductDetailsOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-white border border-black`}>
                <div className='flex justify-between items-center p-4'>
                    <h2 className='font-medium text-xl flex items-center'>
                        <DocumentMagnifyingGlassIcon className='size-5' />
                        Details</h2>
                    <div
                        className='font-medium text-xl'
                        onClick={() => context.closeProductDetails()}>
                        <XMarkIcon className='size-6 text-black cursor-pointer' />
                    </div>
                </div>
                <div className='border mx-4 pt-2'>
                    <figure className='px-6'>
                        <img src={context.productToShow.images}
                            alt={context.productToShow.title} />
                    </figure>
                    <p className='flex flex-col py-4 px-6'>
                        <span className='font-medium pb-2 text-base'>{context.productToShow.title}</span>
                        <span>{context.productToShow.description?.slice(0, 100)}</span>
                        <span className='font-bold text-2xl mt-2'>$ {context.productToShow.price}</span>
                    </p>
                </div>
            </aside>
        </>
    )
}

export default ProductDetails;