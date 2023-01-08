import React from 'react'
import Header from "./components/header";
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import style from "./Photo.scss"
import { useEffect, useRef } from "react";
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// async function GetImage() {
//     const client = createClient(supabaseUrl, supabaseAnonKey);
//     const {data, error} = await client
//     .storage
//     .from('portfolio-gallery')
//     .list('folder', {
//         limit: 100,
//         offset: 0,
//         sortBy: { order: 'asc'}
//     })

//     const pictures = data.map((pic, id) => 
//         <div id={id} className='gallery-pic' style={{backgroundImage: `url(${pic})`}}></div>
//     );

//     return (
//         <pictures />
//     )
// }

const images = [
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/aa.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/bb.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/cc.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/dd.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/ee.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/ff.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/gg.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/hh.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/ii.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/jj.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/kk.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/ll.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/mm.JPG',
    'https://lkvwxrfoecqeujvtjkym.supabase.co/storage/v1/object/public/portfolio-gallery/nn.JPG'
    
]

function Photo() {

    const imgRef = useRef(null);

    useEffect(() => {

        document.body.className = 'photo-body';

        const lenis = new Lenis({
            duration: 1.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });  
        
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        gsap.registerPlugin(ScrollTrigger);

        requestAnimationFrame(raf);
    
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: '.gallery-pic',
            scrub: true
            }
        })
        .to('.gallery-pic', {
            stagger: .08,
            y: -800,
            // scrub: true
        })
    }, []);


  return (
    <>
    {/* <Header className={style} />   */}
    {/* <h1 className='year'>2021</h1> */}
    <h1 className='yearText'>2022</h1>
    <section className={style}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
    </section>
    <section className='secTwo'>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        {/* <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div>
        <div className='gallery-pic'></div> */}
    </section>
    {/* <section>
        <GetImage />
    </section> */}
    <section></section>
    </>  
  )
}

export default Photo