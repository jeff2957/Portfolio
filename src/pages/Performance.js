import React from 'react'
import Header from "./components/header";
import style from "./Performance.scss"


function Performance() {
  return (
    <>
    <Header style={style}/>  
    <div className='performContainer' style={{background: "linear-gradient(157deg, rgba(28,28,28,1) 0%, rgba(74,73,73,1) 76%, rgba(110,109,109,1) 99%, rgba(171,171,171,1) 100%)", display: "grid", overflow: "auto", overflowX: "hidden", justifyItems: "center", height: "100%"}}>
      <h1 className='introTitle' style={{width: "100vw", textAlign: "center", paddingTop: "11vh", paddingBottom: "20px"}}>Rainy Day</h1>
      <iframe className='frame' 
      // height="800vh" width="80%" 
      src="https://www.youtube.com/embed/vDvOkE0OGto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <div style={{marginTop: '40px'}}>
        <h5 className='introTitle' style={{fontSize: "50px", width: "80vw", textAlign: "left"}}>About</h5>
        <h6 className='descrp' style={{width: "80vw", fontWeight: "lighter"}}>Rainy Day is a project to show my ability in music production, guitar and keyboard live performance, and interactive media design. The Project setup includes a laptop with Logic Pro, a projector, an animation created with Touchdesigner, a midi keyboard (Piano, Wind Instrument), a Stratocaster guitar, a plant, and love. The music I used is one of the pieces I completed when I first started to do digital music production. Even though the performing skill shown in the piece is not particularly difficult, the simplicity of the melody had become one of my favorite music work in the past years.</h6>
      </div>
      <div style={{paddingBottom: "10vh", paddingTop: "40px"}}>
        <h5 className='introTitle' style={{fontSize: "50px", width: "80vw", textAlign: "left"}}>Interactive Visual Process</h5>
        <h6 className='descrp' style={{width: "80vw", fontWeight: "lighter"}}>I used Touchdesigner to create this audio interactive animation. The process of creating this work is relatively simple. In order to make the visual fit the bleak emotion of the music piece, I used a circle and noise function to create the effect which emulated the ripples caused by raindrops. To make the motion dreamier, I added a few blur functions to blur the boundary of the circles and colors. And then, by adding a feedback function I create a constant looping effect which allows me to perform for a longer time duration. Finally, to add more variations to the visual, I used a switch function to switch between three different ripple effects I created by tweaking parameters of the original ripple.</h6>
      </div>
    </div>
    </>  
  )
}

export default Performance