import React from "react";
import bgHero from '../../public/img/hero4.png'
import Image from "next/image";
export default function LandingHome(){
    return(
        <div  className="h-[100vh] w-[100%] land px-6">
            <div className="container flex flex-col justify-center h-[100%]">
            <h2 className=" text-mainHeader font-semibold  text-[22px]">Trade-in-offer</h2>
            <h3 className="text-mainHeader font-bold  text-[40px]">Super value deals</h3>
            <h4 className="text-greenColor font-bold  text-[42px]">On all products</h4>
            <p className=" text-pargraph">Save more with coupons &#38; up to 70% off! </p>
            <button className="w-[180px] h-[42px] block capitalize text-greenColor btnBg m-4">shop now</button>
            </div>
        </div>
    )
}