import { useState } from "react"


function StateThings() {

    const [Count,setCount] =useState(0);
    function positive() {
        // setCount(Count+1)
        setCount(oldcountervalue=>oldcountervalue+1);
    }
    function negative() {
        // setCount(Count-1)
        setCount(oldcountervalue=>oldcountervalue-1)
    }

    return(
    
        <div>
            <h1>the couter is : {Count}</h1>

            <button onClick={positive}>+</button>
            <button onClick={negative}>-</button>
        
        </div>


    )
}

export default StateThings