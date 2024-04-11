import React, { useState } from "react";
import useData from "../../Context/Context";

export default function TimeSlot({className}){
    const [selectedTime,setSelectedTime] = useState(null)
    const {data,setData} = useData()

    const timeSlots = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'];

    const handleTimeClick = (value)=>{
        setSelectedTime(value)
        setData(prev => ({ ...prev, startTime: value,}))
    }

    const handleNextTimeSlotBtn = (value)=>{
        const timeString = data.date.toISOString().slice(0, 10)+" "+value+":00"// this will make the string format
        const startingTime = new Date(timeString) // chnge into obj
        const endTime = new Date(startingTime.getTime() + 45 * 60 * 1000); // helps to increase time by 45min
        setData(prev=>({...prev,endTime:endTime}))
    }
    return(
        <section className={`${className}`}>
            <p className="text-[larger]">
                {data.date && data.date.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"2-digit"})}
            </p>

            <div className="h-[470px] w-[210px] my-[20px] overflow-y-scroll hideScrollBar">
                {timeSlots.map((value, index) => (
                    <div key={index}
                        className={`border-[1px] border-[solid] border-[#66B2FF] w-[180px] h-[60px] text-center my-[5px] py-[15px] relative left-[5px] cursor-pointer text-[#1566F3] font-bold rounded-[8px] ${selectedTime === value ? "w-[85px] bg-[#606060] py-[18px] text-[#FFFFFF] border-[0px]" : ""}`}
                        onClick={() => handleTimeClick(value)}>
                        {value}
                        <button
                        onClick={()=>handleNextTimeSlotBtn(value)}
                        className={`border-[1px] border-[solid] border-[blue] w-[85px] h-[60px] text-center my-[5px] py-[15px] absolute left-[95px] top-[-5px] cursor-pointer text-[#3333FF] font-bold rounded-[8px]  ${selectedTime === value ? "bg-[#1080FF] text-[white] border-[0px] block" : "hidden"} `}>
                            Next
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}