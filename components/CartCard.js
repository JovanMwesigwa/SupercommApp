import Image from 'next/image'
import React from 'react'

function CartCard({item}) {
    return (
        <div className="flex flex-row w-full md:w-8/12 h-20 md:h-32 justify-between bg-white m-4 md:my-6 rounded border ">
            <div className="hidden md:flex h-full w-4/12 md:w-3/12  bg-gray-400 rounded md:mr-5">
                <Image src={item.image} alt="Picture of the author" className="rounded" width={240} height={140} />
            </div>
            <div className="flex md:hidden h-full w-4/12 md:w-3/12  bg-gray-400 rounded md:mr-5">
                <Image src={item.image} alt="Picture of the author" className="rounded" width={100} height={170} />
            </div>
            <div className="flex flex-1 flex-col px-2 py-1 md:p-3">
                <h1 className="text-base font-medium md:text-xl">{item.name}</h1>
                <p className="text-gray-500 text-sm md:text-base">{item.description}</p>
            </div>
            <div className="flex py-2 mr-1 md:p-3">
                <p className="text-green-800 text-sm md:text-lg md:font-medium">UGX {item.price}</p>
            </div>
        </div>
    )
}

export default CartCard
