import type { SalesItem } from '@models';

export const salesDataset: SalesItem[] = [
    { date: new Date(2021, 3, 1), sales: 80000 },
    { date: new Date(2021, 3, 2), sales: 120000 },
    { date: new Date(2021, 3, 3), sales: 90000 },
    { date: new Date(2021, 3, 4), sales: 120000 },
    { date: new Date(2021, 3, 5), sales: 70000 },
    { date: new Date(2021, 3, 6), sales: 110000 },
    { date: new Date(2021, 3, 7), sales: 90000 },
] as const;
