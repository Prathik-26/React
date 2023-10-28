
import { Flex } from '@chakra-ui/react'
import Black from '../components/Black';
import White from '../components/White';
import Black2 from '../components/Black2';

const P3=()=>{
    return(
        <Flex flexDirection={"row"} wrap='wrap'>
            <Black></Black>
            <White></White>
            
            <Flex flexDirection='row' w='100%' wrap='wrap-reverse'>
            <White></White>
            <Black2></Black2>
            </Flex>

            <Black ></Black>
            <White></White>
        </Flex>
    )
}
export default P3;