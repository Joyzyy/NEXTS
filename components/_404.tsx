import { useRouter } from 'next/router';
import { Flex, Box, Text } from '@chakra-ui/react';

export { _404 };

function _404() {
  const { pathname } = useRouter();

  return (
    <Flex justifyContent={'center'} alignItems={'center'} height={'100vh'}>
      <Box textAlign={'center'}>
        <Text fontSize={'6xl'}>404</Text>
        <Text fontSize={'2xl'}>Page not found: {pathname}</Text>
      </Box>
    </Flex>
  );
}
