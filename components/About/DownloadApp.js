import React from "react"
import  ReactPlayer from 'react-player'
export default function DownloadApp(){
    return(
        <div className="container px-6 py-[30px]">
            <h2 className="text-center capitalize font-bold text-[38px] mb-[20px]">download our 
            <span className=" underline text-fuchsia-600"> app</span></h2>
            <video controls autoPlay loop preload="auto" width={'800px'} 
            className="rounded-[20px] max-w-[100%] mx-auto">
                <source src={"/img//about/1.mp4"}   typeof='video/mp4'/>
            </video>
        </div>
    )
}