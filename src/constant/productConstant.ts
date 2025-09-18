import { ListItem } from '@components/Customer/Customer.types';
import { ROUTE_PATH } from '@constant';

export const PRODUCT_LIST: ListItem[] = [
    {
        id: 'product_1',
        title: 'Restaurant Booking App',
        description: 'React & Bootstrap Framework',
        sales: 70,
        to: ROUTE_PATH.RESTAURANT_APP,
        suffix: 'sales',
    },
    {
        id: 'product_2',
        title: 'UI Kit',
        description: 'React & Bootstrap Framework',
        sales: 54,
        to: ROUTE_PATH.UI_KIT,
        suffix: 'sales',
    },
    {
        id: 'product_3',
        title: 'Design System Pro',
        description: 'Bootstrap Framework',
        sales: 47,
        to: ROUTE_PATH.DESIGN_SYSTEM_PRO,
        suffix: 'sales',
    },
    {
        id: 'product_4',
        title: 'Dashboard',
        description: 'Tailwind, React',
        sales: 43,
        to: ROUTE_PATH.DASHBOARD,
        suffix: 'sales',
    },
    {
        id: 'product_5',
        title: 'Glassmorphism UI',
        description: 'Vue Js, Tailwind',
        sales: 38,
        to: ROUTE_PATH.GLASSMORPHISM,
        suffix: 'sales',
    },
    {
        id: 'product_6',
        title: 'Multipurpose Template',
        description: 'React & Bootstrap Framework',
        sales: 22,
        to: ROUTE_PATH.MULTIPURPOSE_TEMPLATE,
        suffix: 'sales',
    },
];
