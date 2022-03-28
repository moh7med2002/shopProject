import Image from "next/image"
export default function ContactForm({peoples}){
   
    let peoplesJsx=peoples.map(people=>{
        return(
            <div key={people.id} className="flex mb-[50px]">
                <Image src={people.img} alt="" width={'70px'} height={'70px'} />
                <div className="ml-[15px]">
                    <h4 className=" capitalize">{people.name}</h4>
                    <p className="text-[#777]">{people.job}</p>
                    <p className="text-[#777]">{people.email}</p>
                    <p className="text-[#777]">{people.phone}</p>
                </div>
            </div>
        )
    })

    return(
        <div className="container px-6">
            <div className="flex flex-wrap justify-between my-[50px] border border-gray-600 py-[50px] px-[30px] gap-[50px]">
            <div className="md:w-[60%]">
                <span className=" uppercase text-[#777] text-[14px] block mb-[10px]">leave a message</span>
                <h4 className=" font-bold text-[22px] mb-[12px]">We love to hear from you</h4>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input type={'text'} placeholder='Your Name'
                    className="border border-gray-600 outline-none block w-[100%] mb-[20px] p-[5px]"/>
                    <input type={'mail'} placeholder='E-mail'
                    className="border border-gray-600 outline-none block w-[100%] mb-[20px] p-[5px]"/>
                    <input type={'text'} placeholder='Subject'
                    className="border border-gray-600 outline-none block w-[100%] mb-[20px] p-[5px]"/>
                    <textarea placeholder="Your Message"
                    className="border border-gray-600 outline-none block w-[100%] mb-[20px] h-[200px] p-[5px]"/>
                    <input type={'submit'} value="Submit" 
                    className=" bg-greenColor text-white w-[100px] h-[35px] cursor-pointer rounded-[5px]"/>
                </form>
            </div>
            <div className=" md:w-[30%]">
                {peoplesJsx}
            </div>
        </div>
        </div>
    )
}