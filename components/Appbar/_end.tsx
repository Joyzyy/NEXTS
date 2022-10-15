import { HStack } from '@chakra-ui/react';

import { __search } from './__search';
import { __menu } from './__menu';

export { _end };

function _end() {
  return (
    <HStack gap={4}>
      <__search />
      <__menu />
    </HStack>
  );
}
