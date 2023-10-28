import {Grid, Stack, Heading, Text, Card, CardBody, Image} from '@chakra-ui/react'

const Card1=()=>{
return(

    <Card minWidth='100px'>
    <CardBody>
    <Image
      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'"
      alt='Green double couch with wooden legs'
    />

    <Stack>
      <Heading pb='5' size='sm'>Living room Sofa</Heading>
      <Text pb='5'>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text pb='5' color='black' fontSize='1xl'>
        26-10-2025
      </Text>
    </Stack>
  </CardBody>

</Card>
)
}



const DisplayCards = () => {
    const cardData = Array.from({ length: 8 });
  
    return (
      <Grid columnGap='16px' rowGap='48px' templateColumns={{md:"repeat(3, 1fr)",sm:"repeat(1, 1fr)"}}>
        {cardData.map((_, index) => (
          <Card1 key={index} />
        ))}
      </Grid>
    );
  };
  
  

export default DisplayCards;
