import React from 'react';
import styled from 'styled-components';


const Backdrop = () => {
  return (
    <KBackdrop></KBackdrop>
  )
}

export default Backdrop;

const KBackdrop = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: 100;
    background-color: rgba(0,0,0,0.5);
   
`;