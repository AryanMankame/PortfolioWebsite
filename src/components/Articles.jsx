import React from 'react'
import styled from 'styled-components'
import './Article.css';
function Articles() {
  return (
    <Page>
        <div id="checkme">Check Out the Articles :</div>
        <Cards>
        <figure>
            <img src="witty3.jpg" alt="Mountains"></img>
            <figcaption>
            <p>
            <div className='div-head'>2nd Runner's Up</div>
            <div className='div-context'>We were 2nd runners up out of 50 <br /> offline participaing teams and shortlisted among 300+ teams</div>
            </p></figcaption>
        </figure>
        <figure>
            <img src="https://picsum.photos/id/475/250/300" alt="Mountains"></img>
            <figcaption>The Night</figcaption>
        </figure>
        </Cards>
    </Page>
  )
}
const Page = styled.div`
    height:100vh; width:100vw; background-color:grey;
`;
const Cards = styled.div`
    width:100vw; height:60vh; background-color:orange;
    
`;
export default Articles