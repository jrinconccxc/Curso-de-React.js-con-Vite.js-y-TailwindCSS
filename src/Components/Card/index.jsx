import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/Context';

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetails) => {
        context.openProductDetails()
        context.setProductToShow(productDetails)
        context.closeCheckoutSideMenu()
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetails()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-8 h-5 text-xl py-3 border-1 border-white cursor-pointer'
                    onClick={(event) => { addProductsToCart(event, data.data) }}>
                    <CheckIcon className='size-6 text-white' />
                </div>
            )
        } else {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-5 text-xl py-3 border-1 cursor-pointer'
                    onClick={(event) => { addProductsToCart(event, data.data) }}>
                    <PlusIcon className='size-6 text-black' />
                </div>
            )
        }
    }


    return (
        <>
            <div
                className='bg-white w-60 mt-10 p-4 shadow-xl/20 flex flex-col hover:shadow-2xl '
            >
                <figure className='relative mb-4 w-full'>
                    <img className='w-full h-50 object-cover cursor-pointer' src={data.data.images[0]} alt={data.data.title}
                        onClick={() => showProduct(data.data)} />

                    <span className='absolute bottom-0 left-0 bg-white/50 text-black text-xs px-2 py-0.5 m-2'>{data.data.category.name}</span>
                    {renderIcon(data.data.id)}
                </figure>
                <div className='flex flex-col flex-grow'>
                    <p className='text-center font-medium mb-6'>{data.data.title}</p>
                </div>
                <div className='mt-auto flex justify-end'>
                    <span className='text-xl font-bold'>$ {data.data.price}</span>
                </div>
            </div>
        </>
    )
}

export default Card;