import Link from 'next/link';
import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Flex,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { FaSun, FaMoon, FaCartPlus } from 'react-icons/fa';
import { AppbarConstants } from '@/constants/Appbar';
import { useAuth } from '@/hooks/useAuth';
import { useRef } from 'react';

import { ___drawer } from './___drawer';

export { __menu };

function ___isLoggedInLinks({ isLoggedIn }: { isLoggedIn: boolean | undefined }) {
  const { _LinksLoggedIn, _LinksGuest } = AppbarConstants;

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    window.location.reload();
  };

  if (isLoggedIn) {
    return (
      <>
        {_LinksLoggedIn.map((props, index) =>
          props.text !== 'Logout' ? (
            <Link href={props.href} key={index}>
              <MenuItem icon={props.icon}>{props.text}</MenuItem>
            </Link>
          ) : (
            <MenuItem icon={props.icon} onClick={handleLogout} key={index}>
              {props.text}
            </MenuItem>
          ),
        )}
      </>
    );
  } else {
    return (
      <>
        {_LinksGuest.map((props, index) => (
          <Link href={props.href} key={index}>
            <MenuItem icon={props.icon}>{props.text}</MenuItem>
          </Link>
        ))}
      </>
    );
  }
}

function __menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loggedIn } = useAuth();
  const btnRef = useRef(null);

  return (
    <Menu>
      <Button variant={'ghost'} ref={btnRef} onClick={onOpen}>
        <FaCartPlus size={'2em'} />
      </Button>

      <___drawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />

      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        <Avatar size={'sm'} />
      </MenuButton>

      <MenuList>
        <MenuItem isDisabled>Hello, {loggedIn ? localStorage.getItem('email') : 'guest'}</MenuItem>
        <___isLoggedInLinks isLoggedIn={loggedIn} />
        <MenuDivider />

        <Flex justifyContent={'space-around'} alignItems={'center'} mx={2}>
          <Text as={'h1'}>
            Toggle {colorMode === 'light' ? <span>dark</span> : <span>light</span>} mode
          </Text>
          <Button onClick={toggleColorMode} rounded={'xl'} size={'sm'}>
            {colorMode === 'light' ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </MenuList>
    </Menu>
  );
}
