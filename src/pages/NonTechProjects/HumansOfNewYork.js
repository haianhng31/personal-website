import { Center, Grid, GridItem, Image, Box, useMediaQuery } from "@chakra-ui/react";

const HumansOfNewYork = () => {
    const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');
    let gridTemplateRows
    if (isSmallerThan480) { gridTemplateRows = '1fr' }
    else { gridTemplateRows = '1fr 60%' }
    
    return (
    <>
    <p style={{fontSize: 16, marginLeft: 3}}><a href="https://www.instagram.com/viet.humansofny/">@viet.humansofny</a> is an Instagram project highlighting Vietnamese stories and voices in NYC. Through interviews and photos, we explore the experiences of both immigrants and US-born Vietnamese, fostering community and cultural insight. Follow for stories that celebrate heritage, challenge stereotypes, and promote unity.</p>
    
    <Grid gridTemplateColumns={gridTemplateRows} paddingX={3} gap="10" marginY={10}>
        <GridItem>
            <Box w="100%" h="100%" p={2} bg="#e47d1c" borderRadius={10} >
                <Image
                    src={"https://res.cloudinary.com/di6doert4/image/upload/v1716294265/Personal-Website/VHNY/IMG_5111_lws9m5.jpg"}
                    alt="vhny instagram page"
                    objectFit="cover"
                    w="100%"
                    h="400px"
                    borderRadius={10}
                />
            </Box>
        </GridItem>
        <GridItem>
            <h4 style={{marginBottom: 20}}>My role as the Project Lead:</h4>
            <ul style={{padding: 10}}>
                <li><strong>Team Leadership:</strong> Led a team of five, fostering collaboration and guiding project direction.</li>
                <li><strong>Networking:</strong> Reached out to Vietnamese individuals, built connections, and arranged meetings.</li>
                <li><strong>Task Management:</strong> Ensured everyone completed their tasks, including interview prep, photo editing, and recording.</li>
                <li><strong>Coordination:</strong> Managed schedules and resources to keep the project on track.</li>
                <li><strong>Quality Control:</strong> Maintained high standards for all project outputs.</li>
            </ul>
        </GridItem>
    </Grid>

    <Center><h4 style={{marginBottom: 20, marginTop: 15}}>Some photos from the project</h4></Center>
    <Grid templateColumns={gridTemplateRows}>
        <GridItem w="100%">
            <Image
                src={"https://res.cloudinary.com/di6doert4/image/upload/v1716283729/Personal-Website/VHNY/9H5A2282-An_Nguyen-edit_n9x2ou.jpg"}
                alt="vhny photo"
                objectFit="cover"
                w="100%"
                h="auto"
                p="2"
            />
            <Image
                src={"https://res.cloudinary.com/di6doert4/image/upload/v1716284106/Personal-Website/VHNY/9H5A2999_xt9kpg.jpg"}
                alt="vhny photo"
                objectFit="cover"
                w="100%"
                h="auto"
                p="2"
            />
            <Image
                src={"https://res.cloudinary.com/di6doert4/image/upload/v1716283663/Personal-Website/VHNY/9H5A2977_gs4okb.jpg"}
                alt="vhny photo"
                objectFit="cover"
                w="100%"
                h="auto"
                p="2"
            />
        </GridItem>
        <GridItem w="100%">
            <Image
                src={"https://res.cloudinary.com/di6doert4/image/upload/v1716283665/Personal-Website/VHNY/DSC01917_ikvwk1.jpg"}
                alt="vhny photo"
                objectFit="cover"
                w="100%"
                h="auto"
                p="2"
            />
            <Image
                src={"https://res.cloudinary.com/di6doert4/image/upload/v1716283661/Personal-Website/VHNY/930727A9-D9E2-4AD7-97C6-0B381E5A6801_okbwss.jpg"}
                alt="vhny photo"
                objectFit="cover"
                w="100%"
                h="auto"
                p="2"
            />
            <Image
                src={"https://res.cloudinary.com/di6doert4/image/upload/v1716283663/Personal-Website/VHNY/Pic2_bdu5zh.jpg"}
                alt="vhny photo"
                objectFit="cover"
                w="100%"
                h="auto"
                p="2"
            />
            <Image
                src={"https://res.cloudinary.com/di6doert4/image/upload/v1716284194/Personal-Website/VHNY/9H5A3060_kawplg.jpg"}
                alt="vhny photo"
                objectFit="cover"
                w="100%"
                h="auto"
                p="2"
            />
        </GridItem>
    </Grid>
    </> );
}
 
export default HumansOfNewYork;