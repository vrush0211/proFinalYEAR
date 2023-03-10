import React from "react";
import { Cascader } from "rsuite";
import { collection, doc, setDoc } from "firebase/firestore"; 
const citiesRef = collection(db, "cities");


export default function Choose(){
    const [state , setState] = React.useState({
        course:"",year:"",sem:"",div:""
    })
return(
    <>
    {state.course}
        <div>
        <Cascader placeholder="Course"
        onSelect={(e)=>setState({...state, course:e.value})}
         data={[
            {label:"BSCIT",value:"BSCIT"},
            {label:"BSCCS",value:"BSCCS"},
            
        ]}
         style={{ width: 224 }} />
        <Cascader placeholder="Year"
        onSelect={(e)=>setState({...state, year:e.value})}
        
         data={[
            {label:"FY",value:"FY"},
            {label:"SY",value:"SY"},
            {label:"TY",value:"TY"}
        ]}
         style={{ width: 224 }} />
        <Cascader placeholder="Semester"
        onSelect={(e)=>setState({...state, sem:e.value})}
        
         data={[
            {label:"SEM1",value:"SEM1"},
            {label:"SEM2",value:"SEM2"},
            {label:"SEM3",value:"SEM3"},
            {label:"SEM4",value:"SEM4"},
            {label:"SEM5",value:"SEM5"},
            {label:"SEM6",value:"SEM6"}
        ]}
         style={{ width: 224 }} />
         <Cascader placeholder="Division"
        onSelect={(e)=>setState({...state, div:e.value})}
         
          data={[
            {label:"DIV A",value:"DIV A"},
            {label:"DIV B",value:"DIV B"}
        ]}
         style={{ width: 224 }} />
        </div>
    </>
)
}