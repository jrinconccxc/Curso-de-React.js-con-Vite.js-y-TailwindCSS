import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context/Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';
import './style.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01/05/2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        // context.setCount(0)
        context.setSearchByTitle(null)
    }

    return (
        <>
            <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 bg-white border border-black`}>
                <div className='flex justify-between items-center p-4'>
                    <h2 className='font-medium text-xl flex items-center'>
                        <ClipboardDocumentCheckIcon className='size-5' />
                        My Order</h2>
                    <div
                        className='font-medium text-xl'
                        onClick={() => context.closeCheckoutSideMenu()}>
                        <XMarkIcon className='size-6 text-black cursor-pointer' />
                    </div>
                </div>
                <div className='overflow-y-scroll flex-1'>
                    {
                        context.cartProducts.map((product) => (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageUrl={product.images}
                                price={product.price}
                                handleDelete={handleDelete}
                            />
                        ))
                    }
                </div>
                <div className='px-6 mb-4'>
                    <p className='flex justify-between items-center mb-4'>
                        <span className='font-medium text-xl'>Total:</span>
                        <span className='font-bold text-2xl'>${totalPrice(context.cartProducts)}</span>
                    </p>
                    <Link to='/my-orders/last'>
                        <button className='bg-black py-3 text-white w-full cursor-pointer' onClick={() => handleCheckout()}>Checkout</button>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default CheckoutSideMenu;