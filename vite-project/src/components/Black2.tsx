import { AbsoluteCenter, Box, Container, Image } from "@chakra-ui/react";

const Black2 =()=>{
    return(
        <Box width={{base:"100%",sm:"100%", md:"50%"}} bg="black" h="500px" position='relative' minWidth='360px'>
            <AbsoluteCenter axis='both'>
                <Container borderRadius='10' h='18rem' w='16rem' bg='#444444' position='relative'>
                    <Image src="src/assets/no3_logo2.svg" h='18rem' w='14rem'/>
                </Container>
            </AbsoluteCenter>
        </Box>
    )
}
export default Black2;
