import React from 'react'
export default function LandShop({clas,title,description}){
    return(
        <div className={`${clas} h-[40vh] flex items-center justify-center`}>
            <div className="text-center">
                <h3 className='text-white font-bold text-[40px]'>{title}</h3>
                <p className='text-white'>{description}</p>
            </div>
        </div>
    )
}