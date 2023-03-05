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

const Right = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
    gap:1em;
`;

const Left = styled.div`
    flex:1;
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

const Who = () => {
  return (
    <div className='who'>
      <Container>
        <Left>
        </Left>
        <Right>
            <Title>Bringing ideas alive.</Title>
            <Info>For the love transforming ideas to reality.</Info>
            <Button>See My Work.</Button>
        </Right>
      </Container>
    </div>
  )
}

export default Who;
