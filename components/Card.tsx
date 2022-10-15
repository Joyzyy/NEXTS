import Link from 'next/link';
import { Badge, Box, Text, Image, IconButton } from '@chakra-ui/react';
import { MdAddShoppingCart } from 'react-icons/md';

export { Card };

type Props = {
  tabtype: string;
  category: string;
  image: string;
  sizes: number[];
  name: string;
  price: number;
};

function Card(props: Props) {
  return (
    <Link href={`/shop/${props.name}`}>
      <Box
        maxW={'sm'}
        borderWidth={'1px'}
        borderRadius={'lg'}
        overflow={'hidden'}
        mx={14}
        cursor={'pointer'}
      >
        <Image src={props.image} alt={`${props.name} image`} width={'382px'} height={'382px'} />

        <Box p={6}>
          <Box display={'flex'} alignItems={'baseline'}>
            <Badge borderRadius={'fill'} px={2} colorScheme={'blue'}>
              {props.tabtype}
            </Badge>

            <Box
              color={'gray.500'}
              fontWeight={'semibold'}
              letterSpacing={'wide'}
              fontSize={'xs'}
              textTransform={'uppercase'}
              ml={2}
            >
              Sneakers &bull; {props.category}
            </Box>
          </Box>

          <Text fontWeight={'semibold'} mt={1} textAlign={'start'}>
            {props.name}
          </Text>

          <Text fontWeight={'semibold'} mt={1} textAlign={'start'}>
            Available sizes: {props.sizes.join(', ')}
          </Text>

          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={'sm'} fontWeight={'bold'}>
              ${props.price}
            </Text>

            <Link href={`/shop/${props.name}`}>
              <IconButton
                aria-label={'Add to cart'}
                icon={<MdAddShoppingCart />}
                size={'sm'}
                colorScheme={'blue'}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
