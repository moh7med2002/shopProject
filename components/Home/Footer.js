import Image from "next/image";
import logo from '../../public/img/logo.png'
import imgPlay from '../../public/img/pay/play.jpg'
import imgPay from '../../public/img/pay/pay.png'
import imgApp from '../../public/img/pay/app.jpg'
export default function Footer(){
    return(
        <footer className="py-[40px]">
            <div className="container px-6 grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-[20px]">
                <div>
                    <Image src={logo} alt=""/>
                    <h4 className="text-black font-bold mb-[15px]">Contact</h4>
                    <ul>
                        <li className="capitalize text-[#777]"><span className="text-black">address:</span> 216 whda steet. gaza</li>
                        <li className="capitalize text-[#777]"><span className="text-black">phone:</span> +972-111-111-111</li>
                        <li className="capitalize text-[#777]"><span className="text-black">hours:</span> 10:00 - 19:00. mon - sat</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-black font-bold mb-[15px]">About</h4>
                    <ul>
                        <li className="capitalize text-[#777]">about us</li>
                        <li className="capitalize text-[#777]">delivery information</li>
                        <li className="capitalize text-[#777]">privacy policy</li>
                        <li className="capitalize text-[#777]">terms &#38; conditions</li>
                        <li className="capitalize text-[#777]">contact us</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-black font-bold mb-[15px]">My Account</h4>
                    <ul>
                        <li className="capitalize text-[#777]">sign in</li>
                        <li className="capitalize text-[#777]">view cart</li>
                        <li className="capitalize text-[#777]">my wishlist</li>
                        <li className="capitalize text-[#777]">track my order</li>
                        <li className="capitalize text-[#777]">help</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-black font-bold mb-[15px]">Install App</h4>
                    <p className="capitalize text-[#777] mb-[12px]">from app store or google play</p>
                    <div className="flex mb-[12px]" >
                        <span className=" inline-block mr-[3px] border border-greenColor rounded-[10px] p-[4px]">
                            <Image src={imgApp} alt=""/></span>
                        <span className="inline-block border border-greenColor rounded-[10px] p-[4px]">
                            <Image src={imgPlay} alt=""/></span>
                    </div>
                    <p className="capitalize text-[#777] mb-[12px]">secured payment gateways</p>
                    <Image src={imgPay}/>
                </div>
            </div>
        </footer>
    )
}