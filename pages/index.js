import Link  from 'next/link'
import Image from 'next/image'
import LandingHome from '../components/Home/LandingHome'
import FeaturesBox from '../components/Home/featuresImg'
import React from 'react'
import ProductBox from '../components/Home/ProductBox'
import AdsDescount from '../components/Home/AdsDescount'
import MoreInfo from '../components/Home/MoreInfo'
import EmailContact from '../components/Home/EmailsContact'
function Home(){

    let[featuresData,setFeaturesData]=React.useState([]);
    let[products,setProducts]=React.useState([])
    React.useEffect(()=>{
        async function getData(){
            let response=await fetch('/api/featuresBox')
            let data=await response.json()
            setFeaturesData(data)
        }
        getData()

        async function getProducts(){
            let response=await fetch('/api/products')
            let data=await response.json();
            setProducts(data)
        }
        getProducts();
    },[])

    return(
        <div className='pt-[70.4px]'>
            <LandingHome/>
            <FeaturesBox datas={featuresData}/>
            {/* Satrt Products Section */}
            <div className='text-center py-[50px]'>
                <h2 className=' font-bold uppercase text-[40px]'>featured products</h2>
                <p>summer collection new modern design</p>
                <div className=' container px-6 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 mt-[50px]'>
                    {
                        products.slice(0,8).map(prod=>{
                            return(
                                <ProductBox data={prod} key={prod.id}/>
                            ) 
                        })
                    }
                </div>
            </div>
            {/* End Products Section */}
            <AdsDescount/>
            {/* Start New Arrival Section */}
            <div className='text-center py-[50px]'>
                <h2 className=' font-bold uppercase text-[40px]'>new arrival</h2>
                <p>summer collection new modern design</p>
                <div className=' container px-6 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 mt-[50px]'>
                    {
                        products.slice(8,16).map(prod=>{
                            return(
                                <ProductBox data={prod} key={prod.id}/>
                            ) 
                        })
                    }
                </div>
            </div>
            {/* End New Arrival Section */}
            <MoreInfo/>
            <EmailContact/>
        </div>
    )
}

export default Home

