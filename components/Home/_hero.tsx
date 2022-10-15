import { useRef } from 'react';
import { Container, Stack, Heading, Text, Button, Image } from '@chakra-ui/react';
import { useIO } from '@/hooks/useIntersectionObserver';

export { _hero };

function _hero() {
  const containerRef = useRef(null);
  const { isVisible } = useIO(containerRef);

  return (
    <Container maxW={'5xl'} mt={4} ref={containerRef}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Shopping sneakers{' '}
          <Text as={'span'} color={'blue.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button px={6} colorScheme={'orange'} bg={'blue.400'} _hover={{ bg: 'blue.500' }}>
            Get started
          </Button>
          <Button px={6}>Learn more</Button>
        </Stack>
      </Stack>
    </Container>
  );
}
