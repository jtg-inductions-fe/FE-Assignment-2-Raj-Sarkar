import Dribbble from '@assets/icons/dribble.svg?react';
import Facebook from '@assets/icons/facebook.svg?react';
import Github from '@assets/icons/github.svg?react';
import Twitter from '@assets/icons/nav_link.svg?react';
import type { MenuIcon } from '@models';

import { ROUTE_PATH } from './routeConstant';

export const FOOTER_ICONS: MenuIcon[] = [
    {
        id: 'facebook',
        icon: Facebook,
        label: 'facebook',
        to: ROUTE_PATH.FACEBOOK,
    },
    {
        id: 'twitter',
        icon: Twitter,
        label: 'twitter',
        to: ROUTE_PATH.TWITTER,
    },
    {
        id: 'github',
        icon: Github,
        label: 'github',
        to: ROUTE_PATH.GITHUB,
    },
    {
        id: 'dribbble',
        icon: Dribbble,
        label: 'dribbble',
        to: ROUTE_PATH.DRIBBBLE,
    },
];
