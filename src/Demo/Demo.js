import React from "react";
import Calender from "./Calander/Calender.js";
import TimeSlot from "./TimeSlot/TimeSlot.js";
import Details from "./Details/Details.js";
import Confirm from "./Confirmation/Confirm.js";
import useData from "../Context/Context.js";
import AboutMeet from "./AboutMeet/AboutMeet.js";

export default function Demo(){
    const {data} = useData();
    
    return(
        <div className={`border-[1px] border-[solid] border-[#E0E0E0] [box-shadow:rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] bg-[rgb(255,_251,_251)] rounded-[10px] relative z-[20] ${data.date===null && data.endTime=== null?"w-[900px] left-[350px]":"w-[1150px] left-[200px] "} ${data.endTime!==null?"overflow-y-scroll hideScrollBar left-[250px]":""} h-[620px] top-[50px] text-left`}>
            
            <AboutMeet className={`${data.scheduleEvent?"hidden":"block"}`}/>

            <hr className={`rotate-90 relative top-[-15px] left-[90px] border-[1px] border-[#E0E0E0] ${data.endTime!==null?"hidden":"w-[620px]"} ${data.scheduleEvent?"hidden":"block"}`}/>
            <Calender className={`absolute left-[400px] top-[2px] ${data.endTime===null?"block":"hidden"} ${data.scheduleEvent?"hidden":"block"}`}/>

            <TimeSlot className={`absolute top-[70px] left-[900px] ${data.date===null?"hidden":"block"} ${data.endTime===null?"block":"hidden"} ${data.scheduleEvent?"hidden":"block"}`}/>

            <Details className={`absolute left-[410px] top-[0px]  border-l-[2px]  border-[#E0E0E0] ${data.endTime===null?"hidden":"block"} ${data.scheduleEvent?"hidden":"block"}`}/>

            <Confirm className={`w-[600px] h-[500px] absolute top-[70px] left-[260px] text-center ${data.scheduleEvent?"block":"hidden"}`}/>

        </div>
    )
}