import React from 'react'
import styled from 'styled-components';
import Map from './Map';
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
  return (
    <div className='contact'>
      <Container>
        <Left>
            <Form>
              <Title>Contact Me.</Title>
              <Input placeholder='Name'></Input>
              <Input placeholder='Email'></Input>
              <Textarea placeholder='Write your message...'></Textarea>
              <Button>Submit</Button>
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
