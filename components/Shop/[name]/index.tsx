import { useContext } from 'react';
import { ProductContextIndividual } from '@/lib/product';

import { _productshoplayout } from './_layout';

export { ProductName };

const ProductName: React.FC = () => {
  const { data } = useContext(ProductContextIndividual);

  return <_productshoplayout {...data} />;
};
