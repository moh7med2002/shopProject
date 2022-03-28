import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar ,faCartShopping } from "@fortawesome/free-solid-svg-icons"
import {useRouter}from 'next/router'
export default function ProductBox({data}){
    let router=useRouter();

    function changePage(id){
        router.push(`/shop/${id}`)
    }
    return(
        <div className=" shadow rounded-lg mb-3 text-center p-2">
            <Image src={data.img} width={"280px"} height={"280px"} className=" w-[200px] rounded-lg" alt=""/>
            <h3 className=" text-pargraph text-left text-[14px]">{data.type}</h3>
            <h4 className=" text-left capitalize text-greenColor">{data.title}</h4>
            <div className="flex justify-between items-center">
            <div>
            <ul className="flex gap-[3px]">
                <li><FontAwesomeIcon icon={faStar} className="text-[12px] text-[gold]"/></li>
                <li><FontAwesomeIcon icon={faStar} className="text-[12px] text-[gold]"/></li>
                <li><FontAwesomeIcon icon={faStar} className="text-[12px] text-[gold]"/></li>
                <li><FontAwesomeIcon icon={faStar} className="text-[12px] text-[gold]"/></li>
                <li><FontAwesomeIcon icon={faStar} className="text-[12px] text-[gold]"/></li>
            </ul>
            <h4 className=" text-left text-greenColor font-bold">$ {data.price}</h4>
            </div>
            <div className=" cursor-pointer mr-[10px] bg-green-100 w-[35px] h-[35px] rounded-[50%] flex justify-center items-center"
            onClick={()=>changePage(data.id)}>
                <FontAwesomeIcon icon={faCartShopping} 
                className=" text-greenColor duration-300 hover:rotate-180"/>
            </div>
            </div>
        </div>
    )
}