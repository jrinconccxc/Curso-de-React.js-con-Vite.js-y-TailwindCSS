import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

function MyOrders() {
    const context = useContext(ShoppingCartContext)

    return (
        <>
            <Layout>
                <div className='flex justify-center items-center mb-6'>
                    <h1 className='font-medium text-xl'>My Orders</h1>
                </div>
                {
                    context.order?.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard
                                totalPrice={order.totalPrice}
                                totalProducts={order.totalProducts}
                                idReferencia={index}
                                imageUrl={order.products?.[0]?.images}
                            />
                        </Link>
                    ))
                }
            </Layout>
        </>
    )
}

export default MyOrders;
