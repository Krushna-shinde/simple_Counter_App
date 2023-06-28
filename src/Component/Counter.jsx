import { useState } from "react";


const Counter=()=>{
    const [counter, setCounter]= useState(0);
    const inc=()=>{
        if(counter===10){
            return;
        }
        setCounter(counter+1)
    }
    const dec=()=>{
        if(counter===0){
            return;
        }
        setCounter(counter-1)
    }
    return(
        <div>
            {/* Method 1 */}
            {/* <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <h1>{counter}</h1>
            <button onClick={()=>{
                if(counter===0){
                    return;
                } setCounter(counter-1)}}>-</button>
            </div> */}

            {/* Method 2 */}

            <div>
                <button onClick={inc}>+</button>
                <h2>{counter}</h2>
                <button onClick={dec}>-</button>
            </div>
            
        </div>
    )
}

export default Counter;



