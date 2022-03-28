import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMap, faPhone ,faEnvelope ,faClock} from "@fortawesome/free-solid-svg-icons"
export default function MapContact(){
    return(
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 my-[35px] items-center gap-[20px]">
            <div className="lg:p-[20px]">
                <span className="block uppercase text-[14px] text-[#777] mb-[15px]">get in touch</span>
                <h2 className=" font-bold capitalize text-[25px] max-w-[500px] mb-[15px]">
                    visit one of your agency locations or contact us today</h2>
                <span className=" capitalize font-semibold block mb-[15px]">head office</span>
                <p className="text-[#777] mb-[10px]"><FontAwesomeIcon icon={faMap} className="mr-[10px]"/> 
                56 glassford street glasgow new york </p>
                <p className="text-[#777] mb-[10px]"><FontAwesomeIcon icon={faEnvelope} className="mr-[10px]"/> 
                contact@example.com</p>
                <p className="text-[#777] mb-[10px]"><FontAwesomeIcon icon={faPhone} className="mr-[10px]"/> 
                111-1111-222</p>
                <p className="text-[#777] mb-[10px]"><FontAwesomeIcon icon={faClock} className="mr-[10px]"/> 
                Monday to Saturday: 9:00am to 16pm</p>
            </div>
            <div className="max-w[100%]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97672.31289654919!2d-1.175362631448015!3d51.75280084263669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713380adc41faf%3A0xc820dba8cb547402!2z2KPZg9iz2YHZiNix2K_YjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1648206715731!5m2!1sar!2s" 
            width="600" height="400" className="max-w-[100%]"  
            allowFullScreen="" loading="lazy" ></iframe>
            </div>
        </div>
    )
}