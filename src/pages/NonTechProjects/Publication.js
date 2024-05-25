import { GridItem, Grid, Box, Flex, Text } from "@chakra-ui/react";

const Publication = () => {
  return (
    <>
      <Flex justify="center" align="center" pb={6}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" maxW="800px" color="#75754A">
          I love studying queerness and believe that a queer perspective has the power to deconstruct the norms we currently hold. So I write about it.
        </Text>
      </Flex>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 2fr" }}
        gap={8}
        // px={4}
        pb={8}
      >
        <GridItem>
          <Box
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              From the Closet to the Headlines: Language, Media, and Queer Identity
            </Text>
            <Text fontSize="sm">Fordham Undergraduate Research Journal</Text>
            <Text fontSize="sm">page: 40</Text>
          </Box>

        </GridItem>
        <GridItem>
          <Box 
            bg="white" 
            p={6} 
            borderRadius="md" 
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
            >
            <Text fontSize="md" fontWeight="bold" mb={4}>
              Abstract
            </Text>
            <Text fontSize="sm">
              This article examines how language in media perpetuates the marginalization of the LGBTQIA+ community, analyzing four New York Times articles through the lenses of Eve Kosofky Sedgwick's The Epistemology of the Closet and Barrie Thorne's Gender Play. Despite progressive intentions, subtle language nuances contribute to societal biases. The study highlights the influence of power dynamics, hierarchy, privacy, privilege, and politics performed in media discourse on queer individuals. Advocating for reframing discussions, the article underscores the need for inclusive narratives in the pursuit of LGBTQIA+ equality.
            </Text>
          </Box>
        </GridItem>
      </Grid>

      <iframe 
        title="My substack posts"
        src="https://drive.google.com/file/d/1BLB1Uj5wOSX6JINQfXGGH4fY8hJFHK0_/preview#page=2" 
        width="100%" height="900px" frameborder="0" allow="autoplay"></iframe>
    </>
  );
};

export default Publication;