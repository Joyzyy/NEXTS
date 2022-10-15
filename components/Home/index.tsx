import { _hero } from './_hero';
import { _tabs } from './_tabs';
import { _categories } from './_categories';

export { HomeC };

const HomeC: React.FC = () => {
  return (
    <>
      <_hero />
      <_tabs />
      <_categories />
    </>
  );
};
