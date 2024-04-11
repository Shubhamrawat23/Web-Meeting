import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();


export function DataProvider({children}){
    const [data,setData] = useState(
        {
            date: null,
            startTime: null,
            endTime: null,
            fullName: "",
            email:"",
            myself: false,
            lessPeople: false,
            morePeople: false,
            hugePeople: false,
            leadership: false,
            consulting: false,
            pdtManage: false,
            design: false,
            engineer: false,
            sales: false,
            marketing: false,
            humanResources: false,
            education: false,
            somethingElse: false,
            scheduleEvent:false
        }
    )

    const handleCheckboxChange = (checkboxId, checked) => {
        setData((prevData) => ({
            ...prevData,
            [checkboxId]: checked
        }));
    };

    return<DataContext.Provider value={{data,setData,handleCheckboxChange}}>
        {children}
    </DataContext.Provider>
}

export default function useData(){
    return useContext(DataContext)
}