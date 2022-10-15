import { _layout } from './_layout';
import { HomeConstants } from '@/constants/Home';

export { _categories };

function _categories() {
  const { CategoriesConstants } = HomeConstants;

  return <_layout _componentLayout={CategoriesConstants} />;
}
