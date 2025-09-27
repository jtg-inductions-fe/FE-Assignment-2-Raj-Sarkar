import Dribbble from '@assets/icons/dribble.svg?react';
import Facebook from '@assets/icons/facebook.svg?react';
import Github from '@assets/icons/github.svg?react';
import Twitter from '@assets/icons/nav_link.svg?react';
import type { MenuIcon } from '@models';

import { EXTERNAL_ROUTE } from './route.constants';

export const FOOTER_ICONS: MenuIcon[] = [
    {
        id: 'facebook',
        icon: Facebook,
        label: 'facebook',
        to: EXTERNAL_ROUTE.FACEBOOK,
    },
    {
        id: 'twitter',
        icon: Twitter,
        label: 'twitter',
        to: EXTERNAL_ROUTE.TWITTER,
    },
    {
        id: 'github',
        icon: Github,
        label: 'github',
        to: EXTERNAL_ROUTE.GITHUB,
    },
    {
        id: 'dribbble',
        icon: Dribbble,
        label: 'dribbble',
        to: EXTERNAL_ROUTE.DRIBBBLE,
    },
];
