import { ProductItem } from '@components/Searchbar/Searchbar.types';
import { ROUTE_PATH } from '@constant';

export const PRODUCT_LIST: ProductItem[] = [
    {
        name: 'Restaurant Booking App',
        technology: 'React & Bootstrap Framework',
        sales: 70,
        to: ROUTE_PATH.RESTAURANT_APP,
    },
    {
        name: 'UI Kit',
        technology: 'React & Bootstrap Framework',
        sales: 54,
        to: ROUTE_PATH.UI_KIT,
    },
    {
        name: 'Design System Pro',
        technology: 'Bootstrap Framework',
        sales: 47,
        to: ROUTE_PATH.DESIGN_SYSTEM_PRO,
    },
    {
        name: 'Dashboard',
        technology: 'Tailwind, React',
        sales: 43,
        to: ROUTE_PATH.DASHBOARD,
    },
    {
        name: 'Glassmorphism UI',
        technology: 'Vue Js, Tailwind',
        sales: 38,
        to: ROUTE_PATH.GLASSMORPHISM,
    },
    {
        name: 'Multipurpose Template',
        technology: 'React & Bootstrap Framework',
        sales: 22,
        to: ROUTE_PATH.MULTIPURPOSE_TEMPLATE,
    },
];
