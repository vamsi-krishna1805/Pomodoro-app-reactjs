import styled from 'styled-components';
import Tags from './components/tags/Tags';
import Timer from './components/Timer/Timer';
import Modal from './components/Modal/Modal';
import { FaCog } from 'react-icons/fa';
import { useState } from 'react';





const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OnOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => { 
    setIsOpen(false);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}/>
      <Title>Pomodoro</Title>
      <Tags />
      <Timer />
      <Settings onClick={OnOpen}>
        <FaCog />
      </Settings >

    </>

  );
}

export default App;



const Title = styled.h1`
font-size: 6rem;
padding: 2rem 0;
text-align: center;

`;

const Settings = styled.button`
all:unset;
font-size: 4rem;
/* display: grid; */
/* place-items:center; */
/* align-items: center;  */
/* width: 100%; */
/* height: 5rem; */ 
margin:0 auto;
display:flex;
justify-content: center;

cursor: pointer;

:hover{
  scale: 1.2;
} 
color:${props => props.theme.colors.primary}
`;





