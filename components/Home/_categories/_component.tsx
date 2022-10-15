import Link from 'next/link';
import { Box, Flex, Stack, Text, Button, useColorModeValue } from '@chakra-ui/react';

export { _component };

type Props = {
  category: string;
  title: string;
  description: string;
  learnMore: string;
};

function _component(props: Props) {
  return (
    <Box
      backgroundColor={useColorModeValue('blackAlpha.100', 'blackAlpha.300')}
      rounded={'xl'}
      minWidth={{
        base: '100%',
        md: '25%',
      }}
    >
      <Flex justifyContent={'center'} alignItems={'center'} py={12}>
        <Stack alignItems={'center'}>
          <Text
            as={'h3'}
            fontWeight={'semibold'}
            fontSize={12}
            colorScheme={'whiteAlpha'}
            color={useColorModeValue('blackAlpha.900', 'whiteAlpha.500')}
          >
            {props.category}
          </Text>
          <Text as={'h4'} fontWeight={'bold'} fontSize={20}>
            {props.title}
          </Text>
          <Text as={'h5'} fontSize={14} px={12}>
            {props.description}
          </Text>
          <Link href={props.learnMore}>
            <Button
              variant={'ghost'}
              colorScheme={'blue'}
              color={useColorModeValue('blue.900', 'blue.400')}
            >
              Learn more →
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}
