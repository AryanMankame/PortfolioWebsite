import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  const navigate = useNavigate();
  return (
    <Page>
        <div id="navbar">
            <div id="logo">
                <img src="logo_v2.svg" alt="" id="aw-logo" />
            </div>
            <div id="items">
                <div className = "head-txt" onClick = {() => navigate('/')}>Home</div>
                <div className = "head-txt" onClick = {() => navigate('/about')}>About</div>
                <div className = "head-txt" onClick = {() => navigate('/projects')}>Projects</div>
                <div id = "social-id">
                <div id="linkedin" onClick = {() => {
                    window.open('https://www.linkedin.com/in/aryan-mankame-612a73202/');
                }}>
                    <img src = "https://img.icons8.com/?size=512&id=13930&format=png"></img>
                </div>
                <div id="github" onClick = {() => {
                    window.open('https://github.com/AryanMankame');
                }}>
                <img src = "https://img.icons8.com/?size=1x&id=62856&format=png"></img>
                </div>
                <div id="gmail" onClick = {() => {
                    window.open('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKZhCjTQTKkHWzBsCFBQDjrQxhmgVglgHWFDtlCqdvpFwTxSkKxWhjWQXkcKMlVJVGhchT');
                }}>
                <img src = "https://img.icons8.com/?size=1x&id=P7UIlhbpWzZm&format=png"></img>
                </div>
            </div>
            </div>
        </div>
    </Page>
  )
}
const Page = styled.div`
    z-index:1000 !important;
    position:relative !important;
    width:100vw !important;
`;
export default Navbar