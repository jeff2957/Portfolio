import React, { Component } from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";
import Header from "./components/header";
import style from "./MusicP5.scss";
import p5 from "p5";

export default class MusicP5 extends Component {
  audio;
  osc;
  isPlaying = false;
  height = window.innerHeight;
  width = window.innerWidth;
  
  hideText = () => {
    var hint = document.getElementById("hintText");
    hint.style.display = 'none';
  }

  preload = (p5) => {
    this.audio = p5.loadSound("/audio/Daylight.wav");
  };

  setup = (p5, parentRef) => {
    const canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(parentRef);
    canvas.mousePressed(() => {
      if (this.isPlaying) {
        this.audio.pause();
        this.isPlaying = false;
      } else {
        this.audio.loop();
        this.isPlaying = true;
      }
    });
    p5.colorMode(p5.HSB, 255, 10, 100);

    this.fft = new global.p5.FFT();
  };

  draw = (p5) => {
    p5.blendMode(p5.BLEND);
    p5.background(0);
    p5.noStroke();

    p5.blendMode(p5.ADD);

    let spectrum = this.fft.analyze();

    // global.p5.feedback(spectrum);


    p5.push();

    for (let i = 0; i < spectrum.length * 2; i += 5) {
      let hue = p5.map(i, 0, spectrum.length, 0, 255);
      let diameter = p5.map(spectrum[i], 0, 255, 0, this.height * 0.75);

      p5.fill(hue, 255, 15);

      let x = p5.map(i, 0, spectrum.length, this.width / 2, this.width);
      p5.ellipse(x, this.height / 2, diameter, diameter);

      x = p5.map(i, 0, spectrum.length, this.width / 2, 0);
      p5.ellipse(x, this.height / 2, diameter, diameter);

      p5.rotate(i);
    }
    p5.pop();

    // p5.push()

    // for (let i = 0; i < spectrum.length * 5; i+=10) {
    //     let hue = p5.map(i, 0, spectrum.length, 0, 255);
    //     let diameter = p5.map(spectrum[i], 0, 255, 0, this.height * 0.2);

    //     p5.fill(120, hue, 250);

    //     let x = p5.map(i, 0, spectrum.length, this.width / 6, this.width / 3);
    //     p5.ellipse(x + (this.width * 2 / 3), this.height / 2, diameter / 2, diameter / 2);

    //     x = p5.map(i, 0, spectrum.length, this.width / 6, 0);
    //     p5.ellipse(x + (this.width * 2 / 3), this.height / 2, diameter / 2, diameter / 2);

    //     // p5.rotate(-i)
    // }

    // p5.pop()

    p5.push();

    //grayish middle one
    for (let i = 0; i < spectrum.length * 50; i += 10) {
      let hue = p5.map(i, 0, spectrum.length, 0, 255);
      let diameter = p5.map(spectrum[i], 0, 255, 0, this.height * 0.5);

      p5.fill(100, 0, hue);

      let x = p5.map(
        i,
        0,
        spectrum.length,
        (this.width * 5) / 6,
        (this.width * 2) / 3
      );
      p5.ellipse(x, this.height / 2, diameter / 2, diameter / 2);

      x = p5.map(i, 0, spectrum.length, (this.width * 5) / 6, this.width);
      p5.ellipse(x, this.height / 2, diameter / 2, diameter / 2);

      // p5.rotate(i);
    }
    // p5.pop()

    // p5.push()

    for (let i = 0; i < spectrum.length * 50; i += 10) {
      let hue = p5.map(i, 0, spectrum.length, 0, 255);
      let diameter = p5.map(spectrum[i], 0, 255, 0, this.height * 0.5);

      p5.fill(100, 0, hue);

      let x = p5.map(
        i,
        0,
        spectrum.length,
        (this.width * 1) / 6,
        (this.width * 1) / 3
      );
      p5.ellipse(x, this.height / 2, diameter / 2, diameter / 2);

      x = p5.map(i, 0, spectrum.length, (this.width * 1) / 6, 0);
      p5.ellipse(x, this.height / 2, diameter / 2, diameter / 2);

      // p5.rotate(i);
    }

    // p5.pop()

    //middle grayish connect with red center
    for (let i = 0; i < spectrum.length * 50; i += 10) {
      let hue = p5.map(i, 0, spectrum.length, 0, 255);
      let diameter = p5.map(spectrum[i], 0, 255, 0, this.height * 0.5);

      p5.fill(100, 0, hue);

      // let x = p5.map(i, 0, spectrum.length, this.width * 1 / 6, this.width * 6 / 12);
      // p5.ellipse(x, this.height / 2, diameter / 2, diameter / 2);

      let x = p5.map(i, 0, spectrum.length, (this.width * 3) / 6, 0);
      p5.ellipse(x, this.height / 2, diameter / 2, diameter / 2);

      x = p5.map(i, 0, spectrum.length, (this.width * 1) / 2, this.width);
      p5.ellipse(x, this.height / 2, diameter / 2, diameter / 2);

      // p5.rotate(i);
    }

    //blue upper ones
    for (let i = 0; i < spectrum.length * 3; i += 30) {
      let hue = p5.map(i, 0, spectrum.length, 122, 255);
      let diameter = p5.map(spectrum[i], 0, 255, 0, this.width * 0.8);

      p5.fill(hue, 255, 30);

      let x = p5.map(
        i,
        0,
        spectrum.length,
        (this.width * 5) / 6,
        (this.width * 2) / 3
      );
      p5.ellipse((x * 2) / 5, this.height / 3, diameter / 2, diameter / 2);

      x = p5.map(i, 0, spectrum.length, (this.width * 5) / 6, this.width);
      p5.ellipse((x * 2) / 5, this.height / 3, diameter / 2, diameter / 2);
    }

    for (let i = 0; i < spectrum.length * 3; i += 30) {
      let hue = p5.map(i, 0, spectrum.length, 122, 255);
      let diameter = p5.map(spectrum[i], 0, 255, 0, this.width * 0.8);

      p5.fill(hue, 255, 30);

      let x = p5.map(
        i,
        0,
        spectrum.length,
        (this.width * 5) / 6,
        (this.width * 2) / 3
      );
      p5.ellipse((x * 4) / 5, this.height / 3, diameter / 2, diameter / 2);

      x = p5.map(i, 0, spectrum.length, (this.width * 5) / 6, this.width);
      p5.ellipse((x * 4) / 5, this.height / 3, diameter / 2, diameter / 2);
    }

    //blue lower ones
    for (let i = 0; i < spectrum.length * 3; i += 30) {
      let hue = p5.map(i, 0, spectrum.length, 122, 255);
      let diameter = p5.map(spectrum[i], 0, 255, 0, this.width * 0.8);

      p5.fill(hue, 255, 30);

      let x = p5.map(
        i,
        0,
        spectrum.length,
        (this.width * 5) / 6,
        (this.width * 2) / 3
      );
      p5.ellipse(
        (x * 2) / 5,
        (this.height * 2) / 3,
        diameter / 2,
        diameter / 2
      );

      x = p5.map(i, 0, spectrum.length, (this.width * 5) / 6, this.width);
      p5.ellipse(
        (x * 2) / 5,
        (this.height * 2) / 3,
        diameter / 2,
        diameter / 2
      );
    }

    for (let i = 0; i < spectrum.length * 3; i += 30) {
      let hue = p5.map(i, 0, spectrum.length, 122, 255);
      let diameter = p5.map(spectrum[i], 0, 255, 0, this.width * 0.8);

      p5.fill(hue, 255, 30);

      let x = p5.map(
        i,
        0,
        spectrum.length,
        (this.width * 5) / 6,
        (this.width * 2) / 3
      );
      p5.ellipse(
        (x * 4) / 5,
        (this.height * 2) / 3,
        diameter / 2,
        diameter / 2
      );

      x = p5.map(i, 0, spectrum.length, (this.width * 5) / 6, this.width);
      p5.ellipse(
        (x * 4) / 5,
        (this.height * 2) / 3,
        diameter / 2,
        diameter / 2
      );
    }
  };

  render() {
    return (
      <>
        <Header className={style}></Header>
        <div className="App" onClick={this.hideText}>
          {/* <h1>react-p5 + p5.sound</h1> */}
          <div
            style={{
              width: "60vw",
              height: "80vh",
              border: "solid",
              borderColor: "white",
              borderWidth: "10px",
              opacity: 0.8,
              zIndex: 999,
              position: "absolute",
              left: "20vw",
              top: "10vh",
              pointerEvents: 'none'
            }}
          >
            <h1 className="p5Song" style={{position: "absolute", left: "5vw", color: 'white'}}>DAYLIGHT</h1>
            <h1 id="hintText" style={{ color: 'white', paddingTop: "70vh", paddingLeft: '10px', fontWeight: 'lighter'}}>click to play</h1>
          </div>
          <Sketch
            style={{ pointerEvents: 'auto' }}
            preload={this.preload}
            setup={this.setup}
            draw={this.draw}
          />
        </div>
      </>
    );
  }
}
