import { Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import Project from './Project';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import {projects} from '../../data';

const TechProjects = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectProject, setSelectProject] = useState(null)

    const handleClick = (project) => {
        setSelectProject(project);
        console.log(project);
        onOpen();
    }
    
    return (
    <>
    <h1>Tech Projects</h1>
    <h3>Where I spent most of my time these days...</h3>
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {projects && projects.map((project, idx) => (
            <GridItem key={idx} w='100%' h='200' onClick={()=>handleClick(project)}>
                <Project 
                    projectDescription={project.projectDescription} 
                    projectImg={project.projectImg} 
                    projectName={project.projectName} 
                    techStacks={project.techStacks}/>
            </GridItem>
        ))}
    </Grid>

    {isOpen && <ProjectModal isOpen={isOpen} onClose={onClose} project={selectProject}/>}
    {/* {isOpen && <ProjectDrawer isOpen={isOpen} onClose={onClose} project={selectProject}/>} */}
    </> );
}
 
export default TechProjects;