import React, { useState } from 'react';
const App =()=>{
    const state=useState;
    let time=new Date().toLocaleTimeString();
    const [count,setcount]=useState(time);
    function getTime(){
        let time=new Date().toLocaleTimeString();
        setcount(time);
    }
    setInterval(getTime,1000);
    return (
        <>
            <h1>{count}</h1>
        </>
    )
}
export default App;