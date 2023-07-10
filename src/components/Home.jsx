import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import Navbar from './Navbar'
import Particle from './Particle'
function Home() {
  return (
    <Page>
        <Particle />
        <div id="circle-left"></div>
        <div id="circle-mid"></div>
        <Navbar />
        <div id="main">
            <div id="p1">
                <div id="intro">Hi,</div> 
                <div id = "moving-text">I'm &nbsp;
                <Typed id = "mov-txt" strings = {["Aryan Mankame","a Full Stack Developer"]} typeSpeed={150} backSpeed={100} loop />
                </div>
                <div id="moreinfo">Full Stack Developer having 1.5+ years <br/>experience of using MERN Stack</div>
                <div id="button-div">
                <button id="download" onClick={() => {
                    window.open('AryanMankame.pdf');
                }}>Download CV</button>
                <button id="hire" onClick = {() => {
                    window.open('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKZhCjTQTKkHWzBsCFBQDjrQxhmgVglgHWFDtlCqdvpFwTxSkKxWhjWQXkcKMlVJVGhchT');
                }}>Hire Me</button>
                </div>
            </div>
            <div id="p2">
                <img id = "blob-img" src = "right-blob.svg" alt=""></img>
                <img id = "profile-img" src = "p1.png" alt=""></img>
            </div>
        </div>
    </Page>
  )
}
const Page = styled.div`
    background-color: rgba(0, 43, 82, 1);
    // This is the animation for the mid circle which gives a star like grow shrink effect
    @keyframes grow-shrink{
        0%{
            transform: scale(1);
        }
        100%{
            transform: scale(1.1);
        }
    }
    // This is the animation for the right blob which gives a wobbly effect moving up and down
    @keyframes updown{
        0%{
            margin-top:0px; margin-left:0px;
        }
        100%{
            margin-top:20px; margin-left:20px;
        }
    }
    @media (max-width: 500px) {
        height:100vh !important; width:100vw !important; overflow:hidden !important;
        position:absolute; top:0;
        #main{
            height:100% !important;
            display:flex !important; flex-direction:column-reverse !important;

        }
        #profile-img{
            height:35vh; width:75vw; position:absolute; top:10vh; left:20%;
        }
        #blob-img{
            height:50vh; width:100vw;
            position:absolute; top:10vh; left:0%;
        }
        #p1{
            padding-left:15px;
            padding-bottom:25vh;
        }
        #intro{
            font-size:40px; font-weight:bold;
            letter-spacing:1px;
            color:grey;
        }
        #moving-text{
            color:white;
            letter-spacing:2px;
            font-size:36px; 
            font-weight:1000;
            margin-top:2vh; margin-bottom:2vh;
        }
        #moreinfo{
            letter-spacing: 1px !important;
            font-size:16px;
            color:grey;
        }
        #button-div{
            width:100%;
            margin-top:5vh;
        }
        button{
            margin-right:1vw;
            background-color:rgb(153 255 193);;
            box-shadow: 5px 5px 10px 2px rgba(0,0,0,.8);
            &:hover{
                transform:scale(1.1);
            }
        }
    }
    @media (min-width: 500px) {
        height:100vh !important; width:100vw !important;
        overflow-y: hidden;
        #circle-left{
            height:60vh; width:30vw;
            position:absolute;
            left:-15%;
            top:35%; 
            box-shadow:0px 0px 20px rgba(255,255,255,0.5);
            // background: linear-gradient(150deg, rgba(25,27,217,1) 0%, rgba(0,0,0,1) 0%, rgba(33,53,198,1) 100%);
            background: linear-gradient(150deg, rgb(141 141 221) 0%, rgb(209 220 255) 0%, rgba(33,53,198,1) 100%);
            border-radius:60%;
            z-index:1;
        }
        #circle-mid{
            height:16vh; width:8vw;
            position:absolute;
            left:35%;
            top:18%; 
            // background: linear-gradient(150deg, rgba(25,27,217,1) 0%, rgba(0,0,0,1) 0%, rgba(33,53,198,1) 100%);
            background: linear-gradient(150deg, rgb(141 141 221) 0%, rgb(209 220 255) 0%, rgba(33,53,198,1) 100%);
            border-radius:60%;
            z-index:1;
            box-shadow:0px 0px 20px rgba(255,255,255,0.5);
            animation-name: grow-shrink;
            animation-duration:.7s;
            animation-timing-function:linear;
            animation-iteration-count:infinite;
        }
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
        #main{
            height:90vh; width:100vw; display:flex;
            flex-direction:row;
        }
        #p1{
            position:relative;
            height:100%;
            width:50vw;
            display:flex; flex-direction:column;
            align-items:flex-start;
            justify-content:center;
            margin-left:10vw;
            z-index:3;
            font-family: 'Caladea', serif;
        }
        #button-div{
            width:100%;
            margin-top:2vh;
            margin-bottom:15vh;
        }
        button{
            margin-right:1vw;
            background-color:rgb(153 255 193);;
            box-shadow: 5px 5px 10px 2px rgba(0,0,0,.8);
            &:hover{
                transform:scale(1.1);
            }
        }
        #intro{
            font-size:48px; font-weight:bold;
            letter-spacing:1px;
            color:grey;
        }
        #p2{
            height:90vh;
            width:50vw;
            flex-direction:column;
            align-items:center;
            justify-content:center; 
            animation-name: updown;
            animation-duration:1s;
            animation-timing-function:linear;
            animation-iteration-count:infinite;
        }
        #blob-img{
            z-index:1;
        }
        #profile-img{
            position:absolute;
            width:30%;
            height:55%;
            z-index:3;
            right:3%;
            bottom:20%; 
        }
        #moving-text{
            color:white;
            letter-spacing:2px;
            font-size:52px; 
            font-weight:1000;
            margin-top:2vh; margin-bottom:2vh;
        }
        #moreinfo{
            letter-spacing: 1px !important;
            font-size:24px;
            color:grey;
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
    }
    
`;
export default Home