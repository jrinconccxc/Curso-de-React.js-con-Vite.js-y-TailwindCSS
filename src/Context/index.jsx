import { useEffect, useState } from 'react';
import { ShoppingCartContext } from './Context';

const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Details - Open/Close
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false)
    const openProductDetails = () => setIsProductDetailsOpen(true)
    const closeProductDetails = () => setIsProductDetailsOpen(false)

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Details - Show Product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    // Get products
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);


    const urlProducts = `https://api.escuelajs.co/api/v1/products`;
    const proxyProducts = `https://api.allorigins.win/raw?url=${encodeURIComponent(urlProducts)}`;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(proxyProducts);
                const data = await response.json();
                setProducts(data);

                console.log("Productos recibidos:", data);

            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        }

        getProducts()
    }, [proxyProducts])

    const filteredProductsByTitle = (products, searchByTitle) => {
        return products?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredProductsByCategory = (products, searchByCategory) => {
        return products?.filter(item => item.category?.name?.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (products, searchByTitle, searchByCategory) => {

        let result = products;

        if (searchByCategory) {
            result = filteredProductsByCategory(result, searchByCategory);
        }

        if (searchByTitle) {
            result = filteredProductsByTitle(result, searchByTitle);
        }

        return result;
    }

    useEffect(() => {
        const filtered = filterBy(products, searchByTitle, searchByCategory);
        setFilteredProducts(filtered);
    }, [products, searchByTitle, searchByCategory])


    // const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
    //         if (searchType === 'BY_TITLE') {
    //             return filteredProductsByTitle(products, searchByTitle)
    //         }

    //         if (searchType === 'BY_CATEGORY') {
    //             return filteredProductsByCategory(products, searchByCategory)
    //         }

    //         if (searchType === 'BY_TITLE_AND_CATEGORY') {
    //             return filteredProductsByCategory(products, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    //         }

    //         if (!searchType) {
    //             return products
    //         }
    //     }

    //     useEffect(() => {
    //         if (searchByTitle && searchByCategory) {
    //             setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory))
    //         } else if (searchByTitle && !searchByCategory) {
    //             setFilteredProducts(filterBy('BY_TITLE', products, searchByTitle, searchByCategory))
    //         } else if (!searchByTitle && searchByCategory) {
    //             setFilteredProducts(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory))
    //         } else if (!searchByTitle && !searchByCategory) {
    //             setFilteredProducts(filterBy(null, products, searchByTitle, searchByCategory))
    //         }
    //     }, [products, searchByTitle, searchByCategory])

    return (
        <>
            <ShoppingCartContext.Provider value={{
                count,
                setCount,
                openProductDetails,
                closeProductDetails,
                isProductDetailsOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                products,
                setProducts,
                searchByTitle,
                setSearchByTitle,
                filteredProducts,
                setFilteredProducts,
                searchByCategory,
                setSearchByCategory
            }}>
                {children}
            </ShoppingCartContext.Provider>
        </>
    )
}

export default ShoppingCartProvider;