import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
const Container = styled.div`
    width:70em;
    display:flex;
    justify-content:space-between;
    height:100vh;
    scroll-snap-align:center;
`;

const Left = styled.div`
    flex:2;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
    gap:1em;
`;

const Right = styled.div`
    flex:3;
    position:relative;
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

const Button = styled.button`
    width:7em;
    border:none;
    border-radius:.7em;
    padding:.4em;
    background:#da4ea2;
    color:white;
    cursor:pointer;
`;

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar/>
      <Container>
        <Left>
            <Title>Hi, I am Hitesh Jain.</Title>
            <Info>A Web Developer with a passion to build.</Info>
            <Button>Learn More.</Button>
        </Left>
        <Right>
            <Img src="./img/moon.png"/>
        </Right>
      </Container>
    </div>
  )
}

export default Hero
