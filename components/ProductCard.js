import React from 'react'
import Image from 'next/image'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


function ProductCard({action, item}) {
    return (
        <div className="flex flex-col my-5 p-3  mx-6  w-full md:w-56 bg-white md:mx-4 h-72 border-1 rounded-sm border-solid justify-between shadow">

            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row">
                <div onClick={() => action('add', item)} className="flex bg-green-600 items-center justify-center px-2 md:p-0 md:px-2 cursor-pointer rounded-sm">
                    <AiOutlinePlus className="text-2xl md:py-1 text-white md:text-xl" />
                </div>
                <div onClick={() => action('remove', item)} className="flex bg-blue-600 items-center ml-2 justify-center px-3 md:px-2 md:p-0 cursor-pointer rounded-sm">
                  <AiOutlineMinus className="text-2x1 md:py-1 text-white md:text-xl" />
                </div>
              </div>
                <div className="bg-red-500 px-3 py-1 rounded-sm">
                    <p className="text-sm text-white md:text-xs">{item.rate}</p>
                </div>
            </div>

          <div className="flex flex-1 items-center justify-center">
            <Image src={item.image} alt="Picture of the author" className="rounded" width={200} height={150} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl text-gray-600 font-bold md:text-xl">UGX {item.price}</h1>
            <p className="text-lg text-gray-600 md:text-base">{item.name}</p>
            <p className="text-sm text-gray-600 pt-2 md:text-xs">{item.description}</p>
          </div>
        </div>
    )
}

export default ProductCard
