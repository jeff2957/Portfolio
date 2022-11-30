import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, extend, useFrame, useLoader } from "react-three-fiber";
import * as THREE from 'three';
import Header from './components/header'
import style from './Music.scss'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { shaderMaterial } from "drei";
import glsl from 'babel-plugin-glsl/macro';
import LoadingPage from "./LoadingPage";

const WaveShaderMaterial = shaderMaterial(
  //uniforms
  {uTime: 0, uColor: new THREE.Color(0.0, 0.0, 0.0), uTexture: new THREE.Texture()},
  //vertex shader
  glsl`
    precision mediump float;

    varying vec2 vUv;

    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 0.15;
      float noiseAmp = 0.1;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime * 0.8, pos.y * -(noiseFreq), pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;

      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,

  //fragment shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;

    varying float vWave;

    float colormap_red(float x) {
      if (x < 0.0) {
          return 54.0 / 255.0;
      } else if (x < 20049.0 / 82979.0) {
          return (829.79 * x + 54.51) / 255.0;
      } else {
          return 1.0;
      }
    }

    float colormap_green(float x) {
      if (x < 20049.0 / 82979.0) {
          return 0.0;
      } else if (x < 327013.0 / 810990.0) {
          return (8546482679670.0 / 10875673217.0 * x - 2064961390770.0 / 10875673217.0) / 255.0;
      } else if (x <= 1.0) {
          return (103806720.0 / 483977.0 * x + 19607415.0 / 483977.0) / 255.0;
      } else {
          return 1.0;
      }
    }

    float colormap_blue(float x) {
      if (x < 0.0) {
          return 54.0 / 255.0;
      } else if (x < 7249.0 / 82979.0) {
          return (829.79 * x + 54.51) / 255.0;
      } else if (x < 20049.0 / 82979.0) {
          return 127.0 / 255.0;
      } else if (x < 327013.0 / 810990.0) {
          return (792.02249341361393720147485376583 * x - 64.364790735602331034989206222672) / 255.0;
      } else {
          return 1.0;
      }
    }

    vec4 colormap(float x) {
        return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
    }

    float map(float value, float min1, float max1, float min2, float max2) {
      return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
    }

    void main() {

      // gl_FragColor = vec4(colormap(vUv.y + map(sin(uTime * 0.5), -1.0, 1.0, -0.6, 1.0)).rgb, 1.0);

      // gl_FragColor = vec4(vUv.y + sin(uTime) * uColor, 1.0);

      float wave = vWave * 0.005;
      vec3 texture = texture2D(uTexture, vUv + vWave).rgb;
      gl_FragColor = vec4(texture, 1.0);
    }
  `
);

extend({ WaveShaderMaterial });


const Mesh = () => {
  const mesh = useRef()
  useFrame(({clock}) => (mesh.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, ["https://images.unsplash.com/photo-1594434885674-0a15708152bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",]);

  return (
    <mesh position={[0, 0, 0]}>
    <boxGeometry args={[20, 20, 0, 40, 25]} />
    <waveShaderMaterial uColor={"lightblue"} ref={mesh} uTexture={image}/>
    </mesh>
  )
}

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 10;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 5, 5]} intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      {/* <spotLight position={[0 ,1000, 0]} intensity={0.2} />  */}
    </>
  )
}

const AudioPlayer = () => {

  let url = "./audio/rain.wav";

  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(new Audio(url));

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  return (
      /* player buttons */
      /* <audio src=""></audio> */

      /* <button>back 15</button>
      <button>play / pause</button>
      <button>forward 15</button>

      current time
      <div>0:00</div>

      progress bar
      <div>
        <input type="range"/>
      </div>

      duration
      <div>0:26</div> */
      <>
        <button className="audioPlayer" onClick={playing ? pause : play}>Play</button>
      </>
  )
}

export default function Music() {
  
  return (
    <>
    <Header className={style}/>
    <AudioPlayer />
    <Canvas camera={{fov: 70, position: [-1, 1, 5]}}>
    <CameraController />
      <Lights />
      <Suspense fallback={<LoadingPage/>}>
      <Mesh />
      </Suspense>
    </Canvas>
    </>
  )
}

