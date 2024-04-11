import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import useData from "../../Context/Context";


export default function Calender({className}){

    const [pDate, setpDate] = useState(new Date())
    const arrOfMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const arrofWeeks = ['MON','TUE','WED','THU','FRI','SAT','SUN']
    const {data, setData} = useData()
    const [dateSelected, setDateSelected] = useState(false)

    
    function getCalenderDate(year,month){
        const firstDateOfMonth = new Date(year,month,1) //1st date of the month 
        const lastDateOfMonth = new Date (year,month+1,0)//this is last date of the month
        const startDate = firstDateOfMonth
        const lastDate = lastDateOfMonth

        const currentDates = []
        let weekDate = []

        const prevDaysEmptySlot = (startDate.getDay()+6) % 7; //It will provide the previous month's dates which will come in present month.

        for (let i = 0; i < prevDaysEmptySlot; i++) { //this loop leave epmty space for those dates
            weekDate.push(null);
        }
        
        
        while(startDate <= lastDate){//this whille loop make weekDate array and everytime push in currentDates whenever it reach to sunday.
            weekDate.push(new Date(startDate))

            if (startDate.getDay() === 0 && weekDate.length>0) {
                currentDates.push(weekDate)
                weekDate = []
            }

            startDate.setDate(startDate.getDate()+1)
        }

        if (weekDate.length>0) {
            currentDates.push(weekDate)
        }

        return currentDates;
    }

    const allDates = getCalenderDate(pDate.getFullYear(),pDate.getMonth())

    const handlePrevMonth = useCallback(()=>{
        console.log("hello PREV");
        setpDate((prevDate)=>{
            const prevMonth = prevDate.getMonth() - 1
            const prevYear = prevDate.getFullYear() - (prevMonth < 0 ? 1 : 0)
            return new Date(prevYear, (prevMonth + 12) % 12)
        })
    },[])
    const handleNextMonth = useCallback(()=>{
        console.log("hello next");
        setpDate((prevDate)=>{
            const prevMonth = prevDate.getMonth() + 1
            const prevYear = prevDate.getFullYear() + (prevMonth > 11 ? 1 : 0)
            return new Date(prevYear, (prevMonth) % 12)
        })
    },[])

    const handleDateClick = (value)=>{
        setData(prev=>({...prev,date:value,}))
        setDateSelected(true)
    }

    return(
        <div className={`w-[500px] h-[620px] ${className}`}>
            <p className="font-bold text-[x-large] px-[15px] py-[10px]">Select Date and Time</p>

            <FontAwesomeIcon icon={faAngleLeft} className="w-[25px] h-[25px] relative left-[130px] z-[10] top-[23px] text-[#818283] cursor-pointer" onClick={handlePrevMonth} />

            <div className="h-[50px] w-[140px] relative left-[180px] top-[-10px] text-[larger]">{arrOfMonths[pDate.getMonth()]} {pDate.getFullYear()}</div>

            <FontAwesomeIcon icon={faAngleRight} className="relative top-[-57px] left-[330px] z-[10] h-[25px] w-[25px] text-[#818283] cursor-pointer" onClick={handleNextMonth} />


            <div className="relative top-[-90px] p-[50px]">

                <div className="relative left-[10px] flex justify-evenly">
                    {arrofWeeks.map((value, i) => (
                        <div key={i} className="w-[500px]">{value}{` `}{` `}</div>
                    ))}
                </div>
                <div className="h-[300px]">
                    {allDates.map((value, index) => (
                        <div key={index} className="flex h-[75px] relative left-[1px]">
                            {value.map((dateValue, dateValueIndex) => (
                                <div key={dateValueIndex}
                                    onClick={dateValue && dateValue.getDate() > new Date().getDate() ? () => handleDateClick(dateValue) : null}
                                    className={`w-[50px] h-[50px] m-[3px] p-[12px] rounded-[100px] text-[#A0A0A0] text-center font-[600] ${dateValue && dateValue.getDate() === new Date().getDate() ? "text-[black]" : ""} ${dateValue && dateValue > new Date() ? "bg-[#CCE5FF] text-[blue] cursor-pointer" : ""} ${dateSelected &&  data.date.getDate()===dateValue.getDate()? "bg-[blue] text-[white]" : ""}`}>   
                                    {dateValue ? dateValue.getDate() : ""}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}