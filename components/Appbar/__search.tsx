import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { HiSearch } from 'react-icons/hi';
import { motion } from 'framer-motion';

export { __search };

function __search({ mobile }: { mobile?: boolean }) {
  return (
    <InputGroup
      size={'sm'}
      display={{
        base: mobile ? 'hidden' : 'none',
        md: mobile ? 'none' : 'flex',
      }}
      as={motion.div}
      whileHover={{ scale: 1.1 }}
    >
      <InputLeftElement pointerEvents={'none'}>
        <HiSearch />
      </InputLeftElement>

      <Input placeholder={'Search'} rounded={'full'} htmlSize={12} />
    </InputGroup>
  );
}
