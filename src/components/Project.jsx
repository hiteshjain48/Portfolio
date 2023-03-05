import React from 'react'
import styled from 'styled-components';

const data=[
    "Web Development",
    "Web3",
    "Scrapping",
    "Machine Learning"
]
const Container = styled.div`
    width:70em;
    display:flex;
    justify-content:space-between;
    height:100vh;
    scroll-snap-align:center;
`;

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
    gap:1em;
`;

const Right = styled.div`
    flex:1;
    position:relative;
`;

const List = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:1em;
`;

const ListItem = styled.li`
    
`;

const Project = () => {
  return (
    <div className='project'>
      <Container>
        <Left>
           <List>
               {data.map((item)=>{
                return <ListItem key={item}>{item}</ListItem>
               })}
           </List>
        </Left>
        <Right>
        </Right>
      </Container>
    </div>
  )
}

export default Project;
