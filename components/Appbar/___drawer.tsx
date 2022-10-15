import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  DrawerHeader,
  Button,
} from '@chakra-ui/react';
import type { MutableRefObject } from 'react';

import { useContext } from 'react';
import { ProductContext } from '@/lib/product';

export { ___drawer };

type Props = {
  btnRef: MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};

function ___drawer({ btnRef, isOpen, onClose }: Props) {
  const { data } = useContext(ProductContext);

  let cartItems: string[] | undefined = [];
  if (typeof window !== 'undefined') {
    cartItems = localStorage.getItem('cartItems')?.split(',');
  }

  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your shopping cart</DrawerHeader>
        <DrawerBody>
          {cartItems?.map((item) => (
            <p>{item}</p>
          ))}
          {JSON.stringify(data, null, 2)}
        </DrawerBody>
        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue'>To checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
