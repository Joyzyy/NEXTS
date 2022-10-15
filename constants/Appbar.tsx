import {
  HiHome,
  HiShoppingCart,
  HiSpeakerphone,
  HiLogout,
  HiUserAdd,
  HiLogin,
} from 'react-icons/hi';
import { MdSpaceDashboard } from 'react-icons/md';

const _Links = [
  {
    text: 'Home',
    href: '/',
    icon: <HiHome size={'1.25em'} />,
  },
  {
    text: 'Shop',
    href: '/shop',
    icon: <HiShoppingCart size={'1.25em'} />,
  },
  {
    text: 'Contact',
    href: '/about',
    icon: <HiSpeakerphone size={'1.25em'} />,
  },
];

const _LinksLoggedIn = [
  {
    text: 'Dashboard',
    href: '/dashboard',
    icon: <MdSpaceDashboard size={'1.25em'} />,
  },
  {
    text: 'Logout',
    href: '/logout',
    icon: <HiLogout size={'1.25em'} />,
  },
];

const _LinksGuest = [
  {
    text: 'Login',
    href: '/login',
    icon: <HiLogin size={'1.25em'} />,
  },
  {
    text: 'Register',
    href: '/register',
    icon: <HiUserAdd size={'1.25em'} />,
  },
];

export const AppbarConstants = {
  _Links,
  _LinksLoggedIn,
  _LinksGuest,
};
