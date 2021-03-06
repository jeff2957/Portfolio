import React, { Suspense, useEffect, useRef, useState } from "react";
//Components
import Header from "./components/header";
import { Section } from "./components/section"
import { Canvas, useFrame } from "react-three-fiber"
import { Html, useGLTFLoader } from "drei"

//page state
import state from "./components/state";

//intersection observer
import { useInView } from "react-intersection-observer";

//typewritter-effect
import Typewriter from "typewriter-effect";

//button page transition animation
import style from './Home.scss'


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
      <group position={[position[0], position[1], position[2]]}>
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
        <Suspense fallback={null}>
        <HTMLContent domContent={domContent} modalPath={'/introModel.gltf'}
            position={[0,250,0]} scale={1} bgColor='#FBE7C6'>
            <span>
              <h1 className="introTitle">Hi, I am</h1>
              {/* <h1 className="introTitle">LU YEN-FU</h1> */}
              <h1 className="introTitle">
                <Typewriter
                  options={{
                    strings: ['LU YEN-FU', 'A Beatmaker', 'A Developer', 'A Generative Artist'],
                    autoStart: true,
                    loop: true
                  }}
                />
              </h1>
            </span>
          </HTMLContent>
          <HTMLContent domContent={domContent} modalPath={'/cassette.gltf'}
            position={[0,0,0]} scale={1} bgColor='#ffbe0b'>
            <div className="VertContainer">
            <h1 className="title">Music Work</h1>
            <a href='/Music' rel="noopener noreferrer" className="lineBtn">View</a>
            </div>
          </HTMLContent>
          <HTMLContent domContent={domContent} modalPath={'/programmingIcon.gltf'}
            position={[0,-250,0]} scale={1} bgColor={'#B4F8C8'}>
            <div className="VertContainer">
            <h1 className="title">App</h1>
            <a href='https://github.com/jeff2957?tab=repositories' target='_blank' rel="noopener noreferrer" className="subText custLink">view all works</a>
            </div>
          </HTMLContent>
          <HTMLContent domContent={domContent} modalPath={'/drawPen.gltf'}
            position={[0,-500,0]} scale={1} bgColor={'#A0E7E5'}>
            <div className="VertContainer">
            <h1 className="title">Visual Design</h1>
            <a href='/' className="subText custLink">view all works</a>
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
