import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Map from './Map';
import emailjs from '@emailjs/browser';
// import MapChart from './Map';
const Container = styled.div`
    width:1000%;
    display:flex;
    justify-content:space-between;
    height:100%;
    scroll-snap-align:center;
    @media only screen and (max-width:769px) {
      width:100%;
      flex-direction:column;
   }
`;

const Left = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-item:center;
    flex-direction:column;
    padding-left:4.5em;
    flex-wrap: wrap;
    @media only screen and (max-width:769px) {
      justify-content:center;
      padding:1.5em;
   }
`;

const Right = styled.div`
    flex:1;
    @media only screen and (max-width:769px) {
      display:none;
   }
`;

const Title = styled.h1`
    font-size:2em;
    margin:0;
`;

const Form = styled.form`
   display:flex;
   flex-direction:column;
   gap:1em;
   width:500px;
   justify-content:center;
   align-item:center;
`;

const Input = styled.input`
   padding:1.2em;
   border-radius:.7em;
   border:none;
   background-color:#e8e6e6;
`;

const Textarea = styled.textarea`
   height:10em;
   padding:1.2em;
   border-radius:.7em;
   border:none;
   background-color:#e8e6e6;
`;


const Button = styled.button`
    // width:7em;
    
    border:none;
    border-radius:.7em;
    padding:1.2em;
    background:#da4ea2;
    color:white;
    cursor:pointer;
`;
const Logo = styled.img`
    height:3em;
    width:3em;
    padding:1.5em;
`;
const Social = styled.div`
  padding:1.5em;
  justify-content: center;
`;
const Contact = () => {
  const form = useRef();
  
  const [success, setSuccess] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_vjnxu1o', 'template_gyp0muy', form.current, 'HDWvZMQ5Aa00lTgid')
    .then((result) => {
        console.log(result.text);
        setSuccess(true);
    }, (error) => {
        console.log(error.text);
        setSuccess(false);
    });
  }
  return (
    <div className='contact'>
      <Container>
        <>
        <Left>
            <Form onSubmit={handleSubmit} ref={form}>
              <Title>Contact Me.</Title>
              <Input placeholder='Name' name='name'></Input>
              <Input placeholder='Email' name='email'></Input>
              <Textarea placeholder='Write your message...' name='message'></Textarea>
              <Button type='submit'>Submit</Button>
              {success && "Your message has been sent!"}
            </Form>
          <Social>
            <Logo src='./img/linkedin.svg'></Logo>
            <Logo src='./img/twitter.svg'></Logo>
            <Logo src='./img/github1.svg'></Logo>
          </Social>
        </Left>
        <Right>
          <Map></Map>
        </Right>
        </>
      </Container>
    </div>
  )

}
export default Contact;
