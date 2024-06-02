import {
    Step,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    Stepper,
    Box,
    List, ListItem, ListIcon,
    Stack,
    useMediaQuery
  } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa";
import { experiences } from '../../data'
import { useState, useEffect } from 'react'

const Experience = () => {
    const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');
    const [isSmallerThan769] = useMediaQuery('(max-width: 769px)');
    let maxWidth;
    if (isSmallerThan480) { maxWidth = 350 }
    else if (isSmallerThan769) { maxWidth = 550 }
    else { maxWidth = 650 }


    const [activeStep, setActiveStep] = useState(0)

    const handleClick = () => {
        setActiveStep((prevStep) => (prevStep + 1) % experiences.length)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          setActiveStep((prevStep) => (prevStep + 1) % experiences.length)
        }
    }

    useEffect(() => {
        // Add event listener on mount
        document.addEventListener('click', handleClick)
        document.addEventListener('keydown', handleKeyPress)
    
        // Clean up event listener on unmount
        return () => {
          document.removeEventListener('click', handleClick)
          document.removeEventListener('keydown', handleKeyPress)
        }
    }, [])
      
    return ( 
    <>
    <h1>Professional Experience</h1>

    <Stepper index={activeStep} orientation='vertical' height='auto' gap='5' size='lg' colorScheme='yellow' mt={10}>
    {experiences.map((experience, index) => (
      <Step key={index}>
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={"👩🏻‍💻"}
          />
        </StepIndicator>

        <Box flexShrink='0'>
          <h3 style={{marginBottom: 2}}>{experience.title}</h3>
          {!isSmallerThan480 && (
            <Stack direction="row">
              <h5 style={{marginBottom: 10, maxWidth: maxWidth}}><strong>{experience.company}</strong> | </h5>
              <h5>{experience.description}</h5>
            </Stack>
          )}
          {isSmallerThan480 && (
            <>
            {/* <Stack direction="column"> */}
              <h5 style={{maxWidth: maxWidth}}><strong>{experience.company}</strong></h5>
              <h5 style={{marginBottom: 12}}>{experience.description}</h5>
            {/* </Stack> */}
            </>
          )}
         

          <Box 
            maxW="100%"
            style={{
                height: activeStep === index ? 'auto' : '0',
                overflow: 'hidden',
                transition: 'height 0.3s ease, opacity 0.3s ease',
                opacity: activeStep === index ? 1 : 0
            }}>
            <List spacing={0} mb={7} maxWidth={maxWidth}>
                {experience.details.map((point, idx) => (
                    <ListItem key={idx} style={{ wordBreak: 'break-word'}}>
                        <ListIcon as={FaStar} color='green.500' />
                        {point}
                    </ListItem>
                ))}
            </List>
          </Box>
        </Box>

        <StepSeparator />
      </Step>
    ))}
    </Stepper>
    
    </> );
}
 
export default Experience;