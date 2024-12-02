
import React from 'react'
import './Foq.css'
import { useState } from 'react'
import questions from './Data'

const Foq = () => {
  const [data,setData]=useState(questions)
  const [checkButton, setCheckButton] = useState(true)

  const changeButton = () => {
    setCheckButton((prev) => !prev)
  }

  const toggleAnswer = (id) => {
    // Toggle visibility for the specific question
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };
  console.log(data)

  return (
    <>
 
      <div id="foq" className="foq">
      <div className="foq-heading">Frequently Asked Questions</div>
      {data.map((d) => (
        <div key={d.id}>
          <div className="foq-q">
            <div className="foq-q-box">{d.question}</div>
            <div className="foq-q-icon">
              <button onClick={() => toggleAnswer(d.id)}>
                <i className={d.open ? 'fa-solid fa-xmark' : 'fa-solid fa-plus'}></i>
              </button>
            </div>
          </div>
          {d.open && (
            <div className="foq-a">
              <div className="foq-answer-box">{d.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  
    </>
  )
}

export default Foq