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
    @media only screen and (max-width:769px) {
        width:100%;
        flex-direction:column;
     }
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
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
`;

const List = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    // align-items: center;
    justify-content: center;
    gap:1em;
`;

const ListItem = styled.li`
    font-size:3.5em;
    font-weight:bold;
    color:transparent;
    cursor:pointer;
    -webkit-text-stroke:.005em white;
    position:relative;
    ::after{
        content:"${(props)=>props.text}";
       color:white;
       width:0;
       overflow:hidden;
       position:absolute;
       top:0;
       left:0;
       bottom:0;
       right:0;
       white-space:nowrap;
    }

    &:hover{
        ::after{
            animation: move 0.5s linear both;
        }

        @keyframes move{
            to{
                width:100%;
            }
        }
    }
`;
const Logos = styled.div`
    display: grid;
 
    align-items:center;
    justify-content:center;
    grid-gap:1em;
    padding-left:4.5em;
    @media only screen and (max-width:769px) {
        grid-template-columns: repeat(4, 8em);
     }
`;
const Img = styled.div`
     padding:.5em;
`;
const Logo = styled.img`
    height:5em;
    width:5em;
    margin:0;
    padding:0;
`;
const Project = () => {
  return (
    <div className='project'>
      <Container>
        <Left>
           <List>
               {data.map((item)=>{
                return <ListItem key={item} text={item}>{item}</ListItem>
               })}
           </List>
        </Left>
        <Right>
            <Logos>
                <Img>
                    <Logo src='./img/html.svg'></Logo>
                </Img>
                <Img>
                    <Logo src='./img/css.svg'></Logo>
                </Img>
                <Img>
                    <Logo src='./img/git.svg'></Logo>
                </Img>
                <Img>
                    <Logo src='./img/go.svg'></Logo>
                </Img>
                <Img>
                    <Logo src='./img/node.svg'></Logo>
                </Img>
                <Img>
                    <Logo src='./img/mysql.svg'></Logo>
                </Img>
                <Img>
                    <Logo src='./img/python.svg'></Logo>
                </Img>
                <Img>
                    <Logo src='./img/react.svg'></Logo>
                </Img>
            </Logos>
        </Right>
      </Container>
    </div>
  )
}

export default Project;
