import Image from "next/image"
import img1 from '../../public/img/banner/b17.jpg'
import img2 from '../../public/img/banner/b10.jpg'
export default function MoreInfo(){
    let data=[
        {
            img:img1,
            title:"crazy / deals",
            dexcription:"buy 1 get 1 free",
            parg:"The best classic dress is onsale at care",
            btnText:"learn more"
        },
        {
            img:img2,
            title:"spring / more",
            dexcription:"upcomming season",
            parg:"The best classic dress is onsale at care",
            btnText:"collection"
        }
    ]

    let data2=[
        {
            title:"seasonal sale",
            description:"winter collection"
        },
        {
            title:"new footwear collection",
            description:"winter collection"
        },
        {
            title:"t-shirts",
            description:"winter collection"
        }
    ]
     
    let Jsx2=data2.map((dat,index)=>{
        return(
            <div className={`class-${index+1} h-[200px] flex items-center pl-4`} key={index}>
                <div>
                    <h4 className="text-white font-bold uppercase text-[22px]">{dat.title}</h4>
                    <p className=" uppercase text-red-600 font-bold">{dat.description}</p>
                </div>
            </div>
        )
    })
    return(
        <div className="pb-[30px]">
            <div className="container px-6 grid lg:grid-cols-2 gap-[15px] py-[50px]">
            <div className="bg-1 py-[30px] px-[20px]">
                <div className="">
                    <h4 className=" text-white text-[22px]">crazy / deals</h4>
                    <h4 className=" text-white font-bold text-[36px]">buy 1 get 1 free</h4>
                    <p className=" text-white mb-[10px]">The best classic dress is onsale at care</p>
                    <button className=" bg-transparent border border-white text-white
                    w-[100px] capitalize py-[5px] duration-300 hover:bg-greenColor
                     hover:border-transparent">learn more</button>
                </div>
            </div>
            <div className="bg-2 py-[30px] px-[20px]">
                <div className="">
                    <h4 className=" text-white text-[22px]">spring / more</h4>
                    <h4 className=" text-white font-bold text-[36px]">upcomming season</h4>
                    <p className=" text-white mb-[10px]">The best classic dress is onsale at care</p>
                    <button className=" bg-transparent border border-white text-white
                    w-[100px] capitalize py-[5px] duration-300 hover:bg-greenColor
                     hover:border-transparent">collection</button>
                </div>
            </div>
        </div>

        <div className="container px-6 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2  lg:gap-[20px] gap-3">
            {Jsx2}
        </div>
        </div>
    )
}