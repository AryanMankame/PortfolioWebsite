import React,{ useCallback }  from 'react'
import styled from 'styled-components';
import Particle from "./Particle";
import Navbar from './Navbar';
import { SkillsList } from './SkiilsList';
function AboutMe() {
  console.log(SkillsList)
  return (
    <Page>
        <Particle />
        <Navbar />
        <Intro> 
            <p id = "info">
                <ul>
                    <li>
                    I am Aryan Mankame, a dynamic and ambitious 3rd-year BTech CSE undergraduate student at Maulana Azad National Institute of Technology, Bhopal.
                    </li>
                    <li>
                    With a strong passion for technology and a focus on full stack development, I possess a diverse skill set that includes:
                    My commitment to innovation and problem-solving has been demonstrated through my active participation in various hackathons.
                    </li>
                    <li>
                    Notable achievements include securing the 2nd Runners up position in Wittyhacks 3.0, attaining the 7th position in the Ecell NITB Hackathon, and ranking among the top 15 participants in BitsHackathon.
                    </li>
                    <li>
                    Driven by a desire to make a meaningful impact in the field of technology, my goal is to leverage my skills and enthusiasm to contribute to cutting-edge projects and drive the advancement of software development.
                    </li>
                    <li>
                    Overall, I am a talented and dedicated full stack developer with a proven track record in both frontend and backend technologies. My strong technical foundation, coupled with my passion for innovation, positions me as an invaluable asset to any software development team.
                    </li>
                </ul>
            </p>
            <div className="disp-img">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-coder-developed-code-in-computer-6818031-5625514.png" alt=""></img>
            </div>
        </Intro>
        <Education>
            <h2>Education :</h2>
            <div id="education">
                <img src="https://upload.wikimedia.org/wikipedia/en/4/4f/Maulana_Azad_National_Institute_of_Technology_Logo.png" alt="logo"></img>
                <div className="ed-info">
                <h4>BTECH : COMPUTER SCIENCE</h4>
                <h4>Maulana Azad National Institute of Technology Bhopal</h4>
                <h4>CGPA : 8.82</h4>
                <h4>2020-2024</h4>
                </div>
            </div>
        </Education>
        <Achievements>
            <h2>Achievements :</h2>
            <div id = "Cards">
                <figure className='ac' id = "a1">
                    <img src="witty3.jpg" alt="Mountains"></img>
                    <figcaption>
                    <p>
                    <div className='div-head'>2nd Runner's Up</div>
                    <div className='div-context'>We were 2nd runners up out of 50 <br /> offline participaing teams and shortlisted among 300+ teams</div>
                    </p>
                    </figcaption>
               </figure>
               <figure className='ac' id = "a2">
                    <img src="ecell.jpg" alt="Mountains"></img>
                    <figcaption>
                    <p>
                    <div className='div-head'>7th</div>
                    <div className='div-context'>We were 7th out of 50 offline participaing teams and shortlisted among 300+ teams</div>
                    </p>
                    </figcaption>
               </figure>
               <figure className='ac' id = "a3">
                    <img src="bits.png" alt="Mountains"></img>
                    <figcaption>
                    <p>
                    <div className='div-head'>Top 15</div>
                    <div className='div-context'>We were top 15 among 200+ online participating teams.</div>
                    </p>
                    </figcaption>
               </figure>
            </div>
        </Achievements>
        <Skills>
            <h2>Skills :</h2>
            <div className="skill-list">
                {
                    SkillsList.map((item) => {
                        return (
                        <div className = "skill">
                            <img src = {item.src} alt = ""></img>
                            <h4>{item.name}</h4>
                        </div>);
                    })
                }
            </div>
        </Skills>
    </Page>
  )
}
const Page = styled.div`
    min-width:100vw;
    min-height:100vh;
    background-color:rgba(0, 43, 82, 1);
    padding-top:2vh;
    @media (max-width:500px){
        width:100vw;
        overflow-x:hidden;
    }
`;
const Intro = styled.div`
    min-height:70vh;
    width:100vw;
    margin-left:auto;
    z-index:30;
    color:white;
    display:flex;
    flex-direction:row;
    #info{
        width:70%;
        text-align:justify;
        font-size:18px;
        font-family:'Comic Sans MS';
        margin-left:10%;
        margin-top:5%;
    }
    img{
        height:60vh;
        width:80vh;
        margin-top:10%;
    }
    @media (max-width:500px){
        flex-direction:column-reverse;
        img{
            height: 35vh;
            width: 100vw;
        }
        #info{
            width: 90vw;
            margin-left:2%;
        }
    }
`;
const Education = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    h2{
        color:white;
        font-size:32px;
        font-family:Comic Sans MS;
    }
    #education{
        color:white;
        font-size:20px;
        font-family:Comic Sans MS;
        display:flex;
        flex-direction:row;
    }
    img{
        height:25vh;
        width:12vw;
        margin-right:5vw;
        margin-top:auto;
        margin-bottom:auto;
    }
    @media (max-width:500px){
        #education{
            font-size:14px;
        }
        img{
            width:20vw;
            height:10vh;
            margin-left:3vw;
        }
    }
`;
const Achievements = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    h2{
        color:white;
        font-size:32px;
        font-family:Comic Sans MS;
    }
    #Cards{
        display:flex;
        flex-direction:row;
    }
    .ac{
        height:40vh;
        width:40vh;
    }
    img{
        height:100%; width:100%;
    }
    .div-head,.div-context{
        font-family:Menlo;
        margin-bottom:2vh;
    }
    .div-context{
        font-size:14px;
    }
    @media (max-width:500px){
        #Cards{
            flex-direction:column;
        }
    }
`;
const Skills = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    h2{
        color:white;
        font-size:32px;
        font-family:Comic Sans MS;
    }
    .skill-list{
        width:100vw;
        height:40vh;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    .skill{
        display:flex;
        height:6vh;
        flex-direction:row;
        margin-bottom:5px;
        align-items:center;
        margin-right:1vw;
        width:15%;
        font-size:20px;
        margin-left:5vw;
    }
    .skill > h4{
        color:white;
        text-shadow:
          0 0 10px rgba(255, 28, 52, .7),
          0 0 40px rgba(255, 28, 52, .7),
          0 0 100px rgba(255, 28, 52, .7);
        margin-left:15px;
    }
    .skill > img{
        height: 40px; width: 40px;
    }
    @media (max-width:500px){
        .skill-list{
            width:100vw;
            height: auto;
            display:flex;
            flex-direction:row; 
            flex-wrap: wrap;
        }
        .skill{
            display:flex;
            height:6vh;
            flex-direction:row;
            margin-bottom:5px;
            align-items:center;
            margin-right:1vw;
            width:40%;
            font-size:20px;
            margin-left:5vw;
        }
    }
`;
export default AboutMe