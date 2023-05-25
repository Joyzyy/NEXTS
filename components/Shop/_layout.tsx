import { Box, Center, Container, Grid, useColorModeValue } from '@chakra-ui/react';
import { Card } from '../Card';

export { _layout };

type Props = {
  layout_items: Array<{
    tabtype: string;
    category: string;
    image: string;
    sizes: number[];
    name: string;
    price: number;
  }>;
};

function _layout(props: Props) {
  return (
    <Box
      backgroundColor='white'
      _dark={{backgroundColor: 'gray.800', textColor: 'gray.200'}}
      minH={'100vh'}
      textColor='gray.600'
    >
      <Container maxWidth={'8xl'} px={5} py={24} mx={'auto'}>
        <Center>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={6}
          >
            {props.layout_items.map((items, index) => (
              <Card key={index} {...items} />
            ))}
          </Grid>
        </Center>
      </Container>
    </Box>
  );
}
