import React, { useState } from 'react';
const CodeEditor=()=>{
  const[code,setCode]=useState('');
    const handleChange=(event)=>{
        setCode(event.target.value);
    };

const handleRun=()=>{
    if(code===" ")
    {
        alert("Please enter code first!");
    }
    else{
    alert('Running Code:\n${code}');
    }
};


    return (
        <div className="App">
           <h1>Code Editor</h1>
            <textarea placeholder="Write your code here" value={code} onchange={handleChange}/>
            <br/>
        
            <button onclick={handleRun}>Run Code</button>
           
        </div>
    );
}

export default CodeEditor;
