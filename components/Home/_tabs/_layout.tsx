import { Box, Center, Grid } from '@chakra-ui/react';
import { Card } from '@/components/Card';

export { _layout };

type Props = {
  tabsContent: Array<{
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    sizes: number[];
    tabtype: string;
  }>;
};

function _layout({ tabsContent }: Props) {
  return (
    <Box>
      <Center>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          rowGap={8}
        >
          {tabsContent?.map((props, index) => (
            <Card key={index} {...props} />
          ))}
        </Grid>
      </Center>
    </Box>
  );
}
