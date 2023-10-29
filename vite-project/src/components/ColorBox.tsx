import {Grid, GridItem,} from '@chakra-ui/react'

        const Color = () => {     
          return (
            <Grid 
            templateColumns={{md:"repeat(4, 1fr)",sm:"repeat(2, 1fr)",
             base:"repeat(2,1fr)"}} gap={6} p={4}>
            <GridItem h="8" width="100%" bg="tomato">1</GridItem>
            <GridItem h="8" width="100%" bg="Purple">2</GridItem>
            <GridItem h="8" width="100%" bg="Pink">3</GridItem>
            <GridItem h="8" width="100%" bg="Blue">4</GridItem>
            <GridItem h="8" width="100%" bg="Green">5</GridItem>
            <GridItem h="8" width="100%" bg="Teal">6</GridItem>
            <GridItem h="8" width="100%" bg="Yellow">7</GridItem>
            <GridItem h="8" width="100%" bg="Red">8</GridItem>
            </Grid>
          );
        };
        
        export default Color;
        