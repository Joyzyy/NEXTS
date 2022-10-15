import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { AppbarConstants } from '@/constants/Appbar';

export { __links };

function __links() {
  const { _Links } = AppbarConstants;

  return (
    <>
      {_Links.map((props, index) => (
        <Link key={index} href={props.href}>
          <Button variant={'ghost'} size={'sm'} leftIcon={props.icon}>
            {props.text}
          </Button>
        </Link>
      ))}
    </>
  );
}
