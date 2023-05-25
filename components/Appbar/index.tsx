import {
  Box,
  Collapse,
  Center,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

import { _start } from './_start';
import { _end } from './_end';
import { _mobile } from './_mobile';

export { Appbar };

const Appbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg='white'
      _dark={{bg: 'gray.800', borderColor: 'gray.900'}}
      px={4}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor='gray.200'
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          aria-label={'Open menu'}
          bgColor='gray.100'
          _dark={{backgroundColor: 'gray.600'}}
          size={'md'}
          icon={<Center>{isOpen ? <CgClose /> : <HiMenu />}</Center>}
          onClick={isOpen ? onClose : onOpen}
          display={{ md: 'none' }}
        />

        <_start title={'sneakers'} />
        <_end />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <_mobile />
      </Collapse>
    </Box>
  );
};
