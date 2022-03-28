import Image from 'next/image'
export default function BlogBox({data}){
    return(
        <div className='flex flex-wrap items-center gap-[30px]  mb-[60px]'>
            <div className={`md:w-[35%] relative `}>
                <Image src={data.img} alt="" width={"500px"} height={"380px"}/>
                <span className='absolute left-0 z-[-1] top-[-52px] text-[60px] font-bold text-[#777]'>
                    {data.date}</span>
            </div>
            <div className='md:w-[60%]'>
                <h3 className=' text-black font-bold text-[22px] capitalize mb-[12px]'>{data.title}</h3>
                <p className='text-[#777] max-w-[500px]'>{data.descrption}</p>
            </div>
        </div>
    )
}