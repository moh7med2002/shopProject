import Image from "next/image"
export default function FeaturesBox({datas}){
    return(
        <div className="container px-6 py-10 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {
                datas.map(data=>{
                    return(
                            <div className="text-center p-4 py-6 shadow">
                                <Image src={data.img} width="130px" height={"80px"} alt=""/>
                                <h6 className={`capitalize w-fit mx-auto mt-[8px] shadow px-2 text-greenColor`} 
                                style={{background:`${data.bgColor}`}}>{data.title}</h6>
                            </div>
                    )
                })
            }
        </div>
    )
}