import ImgPlac1 from '@assets/imgs/image_placeholder_1.png';
import ImgPlac2 from '@assets/imgs/image_placeholder_2.png';
import Laptop from '@assets/imgs/laptop.png';
import type { ImgItem } from '@components/ImageGrid/ImageGrid.types';

export const ITEM_DATA: ImgItem[] = [
    {
        src: ImgPlac2,
        title: 'Placeholder image 2',
        desktopConfig: { rows: 5, cols: 5 },
        mobileConfig: { rows: 1, cols: 1 },
    },
    {
        src: ImgPlac1,
        title: 'Placeholder image 1',
        desktopConfig: { rows: 5, cols: 5 },
        mobileConfig: { rows: 1, cols: 1 },
    },
    {
        src: Laptop,
        title: 'Laptop',
        desktopConfig: { rows: 11, cols: 6 },
        mobileConfig: { rows: 2, cols: 1 },
    },
    {
        src: ImgPlac2,
        title: 'Placeholder image 2',
        desktopConfig: { rows: 6, cols: 10 },
        mobileConfig: { rows: 1, cols: 1 },
    },
];
