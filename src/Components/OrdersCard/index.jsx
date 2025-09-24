import { ChevronRightIcon } from "@heroicons/react/24/solid";
// import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";

const OrdersCard = props => {
    // const context = useContext(ShoppingCartContext)
    const { totalProducts, totalPrice, idReferencia, imageUrl } = props


    return (
        <>
            <div className='flex justify-between items-center mb-4 p-4 inset-shadow-sm shadow-xl'>
                <figure className='w-20 object-cover'>
                    <img src={imageUrl} alt="" />
                </figure>
                <span>Ref: <b>{idReferencia}</b></span>
                <span>02/04/2024</span>
                <div className='flex flex-col'>
                    <span className='font-light'>{totalProducts} Unds</span>
                    <span className='font-bold text-lg'>${totalPrice}</span>
                </div>
                <div className='flex justify-center items-center'>
                    <ChevronRightIcon className='size-6 text-shadow-black cursor-pointer' />
                </div>

            </div>
        </>
    )
}

export default OrdersCard; 