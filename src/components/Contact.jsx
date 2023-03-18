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
`;

const Left = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-item:center;
`;

const Right = styled.div`
    flex:1;
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
        <Left>
            <Form onSubmit={handleSubmit} ref={form}>
              <Title>Contact Me.</Title>
              <Input placeholder='Name' name='name'></Input>
              <Input placeholder='Email' name='email'></Input>
              <Textarea placeholder='Write your message...' name='message'></Textarea>
              <Button type='submit'>Submit</Button>
              {success && "Your message has been sent!"}
            </Form>
        </Left>
        <Right>
          <Map></Map>
        </Right>
      </Container>
    </div>
  )

}
export default Contact;
