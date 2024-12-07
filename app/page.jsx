'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";




export default function Home() {
  const router = useRouter();
  const [number, setNumber] = useState()

  return (
    <div>
      <input id='enter' data-testid='enter'/>
      <input id='display' data-testid='display' defaultValue={number}/>
      <button onClick={()=>buttonClick(document.getElementById("enter").value)}>
          Enter
        </button>
    
    </div>
  );
  function buttonClick(enterNumber){
    setNumber(enterNumber)
    //router.refresh()
  }
}