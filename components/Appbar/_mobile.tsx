import { Box, Stack, Divider } from '@chakra-ui/react';
import { __links } from './__links';
import { __search } from './__search';

export { _mobile };

function _mobile() {
  return (
    <Box pb={4} display={{ md: 'none' }}>
      <Stack as={'nav'} spacing={4} justifyContent={'center'} alignItems={'center'}>
        <__links />
        <Divider />
        <Box maxW={200}>
          <__search mobile={true} />
        </Box>
      </Stack>
    </Box>
  );
}
