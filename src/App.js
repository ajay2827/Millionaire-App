import './App.css';
import { useState,useMemo } from 'react';
import Trivia from './component/Trivia';
import { useEffect } from 'react';
import Timer from './component/Timer';
function App() {
  const [questionnumber, setquestionnumber] = useState(1);
  const [timeout, settimeout] = useState(false);
  const [earned,setearned]=useState('0')
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  let array = useMemo( ()=>[{ id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 },
  { id: 4, amount: 500 },
  { id: 5, amount: 1000 },
  { id: 6, amount: 2000 },
  { id: 7, amount: 4000 },
  { id: 8, amount: 8000 },
  { id: 9, amount: 16000 },
  { id: 10, amount: 32000 },
  { id: 11, amount: 64000 },
  { id: 12, amount: 125000 },
  { id: 13, amount: 250000 },
  { id: 14, amount: 500000 },
  { id: 15, amount: 1000000 }].reverse(),[]);

  useEffect(()=>{
         if(questionnumber>1)
         {
           setearned(array.find((m)=>m.id===questionnumber-1).amount);
         }
  },[questionnumber,array]);

  return (
    <div className="app">
      <div className="main">
        {
          timeout ? (<h1 className='endText'>You earned: $ {earned}</h1>) :
           (<>
            <div className="top">
              <div className="timer">
                <Timer settimeout={settimeout} questionnumber={questionnumber}/>
              </div>
            </div>
            <div className="bottom">
              <Trivia data={data} questionnumber={questionnumber} setquestionnumber={setquestionnumber} settimeout={settimeout} />
            </div>
        </>)
      }
      </div>


      <div className="pyramid">
        <ul className="pyramidlist" >
          {array.map((item) =>
          (<li className={questionnumber === item.id ? "active" : " " } >
            <span className="number">{item.id}</span>
            <span className="amount">${item.amount}</span>
          </li>)
          )}

        </ul>
      </div>
    </div>
  );
}

export default App;
