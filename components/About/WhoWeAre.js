import Image from 'next/image'
import img from '../../public/img/about/a6.jpg'
export default function WhoWeAre(){
    return(
        <div className='container px-6 py-[40px] lg:grid grid-cols-2 items-center gap-[25px]'>
            <div>
                <Image src={img} alt="about" width={'800px'} height={'650px'}/>
            </div>
            <div className='lg:px-[20px]'>
                <h2 className='font-bold capitalize text-[32px] mb-[12px]'>who we are?</h2>
                <p className='text-[#777] mb-[15px]'>It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem 
                    Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here, content here', making it look like 
                    readable English. Many desktop publishing packages and web page editors now use Lorem 
                    Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites 
                    still in their infancy. Various versions have evolved over the years, sometimes 
                    by accident, sometimes on purpose</p>
                    <p className='mb-[15px]'><abbr title=''>It is a long established fact that a reader will be distracted by the readable
                    content of a page</abbr> </p>
                    <div className='bg-[#eee] relative overflow-hidden h-[23px]'>
                        <h3 className='scrolling absolute top-[0] left-[0] translate-x-[100%]'>
                            To popular belief, Lorem Ipsum is not simply is a long random text. To popular belief.</h3>
                    </div>
            </div>
        </div>
    )
}