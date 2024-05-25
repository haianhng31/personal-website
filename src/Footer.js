import React from 'react';
import {
  Flex,
  IconButton, Spacer
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { IoDocumentText, IoLogoLinkedin } from "react-icons/io5";

import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <Flex direction="row" mb={4} className="website-footer">
            <Spacer />

            <Link to={`https://github.com/haianhng31`} target="_blank" rel="noopener noreferrer">
                <IconButton
                aria-label="Github"
                as={FaGithub}
                bg="transparent"
                w={6}
                h={6}
                />
            </Link>

            <Link to={`https://LinkedIn.com/in/hennessy-nguyen-18a8a8163/`} target="_blank" rel="noopener noreferrer" >
                <IconButton
                aria-label="LinkedIn"
                as={IoLogoLinkedin}
                bg="transparent"
                color="black"
                w={6}
                h={6}
                />
            </Link>

            <Link to={`https://LinkedIn.com/in/hennessy-nguyen-18a8a8163/`} target="_blank" rel="noopener noreferrer">
                <IconButton
                aria-label="Resume"
                as={IoDocumentText}
                bg="transparent"
                w={6}
                h={6}
                />
            </Link>
        </Flex>
     );
}
 
export default Footer;