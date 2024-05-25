import { Box, Image, Stack, Center} from '@chakra-ui/react'

const Project = ({projectImg, projectName, projectDescription, techStacks}) => {
    return ( 
        <Box position="relative" w="100%" h="200" borderRadius={10} overflow="hidden" 
            boxShadow="0 5px 5px rgba(0, 0, 0, 0.25)" // Horizontal offset, vertical offset, blur radius, color
        >
            <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src={projectImg}
                alt={projectName}
            />

            <Box 
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0, 0, 0, 0.7)" // Optional: Adds a semi-transparent overlay for better text visibility
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center"
                textAlign="center"
                opacity="0"
                _hover={{
                    opacity: 1, // Show on hover
                }}
                transition="opacity 0.3s ease-in-out"
            >
                <h4 style={{ fontWeight: 'bold', fontSize: '20px', backgroundColor: 'transparent', color: 'white' }}>{projectName}</h4>
                <h5 style={{ 
                    backgroundColor: 'transparent',
                    fontSize: '15px', 
                    color: 'white', 
                    marginLeft: '15px', marginRight: '15px', marginBottom: '15px' }}>
                        {projectDescription}</h5>
                <Center bg='transparent'>
                    <Stack direction={['column', 'row']} spacing="10px" bg='transparent'>
                        {techStacks && techStacks.map((techStack, idx) => (
                            <Box key={idx} borderRadius={20} bg="rgba(0, 0, 0, 0.5)" padding={1.5}>
                                <h5 style={{ fontSize: '9px', color: 'white', backgroundColor: 'transparent' }}>{techStack}</h5>
                            </Box>
                        ))}
                    </Stack>
                </Center>
            </Box>
        </Box>


     );
}
 
export default Project;