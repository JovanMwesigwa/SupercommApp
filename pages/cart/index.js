import React from 'react'
import { useRouter, withRouter } from "next/router";
import Link from 'next/link'
import CartCard from '../../components/CartCard'
import ProductCard from '../../components/ProductCard'

import data from '../../data/data'

function Cart({products}) {

    const [ cartData, setCartData ] = React.useState([]);
    
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between px-5 py-3  md:px-10 md:w-full md:z-10 border-b bg-white md:fixed">
                <Link href="/">
                    <div className="flex flex-col pb-3">
                        <h1 className="text-2xl font-medium text-gray-800">My Cart</h1>
                    </div>
                </Link>
                <Link href={{
                        pathname: "/cart/order",
                        query: {data: JSON.stringify(cartData)},
                    }}>
                    <div className="bg-blue-700 rounded md:p-2 md:cursor-pointer md:hover:bg-blue-500">
                        <p className=" text-sm md:text-base p-1 px-2 text-white md:px-2">Proceed to checkout</p>
                    </div>
                </Link>
            </div>
            
            <div className="flex flex-row flex-wrap md:p-6 md:mt-20 md:items-center md:justify-center">
                {
                    cartData &&
                        <>
                            {
                                cartData.map(item => (
                                    <CartCard key={item.id} item={item}  />
                                ))
                            }
                        </> 
                }
            </div>
        </div>
    )
}

export const getStaticProps = context => {

    // const data = useRouter();
    console.log("Test", context.params)

    return {
        props: {
            // products: data.JSON(),
        }
    }
}

export default Cart;