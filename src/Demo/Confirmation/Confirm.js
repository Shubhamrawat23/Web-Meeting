import React from "react";
import GuestImg from "../../Images/GuestImg.jpg"
import Verify from "../../Images/icons8-verify-30.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faEarthAsia, faVideo } from "@fortawesome/free-solid-svg-icons";
import useData from "../../Context/Context";

export default function Confirm({className}){
    const {data} = useData()
    const formatEndTime = data.endTime?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    const formateDate = data.date?.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"2-digit", year:"numeric"});
    return(
        <div className={className}>
            <img src={GuestImg} alt="guestImg" className="w-[80px] h-[90px] relative left-[250px] rounded-[50px] object-fit"/>

            <img src={Verify} alt="VerifyIcon" className="relative top-[40px] left-[120px] w-[25px]"/>
            <p className="text-[xx-large] font-bold"> You are scheduled</p>

            <p className="[word-spacing:2px]">A calendar invitation has beem sent to your email address.</p>

            <div className="border-[1px] border-[solid] border-[gray] h-[280px] w-[500px] relative left-[50px] rounded-[10px] p-[10px]">

                <p className="font-bold text-[x-large] relative left-[-150px] top-[10px]">Fibery Demo</p>
                
                <div className="relative left-[-130px] top-[25px] text-[#808080] font-[500]">
                    <FontAwesomeIcon icon={faUser} style={{ color: "#7e8186", }} className="px-[10px] w-[25px] h-[25px]" />
                    <span className="text-[large]">{data.fullName}</span>
                </div>

                <div className="relative left-[-65px] top-[45px] text-[#808080] font-[500]">
                    <FontAwesomeIcon icon={faCalendar} style={{ color: "#85858a", }} className="px-[10px] w-[25px] h-[25px]"/>
                    <span className="text-[large]">{data.startTime}-{formatEndTime}, {formateDate}</span>
                </div>

                <div className="relative left-[-85px] top-[65px] text-[#808080] font-[500]">
                    <FontAwesomeIcon icon={faEarthAsia} style={{ color: "#959697", }} className="px-[10px] w-[25px] h-[25px]"/>
                    <span className="text-[large]">{`IST (Indain Standard Times)`}</span>
                </div>

                <div className="relative left-[-55px] top-[80px] text-[#808080] font-[500]">
                    <FontAwesomeIcon icon={faVideo} style={{ color: "#c7c7c7", }} className="px-[10px] w-[25px] h-[25px]"/>
                    <span className="text-[large]">Web confrencing deatils to follow</span>
                </div>
            </div>
        </div>
    )
}