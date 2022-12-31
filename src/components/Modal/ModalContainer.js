import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWindowClose } from 'react-icons/fa';
import { Form, Formik, Field } from "formik"
import { StateContext } from '../StateProvider';

const ModalContainer = ({ isOpen, onClose }) => {

    const {workTime,setWorkTime,longBreak,setLongBreak,shortBreak,setShortBreak} = useContext(StateContext);

    return (
        <Container>
            <ModalContent initial={{ y: "-100vh", scale: 0 }} animate={{ y: "0", scale: 1 }} exit={{ y: "-100vh", scale: 0 }}>
                <ModalHeader>
                    <ModalTitle>Settings</ModalTitle>
                    <ModalCloseButton onClick={onClose}><FaWindowClose fontSize="5rem" /></ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={{ work: workTime/60, short: shortBreak/60, long: longBreak/60}} onSubmit={(values) => { 
                        setWorkTime(values.work *60);
                        setShortBreak(values.short *60);
                        setLongBreak(values.long *60);
                        onClose();
                    }}>
                        <Form>
                            <InputWrappers>
                                <FormControl>
                                    <lable htmlFor="work"><h4>Work</h4></lable>
                                    <Field name="work" min="1" max="60" />
                                </FormControl>
                                <FormControl>
                                    <lable htmlFor="short"><h4>Short Break</h4></lable>
                                    <Field name="short" min="1" max="60" />
                                </FormControl>
                                <FormControl>
                                    <lable htmlFor="long"><h4>Long Break</h4></lable>
                                    <Field name="long" min="1" max="60" />
                                </FormControl>
                            </InputWrappers>
                            <ButtonWrapper>
                                <ApplyButton type="submit" >Apply</ApplyButton>
                            </ButtonWrapper>
                        </Form>
                    </Formik>
                </ModalBody>
            </ModalContent>
        </Container>
    )
}

export default ModalContainer;

const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
padding:2rem;

`;

const ApplyButton = styled.button`
all: unset;
font-size: 2rem;
padding: 1rem 4rem;
background: ${(props) => props.theme.colors.primary};
border-radius: 0.5rem;
:hover{
    scale:1.1;
}

`;

const InputWrappers = styled.div`
display: flex;
justify-content: space-around;
padding: 1rem;
gap: 2rem;

`;
const FormControl = styled.div`

display: flex;
flex-direction: column;
gap: 0.7rem;
color: black;
flex: 1;
lable{
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primary};
}
input{
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
    border-radius:1rem;
    border:1px solid black;
    background: #ead8fc;

}

`;

const Container = styled.div`
position:absolute;
height: 100vh;
width:100vw;
display: grid;
place-items: center;
z-index: 150;

`;
const ModalContent = styled(motion.div)`
background-color: white;
height: 40rem;
width: 60rem;
@media(max-width:600px){
    width: 90%;
    padding: 1rem;
}


`;
const ModalHeader = styled.div`
color: black;
padding: 2rem;
display:flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid black;

`;
const ModalTitle = styled.h4`
font-size: 4rem;

`;
const ModalBody = styled.div``;
const ModalCloseButton = styled.button`
all: unset;

:hover{
    scale:1.1;
    
}

`;
