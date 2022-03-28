import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'
export default function CartProducts(){
    let [products,setProducts]=useState([])
    let[found,setFound]=useState(false)

    let [totalPrice,setTotal]=useState(0)

    

    React.useEffect(()=>{
        if(localStorage.getItem('products')){
            setProducts(JSON.parse(window.localStorage.getItem('products')))
            setFound(true)
        }
    },[])

    React.useEffect(()=>{
        window.localStorage.setItem('products',JSON.stringify(products))
    },[products])

    React.useEffect(()=>{
        setTotal(0)
            for(let i=0;i<products.length;i++){
                setTotal(pre=> pre+( products[i].quanyity * products[i].price ))
            }
        
    },[products])

    function handleRemove(id){
        let arr=products.filter(p=> p.id!== parseInt(id))
        if(arr.length===0){
            setFound(false)
            window.localStorage.removeItem('products')
        }
        setProducts(arr)
    }

    return(
        <div className=" container px-6 py-[50px] ">
            {
                products.length!==0?
                <div className=" overflow-auto">
                    <table className=" md:w-full  w-[600px]">
                    <thead className="border-y-[1px] border-y-black block p-[5px]">
                    <tr className="w-[100%] block text-center">
                        <td className=" w-2/12 py-4 inline-block">REMOVE</td>
                        <td className="w-2/12 py-4 inline-block">IMAGE</td>
                        <td className="w-2/12 py-4 inline-block">SIZE</td>
                        <td className="w-2/12 py-4 inline-block ">PRICE</td>
                        <td className="w-2/12 py-4 inline-block">QUANTITY</td>
                        <td className="w-2/12 py-4 inline-block">SUBTOTLA</td>
                    </tr>
                    </thead>
                    <tbody className="">
                    {products.map(prod=>{
                        return(
                            <tr key={prod.id} className="w-[100%] block text-center border-b-[1px] border-b-gray-700">
                                <td className="w-2/12 py-0 inline-block">
                                    <FontAwesomeIcon icon={faCircleMinus} 
                                    className=' text-sky-600 cursor-pointer' onClick={()=>handleRemove(prod.id)}/></td>
                                <td className="pt-[10px] w-2/12 inline-block">
                                    <Image src={prod.srcImg} alt="" width={'60px'} height={'60px'}/></td>
                                <td className="w-2/12 py-0 inline-block">{prod.size}</td>
                                <td className="w-2/12 py-0 inline-block">{prod.price}</td>
                                <td className="w-2/12 py-0 inline-block">{prod.quanyity}</td>
                                <td className="w-2/12 py-0 inline-block">$ {parseFloat(prod.quanyity * prod.price)}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                </div>
                :<h2 className="text-center font-bold text-[30px] text-red-600">There is no products in cart </h2>
            }
            <div className=" p-[15px] grid md:grid-cols-2">
            <div>
                <h3 className=" capitalize font-bold mb-[10px]">apply coupon</h3>
                <input type={'text'} placeholder={'Enter your Coupon'}
                className=" outline-none border border-gray-500 w-[250px] px-[4px] py-[2px] h-[30px] mb-[10px] max-w-fill"/>
                <button className="ml-[5px] bg-greenColor text-white capitalize text-[14px] w-[60px] h-[30px]
                 rounded-[4px]">apply</button>
            </div>
            <div className=" border p-[20px]">
                <h3 className=" capitalize font-bold mb-[7px]">cart totals</h3>
                <table className=" w-full border-collapse border border-slate-400">
                    <tr className=" capitalize text-[#777]">
                        <td className="border border-slate-300 p-[5px] ">cart subtotal</td>
                        <td className="border border-slate-300 p-[5px]">$ {totalPrice}</td>
                    </tr>
                    <tr className=" capitalize text-[#777]">
                        <td className="border border-slate-300 p-[5px]">shipping</td>
                        <td className="border border-slate-300 p-[5px]">free</td>
                    </tr>
                    <tr className=" capitalize  font-semibold">
                        <td className="border border-slate-300 p-[5px]">total</td>
                        <td className="border border-slate-300 p-[5px]">$ {totalPrice}</td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
    )
}