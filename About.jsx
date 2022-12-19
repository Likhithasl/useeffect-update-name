import React,{useState,useEffect} from "react";
function About(){
    let [count,setCount]=useState(0);
    let [sname,setSname]=useState("dinga");

    let updateCounter=()=>
    {
        setCount(count+1)
    }
    
    let updateSname1=()=>
    {
        setSname("Sheela")
    }

    let updateSname2=()=>
    {
        setSname("Jhon")
    }
    
    useEffect(()=>
    {
        document.title='Count is ${count}';
        console.log("useEffect Called")
    },[count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={updateCounter}>Update</button>
            <hr/>
            <h1>Sname {sname}</h1>
            <button onClick={updateSname1}>Sheela</button>
            <button onClick={updateSname2}>Jhon</button>
        </div>
    )
}
export default About
