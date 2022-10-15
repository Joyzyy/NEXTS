import { ReactNode } from 'react';
import { HStack, Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react';

export { _component };

type Props = {
  name: string[];
  children: ReactNode[];
};

function _component(props: Props) {
  return (
    <Tabs
      size={{ base: 'sm', md: 'md' }}
      align={'center'}
      variant={'solid-rounded'}
      colorScheme={'blue'}
      isLazy
    >
      <TabList>
        <HStack gap={{ base: 0, md: 24 }} mb={4}>
          {props.name.map((item, index) => (
            <Tab key={index}>{item}</Tab>
          ))}
        </HStack>
      </TabList>

      <TabPanels>
        {props.children.map((item, index) => (
          <TabPanel key={index}>{item}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
