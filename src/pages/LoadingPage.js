import React from 'react'
import { Html, useProgress } from 'drei'
import style from './LoadingPage.scss'

export default function LoadingPage() {
  const { progress, loaded } = useProgress();

  const wrapper = document.getElementById("wrapper");

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  
  const uniqueRand = (min, max, prev) => {
    let next = prev;

    while(prev == next) next = rand(min, max);

    return next;
  }

  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 },
    { configuration: 5, roundness: 5 }
  ];
  
  let prev = 0;
  
  const timeId = setInterval(() => {
    const index = uniqueRand(0, combinations.length - 1, prev),
          combination = combinations[index];
    
    wrapper.dataset.configuration = combination.configuration;
    wrapper.dataset.roundness = combination.roundness;
    
    prev = index;
  }, 3000);

  if (progress == loaded) {
    clearInterval(timeId);
  }

  // setTimeout(() => {
  //   clearInterval(timeId);
  // },);

  return (
    <Html center className={style}>
    <div className='container' style={{background: 'black', width: '100vw', height: '100vh', display: 'grid'}}>
      <div id="wrapper" className='animeFrame' data-configuration="5" data-roundness="5">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      {/* <div>
        <h1 style={{color: 'white'}}>{progress.toFixed(1)} % loaded</h1>
      </div> */}
      {/* <h1 className='loadingText'>{ progress.toFixed(1) }% loaded</h1> */}
    </div>
    <h1 className='cautionDescrp' style={{backgroundColor: 'black', color: 'white', paddingBottom: '10vh', marginTop: 0, border: 'none'}}>please use laptop for better browsing experience</h1>
      {/* <div>
        <h1 className='loadingText'>{ progress.toFixed(1) }% loaded</h1>
      </div> */}
    </Html>
  )
}
