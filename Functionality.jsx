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
