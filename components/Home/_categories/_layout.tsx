import { Container, Flex } from '@chakra-ui/react';
import { _component } from './_component';

export { _layout };

type Props = {
  _componentLayout: Array<{
    category: string;
    title: string;
    description: string;
    learnMore: string;
  }>;
};

function _layout({ _componentLayout }: Props) {
  return (
    <Container
      maxWidth={{
        base: '4xl',
        xl: '8xl',
      }}
      my={12}
    >
      <Flex
        justifyContent={{
          base: 'center',
          xl: 'space-between',
        }}
        display={{
          base: 'flex-col',
          xl: 'flex',
        }}
        experimental_spaceY={{
          base: 4,
          xl: 0,
        }}
        gap={{
          base: 0,
          xl: 18,
        }}
      >
        {_componentLayout.map((category, index) => (
          <_component key={index} {...category} />
        ))}
      </Flex>
    </Container>
  );
}
