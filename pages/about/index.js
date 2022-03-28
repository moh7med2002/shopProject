import DownloadApp from "../../components/About/DownloadApp"
import WhoWeAre from "../../components/About/WhoWeAre"
import LandShop from "../../components/Shop/landingShop"
import EmailContact from '../../components/Home/EmailsContact'
import FeaturesBox from "../../components/Home/featuresImg"
import React from "react";
export default function About(){
    let[featuresData,setFeaturesData]=React.useState([]);
    let[isLoad,setLoad]=React.useState(false)
    React.useEffect(()=>{
        async function getData(){
            let response=await fetch('/api/featuresBox');
            let data=await response.json();
            setFeaturesData(data);
            setLoad(true);
        }
        getData()
    },[])
    return(
        <div className="pt-[70.4px]">
            <LandShop clas={'landAbout'} title={'#Know Us'} description={'We will help you to know us'}/>
            <WhoWeAre/>
            <DownloadApp/>
            <div className="my-[30px]">
            <FeaturesBox datas={featuresData}/>
            </div>
            <EmailContact/>
        </div>
    )
}