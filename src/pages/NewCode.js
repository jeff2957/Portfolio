import React from 'react'
import Header from "./components/header";
import state from "./components/state";
import style from "./Code.scss";

function NewCode() {
    return (
        <>
            <Header style={style} />
            <div className='performContainer' style={{ background: "linear-gradient(220deg, rgba(28,28,28,1) 0%, rgba(74,73,73,1) 76%, rgba(110,109,109,1) 99%, rgba(171,171,171,1) 100%)", display: "grid", overflow: "auto", overflowX: "hidden", justifyItems: "center", height: "100%" }}>
                <h1 className='introTitle' style={{ width: "100vw", textAlign: "center", paddingTop: "11vh", paddingBottom: "20px" }}>PANGCAH Festival Website</h1>
                <img src='https://res.cloudinary.com/dlczspjro/image/upload/v1670855565/banner_rdjdbo.jpg' alt='pangcah festival banner' style={{height: 'auto', width: '80vw', borderRadius: '24px'}}></img>
                <img src='https://res.cloudinary.com/dlczspjro/image/upload/v1670858104/pangcahMock_xnitm3.png' alt='pangcah festival mockup' style={{height: 'auto', width: '80vw', borderRadius: '24px', marginTop: '20px'}}></img>
                <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <a className='btnEffct uiBtn' href='https://drive.google.com/file/d/1y5yVgU62oZIX5sMPnnSIYvt9eQtuop5Y/view?usp=share_link' target='_blank' rel="noopener noreferrer"  >View UI Guideline</a>
                    <a className='btnEffct uiBtn' href='https://drive.google.com/file/d/1PyprFwVJolI59ovd7SFBrmH9WdzZCp2L/view?usp=share_link' target='_blank' rel="noopener noreferrer">View UI Prototype</a> 
                    <a className='btnEffct uiBtn' href='https://pangcahfestival.com/' rel="noopener noreferrer" target="_blank">View Live Web</a>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <h5 className='introTitle' style={{ fontSize: "50px", width: "80vw", textAlign: "left" }}>About</h5>
                    <h6 className='descrp' style={{ width: "80vw", fontWeight: "lighter" }}>
                        PANGCAH Festival is a music festival held in Hualien, Taiwan, October 8th- 9th, 2022. As a festival featuring mostly indigenous artists, it advocates the concept of environmental conservation and minority justice. This project consists of two parts. One is the user interface design for the festival's official website. The second part is
the actual official website I built with Next.js and Framer Motion.
                    </h6>
                </div>
                <div style={{ paddingTop: "60px" }}>
                    <h5 className='introTitle' style={{ fontSize: "50px", width: "80vw", textAlign: "left" }}>UI Design Process</h5>
                    <h6 className='descrp' style={{ width: "80vw", fontWeight: "lighter" }}>The UI design was based on the vision of the festival - living in harmony with nature
and promoting indigenous culture. Thus, the main color used for the overall UI design is green (which represents nature) and orange (which represents the God of
Sun, worshiped by indigenous people). And the rest of the elements and components shown on the page also has different shades of green. The logo of the
web page was also created by me during the design process. Iused only texts to present an elegant vibe with simplicity.
<br />
<br />
Inside the UI prototype, several sections were made to fully exhibit the content of the festival, such as the video section, image carousel section, about section, artists
section, events section, ticket section, and partner section. Since the background using the visual of the festival made it more difficult for users to view the text on our site, Iadded an oval-shaped block as a way to increase the clarity of the paragraph.</h6>
                </div>
                <div style={{ marginTop: '60px', paddingBottom: '10vh' }}>
                    <h5 className='introTitle' style={{ fontSize: "50px", width: "80vw", textAlign: "left" }}>Development Process</h5>
                    <h6 className='descrp' style={{ width: "80vw", fontWeight: "lighter" }}>
                    During the web development, the interface design has been constantly improved through the discussion between me and the festival organizers. The oval-shaped block was taken down to present a more consistent style throughout the whole page.
The static image background is replaced by the animation of the festival. In terms of programming language choice, I used Next.js to achieve a better
performance compared to other Javascript frameworks. For user experience, I used Framer Motion to add transitional animations while users browsed our page.
                    </h6>
                </div>
            </div>
            {/* <div className='container'>
            <div className='item1'>
                <img src='https://res.cloudinary.com/dlczspjro/image/upload/v1670736389/ui_guideline_kmyvdo.jpg'></img>
                <div className="uiBtn1">
                    <a className='btnEffct' href='https://drive.google.com/file/d/1y5yVgU62oZIX5sMPnnSIYvt9eQtuop5Y/view?usp=share_link' target='_blank' rel="noopener noreferrer"  >View UI Guideline</a>
                 </div>
            </div>
            <div className='item'>
                <img src='https://res.cloudinary.com/dlczspjro/image/upload/v1670736387/ui_prototype_fzxfch.jpg'></img>
            </div>
        </div> */}
        </>
    )
}

export default NewCode