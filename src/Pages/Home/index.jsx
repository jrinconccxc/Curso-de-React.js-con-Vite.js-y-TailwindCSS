import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import Layout from "../../Components/Layout";
import Card from '../../Components/Card';
import ProductDetails from '../../Components/ProductDetails';


function Home() {
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.filteredProducts?.length > 0) {
            return (
                context.filteredProducts?.map((product) => (
                    <Card
                        key={product.id}
                        data={product}
                    />
                ))
            )
        } else {
            return (
                <div>
                    Error de busquedad!!
                </div>
            )
        }
    }

    return (
        <>
            <Layout>
                <h1 className='text-2xl font-medium text-center'>Exclusive Products</h1>
                <div className="relative h-30 w-full mx-auto">
                    <input
                        type='text'
                        placeholder='Search a product'
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border p-4 mb-4 w-100'
                        onChange={(event) => context.setSearchByTitle(event.target.value)} />
                </div>
                <div className='grid grid-cols-4'>
                    {renderView()}
                </div>
                <ProductDetails />
            </Layout>
        </>
    )
}

export default Home;
