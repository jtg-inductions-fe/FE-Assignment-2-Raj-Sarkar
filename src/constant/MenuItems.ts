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
import { MenuIcon, MenuItem } from '@types';

export const menuData1: MenuItem[] = [
    {
        id: '1',
        title: 'Overview',
        icon: ChartPie,
        to: '/overview',
    },
    {
        id: '2',
        title: 'Pages',
        icon: Document,
        children: [
            { id: '2-1', title: 'Product List', to: '/product-list' },
            { id: '2-2', title: 'Billing', to: '/billing' },
            { id: '2-3', title: 'Invoice', to: '/invoice' },
        ],
    },
    {
        id: '3',
        title: 'Sales',
        icon: Bag,
        children: [
            { id: '3-1', title: 'Product List', to: '/product-list' },
            { id: '3-2', title: 'Billing', to: '/billing' },
            { id: '3-3', title: 'Invoice', to: '/invoice' },
        ],
    },
    {
        id: '4',
        title: 'Messages',
        icon: InboxIn,
        count: 1,
        to: '/messages',
    },
    {
        id: '5',
        title: 'Authentication',
        icon: LockClosed,
        children: [
            { id: '5-1', title: 'Login', to: '/login' },
            { id: '5-2', title: 'Register', to: '/signup' },
        ],
    },
];

export const MenuData2: MenuItem[] = [
    {
        id: '1',
        title: 'Docs',
        icon: ClipboardList,
        to: '/docs',
    },
    {
        id: '2',
        title: 'Components',
        icon: Collection,
        to: '/components',
    },
    {
        id: '1',
        title: 'Help',
        icon: Support,
        to: '/help',
    },
];

export const menuIcons: MenuIcon[] = [
    {
        id: '1',
        label: 'Go to adjustments',
        icon: Adjustment,
        to: '/adjustment',
    },
    {
        id: '2',
        label: 'Go to global',
        icon: Globe,
        to: '/global',
    },
    {
        id: '3',
        label: 'Go to settings',
        icon: Cog,
        to: '/settings',
    },
];
