import { AbsoluteCenter, Box, Container, Image } from "@chakra-ui/react";

const Black =()=>{
    return(
        <Box width={{base:"100%",sm:"100%", md:"50%"}} bg="black" h="600px" position='relative'>
            <AbsoluteCenter axis='both'>
                <Container borderRadius='10' h='18rem' w='16rem' bg='white' position='relative'>
                <Image src="src/assets/no3_logo1.svg" h='18rem' w='14rem'/>
                </Container>
            </AbsoluteCenter>
        </Box>
    )
}
export default Black;

