import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:70em;
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:.5em 0;
`;

const Links = styled.div`
   display:flex;
   align-items:center;
`;

const List = styled.ul`
   display:flex;
   justify-content:space-between;
   list-style:none;
   gap:3em;
`;

const ListItem = styled.li`
   cursor:pointer;
`;

const Icons = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   gap:1.5em;
`;

const Icon = styled.img`
   width:1.2em;
   cursor:pointer;
`;

const Button = styled.button`
   width:5em;
   padding:.4em;
   border-radius:.7em;
   border:none;
   background-color:#da4ea2;
   color:white;
   cursor:pointer;
`;

const Navbar = () => {
  return (
    <div className='navbar'>
      <Container>
        <Links>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Who</ListItem>
            <ListItem>Project</ListItem>
            <ListItem>Contact</ListItem>
        </List>
        </Links>
        <Icons>
            <Icon src='./img/search.png'></Icon>
            <Button>Click</Button>
        </Icons>
      </Container>
    </div>
  )
}

export default Navbar
