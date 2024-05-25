import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Input,
  Textarea,
  Button, Center
} from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Contact = () => {
  const email = "anguyen137@fordham.edu";
  const linkedIn = "LinkedIn.com/in/hennessy-nguyen-18a8a8163/";
  const github = "github.com/haianhng31";

  return (
    <Center>
      <Box w="full" maxW="550px" p={8} borderWidth={1} borderRadius={8} boxShadow="md" bg="#75754A">
        <h1 style={{color: "white"}}>Contact Me</h1>
        <Flex direction="column" mb={4}>

          <Flex align="center" mb={2}>
            <IconButton
              aria-label="Email"
              icon={<FaEnvelope />}
              isRound
              mr={2}
              color="white"
            />
            <h5 style={{color: "white"}}>{email}</h5>
          </Flex>

          <Flex align="center" mb={2}>
            <IconButton
              aria-label="Github"
              icon={<FaGithub />}
              isRound
              mr={2}
              color="white"
            />
            <Link to={`https://${github}`} target="_blank" rel="noopener noreferrer">
                <h5 style={{ color: "white" }}>{github}</h5>
            </Link>
          </Flex>

          <Flex align="center" mb={4}>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              isRound
              mr={2}
              color="white"
            />
            <Link to={`https://${linkedIn}`} target="_blank" rel="noopener noreferrer">
                <h5 style={{color: "white"}}>{linkedIn}</h5>
            </Link>
          </Flex>

        </Flex>
        <form>
          <Input 
            mb={4} 
            color="white" 
            placeholder="Name" 
            _placeholder={{ opacity: 1, color: 'white' }}
            focusBorderColor='gray.400'/>
          <Input mb={4} placeholder="Email" _placeholder={{ opacity: 1, color: 'white' }} focusBorderColor='gray.400'/>
          <Textarea mb={4} placeholder="Message" rows={4} _placeholder={{ opacity: 1, color: 'white' }} focusBorderColor='gray.400'/>
          <Button type="submit" w="full">
            Send
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default Contact;