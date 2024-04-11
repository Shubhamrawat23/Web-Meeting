import React from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faClock, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import useData from "../../Context/Context";

export default function AboutMeet({className}){
    const {data} = useData()
    const formateDate = data.date?.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"2-digit", year:"numeric"})
    const formatEndTime = data.endTime?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
    return (
        <div className={className}>
            <FontAwesomeIcon icon={faSlack} size="2xl" style={{ color: "#2acf9e", }} className="w-[150px] h-[150px] relative left-[100px] top-[30px]" />
            <hr className={` relative top-[50px] border-[1px] border-[#E0E0E0] ${data.endTime?"w-[420px]":"w-[400px]"}`} />

            <p className="font-bold text-[x-large] relative top-[80px] w-[400px] px-[20px]">Fibery Demo</p>

            <FontAwesomeIcon icon={faClock} size="lg" style={{ color: "#b2b4b8", }} className="relative top-[100px] left-[20px]" /> <span className="relative top-[100px] left-[20px] text-[grey] font-[700]">45 min</span>


            {data.endTime && (
            <div className="w-[200px] relative top-[110px] left-[20px] px-[5px] font-[700] text-[grey]">
                <FontAwesomeIcon icon={faCalendar} style={{ color: "#85858a", }}  className="pr-[8px]"/>
                <span>{data.startTime}-{formatEndTime}, {formateDate} </span>
                <div className="my-[15px]">
                  <FontAwesomeIcon icon={faEarthAsia} style={{ color: "#959697", }} /> IST(India Standard Time)
                </div>
            </div>
            )}

            <p className="w-[400px] relative top-[100px] p-[20px]">
                Book a meeting with our Fibery team. Talk to a real person about how to get your processes set up with us 🦄 or not 💩
            </p>
        </div>
    )
}