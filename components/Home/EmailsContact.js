export default function EmailContact(){
    return(
        <div className="bg-email">
            <div className="container px-6 py-7 grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center 
            text-center gap-[20px] lg:text-left md:text-left">
            <div>
                <h3 className="text-white font-bold text-2xl capitalize mb-[10px]">sign up for newsletters</h3>
                <p className=" text-[#777]">Get E-mail updates about our latest shop and
                 <span className="text-[gold]"> special offers.</span></p>
            </div>
            <div>
                <input type={"email"} placeholder="your email address"
                className="lg:w-[300px] h-[40px] p-[12px] outline-none rounded-tl-[5px] rounded-bl-[5px] caret-greenColor"/>
                <button className=" bg-greenColor text-white h-[40px] mt-0 w-[100px]
                rounded-tr-[5px] rounded-br-[5px]">sign up</button>
            </div>
        </div>
        </div>
    )
}