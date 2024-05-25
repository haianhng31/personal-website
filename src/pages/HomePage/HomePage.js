import { Avatar, Stack, Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import {projects} from '../../data';
import Project from '../TechProjects/Project'
import { keyframes } from "@emotion/react";
import { greetings } from "../../data";


const fadeUpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  25% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  75% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const HomePage = () => {
    const navigate = useNavigate();
    const [currentGreeting, setCurrentGreeting] = useState(0);
    const startTimeRef = useRef(Date.now());

    useEffect(() => {
        const intervalId = setInterval(() => {
          const elapsedTime = Date.now() - startTimeRef.current;
          const animationDuration = 4000; // Animation duration in milliseconds
          const intervalDuration = animationDuration; // Interval duration in milliseconds
    
          if (elapsedTime >= intervalDuration) {
            setCurrentGreeting((prevGreeting) => (prevGreeting + 1) % greetings.length);
            startTimeRef.current = Date.now(); // Reset start time
          }
        }, 16); // Update interval every 16ms (approximately 60fps)
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      }, []);
    
    const elapsedTime = Date.now() - startTimeRef.current;
    const animationDuration = 4000; // Animation duration in milliseconds
    const animationDelay = `${-(elapsedTime % animationDuration)}ms`;

    return ( 
    <>
    <Avatar
        boxSize='150px'
        src='https://res.cloudinary.com/di6doert4/image/upload/v1716530453/Personal-Website/IMG_7732_jyka4k.jpg'
        alt='My avatar'
    />

    <Stack direction={['column', 'row']}>
        <Text
            fontSize="5xl"
            fontWeight="bold"
            animation={`${fadeUpAnimation} 4s infinite ${animationDelay}`}
        >
            {greetings[currentGreeting]}
        </Text>
        <Text mt={0.3} fontSize="5xl" fontWeight="bold">I'm Hennessy Nguyen!</Text>
    </Stack>
    

    <p>Call me a spidergirl cause I build web and mobile. A passionate learner and a proud woman in STEM 👩🏻‍💻 🌈 🐒.</p>
    <Stack direction={['column', 'row']}>
        <p>View my</p>
        <Box 
            borderRadius={10} 
            bg={'#e7b585'} 
            paddingX={2} 
            maxH={7} 
            _hover={{ bg: '#5a5a38' }} 
            cursor="pointer" 
            transition="background-color 0.3s ease"
            onClick={() => navigate('/about')}>
            <p style={{color: "white", fontSize: '18px'}}>About</p>
        </Box>
        <p>, </p>
        <Box 
            borderRadius={10} 
            bg={'#e7b585'} 
            paddingX={2} 
            maxH={7} 
            _hover={{ bg: '#5a5a38' }} 
            cursor="pointer" 
            transition="background-color 0.3s ease"
            onClick={() => navigate('/experience')}>
            <p style={{color: "white", fontSize: '18px'}}>Experience</p>
        </Box>
        <p>, </p>
        <Box 
            borderRadius={10} 
            bg={'#e7b585'} 
            paddingX={2} 
            maxH={7} 
            _hover={{ bg: '#5a5a38' }} 
            cursor="pointer" 
            transition="background-color 0.3s ease"
            onClick={() => navigate('/tech-projects')}>
            <p style={{color: "white", fontSize: '18px'}}>Tech</p>
        </Box>
        <p>, or </p>
        <Box 
            borderRadius={10} 
            bg={'#e7b585'} 
            paddingX={2} 
            maxH={7} 
            _hover={{ bg: '#5a5a38' }} 
            cursor="pointer" 
            transition="background-color 0.3s ease"
            onClick={() => navigate('/non-tech-projects')}>
            <p style={{color: "white", fontSize: '18px'}}>Non-Tech</p>
        </Box>
    </Stack>

    <h2>Recent Projects</h2>

    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {projects && projects.slice(0,4).map((project, idx) => (
            <GridItem key={idx} w='100%' h='200' onClick={()=>navigate('/tech-projects')}>
                <Project 
                    projectDescription={project.projectDescription} 
                    projectImg={project.projectImg} 
                    projectName={project.projectName} 
                    techStacks={project.techStacks}/>
            </GridItem>
        ))}
    </Grid>
    {/* <Text>Read more</Text> */}
    </> );
}
 
export default HomePage;