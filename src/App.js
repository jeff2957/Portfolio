// import React, { Suspense, useEffect, useRef } from "react";
// import "./App.scss";
// //Components
// import Header from "./components/header";
// import { Section } from "./components/section"
// import { Canvas, useFrame } from "react-three-fiber"
// import { Html, useGLTFLoader } from "drei"

// //page state
// import state from "./components/state";

// //intersection observer
// import { useInView } from "react-intersection-observer";

// //shader
// // import glsl from 'babel-plugin-glsl/marco'

// const Model = ({ modalPath }) => {
//   const gltf = useGLTFLoader(modalPath, true);
//   return <primitive object={gltf.scene} dispose={null} />;
// };

// const Lights = () => {
//   return (
//     <>
//       <ambientLight intensity={0.3} />
//       <directionalLight position={[10, 30, 5]} intensity={0.6} />
//       <directionalLight position={[50, 100, 5]} intensity={0.8} />
//       {/* <spotLight position={[0 ,1000, 0]} intensity={0.2} />  */}
//     </>
//   )
// }


// const HTMLContent = ({ bgColor, domContent, children, modalPath, position, scale }) => {

//   const ref = useRef();
//   useFrame(() => (ref.current.rotation.y += 0.01));

//   const [refItem, inView] = useInView({
//     threshold: 0
//   });

//   useEffect(() => {
//     inView && (document.body.style.background = bgColor)
//   });

//   return (
//     <Section factor={1.5} offset={1}>
//       <group position={[position[0], position[1], position[2]]}>
//         <mesh ref={ref} position={[0, 0, 0]}>
//           <Model modalPath={modalPath}/>
//         </mesh>
//         <Html portal={domContent} fullscreen>
//           <div className="container" ref={refItem}>{children}</div>
//         </Html>
//       </group>
//     </Section>
//   );
// };

// const Scene = () => {
//   return (
//     <>
//     <mesh className="box" position={[0,250, 10]}>
//       <planeBufferGeometry args={[3,5]} />
//       <meshStandardMaterial color='black' />
//     </mesh>
//     </>
//   )
// }

// export default function App() {
//   const domContent = useRef();
//   const scrollArea = useRef();
//   const onScroll = (e) => (state.top.current = e.target.scrollTop);
//   useEffect(() => void onScroll({ target: scrollArea.current }), [])


//   return (
//     <>
//       <Header />
//       <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
//         <Lights />
//         <Suspense fallback={null}>
//         <HTMLContent domContent={domContent} modalPath={'/introModel.gltf'}
//             position={[0,250,0]} scale={1} bgColor='#FBE7C6'>
//             <span>
//               <h1 className="introTitle">Hi, I am</h1>
//               <h1 className="introTitle">LU YEN-FU</h1>
//               </span>
//           </HTMLContent>
//           <HTMLContent domContent={domContent} modalPath={'/cassette.gltf'}
//             position={[0,0,0]} scale={1} bgColor='#ffbe0b'>
//             <div className="VertContainer">
//             <h1 className="title">Music Work</h1>
//             <a href='https://soundcloud.com/jeff-jeff-619662162' target='_blank' className="subText">view all works</a>
//             </div>
//           </HTMLContent>
//           <HTMLContent domContent={domContent} modalPath={'/programmingIcon.gltf'}
//             position={[0,-250,0]} scale={1} bgColor={'#B4F8C8'}>
//             <div className="VertContainer">
//             <h1 className="title">App</h1>
//             <a href='https://github.com/jeff2957?tab=repositories' target='_blank' className="subText">view all works</a>
//             </div>
//           </HTMLContent>
//           <HTMLContent domContent={domContent} modalPath={'/drawPen.gltf'}
//             position={[0,-500,0]} scale={1} bgColor={'#A0E7E5'}>
//             <div className="VertContainer">
//             <h1 className="title">Visual Design</h1>
//             <a href='/' className="subText">view all works</a>
//             </div>
//           </HTMLContent>
//         </Suspense>
//       </Canvas>
//       <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
//         <div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
//         <div style={{ height: `${state.sections * 100}vh` }}></div>
//       </div>
//     </>
//   );
// }
import React from 'react'
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Code from "./pages/Code";
import Visual from "./pages/Visual";



function App() {
  return (
    <Router>
    {/* <nav>
      <Link> Home </Link>
      <Link> About </Link>
      <Link> Music </Link>
      <Link> Code </Link>
      <Link> Visual </Link>
    </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Visual" element={<Visual />} />
        <Route path="/Code" element={<Code />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App