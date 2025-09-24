import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context/Context";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4 font-medium';

    return (
        <>
            <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light shadow-md'>
                <ul className='flex items-center gap-3'>
                    <li className='font-bold text-4xl mr-10'>
                        <NavLink to='/'>
                            Shopi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            onClick={() => context.setSearchByCategory()}
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            All
                        </NavLink>
                    </li>
                    <li className="relative">
                        <button onClick={() => setOpen(!open)}
                        >
                            Categorías
                        </button>

                        {
                            open && (
                                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md text-black z-20">
                                    <li className='px-4 py-2 hover:bg-gray-100'>
                                        <NavLink
                                            to='/clothes'
                                            onClick={() => context.setSearchByCategory('clothes')}
                                            className={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            }>
                                            Clothes
                                        </NavLink>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-gray-100'>
                                        <NavLink
                                            to='/electronics'
                                            onClick={() => context.setSearchByCategory('electronics')}
                                            className={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            }>
                                            Electronics
                                        </NavLink>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-gray-100'>
                                        <NavLink
                                            to='/furniture'
                                            onClick={() => context.setSearchByCategory('furniture')}
                                            className={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            }>
                                            Furniture
                                        </NavLink>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <NavLink
                                            to='/toys'
                                            onClick={() => context.setSearchByCategory('toys')}
                                            className={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            }>
                                            Toys
                                        </NavLink>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-gray-100'>
                                        <NavLink
                                            to='/others'
                                            onClick={() => context.setSearchByCategory('others')}
                                            className={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            }>
                                            Others
                                        </NavLink>
                                    </li>
                                </ul>
                            )
                        }
                    </li>
                </ul>
                <ul className='flex items-center gap-3'>
                    <li className='text-black/40'>
                        jrincon@ccxc.co
                    </li>
                    <li>
                        <NavLink
                            to='/my-orders'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/my-account'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/sign-in'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            Sign In
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `flex items-center gap-2 ${isActive ? activeStyle : undefined}`
                            }>
                            <ShoppingCartIcon className="size-6 text-black" />
                            <span>{context.cartProducts.length}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;