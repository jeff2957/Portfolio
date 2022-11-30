import React from 'react'
import Header from "./components/header";
import state from "./components/state";
import style from "./Code.scss";


function Code() {

  return (
    <>
    <Header className={style} style={{zIndex: '3'}}/>  
    <div style={{height: '100vh', overflow: 'auto', overflowX: 'hidden'}}>
      <div className='uiGuide'>
      {/* <h1 className='introTitle'>Some Visual Works</h1> */}
      <img src="https://res.cloudinary.com/dlczspjro/image/upload/v1669558318/Group_108_hz0kkz.png" alt="UI Guideline - 01 Color"/>
      <a href='' rel="noopener noreferrer" className="uiBtn" >View UI Guideline</a>
      <a href='' rel="noopener noreferrer" className="uiBtn2" >View UI Prototype</a>
      <a href='https://github.com/jeff2957/Pangcah' rel="noopener noreferrer" target="_blank" className="uiBtn4" >View Code (Github)</a>
      <a href='https://pangcahfestival.com/' rel="noopener noreferrer" target="_blank" className="uiBtn3" >View Live Web</a>
      </div>
      </div>
    </>  
  )
}

export default Code