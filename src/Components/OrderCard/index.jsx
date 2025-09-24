import { TrashIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props
    let renderXMarkIcon = null

    if (handleDelete) {
       renderXMarkIcon = <TrashIcon onClick={() => handleDelete(id)} className='size-6 text-black cursor-pointer ' />
         
    }

    return (
        <>
            <div className='flex justify-between items-center ml-2 p-2'>
                <div className='flex items-center gap-2'>
                    <figure className='w-20 h-20'>
                        <img className='w-full h-full object-cover' src={imageUrl} alt={title} />
                    </figure>
                    <p className='text-sm font-light'>{title}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-lg font-medium pl-2'>{price}</p>
                    {renderXMarkIcon}
                </div>
            </div>
        </>
    )
}

export default OrderCard;