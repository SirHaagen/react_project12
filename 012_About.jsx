import { useEffect } from "react";
import { useState } from "react"

export const About = () => {

  let [counter, setCounter]= useState(0);
  useEffect(()=>setCounter(counter),[0]);

  const handleClick= ()=> setCounter(counter+1);

  return (<>
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    <h2>{counter}</h2>
    <button onClick={handleClick}>Counter</button>
  </>)
} 