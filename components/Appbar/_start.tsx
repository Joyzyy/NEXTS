import { Box, HStack, Text } from '@chakra-ui/react';
import { __links } from './__links';

export { _start };

function _start({ title = 'default title' }: { title: string }) {
  return (
    <HStack spacing={8} alignItems={'center'}>
      <Box as={Text} fontSize={'2xl'} fontWeight={'bold'}>
        {title}
      </Box>

      <HStack
        as={'nav'}
        spacing={4}
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <__links />
      </HStack>
    </HStack>
  );
}
