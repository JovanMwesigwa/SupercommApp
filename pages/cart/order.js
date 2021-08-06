import React from 'react'
import axios from 'axios';
import { withRouter } from 'next/router';
import Link from 'next/dist/client/link'
import { AiFillCheckCircle } from 'react-icons/ai';
import Image from 'next/image'


import mtn from '../../public/mtn.png'
import airtel from '../../public/airtel.png'
import Modal from '../../components/Modal'

function Order({ router: { query } }) {
    // const data = JSON.parse(query.data);

    const [ orderData, setOrderData ] = React.useState([]);

    const [ name, SetName ] = React.useState("");
    const [ email, SetEmail ] = React.useState("");
    const [ phone, SetPhone ] = React.useState("");
    const [ address, SetAddress ] = React.useState("");
    const [ network, setNetwork ] = React.useState("MTN");
    const [ cost, setCost ] = React.useState(0)

    const [ open, setOpen ] = React.useState(false);


    const findTheCartPrice = () => {
        // const prices = [];
        // orderData.forEach(item => {
        //     prices.push(item.price);
        // })
        // if(prices){
        //     const sum = prices.reduce((a, b) => a + b)
        //     setCost(sum)
        // }else {
        //     setCost(0);
        // }
        return 0
    }

    React.useEffect(() => {
        findTheCartPrice()
    },[])

    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            "username": "6b7a129208b7860c",
            "password": "0e7194232cbde9c2",
            "action":"mmdeposit",
            "amount": cost,
            "currency":"UGX",
            "phone":`256${phone}`,
            "reference": `${phone}${cost}`,
            "reason":`
                Name - ${name}
                Phone - ${phone}
                Email - ${email}
                Cost - ${cost}
                items - ${orderData.length}
                Address - ${address}
            `
        }

        const headers = {
            'Access-Control-Allow-Origin': true,
        };
    

        if(data) {
            setOpen(true)
        }

        try{
            const response = await axios.post('https://www.easypay.co.ug/api/',{
                headers,
                data,
            })
        
            if(response.data.success === 1) {
                alert("Your order has been successfully purchased")
            }else{
                alert("We could not process your order right now, confirm that you have enough money on your account.")
            }

        }catch(err) {  
            alert("An error occured while processing your order, please try again later.")
        }
    }

    return (
        <div className="flex flex-col">

            <div className="flex flex-row items-center justify-between px-5 py-3  md:px-10 md:w-full md:z-10 border-b bg-white md:fixed">
                <Link href="/">
                    <div className="flex flex-col pb-3 md:cursor-pointer">
                        <h1 className="text-2xl font-medium text-gray-800">My Order</h1>
                    </div>
                </Link>
                <div className="">
                    <h3 className="text-green-800 font-medium">UGX {cost}</h3>
                </div>
            </div>

            <div className="flex flex-col my-5 md:justify-center md:items-center md:my-28">
                <div className="flex md:w-8/12 items-center justify-center md:border">
                    <div className="flex flex-col p-4 md:w-8/12 flex-wrap md:p-6 md:mt-7 md:items-center md:justify-center">
                        <h1 className="text-xl font-medium text-gray-800 md:text-2xl">Enter your order information</h1>

                        <form className="flex flex-col my-5 w-full mb-6" onSubmit={handleSubmit}>

                            <div className="my-2 md:my-4">
                                <h3 className="text-gray-800 my-1">Name</h3>
                                <input required value={name} onChange={e => SetName(e.target.value)} className="border w-full p-1 md:p-2" />
                            </div>
                            <div className="my-2 md:my-4">
                                <h3 className="text-gray-800 my-1">Email</h3>
                                <input required value={email} onChange={e => SetEmail(e.target.value)} type="email" className="border w-full p-1 md:p-2" />
                            </div>
                            <div className="my-2 md:my-4">
                                <h3 className="text-gray-800 my-1">Phone</h3>
                                <input required value={phone} onChange={e => SetPhone(e.target.value)} className="border w-full p-1 md:p-2" />
                            </div>
                            <div className="my-2 md:my-4">
                                <h3 className="text-gray-800 my-1">Shippment address</h3>
                                <input required value={address} onChange={e => SetAddress(e.target.value)} className="border w-full p-1 md:p-2" />
                            </div>

                            <div className="my-2 md:my-4">
                                <h3 className="text-gray-800 my-1">Pay with</h3>
                                <div className="flex flex-row items-center justify-around border w-full p-3 md:p-2">
                                
                                <div className="flex flex-row-reverse">
                                    {
                                        network === "MTN" &&
                                        <AiFillCheckCircle className="text-blue-500 " />
                                    }
                                    <div onClick={() => setNetwork('MTN')} className="md:cursor-pointer">
                                        <Image src={mtn} alt="Picture of the author" width={50} height={50} />
                                    </div>
                                </div>

                                    <div className="flex flex-row-reverse">
                                        {
                                            network === 'Airtel' &&
                                                <AiFillCheckCircle className="text-blue-500 " />
                                        }
                                        <div onClick={() => setNetwork('Airtel')} className="md:cursor-pointer">
                                            <Image src={airtel} alt="Picture of the author" width={50} height={50} />
                                        </div>
                                    </div>

                                </div>
                            </div>

                                <button type="submit" className="w-full text-white py-2 mt-4 p-4 bg-blue-700 rounded md:p-2 md:cursor-pointer md:hover:bg-blue-500">Pay Order</button>

                        </form>
                    </div>
                </div> 
            </div>
            <Modal open={open} setOpen={setOpen} name={name} price={cost} network={network} />
        </div>
    )
}

export default withRouter(Order);
