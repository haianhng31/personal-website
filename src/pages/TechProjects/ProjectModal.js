import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image, Box, Stack,
    useMediaQuery
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const ProjectModal = ({isOpen, onClose, project}) => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        onClose();
        navigate('/contact')
    }

    const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

    let modalSize 
    if (isSmallerThan480) { modalSize = 'full' }
    else { modalSize = '3xl' }

    return ( 
        <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                <h1 style={{ marginBottom: '1px'}}>{project.projectName}</h1>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <h3 style={{ fontSize: '17px', marginTop: '0px'}}>{project.projectDescription}</h3>
                <Image
                    w="100%"
                    h="400px"
                    borderRadius={10}
                    objectFit="cover"
                    src={project.projectImg}
                    alt={project.projectName}/>
                <h4>About</h4>
                <h5>{project.fullDescription}</h5>
                <h4>Technologies</h4>
                <Stack direction={['column', 'row']} spacing="10px" bg='transparent'>
                    {project.techStacks && project.techStacks.map((techStack, idx) => (
                        <Box key={idx} borderRadius={10} bg="#75754A" paddingY={2} paddingX={5}>
                            <h5 style={{ fontWeight: '500', fontSize: '15px', color: 'white', backgroundColor: 'transparent' }}>{techStack}</h5>
                        </Box>
                    ))}
                </Stack>
                <h4>GitHub</h4>
                <a href={project.githubLink}>{project.githubLink}</a>
            </ModalBody>

            <ModalFooter display='flex' alignItems='center' justifyContent='center'>
                <Button mr={3} onClick={handleClick}>
                    Contact me to create something similar and greater
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
     );
}
 
export default ProjectModal;