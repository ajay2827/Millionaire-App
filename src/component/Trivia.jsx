import React from 'react'
import { useState,useEffect } from 'react'
import useSound from "use-sound";
import correct from '../sound/src_sounds_correct.mp3';
import play from '../sound/src_sounds_play.mp3';
import wait from '../sound/src_sounds_wait.mp3';
import wrong from '../sound/src_sounds_wrong.mp3';

function Trivia({data,questionnumber,setquestionnumber,settimeout}) {
   const [question,setquestion]=useState(null);
   const [answer,setanswer]=useState(null);
   const [className,setclassName]=useState('answer');
   const [letplay]=useSound(play);
   const [correctplay]=useSound(correct);
   const [wronganswer]=useSound(wrong);

   useEffect(()=>{
    letplay();
   },[letplay]);

   useEffect(()=>{
    setquestion(data[questionnumber-1])
   },[data,questionnumber])

   const handleclick=(a)=>{
         setanswer(a);
         setclassName('answer active');
         setTimeout(()=>{
             setclassName(a.correct?'answer correct':'answer wrong')
         },500);

         setTimeout(()=>{
          if(a.correct)
          {
             correctplay();
             setTimeout(()=>{
              setquestionnumber((prev)=>prev+1);
              setanswer(null);
             },1000);
             
          }
          else
          {
            wronganswer();
            setTimeout(()=>{
              settimeout(true);
            })
            
          }
         },4000)
   }
  return (
    <div className='trivia'>
      <div className="question">{question?.question}</div>
      <div className="answers">
      {question?.answers.map((item)=>
         (<div className={answer===item?className:'answer'} onClick={()=>handleclick(item)}>{item.text}</div> )
        )}
      </div>
    </div>
  )
}

export default Trivia
