import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
const Container = styled.div`
    width:70em;
    display:flex;
    justify-content:space-between;
    height:100vh;
    scroll-snap-align:center;
    @media only screen and (max-width:769px) {
        width:100%;
        flex-direction:column;
        align-items:center;
        justify-content:center;
     }
`;

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
    gap:1em;
    @media only screen and (max-width:769px) {
        align-items:left;
        justify-content:center;
        padding:1.5em;
     }
`;

const Right = styled.div`
    flex:1;
    position:relative;
    @media only screen and (max-width:769px) {
        align-item:center;
        justify-content:center;
        width:100%
     }
`;

const Title = styled.h1`
    font-size:5em;
    margin:0;
`;

const Img = styled.img`
    height:25em;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate{
        to{
            transform:translateY(2em);
        }
    }
`;

const Info = styled.p`
    font-size:1.3em;
    margin:0;
`;
const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    gap:2em;
`;
const Button = styled.button`
    width:7em;
    border:none;
    border-radius:.7em;
    padding:.4em;
    background:#da4ea2;
    color:white;
    cursor:pointer;
`;

const Resume = styled.a`
   width:4em;
   padding:.4em;
   border-radius:.7em;
   border:none;
   background-color:#da4ea2;
   color:white;
   cursor:pointer;
   text-decoration: none;
   text-align: center;
   display:none;
   @media only screen and (max-width:769px) {
        display:block;
    }

`;

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar/>
      <Container>
        <Left>
            <Title>Hi, I am Hitesh Jain.</Title>
            <Info>A Web Developer with a passion to build.</Info>
            <Buttons>
                <Button>Learn More.</Button>
                <Resume href="https://drive.google.com/uc?id=10pFnRU8gzkNh4pMRujXW7B09YI4D6jlF&export=download">Resume</Resume>
            </Buttons>
        </Left>
        <Right>
            <Img src="./img/moon.png"/>
        </Right>
      </Container>
    </div>
  )
}

export default Hero
