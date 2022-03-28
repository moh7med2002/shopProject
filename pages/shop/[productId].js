import { useEffect, useState} from "react"
import {useRouter} from 'next/router'
import Image from "next/image";
import EmailContact from "../../components/Home/EmailsContact";
export default function ProductId(){
    let router =useRouter();
    let {productId} =router.query
    let [selectedProduct,setProduct]=useState({})
    let [load,setLoad]=useState(false)
    let[show,setShow]=useState(false)
    
    let [isSave,setIsSave]=useState(false)
    let[size,setSize]=useState('xl');
    let[quanyity,setQuantity]=useState(1)
    let [info,setInfo]=useState({srcImg:"",size:size , price:"" , quanyity:quanyity ,id:""});
    let arrInfo=[]

    if(window.localStorage.getItem('products')){
        arrInfo=JSON.parse(window.localStorage.getItem('products'))
    }

    useEffect(()=>{
        async function getProducts(){
            let response=await fetch('/api/products')
            let data=await response.json();
            data=data.filter(da=>da.id===parseInt(productId))
            setProduct(data[0]);
            setLoad(true)
        }
        getProducts();

        if(isSave){
                arrInfo=arrInfo.filter(arr=> arr.id!= info.id);
                arrInfo.push(info)
                window.localStorage.setItem("products",JSON.stringify(arrInfo))
        }
    },[info])

    function saveData(){
        setInfo(pre=> {
            return{
                ...pre,
                srcImg:selectedProduct.img,
                price:selectedProduct.price,
                size:size,
                quanyity:parseInt(quanyity),
                id:selectedProduct.id
            }
        })
        setIsSave(true)
        setShow(true)
    }

    return(
        <div>
            <div className="pt-[70.4px] container px-6 pb-[50px]">
            {
                load &&
            <div className="pt-[40px] flex gap-[30px] items-center flex-wrap">
                <div className="lg:w-[40%]">
                    <Image src={`${selectedProduct.img}`}alt="" width={"800px"} height={"800px"}/>
                </div>
                <div className="lg:w-[55%] lg:p-[20px]">
                    <h2 className=" font-bold text-[13px] mb-[22px]">Home / T-Shirt</h2>
                    <h3 className=" capitalize font-bold text-[22px] mb-[22px]">{selectedProduct.title}</h3>
                    <h4 className=" font-bold text-[28px]">$ {selectedProduct.price}</h4>

                    <select name="size"  value={size} onChange={(e)=>setSize(e.target.value)}
                    className="border border-black w-[100px] rounded-[4px] p-1 text-[14px] block mb-[7px]">
                        <option value={'xl'}>XL</option>
                        <option value={'xxl'}>XXL</option>
                        <option value={'small'}>Small</option>
                        <option value={'large'}>Large</option>
                    </select>
                    <input type={'number'} value={quanyity} min={1} onChange={(e)=>setQuantity(e.target.value)} 
                    className=" border border-black w-14 mr-[10px] h-[30px] p-2"/>
                    <button onClick={saveData}
                    className=" text-white bg-greenColor capitalize w-[120px] h-[30px] rounded-[4px] text-[14px]">add to cart</button>
                    {show &&
                    <div className="text-white bg-greenColor my-[10px] rounded-[4px] p-[5px] capitalize">
                    Successfully added to cart</div>}
                    <h4 className="mt-[20px] text-[16px] font-bold capitalize mb-[12px]">product details</h4>
                    <p className=" text-[#777]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus, nibh ut ornare blandit,
                        lacus neque vehicula mauris, a finibus justo nisi vitae nunc. Cras risus sapien, imperdiet quis neque ac,
                        tincidunt dapibus nisl. Cras vestibulum enim at ipsum porta posuere. Curabitur nulla ipsum,
                        varius ac maximus sed, fermentum eget ex. Aliquam nec ipsum gravida odio porta finibus non et dui.
                        Vestibulum posuere aliquet odio, ac tempor nisl euismod sit amet. Pellentesque a justo in nulla lobortis 
                        elementum et eu ipsum. Integer nulla est, placerat eu lorem non, interdum finibus leo.</p>
                </div>
            </div>
            }
        </div>
        <EmailContact/>
        </div>
    )
}