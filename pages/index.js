import { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import Link from 'next/link';

import data from '../data/data'

export default function Home() {
  const [ cartCount, setCartCount ] = useState(0);

  const [ cartItems, setCartItems ] = useState([]);

  const btnAction = (action, item) => {
    switch (action) {
      case 'add':
        addToCart(item);
        return setCartCount(prev =>  prev += 1);
      case 'remove':
        if(cartCount <= 0) {
          return setCartCount(0);
        }else {
          return setCartCount(prev => prev -= 1);
        }
      default:
        return action;
    }
  }

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  }

  return (
    <div className="flex flex-col">

      <Head>
        <title>Market Place</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col border-b bg-gray-50">

        <div className="flex flex-row items-center justify-between px-5 py-3 md:p-3 md:px-10 md:w-full md:z-10 border-b bg-white md:fixed">
          <div className="flex flex-col pb-3">
            <h1 className="text-2xl font-medium text-gray-800">Market Place</h1>
            <p className="text-sm text-gray-500">{data.length} products</p>
          </div>

        {
          cartCount > 0 && 
            <Link href={{
                pathname: "/cart",
                query: {data: JSON.stringify(cartItems)},
              }}>
              <div className="md:w-16 md:h-full md:cursor-pointer">
                <div className="bg-red-700 rounded-full md:absolute md:top-2 md:right-16">
                  <p className="text-sm md:text-base text-white px-2">{cartCount}</p>
                </div>
                <FiShoppingCart className="hidden md:block md:w-7 md:h-7"/>
              </div>
            </Link>
        }

        </div>

      <div className="flex flex-row flex-wrap md:p-6 md:mt-20">
        {
          data.map(item => (
            <ProductCard key={item.id} item={item} action={btnAction} />
          ))
        }
      </div>

      </main>

      <footer className="flex items-center justify-center w-full h-24 bg-black">
        
      </footer>

    </div>
  )
}
