import React, { Suspense, useEffect, useRef, useState } from "react";
//Components
import Header from "./components/header";
import { Section } from "./components/section"
import { Canvas, useFrame } from "react-three-fiber"
import { HTML, Html, useGLTFLoader } from "drei"

//page state
import state from "./components/state";

//intersection observer
import { useInView } from "react-intersection-observer";

//typewritter-effect
import Typewriter from "typewriter-effect";

//button page transition animation
import style from './Home.scss'
import { string } from "i/lib/util";

//sections and pages
import LoadingPage from "./LoadingPage";
// import AboutMe from "./AboutMe";


const Model = ({ modalPath }) => {
    const gltf = useGLTFLoader(modalPath, true);
    return <primitive object={gltf.scene} dispose={null} />;
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 30, 5]} intensity={0.6} />
      <directionalLight position={[50, 100, 5]} intensity={0.8} />
      {/* <spotLight position={[0 ,1000, 0]} intensity={0.2} />  */}
    </>
  )
}


const HTMLContent = ({ bgColor, domContent, children, modalPath, position, scale }) => {

  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));
  
  const [refItem, inView] = useInView({
    threshold: 0
  });

  useEffect(() => {
    inView && (document.body.style.background = bgColor)
  });

  return (
    <Section factor={1.5} offset={1}>
      <group position={[position[0], position[1], position[2], position[3]]}>
        <mesh ref={ref} position={[0, 0, 0]}>
          <Model modalPath={modalPath}/>
        </mesh>
        <Html portal={domContent} fullscreen>
          <div className="container" ref={refItem}>{children}</div>
        </Html>
      </group>
    </Section>
  );
};

const IntroText = () => {

  return (
    <>
    <span className="textTran">B</span>
    <span className="textTran">a</span>
    <span className="textTran">s</span>
    <span className="textTran">e</span>
    <span className="textTran">d</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">i</span>
    <span className="textTran">n</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">T</span>
    <span className="textTran">a</span>
    <span className="textTran">i</span>
    <span className="textTran">p</span>
    <span className="textTran">e</span>
    <span className="textTran">i</span>
    <span className="textTran">,</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">T</span>
    <span className="textTran">a</span>
    <span className="textTran">i</span>
    <span className="textTran">w</span>
    <span className="textTran">a</span>
    <span className="textTran">n</span>
    <span className="textTran">.</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">A</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">M</span>
    <span className="textTran">u</span>
    <span className="textTran">s</span>
    <span className="textTran">i</span>
    <span className="textTran">c</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">F</span>
    <span className="textTran">a</span>
    <span className="textTran">n</span>
    <span className="textTran">a</span>
    <span className="textTran">t</span>
    <span className="textTran">i</span>
    <span className="textTran">c</span>
    <span className="textTran">,</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">D</span>
    <span className="textTran">e</span>
    <span className="textTran">v</span> 
    <span className="textTran">e</span>
    <span className="textTran">l</span>
    <span className="textTran">o</span>
    <span className="textTran">p</span>
    <span className="textTran">e</span>
    <span className="textTran">r</span>
    <span className="textTran">,</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">a</span>
    <span className="textTran">n</span>
    <span className="textTran">d</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">M</span>
    <span className="textTran">e</span>
    <span className="textTran">d</span>
    <span className="textTran">i</span>
    <span className="textTran">a</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">D</span>
    <span className="textTran">e</span>
    <span className="textTran">s</span>
    <span className="textTran">i</span> 
    <span className="textTran">g</span>
    <span className="textTran">n</span>
    <span className="textTran">e</span> 
    <span className="textTran">r</span>
    <br />
    <span className="textTran">S</span>
    <span className="textTran">t</span>
    <span className="textTran">a</span>
    <span className="textTran">r</span>
    <span className="textTran">t</span>
    <span className="textTran">e</span>
    <span className="textTran">d</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">p</span>
    <span className="textTran">l</span>
    <span className="textTran">a</span>
    <span className="textTran">y</span>
    <span className="textTran">i</span>
    <span className="textTran">n</span>
    <span className="textTran">g</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">g</span>
    <span className="textTran">u</span>
    <span className="textTran">i</span>
    <span className="textTran">t</span>
    <span className="textTran">a</span>
    <span className="textTran">r</span> 
    <span className="textTran">&nbsp;</span>
    <span className="textTran">a</span>
    <span className="textTran">t</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">1</span>
    <span className="textTran">4</span>
    <span className="textTran">,</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">m</span>
    <span className="textTran">a</span>
    <span className="textTran">i</span>
    <span className="textTran">n</span>
    <span className="textTran">l</span>
    <span className="textTran">y</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">d</span>
    <span className="textTran">o</span>
    <span className="textTran">i</span>
    <span className="textTran">n</span>
    <span className="textTran">g</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">a</span>
    <span className="textTran">l</span>
    <span className="textTran">t</span>
    <span className="textTran">e</span>
    <span className="textTran">r</span>
    <span className="textTran">n</span>
    <span className="textTran">a</span>
    <span className="textTran">t</span>
    <span className="textTran">i</span>
    <span className="textTran">v</span>
    <span className="textTran">e</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">r</span>
    <span className="textTran">o</span>
    <span className="textTran">c</span>
    <span className="textTran">k</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">a</span>
    <span className="textTran">n</span>
    <span className="textTran">d</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">h</span>
    <span className="textTran">i</span>
    <span className="textTran">p</span>
    <span className="textTran">h</span>
    <span className="textTran">o</span>
    <span className="textTran">p</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">p</span>
    <span className="textTran">r</span>
    <span className="textTran">o</span>
    <span className="textTran">d</span>
    <span className="textTran">u</span>
    <span className="textTran">c</span>
    <span className="textTran">t</span>
    <span className="textTran">i</span>
    <span className="textTran">o</span>
    <span className="textTran">n</span>
    <br />
    <span className="textTran">G</span>
    <span className="textTran">r</span>
    <span className="textTran">a</span>
    <span className="textTran">d</span>
    <span className="textTran">u</span>
    <span className="textTran">a</span>
    <span className="textTran">t</span>
    <span className="textTran">e</span>
    <span className="textTran">d</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">f</span>
    <span className="textTran">r</span>
    <span className="textTran">o</span>
    <span className="textTran">m</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">N</span>
    <span className="textTran">a</span>
    <span className="textTran">t</span>
    <span className="textTran">i</span>
    <span className="textTran">o</span>
    <span className="textTran">n</span>
    <span className="textTran">a</span>
    <span className="textTran">l</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">C</span>
    <span className="textTran">h</span>
    <span className="textTran">e</span>
    <span className="textTran">n</span>
    <span className="textTran">g</span>
    <span className="textTran">c</span>
    <span className="textTran">h</span>
    <span className="textTran">i</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">U</span>
    <span className="textTran">n</span>
    <span className="textTran">i</span>
    <span className="textTran">v</span>
    <span className="textTran">e</span>
    <span className="textTran">r</span>
    <span className="textTran">s</span>
    <span className="textTran">i</span>
    <span className="textTran">t</span>
    <span className="textTran">y</span>
    <br />
    <span className="textTran">w</span>
    <span className="textTran">i</span>
    <span className="textTran">t</span>
    <span className="textTran">h</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">a</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">B</span>
    <span className="textTran">a</span>
    <span className="textTran">c</span>
    <span className="textTran">h</span>
    <span className="textTran">e</span>
    <span className="textTran">l</span>
    <span className="textTran">o</span>
    <span className="textTran">r</span>
    <span className="textTran">'</span>
    <span className="textTran">s</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">d</span>
    <span className="textTran">e</span>
    <span className="textTran">g</span>
    <span className="textTran">r</span>
    <span className="textTran">e</span>
    <span className="textTran">e</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">i</span>
    <span className="textTran">n</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">M</span>
    <span className="textTran">a</span>
    <span className="textTran">n</span>
    <span className="textTran">a</span>
    <span className="textTran">g</span>
    <span className="textTran">e</span>
    <span className="textTran">m</span>
    <span className="textTran">e</span>
    <span className="textTran">n</span>
    <span className="textTran">t</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">I</span>
    <span className="textTran">n</span>
    <span className="textTran">f</span>
    <span className="textTran">o</span>
    <span className="textTran">r</span>
    <span className="textTran">m</span>
    <span className="textTran">a</span>
    <span className="textTran">t</span>
    <span className="textTran">i</span>
    <span className="textTran">o</span>
    <span className="textTran">n</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">S</span>
    <span className="textTran">y</span>
    <span className="textTran">s</span>
    <span className="textTran">t</span>
    <span className="textTran">e</span>
    <span className="textTran">m</span>
    <span className="textTran">s</span>
    <br />
    <span className="textTran">E</span>
    <span className="textTran">x</span>
    <span className="textTran">-</span>
    <span className="textTran">I</span>
    <span className="textTran">B</span>
    <span className="textTran">M</span>
    <span className="textTran">,</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">c</span>
    <span className="textTran">u</span>
    <span className="textTran">r</span>
    <span className="textTran">r</span>
    <span className="textTran">e</span>
    <span className="textTran">n</span>
    <span className="textTran">t</span>
    <span className="textTran">l</span>
    <span className="textTran">y</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">w</span>
    <span className="textTran">o</span>
    <span className="textTran">r</span>
    <span className="textTran">k</span>
    <span className="textTran">i</span>
    <span className="textTran">n</span>
    <span className="textTran">g</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">a</span>
    <span className="textTran">s</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">a</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">t</span>
    <span className="textTran">e</span>
    <span className="textTran">c</span>
    <span className="textTran">h</span>
    <span className="textTran">n</span>
    <span className="textTran">i</span>
    <span className="textTran">c</span>
    <span className="textTran">a</span>
    <span className="textTran">l</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">s</span>
    <span className="textTran">p</span>
    <span className="textTran">e</span>
    <span className="textTran">c</span>
    <span className="textTran">i</span>
    <span className="textTran">a</span>
    <span className="textTran">l</span>
    <span className="textTran">i</span>
    <span className="textTran">s</span>
    <span className="textTran">t</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">i</span>
    <span className="textTran">n</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">t</span>
    <span className="textTran">h</span>
    <span className="textTran">e</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">e</span>
    <span className="textTran">n</span>
    <span className="textTran">t</span>
    <span className="textTran">e</span>
    <span className="textTran">r</span>
    <span className="textTran">t</span>
    <span className="textTran">a</span>
    <span className="textTran">i</span>
    <span className="textTran">n</span>
    <span className="textTran">m</span>
    <span className="textTran">e</span>
    <span className="textTran">n</span>
    <span className="textTran">t</span>
    <span className="textTran">&nbsp;</span>
    <span className="textTran">i</span>
    <span className="textTran">n</span>
    <span className="textTran">d</span>
    <span className="textTran">u</span>
    <span className="textTran">s</span>
    <span className="textTran">t</span>
    <span className="textTran">r</span>
    <span className="textTran">y</span>
    </>
  )
};


export default function App() {
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9]};

  return ( 
    <>
      <Header className={style}/>
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={<LoadingPage/>}>
        <HTMLContent domContent={domContent} modalPath={'/introModel.gltf'}
            position={[0,250,0]} scale={1} bgColor='#FBE7C6'>
            <span>
              <h1 className="introTitle">Hi, I am</h1>
              {/* <h1 className="introTitle">LU YEN-FU</h1> */}
              <h1 className="typeTitle">
                <Typewriter
                  options={{
                    strings: ['LU YEN-FU', 'A Beatmaker', 'A Developer', 'A Media Designer'],
                    autoStart: true,
                    loop: true
                  }}
                />
              </h1>
            </span>
          </HTMLContent>
          <HTMLContent domContent={domContent} modalPath={'/aboutMe.gltf'} scale={1} position={[0,0,0]} bgColor='#73877B'>
            <div className='parallelText'>
                <div className="pin-wrap">
                    <h1 className="title">About Me</h1>
                </div>
              <div className="">
                  <h5 className="subText">
                    {/* Based in Taipei, Taiwan. A Music Fanatic, Developer, and Interactive Graphic Artist.<br/> Started playing guitar at 14, mainly doing alternative rock and hiphop production.<br/> Graduated from National Chengchi University in 2016 with a Bachelor degree in Management Information Systems.<br/> Ex-IBM, now am a technical specialist working in the entertainment industry. */}
                    <IntroText />
                  </h5>
              </div>
            </div>
          </HTMLContent>
          <HTMLContent domContent={domContent} modalPath={'/cassette.gltf'}
            position={[0,-250,0]} scale={1} bgColor='#ffbe0b'>
            <div className="VertContainer">
            <h1 className="title">Music</h1>
            <a href='/Performance' rel="noopener noreferrer" className="lineBtn">View</a>
            </div>
          </HTMLContent>
          <HTMLContent domContent={domContent} modalPath={'/programmingIcon.gltf'}
            position={[0,-500,0]} scale={1} bgColor={'#B4F8C8'}>
            <div className="VertContainer">
            <h1 className="title">Code</h1>
            <a href='/Code' rel="noopener noreferrer" className="lineBtn">View</a>
              <br/>
              <br/>
            <a href='https://github.com/jeff2957?tab=repositories' target='_blank' rel="noopener noreferrer" className="lineBtn">Other Works</a>
            </div>
          </HTMLContent>
          <HTMLContent domContent={domContent} modalPath={'/drawPen.gltf'}
            position={[0,-750,0]} scale={1} bgColor={'#A0E7E5'}>
            <div className="VertContainer">
            <h1 className="title">Media Design</h1>
            <a href='/MusicP5' className="lineBtn">View</a>
              <br/>
              <br/>
            <a href='https://www.behance.net/f4fdb9ac' target='_blank' rel="noopener noreferrer" className="lineBtn">Other Works</a>
            </div>
          </HTMLContent>
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
        <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div>
    </>
  );
}
