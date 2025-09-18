import Avatar1 from '@assets/imgs/avatar_1.png';
import Avatar2 from '@assets/imgs/avatar_2.png';
import Avatar3 from '@assets/imgs/avatar_3.png';
import Avatar4 from '@assets/imgs/avatar_4.jpg';
import Avatar5 from '@assets/imgs/avatar_5.jpg';
import Avatar6 from '@assets/imgs/avatar_6.png';
import { ListItem } from '@components/Customer/Customer.types';

export const CUSTOMERS: ListItem[] = [
    {
        id: 'customer_1',
        avatar: Avatar1,
        title: 'Neil Sims',
        description: 'neilsims@example.com',
        sales: 367,
        prefix: '$',
    },
    {
        id: 'customer_2',
        avatar: Avatar2,
        title: 'Bonnie Green',
        description: 'bonniegreen@example.com',
        sales: 67,
        prefix: '$',
    },
    {
        id: 'customer_3',
        avatar: Avatar3,
        title: 'Micheal Gough',
        description: 'michealgough@example.com',
        sales: 3467,
        prefix: '$',
    },
    {
        id: 'customer_4',
        avatar: Avatar4,
        title: 'Thomas Lean',
        description: 'thomaslean@example.com',
        sales: 2367,
        prefix: '$',
    },
    {
        id: 'customer_5',
        avatar: Avatar5,
        title: 'Lana Byrd',
        description: 'lanabyrd@example.com',
        sales: 367,
        prefix: '$',
    },
    {
        id: 'customer_6',
        avatar: Avatar6,
        title: 'Karen Nelson',
        description: 'karennelson@example.com',
        sales: 1367,
        prefix: '$',
    },
];
