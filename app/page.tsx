'use client'

import getDevs from './lib/getDevs';
import Image from "next/image";
import habeebsprofile from "./public/habeeb.jpg";
import plane from "./public/plane.jpg";




export default function Home() {
 /* getDevs();*/
   

  const devs = getDevs();


  return (

    <div className="motherdiv"> 
    
      <div className = "navbar" id = "nav" >
        
        <a href='#home'>home</a>
        <a href='#about'>about</a>
        <a href='#projects-section'>projects</a>
        <a href='#contact'>contact</a>
      </div>
      <div className="page1" id ="home">
        <div className="welcome">
          <p> Hello! </p>
          <p>I am Habeeb Tiamiyu </p>
        </div>
        <Image className= "beebprofile" src = {habeebsprofile} alt = "none" width ={100} height = {100}>
        </Image>
      </div>

      <div id="about" className="about" >
        <h1 className="aboutme-tag"> about me</h1>
        <li>Im a Undergrad student at UC Berkeley studying Electrical Engineering and Computer Sciences  </li>
        <li>I enjoy working out and playing basketball  </li>
        <li>Love traveling! </li>
        <li>D1 at binge watching show/movie </li>
        <Image className= "plane-img" src = {plane} alt = "none" width ={100} height = {100}></Image>
      </div>

      <div id ="projects-section" className="projects">
        <h1  className='proj-tag'>Projects </h1>
        <div className="devs-render">
          {devs}
        </div>
      </div>
    
      <div id="contact" className="contact" >
        <h1 className="contact-tag"> contact</h1>
        <p>Email: Habeebtiamiyu@berkeley.edu</p>
        <p>Phone: (510) 706-8551</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/habeeb-tiamiyu-813556235/" target="_blank">https://www.linkedin.com/in/habeeb-tiamiyu-813556235/</a></p>

      </div>
   
    </div>
    
  ); 

  
}
