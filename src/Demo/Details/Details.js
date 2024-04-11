import React, { useState } from "react";
import useData from "../../Context/Context";

export default function Details({className}){
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const {data,setData,handleCheckboxChange} = useData()
    console.log(data);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setData(prev=>({...prev,fullName:e.target[0].value}))
    }

    const handleScheduleEvent = ()=>{
        if(data.fullName!==""){
            setData(prev=>({...prev,scheduleEvent:true}))
        }
        else{
            alert("Please Fill Form or Add the guests")
        }
    }

    return(
        <section className={`w-[600px] text-left px-[55px] mx-[10px] ${className}`}>
            <p className="text-[x-large] font-bold">Enter Details</p>

            <form onSubmit={(e)=>handleSubmit(e)}
            className="h-[250px]">

                <div className="h-[100px]">
                    <label className="font-bold" htmlFor="userName">Name *</label>
                    <input type="text" 
                    placeholder="Full Name" 
                    required 
                    pattern="[A-Za-z]+ [A-Za-z]+"
                    id="userName"
                    value={fullName}
                    onChange={(e)=>setFullName(e.target.value)}
                    className="border-[2px] border-[solid] border-[grey] rounded-[10px] w-[400px] h-[50px] relative top-[40px] left-[-57px] px-[5px]"/>
                </div>

                <div className="h-[100px]">
                    <label className="font-bold" htmlFor="userEmail">Email *</label>
                    <input type="email" 
                    placeholder="Email address" 
                    required 
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                    id="userEmail"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="border-[2px] border-[solid] border-[grey] rounded-[10px] w-[400px] h-[50px] relative top-[40px] left-[-54px] px-[5px]"/>
                </div>

                <input type="submit" 
                value="Add Guests"
                className="border-[2px] border-[solid] border-[#66B2FF] w-[100px] h-[40px] rounded-[20px] text-[#0080FF] cursor-pointer hover:bg-[#0080FF] hover:text-[white]"/>
            </form>
            
            <div className="h-[200px] my-[20px]">
                
                <p className="font-bold">I want Fibery to Work for: *</p>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]"
                    id="myself" chec
                    ked={data.myself} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="myself">🥕 Myself</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]"
                    id="lessPeople" 
                    checked={data.lessPeople} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="lessPeople">👭 {`< `}10 people</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]"
                    id="morePeople" 
                    checked={data.morePeople} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="morePeople">🦄 10-50 people</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]"
                    id="hugePeople" 
                    checked={data.hugePeople} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="hugePeople">🦅 50+ people</label>
                </div>
            </div>


            <div className="h-[470px] my-[20px]">

                <p className="font-bold">You are more about: *</p>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]" 
                    id="leadership" 
                    checked={data.leadership} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="leadership">🏔️ Leadership</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]" 
                    id="consulting" 
                    checked={data.consulting} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="consulting">🦉 Consulting</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]" 
                    id="pdtManage" 
                    checked={data.pdtManage} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="pdtManage">🌞 Product Management</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]" 
                    id="design" 
                    checked={data.design} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="design">🎨 Design</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]" 
                    id="engineer" 
                    checked={data.engineer} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="engineer">💻 Engineering</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]" 
                    id="sales" 
                    checked={data.sales} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="sales">🎣 Sales</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]" 
                    id="marketing" 
                    checked={data.marketing} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="marketing">💣 Marketing</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]" 
                    id="humanResources" 
                    checked={data.humanResources} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="humanResources">🔷 Human Resources</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]" 
                    id="education" 
                    checked={data.education} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="education">📚 Education</label>
                </div>

                <div className="my-[20px]">
                    <input type="checkbox"
                    className="h-[18px] w-[18px]" 
                    id="somethingElse" 
                    checked={data.somethingElse} 
                    onChange={(e)=>handleCheckboxChange(e.target.id,e.target.checked)}/>
                    <label htmlFor="somethingElse">❓Something else</label>
                </div>

            </div>

            <div>
                <label htmlFor="extraForMeeting" className="font-bold">Please, share anything that will help prepare for our meeting</label>
                <textarea id="extraForMeeting" className="border-[2px] border-[solid] border-[grey] rounded-[10px] w-[460px] h-[120px] p-[5px] my-[10px] relative left-[10px]"/>
            </div>

            <div>
                <label htmlFor="nameOfWorkspace" className="font-bold">Please, share with us the name of your Fibery workspace{`(if any)`}</label>
                <input type="text" id="nameOfWorkspace" className="border-[2px] border-[solid] border-[grey] rounded-[10px] w-[460px] h-[50px] p-[5px] my-[10px] relative left-[10px]"/>
            </div>

            <button className="bg-[#1080FF] w-[150px] h-[50px] rounded-[50px] text-[white] mb-[20px]" onClick={handleScheduleEvent}>Schedule Event</button>
        </section> 
    )
}