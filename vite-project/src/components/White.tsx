import {AbsoluteCenter, Box, Button, Container, Text} from '@chakra-ui/react'
const White =()=>{
    return(
        <Box width={{ base:"100%", sm:"100%", md:'50%'}} bg='white' h='500px' position='relative' minWidth='360px'>
            <AbsoluteCenter axis='both'>
                <Container mb='10' minWidth='370px'>
                    <Text fontWeight='bold' pb='5' fontSize='3xl'>Feature that is amazing.</Text>
                    
                    <Text pb='5' fontSize='2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                    excepturi. Excepturi earum quidem pariatur ullam.</Text>

                    <Button h='60px' borderColor='black' width={{base:"100%",sm:"100%", md:"40%"}} 
                    border='1px' bg='white'>Learn More</Button>
                </Container>
            </AbsoluteCenter>
        </Box>
    )
}
export default White;