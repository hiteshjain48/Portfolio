import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
   width:70em;
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:.5em 0;
   @media only screen and (max-width:769px) {
      width:100%;
   }
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
   @media only screen and (max-width:769px) {
      display:none;
   }
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

// const Icon = styled.img`
//    width:1.2em;
//    cursor:pointer;
// `;

const Button = styled.a`
   width:4em;
   padding:.4em;
   border-radius:.7em;
   border:none;
   background-color:#da4ea2;
   color:white;
   cursor:pointer;
   text-decoration: none;
   text-align: center;
   @media only screen and (max-width:769px) {
      display:none;
   }
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
            {/* <Icon src='./img/search.png'></Icon> */}
            <Button href="https://drive.google.com/uc?id=10pFnRU8gzkNh4pMRujXW7B09YI4D6jlF&export=download">Resume</Button>
        </Icons>
      </Container>
    </div>
  )
}

export default Navbar
