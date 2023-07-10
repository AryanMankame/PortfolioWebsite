import React from 'react'
import styled from 'styled-components'
import {useEffect} from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Article.css'
function About() {
    useEffect(() => {
        var ele = document.querySelectorAll('.head');
        var headarr = ["2nd Runner's Up","7th","Top 15"]
        var footarr = ["We were 2nd runners up out of 50 <br /> offline participaing teams and shortlisted among 300+ teams",
                        "We were 7th out of 50 offline participaing teams and shortlisted among 300+ teams",
                        "We were top 15 among 200+ online participating teams"]
        ele.forEach((item,index) => {
            item.addEventListener('mouseover',() => {
                item.innerHTML = footarr[index];
            });
            item.addEventListener('mouseout',() => {
                item.innerHTML = headarr[index];
            });
        });
        
    },[]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

      };
  return (
    <Page>
        <Navbar />
        <Main>
        <Left>
            <div id="intro">
                <div id="image">
                    <img src="p1.png" alt="" id="prof" />
                </div>
                <div id="someinfo">
                I am Aryan Mankame, a dynamic and ambitious 3rd-year BTech CSE undergraduate student at Maulana Azad National Institute of Technology, Bhopal. With a strong passion for technology and a focus on full stack development, I possess a diverse skill set that includes:
                My commitment to innovation and problem-solving has been demonstrated through my active participation in various hackathons. Notable achievements include securing the 2nd Runners up position in Wittyhacks 3.0, attaining the 7th position in the Ecell NITB Hackathon, and ranking among the top 15 participants in BitsHackathon.
                Driven by a desire to make a meaningful impact in the field of technology, my goal is to leverage my skills and enthusiasm to contribute to cutting-edge projects and drive the advancement of software development.
                Overall, I am a talented and dedicated full stack developer with a proven track record in both frontend and backend technologies. My strong technical foundation, coupled with my passion for innovation, positions me as an invaluable asset to any software development team.
                </div>
            </div>
            <div id="achivements">
                {/* <div className = "ac" id="a1">
                    <div className="head">2nd Runner's Up</div>
                    <div className="foot">We were 2nd runners up out of 50 <br /> offline participaing teams and shortlisted among 300+ teams</div>
                </div> */}
                <div>
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
                {/* <div className = "ac" id="a2">
                    <div className="head">7th</div>
                    <div className="foot">We were 7th out of 50 offline participaing teams and shortlisted among 300+ teams</div>
                </div>
                <div className = "ac" id="a3">
                    <div className="head">Top 15</div>
                    <div className="foot">We were top 15 among 200+ online participating teams.</div>
                </div> */}
                <div id = "cross">Achievements</div>
            </div>
        </Left>
        <Right>
             <div id="skills">Skills :</div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=NfbyHexzVEDk&format=png" alt = ""></img>
                <h4>React.js</h4>
             </div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=hsPbhkOH4FMe&format=png" alt = ""></img>
                <h4>Node.js</h4>
             </div>
             <div className = "skill">
                <img src = "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt = ""></img>
                <h4>Express.js</h4>
             </div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=74402&format=png" alt = ""></img>
                <h4>MongoDB</h4>
             </div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=9nLaR5KFGjN0&format=png" alt = ""></img>
                <h4>MySQL</h4>
             </div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=38561&format=png" alt = ""></img>
                <h4>PostgreSQL</h4>
             </div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=84710&format=png" alt = ""></img>
                <h4>Bootstrap</h4>
             </div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=qV-JzWYl9dzP&format=png" alt = ""></img>
                <h4>Django</h4>
             </div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=l75OEUJkPAk4&format=png" alt = ""></img>
                <h4>Python</h4>
             </div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=40669&format=png" alt = ""></img>
                <h4>C/C++</h4>
             </div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=20909&format=png" alt = ""></img>
                <h4>HTML5</h4>
             </div>
             <div className = "skill">
                <img src = "https://img.icons8.com/?size=1x&id=21278&format=png" alt = ""></img>
                <h4>CSS3</h4>
             </div>
        </Right>
        </Main>
    </Page>
  )
}
const Page = styled.div`
    @media (max-width:500px){
        overflow-y: scroll;
        overflow-x:hidden;
    }
    @media (min-width:500px){
        height: 100vh; overflow-y: hidden;
    }
    width:100vw;
    background-color: rgba(0, 43, 82, 1);
    
    display:flex; 
    position: relative;
    flex-direction: column;
    #navbar{
        margin-top:2vh;
        height:10vh; width:100vw;
        display: flex; 
        flex-direction: row; 
        justify-content: center;
    }
    #items{
        width:65vw;
        display: flex; 
        flex-direction: row; 
        justify-content: center;
        align-items: center;
        margin-top:1vh;
        letter-spacing:1px;
        font-size:20px;
        color:grey;
    }
    #items > div{
        margin-right:20px;
        &:hover{
            cursor:pointer;
            transition:all 4s;
            transform:scale(1.1);
            text-decoration:underline;
        }
    }
    #logo{
        width:20vw;
        margin-right:auto;
    }
    #aw-logo{
        height:80px; width:140px; margin-left:60%;
    }
    #social-id{
        width: 15vw;
        display:flex; flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    #social-id > div > img{
        height:30px; width:30px;
        margin-right:10px;
        &:hover{
            cursor:pointer;
        }
    }
`;
const Left = styled.div`
    // position:absolute;
    @media (max-width:500px){
        height:90vh; width:100vh;
        #intro{
            width:100vw;
            overflow-x:hidden;
        }
        #image{
            width:20vh; height:40vh; margin-left:auto;
            margin-right:53%;
        }
        #prof{
            height:100% !important;
            margin-bottom:5vw;
            margin-left:3vw;
            border:2px solid white; border-radius:100%;
        }
        #someinfo{
            padding:5vh;
            letter-spacing:.5px;
            text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
            color: #fff6a9;
        }
        #achivements{
            width:100vw;
            display: flex; flex-direction:column-reverse;
            flex-wrap: wrap;
        }
        #a1,#a2,#a3{
            position:relative;
            border:2px solid black;
            border-radius:20px;
            width:80vw;
            height:40vh;
            margin-left:10vw;
        }
        .ac > img{
            width:100%; height:100%;
        }
        #a3{
            margin-bottom:60vh;
        }
        #cross {
            position:relative;
            height: 10vh;
            width: 100vw;
            font-size:40px;
            -webkit-text-stroke:1px white;
            color:rgba(0, 43, 82, 1);
            margin-left:15%;
        }
    }
    @media (min-width:500px){
        height:90vh; width:70vw;
        overflow-y: hidden;
        display:flex; 
        flex-direction:column;
        #prof{
            height:30vh !important;
            margin-bottom:5vw;
            margin-left:1vw;
        }
        #intro{
            display:flex;
            flex-direction:row;
            align-items:center;
            font-family: 'Caladea', serif;
            text-align: justify;
        }
        #someinfo{
            width:70%;
            padding:5vh;
            letter-spacing:.5px;
            text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
            color: #fff6a9;
        }
        #slid-contain{
            margin-left:auto; margin-right:auto;
        }
        #achivements{
            width:70vw;
            display:flex; flex-direction:row;
            align-items:center;
            justify-content:center;
            flex-wrap:wrap;
            font-family: 'Caladea', serif;
        }
        #title-ach{
            margin-bottom:10px;
        }
        #a1{
            position:absolute;
            top:70vh;
            left:25vh;
            border:2px solid black;
            border-radius:20px;
            animation-name:lr;
            animation-duration:4s;
        }
        #a2{
            position:absolute;
            top:70vh;
            left: 50vh;
            border:2px solid black;
            border-radius:20px;
            animation-name:bu;
            animation-duration:4s;
        }
        #a3{
            position:absolute;
            top:70vh;
            left: 75vh;
            border:2px solid black;
            border-radius:20px;
            animation-name:rl;
            animation-duration:4s;
        }
        #a1,#a2,#a3{
            &:hover{
                transform:scale(1.2);
            }
        }
        .head{
            width:100%;
            height:100%;
            display:flex; flex-direction:row; align-items:center; justify-content:center;
        }
        .foot{
            display:none;
            width:100%;
            height:100%;
        }
        @keyframes lr{
            0%{
                left:-22vh;
            }
            100%{
                left:25vh;
            }
        }
        @keyframes rl{
            0%{
                left:100vh;
            }
            100%{
                left:75vh;
            }
        }
        @keyframes bu{
            0%{
                top:40vh;
            }
            100%{
                top:70vh;
            }
        }
        #cross {
            height: 30vh;
            position: absolute;
            width: 32px;
            font-size:40px;
            top:52vh;
            left:0px;
            transform:rotate(90deg);
            -webkit-text-stroke:1px white;
            color:rgba(0, 43, 82, 1)
        }
        #image > img{
            border:2px solid white;
            border-radius:100px;
        }
    }
    
    
`;
const Right = styled.div`
    // position: absolute;
    @media (min-width: 500px){
        height:90vh; width:30vw;
        overflow-y: hidden;
        #skills{
            font-family: 'Caladea', serif;
            font-size:28px;
            // display:flex; flex-direction: row; justify-content: center;
            -webkit-text-stroke:1px white;
            color:rgba(0, 43, 82, 1);

        }
        #skill{
            padding-left:3vw;
        }
        .skill{
            display:flex;
            width:100%;
            height:6vh;
            flex-direction:row;
            margin-bottom:5px;
            align-items:center;
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
    }
    @media (max-width:500px){
        position: absolute;
        top:310vh;
        height:50vh; width:100vw; display:flex ; flex-direction:row !important;
        flex-wrap:wrap;
        #skills{
            width:100vw;
            padding-left:40%;
            font-family: 'Caladea', serif;
            font-size:28px;
            // display:flex; flex-direction: row; justify-content: center;
            -webkit-text-stroke:1px white;
            color:rgba(0, 43, 82, 1);
        }
        .skill{
            display:flex;
            width:20vw;
            height:6vh;
            padding-left:4vw;
            margin-right:25vw;
            flex-direction:row;
            margin-bottom:5px;
            align-items:center;
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
    }
`;
const Main = styled.div`
    
    @media (min-width:500px){
        width:100vw; height:90vh;
        display:flex; flex-direction:row;
    }
    @media (max-width:500px){
        width:100vw;
        display:flex; flex-direction:column;
    }
`;
export default About