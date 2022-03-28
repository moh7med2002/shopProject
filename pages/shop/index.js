import React from "react";
import LandShop from "../../components/Shop/landingShop";
import ProductBox from "../../components/Home/ProductBox";
import EmailContact from "../../components/Home/EmailsContact";

export default function Shop(){
    let[products,setProducts]=React.useState([])
    let[allProducts,setAllProducts]=React.useState([])
    let productNymber=8

    function changeProduct(btn){
        let start=(btn-1)*productNymber
        let end =btn*productNymber
        setProducts(allProducts.slice(start,end))
    }

    React.useEffect(()=>{
        async function getProducts(){
            let response=await fetch('/api/products')
            let data=await response.json();
            setAllProducts(data)
            setProducts(data.slice(0,productNymber))
        }
        getProducts();
    },[])
    // Make Btn
    let btnNumber=allProducts.length/productNymber;
    let arr=Array(Math.ceil(btnNumber))
    for(let i=0;i<arr.length;i++){
        arr[i]=i+1
    }
    return(
        <div className="pt-[70.4px]">
            <LandShop title={'# stayhome'} description={'Save more with coupons & up to 70% off!'} clas={'landShop'}/>
            {/* Satrt Products Section */}
            <div className='text-center py-[50px]'>
                <div className=' container px-6 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 mt-[50px]'>
                    {
                        products.map(prod=>{
                            return(
                                <ProductBox data={prod} key={prod.id}/>
                            ) 
                        })
                    }
                </div>
                <div className="mt-[30px]">
                    {
                        arr.map((a,index)=>{
                            return(
                                <button key={index} className="w-[40px] h-[40px] bg-greenColor text-white rounded-[5px] mr-[5px]"
                                onClick={()=>changeProduct(index+1)}>{index+1}</button>
                            )
                        })
                    }
                </div>
            </div>
            {/* End Products Section */}
            <EmailContact/>
        </div>
    )
}