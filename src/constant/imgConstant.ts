import ImgPlac1 from '@assets/imgs/image_placeholder_1.png';
import ImgPlac2 from '@assets/imgs/image_placeholder_2.png';
import Laptop from '@assets/imgs/laptop.png';
import { ImgItem } from '@components/ImageGrid';

export const itemData: ImgItem[] = [
    {
        img: ImgPlac2,
        title: 'Placeholder image 2',
        desktop: { rows: 1, cols: 5 },
        mobile: { rows: 1, cols: 1 },
    },
    {
        img: ImgPlac1,
        title: 'Placeholder image 1',
        desktop: { rows: 1, cols: 5 },
        mobile: { rows: 1, cols: 1 },
    },
    {
        img: Laptop,
        title: 'Laptop',
        desktop: { rows: 2, cols: 6 },
        mobile: { rows: 2, cols: 1 },
    },
    {
        img: ImgPlac2,
        title: 'Placeholder image 2',
        desktop: { rows: 1, cols: 10 },
        mobile: { rows: 1, cols: 1 },
    },
];
