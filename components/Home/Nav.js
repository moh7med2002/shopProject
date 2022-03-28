import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping,faBarsStaggered , faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import logo from '../../public/img/logo.png'
import Image from "next/image"
import Link from 'next/link'
import {useRouter} from 'next/router'
export default function Nav(){
    let[showNav,setShowNav]=useState(false)
    let router=useRouter()
    return(
        <div className="fixed w-[100%] z-40 shadow">
            <div className="bg-pink  relative w-[100%]">
            <nav className="container px-6 py-3">
            <div className="flex items-center">
                <div className="flex-grow">
                    <span ><Image src={logo} alt="logo"/>  </span>
                </div>
                <div className={`absolute left-0 w-[100%] bg-pink p-3 top-[70.4px] text-center ${showNav?"block":'hidden'}
                lg:relative lg:top-0 lg:p-0 lg:w-fit lg:block duration-300 lg:bg-transparent ${showNav&&'shadow'} lg:shadow-none`}>
                    <ul className={`flex flex-col lg:flex-row `}>
                        <li><Link href={'/'}><a  className={router.pathname == "/" ? "active navItem" : "navItem"}
                        >home</a>
                        </Link> </li>
                        <li><Link href={'/shop'} ><a className={router.pathname == "/shop" ? "active navItem" : "navItem"}
                        >Shop</a></Link> </li>
                        <li><Link href={'/blog'}><a className={router.pathname == "/blog" ? "active navItem" : "navItem"}
                        >Blog</a></Link></li>
                        <li><Link href={'/about'}><a className={router.pathname == "/about" ? "active navItem" : "navItem"}
                        >About</a></Link></li>
                        <li><Link href={'/contact'}><a className={router.pathname == "/contact" ? "active navItem" : "navItem"}
                        >Contact</a></Link></li>
                    </ul>
                </div>
                <div>
                        <Link href={'/cart'}>
                        <FontAwesomeIcon icon={faCartShopping}
                        className={`${router.pathname=='/cart' && 'text-greenColor'} cursor-pointer duration-300 mx-3 hover:text-greenColor`}/>
                        </Link>
                </div>
                <div className="border border-black px-[5px] cursor-pointer ml-[6px] lg:hidden w-[40px] h-[30px] flex justify-center items-center
                duration-300 hover:border-greenColor hover:text-greenColor" onClick={()=>setShowNav(!showNav)}>
                    {showNav?<FontAwesomeIcon icon={faXmark} className=" text-[20px]"/>:<FontAwesomeIcon icon={faBarsStaggered}/>}
                </div>
            </div>
        </nav>
        </div>
        </div>
    )
}