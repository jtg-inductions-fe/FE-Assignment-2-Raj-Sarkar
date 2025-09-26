import { ImgItem } from '@models';

/**
 *
 * Contains types of props for Image Grid cmponent
 * @property imageList - list of image items
 * @property isDesktop - boolean status whether it width is of desktop's or not
 */
export type ImageGridProps = {
    imageList: ImgItem[];
    isDesktop: boolean;
};

/**
 * Type for modified mapped image data
 * @property src - source of image
 * @property title - title of image
 * @property config - holds the number of rows & columns the image will take to render
 */
export type ModifiedImgItem = {
    src: string;
    title: string;
    config: { rows: number; cols: number };
};
