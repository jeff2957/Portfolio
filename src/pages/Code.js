import React from 'react'
import Header from "./components/header";
import state from "./components/state";
import style from "./Code.scss";


function Code() {

  return (
    <>
    <Header className={style} style={{zIndex: '3'}}/>  
    <div style={{maxHeight: '100vh', overflow: 'auto', overflowX: 'hidden'}}>
      {/* <div className='uiGuide'> */}
      <div>
      {/* <h1 className='introTitle'>Some Visual Works</h1> */}
        <img src="https://res.cloudinary.com/dlczspjro/image/upload/v1669558318/Group_108_hz0kkz.png" alt="UI Guideline - 01 Color" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', width: '100vw', bottom: '0px'}}/>
        <div className="uiBtn">
          <a className='btnEffct' href='https://drive.google.com/file/d/1y5yVgU62oZIX5sMPnnSIYvt9eQtuop5Y/view?usp=share_link' target='_blank' rel="noopener noreferrer"  >View UI Guideline</a>
        </div>
        <div className='uiBtn2'>
          <a className='btnEffct' href='https://drive.google.com/file/d/1PyprFwVJolI59ovd7SFBrmH9WdzZCp2L/view?usp=share_link' target='_blank' rel="noopener noreferrer">View UI Prototype</a> 
        </div>
        {/* <div className='btnGrid'> */}
          {/* <div className='uiBtn3'>
            <a className='btnEffct' href='https://github.com/jeff2957/Pangcah' rel="noopener noreferrer" target="_blank">View Code (Github)</a>
          </div> */}
          <div className='uiBtn4'>
            <a className='btnEffct' href='https://pangcahfestival.com/' rel="noopener noreferrer" target="_blank">View Live Web</a>
          </div>
        {/* </div> */}
      </div>
    </div>
    </>  
  )
}

export default Code