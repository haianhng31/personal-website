import { Button, HStack } from '@chakra-ui/react'
import { useState } from 'react';
import HumansOfNewYork from './HumansOfNewYork';
import Newsletter from './Newsletter';
import Publication from './Publication';
import Podcast from './Podcast';
import './NonTechProjects.css';

const NonTechProjects = () => {
    const [project, setProject] = useState('Publication: "Closet and Headlines"');

    return ( 
    <>
    <h1>Non-Tech Projects</h1>
    {/* <h3>Love this much more tbh!</h3> */}

    <HStack spacing={3} overflowX="scroll" whiteSpace="nowrap" mt={5} mb={12}>
        <Button 
            variant='outline'
            colorScheme='black'
            minWidth="fit-content" 
            onClick={e => setProject(e.target.textContent)}
            className={`nontech ${project === 'Publication: "Closet and Headlines"' ? 'selected' : ''}`}
        >
            Publication: "Closet and Headlines"
        </Button>
        <Button 
            variant='outline'
            colorScheme='black'
            minWidth="fit-content" 
            onClick={e => setProject(e.target.textContent)}
            className={`nontech ${project === 'Viet Humans of New York' ? 'selected' : ''}`}
        >
            Viet Humans of New York
        </Button>
        <Button 
            variant='outline'
            colorScheme='black'
            minWidth="fit-content" 
            onClick={e => setProject(e.target.textContent)}
            className={`nontech ${project === 'Newsletter: Bytes of Growth' ? 'selected' : ''}`}
        >
            Newsletter: Bytes of Growth
        </Button>
        <Button 
            variant='outline'
            colorScheme='black'
            minWidth="fit-content" 
            onClick={e => setProject(e.target.textContent)}
            className={`nontech ${project === 'Podcast: "When Do Cnners Sleep?"' ? 'selected' : ''}`}
        >
            Podcast: "When Do Cnners Sleep?"
        </Button>
    </HStack>

    {(project === "Viet Humans of New York" && <HumansOfNewYork/>)}
    {(project === "Newsletter: Bytes of Growth" && <Newsletter/>)}
    {(project === 'Publication: "Closet and Headlines"' && <Publication/>)}
    {(project === 'Podcast: "When Do Cnners Sleep?"' && <Podcast/>)}


    </> );
}
 
export default NonTechProjects;