import {React,useEffect} from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import Particle from './Particle';
function navigation() {
  useEffect(() => {
    // gsap.to('#circle',{
    //   rotate:-10,
    //   ease:Expo.easeInOut,
    //   duration:2
    // });
    var active = 3;
    var mncircles = document.querySelectorAll(".btn");
    var stripes = document.querySelectorAll('.strip');
    var dots = document.querySelectorAll('.smdot');
    gsap.to(stripes[active-1],{
      opacity:1,
    })
    gsap.to(dots[active-1],{
      opacity:1,
    })
    console.log(mncircles);
    gsap.to(mncircles[active-1],{
      opacity:1,
    })
    function secondgreyout(){
      stripes.forEach(element => {
        gsap.to(element,{
          opacity:.3,
        });
      });
      dots.forEach(element => {
        gsap.to(element,{
          opacity:.3,
        });
      })
    }
    mncircles.forEach((item,index) => {
      item.addEventListener('click',() => {
        gsap.to('#circle',{
          rotate:(3-index-1)*10,
          ease:Expo.easeInOut
        })
        greyout();
        secondgreyout();
        gsap.to(mncircles[index],{
          opacity:1,
        })
        gsap.to(stripes[index],{
          opacity:1
        })
        gsap.to(dots[index],{
          opacity:1 
        })
      })
    });
    function greyout() {
      mncircles.forEach(element => {
        gsap.to(element,{
          opacity:.3,
        })
      });
      
    }
    // for(var i=0; i<mncircles.length;i++){
    //   mncircles[i].addEventListener("click",() => {
    //     alert(i);
    //     greyout();
    //     gsap.to(mncircles[i],{
    //       opacity:0.8,
    //     })
    //   });
    // }
  },[]);
  return (
    <Page id = "main">
        <Particle />
        <Navbar />
        {/* <div id = "mouse"></div> */}
        <div id="projects">PROJECTS</div>
        <div id="navdiv">
          <div className="btn" id="btn1"></div>
          <div className="btn" id="btn2"></div>
          <div className="btn" id="btn3"></div>
          <div className="btn" id="btn4"></div>
          <div className="btn" id="btn5"></div>
        </div>
        <div id="container">
          <div id="circle">
            <div className = "strip" id="str1">
              <div className = "smdot" id="dot"></div>
              <div id="text" onClick = {() => {
                window.open('https://github.com/AryanMankame/houseonwheelsfrontend')
              }}>
                <div>01</div><div>HouseOnWheel</div>
              </div>
            </div>
            <div className = "strip" id="str2">
              <div className = "smdot" id="dot"></div>
              <div id="text" onClick = {() => {
                window.open('https://track-me-frontend.onrender.com/')
              }}>
                <div >02</div><div>TrackMe</div>
              </div>
            </div>
            <div className = "strip" id="str3">
              <div className = "smdot" id="dot"></div>
              <div id="text" onClick = {() => {
                window.open('https://github.com/AryanMankame/ecell_nitb_hack2k23__TheGameChangers/')
              }}>
                <div>03</div><div>E-Kabad</div>
              </div>
            </div>
            <div className = "strip" id="str4">
              <div className = "smdot" id="dot"></div>
              <div id="text" onClick = {() => {
                window.open('https://disneyhotstarclone-1f320.web.app/')
              }}>
                <div>04</div><div>Disney Hotstar Clone</div>
              </div>
            </div>
            <div className = "strip" id="str5">
              <div className = "smdot" id="dot"></div>
              <div id="text" onClick = {() => {
                window.open('https://aryanmankame.netlify.app/')
              }}>
                <div>05</div><div>Portfolio Website</div>
              </div>
            </div>
          </div>
        </div>
    </Page>
  )
}
const Page = styled.div`
    height:100vh;
    width:100vw;
    overflow:hidden !important;
    color:white;
    background-color:rgba(0, 43, 82, 1) !important;
    padding-top:2vh;
    @media (max-width:500px){
      @keyframes rotateit{
        0% {
          rotate:-15deg;
        }
        50% {
          rotate: 10deg;
        }
        100% {
          rotate: -15deg;
        }
      }
      #container{
        
      }
      #circle{
          display:block; position:absolute;
          left:-60%;
          top:30%;
          width:100vw; height:50vh;
          border-radius:100%;
          border:2px solid grey;
          transform:rotate(10deg);
          animation-name:rotateit;
          animation-duration:10s;
          animation-timing-function:ease;
          animation-iteration-count:infinite;
      }
      .strip{
        display:relative;
        position:absolute;
        width:90vw;
        height:5vw;
        margin-right:10vw;
      }
      #str1{
        transform-origin:0px 0px;
        transform:translate(50%,10vh) rotate(-40deg);
        opacity:0.3;
        position:absolute !important;
        left:-30%;
        top:5%;
        margin-left:20vw;
      }
      #str2{
        transform-origin:0px 0px;
        transform:translate(50%,10vh) rotate(-20deg);
        opacity:0.3;
        position:absolute !important;
        left:-12%;
      }
      #str3{
        transform-origin:0px 0px;
        transform:translate(50%,10vh) rotate(0deg);
        opacity:0.3;
        position:absolute !important;
        left:-10%;
      }
      #str4{
        transform-origin:0px 0px;
        transform:translate(50%,10vh) rotate(20deg);
        opacity:0.3;
        position:absolute !important;
        left:0%;
      }
      #str5{
        transform-origin:0px 0px;
        transform:translate(50%,10vh) rotate(45deg);
        opacity:0.3;
        position:absolute !important;
        left:15%;
      }
      #text{
        font-family: 'menlo';
        position:absolute;
        left:80%;
        width:40%;
        height:100%;
        display:flex;
        align-items:center;
        flex-direction:row;
        div{
          margin-right:10vw;
        }
        font-size:20px;
        font-weight:bold;
        &:hover{
          cursor:pointer;
        }
      }
      .smdot{
        position:absolute;
        height:1vw; width:1vw;
        border-radius:3vw;
        background-color:white;
        display:none;
      }
      #str1 > #dot{
        transform: translate(58vw,5vh);
      }
      #str2 > #dot{
        transform: translate(59vw,5vh);
      }
      #str3 > #dot{
        transform: translate(59.6vw,5vh);
      }
      #str4 > #dot{
        transform: translate(59.8vw,5vh);
      }
      #str5 > #dot{
        transform: translate(59.7vw,5vh);
      }
      .btn{
        position:relative;
        height:10px; 
        width:10px !important;
        border-radius:100%;
        background-color:white;
        opacity:0.3;
        margin-bottom:1vh !important;
        margin-left:10px;
      }
      .btn:hover{
        cursor:pointer;
        opacity:.9 !important;
      }
      #navdiv{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;
        position:absolute;
        z-index:3;
        bottom:3vh;
        left:30%;
        height:3vh;
        width:30vw;
      }
      #projects{
        display:block;
        position:absolute;
        z-index:3;
        top: 52%;
        left: 5%;
        font-size:20px;
        font-weight:bold;
        font-family:'Menlo'
      }
    }
    }
    @media (min-width:500px){
      #projects{
        display:block;
        position:absolute;
        z-index:3;
        top: 45%;
        left: 10%;
        font-size:42px;
        font-weight:bold;
        font-family:'Menlo'
      }
      #container{
        diplay:block;
        position:absolute;
        top:0; left:0;
        height:100vh; width:100vw;
        overflow-y:hidden;
      }
      #mouse{
          height:25px; width:25px;
          background-color:grey;
          display:block; position:absolute;
          top:10px;
      }
      #navdiv{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        position:absolute;
        z-index:3;
        top:45vh;
        right:8vw;
        height:30vh;
        width:3vw;
      }
      @keyframes rotateit{
        0% {
          rotate:-15deg;
        }
        50% {
          rotate: 10deg;
        }
        100% {
          rotate: -15deg;
        }
      }
      #circle{
          display:block; position:absolute;
          left:-60%;
          top:-50%;
          width:100vw; height:200vh;
          border-radius:100%;
          border:2px solid grey;
          transform:rotate(10deg);
          animation-name:rotateit;
          animation-duration:10s;
          animation-timing-function:ease;
          animation-iteration-count:infinite;
      }
      .strip{
        display:relative;
        position:absolute;
        width:80vw;
        height:5vw;
      }
      #str1{
        transform-origin:0px 0px;
        transform:translate(50%,95vh) rotate(-20deg);
        opacity:0.3;
      }
      #str2{
        transform-origin:0px 0px;
        transform:translate(50%,95vh) rotate(-10deg);
        opacity:0.3;
      }
      #str3{
        transform-origin:0px 0px;
        transform:translate(50%,95vh) rotate(0deg);
        opacity:0.3;
      }
      #str4{
        transform-origin:0px 0px;
        transform:translate(50%,95vh) rotate(10deg);
        opacity:0.3;
      }
      #str5{
        transform-origin:0px 0px;
        transform:translate(50%,95vh) rotate(20deg);
        opacity:0.3;
      }
      #text{
        font-family: 'menlo';
        position:absolute;
        left:80%;
        width:40%;
        height:100%;
        display:flex;
        align-items:center;
        flex-direction:row;
        div{
          margin-right:20px;
        }
        font-size:32px;
        font-weight:bold;
        &:hover{
          cursor:pointer;
        }
      }
      .smdot{
        position:absolute;
        height:1vw; width:1vw;
        border-radius:3vw;
        background-color:white;
      }
      #str1 > #dot{
        transform: translate(58vw,5vh);
      }
      #str2 > #dot{
        transform: translate(59vw,5vh);
      }
      #str3 > #dot{
        transform: translate(59.6vw,5vh);
      }
      #str4 > #dot{
        transform: translate(59.8vw,5vh);
      }
      #str5 > #dot{
        transform: translate(59.7vw,5vh);
      }
      .btn{
        position:relative;
        height:15px; 
        min-width:15px;
        border-radius:100%;
        background-color:white;
        opacity:0.3;
        margin-bottom:1vh !important;
      }
      .btn:hover{
        cursor:pointer;
        opacity:.9 !important;
      }
    }
`;
export default navigation