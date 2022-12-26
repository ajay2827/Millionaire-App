import React from 'react'
import { useEffect ,useState} from 'react'

export default function Timer({settimeout,questionnumber}) {
   const [timer,settimer]=useState(30);

   useEffect(()=>{
      if(timer<=0)
      {
        return settimeout(true)
      }
      const interval = setInterval(()=>{
        settimer(timer-1)
      },1000)
      return () => clearInterval(interval);
   },[timer,settimeout])

   useEffect(()=>{
      settimer(30);
   },[questionnumber])

  return timer
}
