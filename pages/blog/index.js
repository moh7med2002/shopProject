import EmailContact from "../../components/Home/EmailsContact";
import LandShop from "../../components/Shop/landingShop";
import { useEffect, useState } from "react";
import BlogBox from "../../components/Blog/blogBox";
export default function Blog(){
    let[allBlogData,setAllBolgData]=useState([])
    let [blogData,setBlogData]=useState([])
    let[isLoad,setLoad]=useState(false)
    let boxInPage=4

    useEffect(()=>{
        async function getData(){
            let response =await fetch('/api/blog')
            let data=await response.json()
            setAllBolgData(data)
            setBlogData(data.slice(0,boxInPage))
            setLoad(true)
        }
        getData()
    },[])
    
    let btnNum=Math.ceil(allBlogData.length/4);
    let arr=Array(btnNum);
    for(let i=0;i<arr.length;i++){
        arr[i]=i+1;
    }
    
    function changeProduct(btn){
        let start=(btn-1)*boxInPage
        let end=(btn)*boxInPage
        setBlogData(allBlogData.slice(start,end))
    }

    return(
        <div className="pt-[70.4px]">
            <LandShop clas={'landShop'} title={'# readmore'} description={'Read all case studies about our products!'}/>
            {
                isLoad &&
                <div className="py-[100px]">
                    <div className=" container px-8 ">
                    {
                        blogData.map(data=>{
                            return(
                                <BlogBox data={data} key={data.id}/>
                            )
                        })
                    }
                </div>
                <div className="mt-[30px] text-center">
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
            }
            <EmailContact/>
        </div>
    )
}