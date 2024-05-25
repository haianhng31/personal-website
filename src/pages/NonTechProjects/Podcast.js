import { UnorderedList, ListItem, Image, Box, Text} from "@chakra-ui/react";

const Podcast = () => {
    return ( 
        <>
        <Box position="relative" w="100%" h="400px" mb={10} borderRadius={10} overflow="hidden" 
            boxShadow="0 5px 5px rgba(0, 0, 0, 0.25)" // Horizontal offset, vertical offset, blur radius, color
        >
            <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src='https://res.cloudinary.com/di6doert4/image/upload/v1716287737/Personal-Website/IMG_5051_wb5jth.jpg'
                alt="me and friends"
            />

            <Box 
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0, 0, 0, 0.5)" // Optional: Adds a semi-transparent overlay for better text visibility
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
                <Text p={20} color="white">If you don't know yet, I love people and talking to them. It's always nice to hear stories from lives different from mine and learn from them. It reminds me how interesting people are and how life isn't limited to a specific set of experiences.</Text>

            </Box>
        </Box>

        <h3>So yes, I founded this podcast: "When Do CNNers Sleep?"</h3>
        <p>Going to college, I'm no longer managing the podcast but leaving it for my underclassmen. It's still pretty damn cool!</p>
        <p>Now it has:</p>
        <UnorderedList spacing={2} mb={8}>
         <ListItem>More than 60 episodes</ListItem>
         <ListItem>Thousands of listenings</ListItem>
         <ListItem>Even interviewed a celeb (yes I did that episode)</ListItem>
       </UnorderedList>
        <iframe 
            // style="border-radius:12px" 
            src="https://open.spotify.com/embed/show/1YVabrodE065eLb3zJQ24n?utm_source=generator" 
            width="100%" height="352" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
        </>
     );
}
 
export default Podcast;


// import { Box, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

// const Podcast = () => {
//   return (
//     <Box maxW="800px" mx="auto" py={8}>
//       <Text fontSize="lg" lineHeight="tall" mb={6}>
//         If you don't know yet, I love people and I love talking to people. It's always nice to hear stories from a life that isn't mine and to learn from them. It's also nice to remember how people can be so interesting and how life isn't limited to a specific set of forms.
//       </Text>

//       <Heading as="h4" size="md" mb={4}>
//         So yes, I founded this podcast
//       </Heading>
//       <Text fontSize="lg" lineHeight="tall" mb={6}>
//         Going to college, I'm no longer managing the podcast. But it's still pretty damn cool. It has become a legacy for my school and (hopefully) even the voice or face of the students.
//       </Text>

//       <Text fontSize="lg" lineHeight="tall" mb={4}>
//         Now it has:
//       </Text>
//       <UnorderedList spacing={2} mb={8}>
//         <ListItem>More than 60 episodes</ListItem>
//         <ListItem>Thousands of listenings</ListItem>
//         <ListItem>Even interviewed a celeb (yes I did that episode)</ListItem>
//       </UnorderedList>

//       <iframe 
//             // style="border-radius:12px" 
//             src="https://open.spotify.com/embed/show/1YVabrodE065eLb3zJQ24n?utm_source=generator" 
//             width="100%" height="352" 
//             allowfullscreen="" 
//             allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
//             loading="lazy">
//         </iframe>
//     </Box>
//   );
// };

// export default Podcast;