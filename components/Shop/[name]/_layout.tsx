import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  IconButton,
  Text,
  Button,
  Divider,
  useColorModeValue,
  Center,
  Select,
} from '@chakra-ui/react';
import { FaGavel, FaCartPlus, FaHeart } from 'react-icons/fa';

import { Product } from '@/lib/product';

export { _productshoplayout };

function _productshoplayout(props: Product) {
  const handleAddToCart = (id: string) => {
    let cartItems: any[] = [];

    if (localStorage.getItem('cartItems') === null) {
      cartItems.push(id);
    } else {
      cartItems = [localStorage.getItem('cartItems'), id];
    }

    localStorage.setItem('cartItems', cartItems.join(','));
  };

  return (
    <Box overflow={'hidden'} mt={24} mx={{ base: 0, md: 12 }} mb={12}>
      <Container maxW={'8xl'}>
        <Flex
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          {' '}
          <Image
            alt={'photo'}
            w={{
              base: 'full',
              lg: '50%',
            }}
            h={{
              base: '64',
              lg: 'auto',
            }}
            objectFit={'cover'}
            objectPosition={'center'}
            rounded={'2xl'}
            src={props.image}
          />
          <Box
            mx={12}
            mt={{ base: '12', lg: '0' }}
            display={'flex'}
            flexDirection={'column'}
            pt={2}
            experimental_spaceY={4}
          >
            <Text as={'p'} fontSize={14}>
              {props.category}
            </Text>
            <Text as={'h1'} fontSize={24} fontWeight={'bold'}>
              {props.name}
            </Text>
            <Text as={'p'} fontSize={18}>
              {props.description}
            </Text>

            <HStack justifyContent={'space-between'}>
              <HStack gap={{ base: 0, md: 4 }}>
                <Text as={'h4'} fontWeight={'semibold'}>
                  Color
                </Text>
                <IconButton aria-label={'color-white'} rounded={'full'}>
                  <FaGavel />
                </IconButton>
                <IconButton aria-label={'color-white'} rounded={'full'}>
                  <FaGavel />
                </IconButton>
                <IconButton aria-label={'color-white'} rounded={'full'}>
                  <FaGavel />
                </IconButton>
              </HStack>
              <Select placeholder='Size' maxW={120}>
                {props.sizes?.map((value, iIdx) => (
                  <option key={iIdx} value={value.toString()}>
                    {value}
                  </option>
                ))}
              </Select>
            </HStack>

            <Divider />

            <HStack justifyContent={'space-between'} pt={{ base: 2, md: 8 }}>
              <Text as={'h1'} fontWeight={'black'} fontSize={24}>
                {props.price}
              </Text>

              <HStack gap={2}>
                <Button
                  rightIcon={<FaCartPlus />}
                  colorScheme={'purple'}
                  onClick={() => handleAddToCart(props.id)}
                >
                  Add to cart
                </Button>
                <IconButton
                  rounded={'full'}
                  aria-label={'add to favorites'}
                  colorScheme={'blue'}
                  bgColor='blue.400'
                  _dark={{backgroundColor: 'blue.500'}}
                >
                  <FaHeart />
                </IconButton>
              </HStack>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
