import Adjustment from '@assets/icons/adjustments.svg?react';
import ChartPie from '@assets/icons/chart_pie.svg?react';
import ClipboardList from '@assets/icons/clipboard_list.svg?react';
import Cog from '@assets/icons/cog.svg?react';
import Collection from '@assets/icons/collection.svg?react';
import Document from '@assets/icons/document_report.svg?react';
import Globe from '@assets/icons/globe.svg?react';
import InboxIn from '@assets/icons/inbox_in.svg?react';
import LockClosed from '@assets/icons/lock_closed.svg?react';
import Bag from '@assets/icons/shopping_bag.svg?react';
import Support from '@assets/icons/support.svg?react';
import type { MenuItem } from '@components/SidebarContent/SidebarContent.types';
import type { MenuIcon } from '@models';

import { ROUTE_PATH } from './routeConstant';

export const MENU_DATA_1: MenuItem[] = [
    {
        id: '1',
        title: 'Overview',
        icon: ChartPie,
        to: ROUTE_PATH.OVERVIEW,
    },
    {
        id: '2',
        title: 'Pages',
        icon: Document,
        children: [
            { id: '21', title: 'Product List', to: ROUTE_PATH.PRODUCT_LIST },
            { id: '22', title: 'Billing', to: ROUTE_PATH.BILLING },
            { id: '23', title: 'Invoice', to: ROUTE_PATH.INVOICE },
        ],
    },
    {
        id: '3',
        title: 'Sales',
        icon: Bag,
        children: [
            { id: '31', title: 'Product List', to: ROUTE_PATH.PRODUCT_LIST },
            { id: '32', title: 'Billing', to: ROUTE_PATH.BILLING },
            { id: '33', title: 'Invoice', to: ROUTE_PATH.INVOICE },
        ],
    },
    {
        id: '4',
        title: 'Messages',
        icon: InboxIn,
        count: 1,
        to: ROUTE_PATH.MESSAGES,
    },
    {
        id: '5',
        title: 'Authentication',
        icon: LockClosed,
        children: [
            { id: '51', title: 'Login', to: ROUTE_PATH.LOGIN },
            { id: '52', title: 'Register', to: ROUTE_PATH.SIGN_UP },
        ],
    },
];

export const MENU_DATA_2: MenuItem[] = [
    {
        id: '1',
        title: 'Docs',
        icon: ClipboardList,
        to: ROUTE_PATH.DOCS,
    },
    {
        id: '2',
        title: 'Components',
        icon: Collection,
        to: ROUTE_PATH.COMPONENTS,
    },
    {
        id: '1',
        title: 'Help',
        icon: Support,
        to: ROUTE_PATH.HELP,
    },
];

export const MENU_ICONS: MenuIcon[] = [
    {
        id: '1',
        label: 'Go to adjustments',
        icon: Adjustment,
        to: ROUTE_PATH.ADJUSTMENTS,
    },
    {
        id: '2',
        label: 'Go to global',
        icon: Globe,
        to: ROUTE_PATH.GLOBAL,
    },
    {
        id: '3',
        label: 'Go to settings',
        icon: Cog,
        to: ROUTE_PATH.SETTINGS,
    },
];
