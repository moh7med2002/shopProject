import MapContact from '../../components/Contact/Map'
import LandShop from '../../components/Shop/landingShop'
import EmailContact from '../../components/Home/EmailsContact'
import { useState , useEffect} from 'react'
import ContactForm from '../../components/Contact/ContactForm'
export default function Contact(){
    let[peoples,setPeoples]=useState([])
    let[loadPeoples,setLoad]=useState(false)

    useEffect(()=>{
        async function getPeoples(){
            let response=await fetch('/api/peoples')
            let data=await response.json();
            setPeoples(data);
            setLoad(true)
        }
        getPeoples()
    })
    return(
        <div className="pt-[70.4px]">
            <LandShop clas={'landAbout'} title={'#let\'s_talk'} description={'LEAVE A MESSAGE, We love to hear from you!'}/>
            <MapContact/>
            <EmailContact/>
            {loadPeoples && <ContactForm peoples={peoples}/>}
            <EmailContact/>
        </div>
    )
}