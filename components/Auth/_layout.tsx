import {
  Center,
  Stack,
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export { _layout };

type Props = {
  title: string;
  inputs: Array<{
    icon: JSX.Element;
    name: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  loading?: boolean;
};

function _layout(props: Props) {
  return (
    <Center>
      <Box
        bgColor='white'
        _dark={{backgroundColor: 'bg-gray-900'}}
        mt={{
          base: '10',
          md: '48',
        }}
      >
        <Flex
          direction={'column'}
          alignItems={'center'}
          justify={'center'}
          px={6}
          py={{
            base: 8,
            lg: 0,
          }}
          mx={'auto'}
          h={{ base: undefined, md: 'max-content' }}
        >
          <Flex
            alignItems={'center'}
            mb={6}
            fontWeight={'semibold'}
            textColor='gray.900'
            _dark={{textColor: 'white'}}
          >
            <Image
              src={'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'}
              alt={'logo'}
              w={8}
              h={8}
              mr={2}
            />
            <Box>NEXTS</Box>
          </Flex>
        </Flex>

        <Box
          w={{ base: 'max-content', md: 'container.sm' }}
          bgColor='white'
          _dark={{backgroundColor: 'gray.800'}}
          rounded={'lg'}
          shadow={'lg'}
          p={{ base: 4, xl: 0 }}
        >
          <Box p={{ base: 6, sm: 8 }} experimental_spaceY={{ base: 4, md: 6 }}>
            <Text
              as={'h1'}
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight={'bold'}
              textColor='gray.900'
              _dark={{textColor: 'white'}}
            >
              {props.title}
            </Text>

            <form
              onSubmit={(e) => {
                props.onSubmit(e);
              }}
            >
              <Stack>
                {props.inputs.map((input, index) => (
                  <InputGroup size={'md'} key={index}>
                    <InputLeftAddon>{input.icon}</InputLeftAddon>
                    <Input
                      name={input.name}
                      placeholder={input.placeholder}
                      type={input.type}
                      bgColor='gray.50'
                      _dark={{
                        backgroundColor: 'gray.700',
                        borderColor: 'gray.600',
                        textColor: 'white'
                      }}
                      rounded={'md'}
                      borderColor='gray.200'
                      textColor='gray.900'
                      _placeholder={{
                        textColor: 'gray.500',
                        _dark: {textColor: 'gray.400'}
                      }}
                      onChange={input.onChange}
                    />
                  </InputGroup>
                ))}

                {props.error && (
                  <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle mr={2}>Error!</AlertTitle>
                    <AlertDescription>{props.error}</AlertDescription>
                  </Alert>
                )}

                <Button type={'submit'} isLoading={props.loading}>
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
